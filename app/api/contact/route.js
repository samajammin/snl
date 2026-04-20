import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const replyTo = String(formData.get("_replyto") || "").trim();
  const message = String(formData.get("message") || "").trim();

  try {
    await resend.emails.send({
      from: "South Natick Law <onboarding@resend.dev>",
      to: [
        "info@southnaticklaw.com",
        "grichards@southnaticklaw.com",
        "rbiller@southnaticklaw.com",
        "cschindel@southnaticklaw.com",
        "kwinter@southnaticklaw.com",
      ],
      cc: ["sbrichards@gmail.com"],
      replyTo,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${replyTo}\n\n${message}`,
    });

    return NextResponse.redirect(new URL("/thanks", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }
}
