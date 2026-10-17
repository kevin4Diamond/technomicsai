import { Resend } from "resend";

const DESTINATION_EMAIL = "kevin4diamond@gmail.com";

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
      return Response.json(
        { error: "Missing RESEND_API_KEY or RESEND_FROM." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const org = typeof body?.org === "string" ? body.org.trim() : "";
    const interest =
      typeof body?.interest === "string" ? body.interest.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!email) {
      return Response.json(
        { error: "Email is required." },
        { status: 400 }
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
