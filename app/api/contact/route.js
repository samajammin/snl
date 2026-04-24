import { Resend } from "resend";
import { NextResponse } from "next/server";

import { findAopArea } from "../../../lib/site-data";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const replyTo = String(formData.get("_replyto") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const practiceAreaSlug = String(formData.get("practiceArea") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();

  if (honeypot) {
    return NextResponse.redirect(new URL("/thanks", request.url), 303);
  }

  const practiceAreaTitle = practiceAreaSlug
    ? findAopArea(practiceAreaSlug)?.title || practiceAreaSlug
    : "";

  const bodyLines = [
    `${name} submitted the contact form at southnaticklaw.com and is requesting assistance.`,
    "",
    `Name: ${name}`,
    `Email: ${replyTo}`,
  ];
  if (phone) bodyLines.push(`Phone: ${phone}`);
  if (practiceAreaTitle) bodyLines.push(`Practice area: ${practiceAreaTitle}`);
  bodyLines.push("", "Message:", message, "");
  bodyLines.push(`You can reply directly to this email to respond to ${name}.`);

  try {
    await resend.emails.send({
      from: "South Natick Law <website@southnaticklaw.com>",
      to: [
        "info@southnaticklaw.com",
        "grichards@southnaticklaw.com",
        "rbiller@southnaticklaw.com",
        "cschindel@southnaticklaw.com",
        "kwinter@southnaticklaw.com",
      ],
      cc: ["sbrichards@gmail.com"],
      replyTo,
      subject: practiceAreaTitle
        ? `Contact form (${practiceAreaTitle}): ${name}`
        : `Contact form: ${name}`,
      text: bodyLines.join("\n"),
    });

    return NextResponse.redirect(new URL("/thanks", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }
}
