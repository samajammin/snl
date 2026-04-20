import { NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/sbrichards@gmail.com";

export async function POST(request) {
  const requestFormData = await request.formData();
  const name = String(requestFormData.get("name") || "").trim();
  const replyTo = String(requestFormData.get("_replyto") || "").trim();
  const message = String(requestFormData.get("message") || "").trim();

  const forwardedFormData = new FormData();
  forwardedFormData.set("name", name);
  forwardedFormData.set("_replyto", replyTo);
  forwardedFormData.set("message", message);

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: forwardedFormData,
    });

    if (!response.ok) {
      return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
    }

    return NextResponse.redirect(new URL("/thanks", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
  }
}
