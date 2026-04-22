import { Suspense } from "react";

import ContactForm from "../../components/ContactForm";
import { firmInfo } from "../../lib/site-data";

export const metadata = {
  title: "Contact | South Natick Law",
  description:
    "Contact South Natick Law to schedule a consultation. Call us or submit a message to connect with one of our experienced MetroWest attorneys.",
  openGraph: {
    title: "Contact | South Natick Law",
    description:
      "Contact South Natick Law to schedule a consultation. Call us or submit a message to connect with one of our experienced MetroWest attorneys.",
    url: "https://southnaticklaw.com/contact",
  },
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === "1";

  return (
    <>
      <section className="contact-hero">
        <div className="eyebrow">Get in Touch</div>
        <h1>Have a question? Let&apos;s talk.</h1>
        <p>
          We&apos;re happy to discuss the legal issues and available options in
          your case. Call us today or send a note — one of our attorneys will
          get back to you within one business day.
        </p>
      </section>

      <section className="contact-layout">
        <Suspense fallback={<div className="contact-form-wrap" />}>
          <ContactForm hasError={hasError} />
        </Suspense>

        <aside className="contact-side">
          <div className="eyebrow">Visit the office</div>
          <h2>South Natick Law</h2>
          <div className="item">
            <div className="lbl">Address</div>
            <div className="val">
              {firmInfo.addressLine}
              <br />
              {firmInfo.addressCity}, {firmInfo.addressState}{" "}
              {firmInfo.addressZip}
            </div>
          </div>
          <div className="item">
            <div className="lbl">Phone</div>
            <div className="val">
              <a href={`tel:${firmInfo.phoneTel}`}>{firmInfo.phoneDisplay}</a>
            </div>
          </div>
          <div className="item">
            <div className="lbl">Email</div>
            <div className="val">
              <a href={`mailto:${firmInfo.email}`}>{firmInfo.email}</a>
            </div>
          </div>
          <div className="item">
            <div className="lbl">Hours</div>
            <div className="hours">
              Monday – Friday
              <br />
              9:00 AM – 5:00 PM
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
