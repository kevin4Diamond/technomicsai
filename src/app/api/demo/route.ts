import { Resend } from "resend";

const DESTINATION_EMAIL = "kevin4diamond@gmail.com";

// Spam protection
const MIN_FILL_MS = 3000; // faster than this is a bot
const RATE_LIMIT = 3; // submissions per visitor...
const RATE_WINDOW_MS = 60 * 60 * 1000; // ...per hour
const MAX_LENGTHS = { name: 100, email: 200, org: 150, interest: 100, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort, per server instance: Vercel may run several instances, and memory
// resets on cold starts. Good enough to stop a single bot hammering the form.
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentSubmissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT) {
    recentSubmissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentSubmissions.set(ip, recent);

  // Keep the map from growing without bound.
  if (recentSubmissions.size > 5000) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    }
  }
  return false;
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function field(body: Record<string, unknown>, key: keyof typeof MAX_LENGTHS) {
  const value = body?.[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM?.trim();

    if (!apiKey || !from) {
      console.error("Contact form: missing RESEND_API_KEY or RESEND_FROM.");
      return Response.json(
        { error: "Something went wrong. Please email info@technomicsai.com." },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Bots: pretend it worked so they don't adapt, but send nothing.
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";
    const elapsedMs = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;
    if (honeypot || elapsedMs < MIN_FILL_MS) {
      console.warn("Contact form: dropped likely bot submission.");
      return Response.json({ ok: true });
    }

    const name = field(body, "name");
    const email = field(body, "email");
    const org = field(body, "org");
    const interest = field(body, "interest");
    const message = field(body, "message");

    if (!email || !EMAIL_PATTERN.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const tooLong = (Object.keys(MAX_LENGTHS) as (keyof typeof MAX_LENGTHS)[]).find(
      (key) => field(body, key).length > MAX_LENGTHS[key]
    );
    if (tooLong) {
      const label = tooLong === "org" ? "company" : tooLong;
      return Response.json(
        { error: `The ${label} field is too long.` },
        { status: 400 }
      );
    }

    if (isRateLimited(getClientIp(request))) {
      return Response.json(
        {
          error:
            "You've sent several requests recently. Please try again later or email info@technomicsai.com.",
        },
        { status: 429 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name || "Consultation request");
    const safeEmail = escapeHtml(email);
    const safeOrg = escapeHtml(org || "Not provided");
    const safeInterest = escapeHtml(interest || "Not provided");
    const safeMessage = escapeHtml(message || "Not provided");

    // Resend returns failures as { error } instead of throwing.
    const { error } = await resend.emails.send({
      from,
      to: DESTINATION_EMAIL,
      subject: `Consultation request from ${name || email}`,
      replyTo: email,
      html: `
        <h2>${safeName}</h2>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeOrg}</p>
        <p><strong>Interested in:</strong> ${safeInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replaceAll("\n", "<br />")}</p>
      `,
      text: `Consultation request\n\nName: ${name || "Not provided"}\nEmail: ${email}\nCompany: ${org || "Not provided"}\nInterested in: ${interest || "Not provided"}\nMessage: ${message || "Not provided"}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "We couldn't send your request. Please email info@technomicsai.com." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please email info@technomicsai.com." },
      { status: 500 }
    );
  }
}
