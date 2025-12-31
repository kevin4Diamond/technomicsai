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
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;

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
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!email) {
      return Response.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name || "Demo request");
    const safeEmail = escapeHtml(email);
    const safeOrg = escapeHtml(org || "Not provided");
    const safeMessage = escapeHtml(message || "Not provided");

    await resend.emails.send({
      from,
      to: DESTINATION_EMAIL,
      subject: `Demo request from ${name || email}`,
      replyTo: email,
      html: `
        <h2>${safeName}</h2>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrg}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replaceAll("\n", "<br />")}</p>
      `,
      text: `Demo request\n\nName: ${name || "Not provided"}\nEmail: ${email}\nOrganization: ${org || "Not provided"}\nMessage: ${message || "Not provided"}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
