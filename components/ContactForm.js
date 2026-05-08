"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { aopAreas, findAopArea } from "../lib/site-data";

const TURNSTILE_ACTION = "contact";

export default function ContactForm({ hasError, turnstileSiteKey }) {
  const searchParams = useSearchParams();
  const queryArea = searchParams.get("practiceArea");
  const initialArea = useMemo(
    () => (queryArea && findAopArea(queryArea) ? queryArea : ""),
    [queryArea],
  );

  const [areaSlug, setAreaSlug] = useState(initialArea);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    setAreaSlug(initialArea);
  }, [initialArea]);

  useEffect(() => {
    if (
      !turnstileSiteKey ||
      !turnstileReady ||
      !turnstileRef.current ||
      !window.turnstile ||
      widgetIdRef.current !== null
    ) {
      return undefined;
    }

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      action: TURNSTILE_ACTION,
      theme: "light",
      size: "flexible",
    });

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [turnstileReady, turnstileSiteKey]);

  const selectedArea = areaSlug ? findAopArea(areaSlug) : null;
  const prefilledArea =
    initialArea && areaSlug === initialArea ? selectedArea : null;
  const textareaPlaceholder = selectedArea
    ? `Tell us a little about your ${selectedArea.title.toLowerCase()} matter...`
    : "Tell us a little about your situation...";

  return (
    <div className="contact-form-wrap">
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setTurnstileReady(true)}
        />
      ) : null}
      <h2>Send us a note.</h2>

      {hasError ? (
        <div className="alert">
          We couldn&apos;t submit your message just now. Please try again or call
          us at (508) 651-1000.
        </div>
      ) : null}

      {prefilledArea ? (
        <div className="prefill-badge">
          From Areas of Practice → <strong>{prefilledArea.title}</strong>
          <button
            type="button"
            className="clear"
            onClick={() => setAreaSlug("")}
          >
            clear
          </button>
        </div>
      ) : null}

      <form action="/api/contact" method="POST" className="x-form">
        <div className="row2">
          <div>
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              name="name"
              id="nameInput"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              name="_replyto"
              id="emailInput"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div className="row2">
          <div>
            <label htmlFor="phoneInput">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              id="phoneInput"
              placeholder="(555) 555-5555"
            />
          </div>
          <div>
            <label htmlFor="practiceAreaInput">Practice area</label>
            <select
              id="practiceAreaInput"
              name="practiceArea"
              value={areaSlug}
              onChange={(e) => setAreaSlug(e.target.value)}
            >
              <option value="">Choose one...</option>
              {aopAreas.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label htmlFor="messageInput">How can we help?</label>
        <textarea
          id="messageInput"
          name="message"
          placeholder={textareaPlaceholder}
          required
        />
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="websiteInput">Your website</label>
          <input
            type="text"
            name="website"
            id="websiteInput"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        {turnstileSiteKey ? (
          <div className="turnstile-field">
            <div ref={turnstileRef} />
          </div>
        ) : null}
        <button type="submit">Submit Inquiry</button>
        <p className="disclaimer">
          Submitting this form does not establish an attorney-client
          relationship. Please do not share confidential information.
        </p>
        <p className="disclaimer">
          This form is for prospective clients only. No solicitations, vendor
          pitches, or marketing outreach, please.
        </p>
      </form>
    </div>
  );
}
