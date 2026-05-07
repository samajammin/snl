import Link from "next/link";

export const metadata = {
  title: "Thanks | South Natick Law",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="contact-hero" style={{ paddingBottom: 96 }}>
      <div className="eyebrow">Message received</div>
      <h1>Thank you.</h1>
      <p>
        One of our attorneys will be in touch with you within one business day.
        If your matter is urgent, please call us at{" "}
        <a href="tel:+15086511000">(508) 651-1000</a>.
      </p>
      <div style={{ marginTop: 40 }}>
        <Link href="/" className="btn-ghost-dark">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
