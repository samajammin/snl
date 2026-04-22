import Link from "next/link";

export default function NotFound() {
  return (
    <section className="contact-hero" style={{ paddingBottom: 96 }}>
      <div className="eyebrow">404</div>
      <h1>Page not found.</h1>
      <p>It appears there&apos;s nothing here.</p>
      <div style={{ marginTop: 40 }}>
        <Link href="/" className="btn-ghost-dark">
          Return to home
        </Link>
      </div>
    </section>
  );
}
