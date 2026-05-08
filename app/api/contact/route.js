import { Resend } from "resend";
import { NextResponse } from "next/server";

import { analyzeContactSolicitation } from "../../../lib/contact-solicitation-filter";
import { findAopArea } from "../../../lib/site-data";

const CONTACT_RECIPIENTS = [
  "info@southnaticklaw.com",
  "grichards@southnaticklaw.com",
  "rbiller@southnaticklaw.com",
  "cschindel@southnaticklaw.com",
  "kwinter@southnaticklaw.com",
  "amulcahy@southnaticklaw.com",
];

const CONTACT_CC = ["sbrichards@gmail.com"];
const DEFAULT_SOLICITATION_RECIPIENTS = ["sbrichards@gmail.com"];

function parseEmailList(value, fallback) {
  const emails = String(value || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return emails.length ? emails : fallback;
}

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

  if (!name || !replyTo || !message) {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }

  const practiceAreaTitle = practiceAreaSlug
    ? findAopArea(practiceAreaSlug)?.title || practiceAreaSlug
    : "";
  const solicitation = analyzeContactSolicitation({ name, replyTo, message });
  const recipients = solicitation.isLikelySolicitation
    ? parseEmailList(
        process.env.CONTACT_SOLICITATION_TO,
        DEFAULT_SOLICITATION_RECIPIENTS,
      )
    : CONTACT_RECIPIENTS;
  const cc = solicitation.isLikelySolicitation ? [] : CONTACT_CC;
  const subjectPrefix = solicitation.isLikelySolicitation
    ? "[Possible solicitation] "
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
  if (solicitation.isLikelySolicitation) {
    bodyLines.push(
      "",
      `Screening: Possible solicitation (${solicitation.score} points)`,
      `Matched: ${solicitation.matches.join(", ")}`,
    );
  }

  try {
    const email = {
      from: "South Natick Law <website@southnaticklaw.com>",
      to: recipients,
      replyTo,
      subject: practiceAreaTitle
        ? `${subjectPrefix}Contact form (${practiceAreaTitle}): ${name}`
        : `${subjectPrefix}Contact form: ${name}`,
      text: bodyLines.join("\n"),
    };
    if (cc.length) email.cc = cc;

    await resend.emails.send(email);

    return NextResponse.redirect(new URL("/thanks", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }
}
