import Image from "next/image";
import Link from "next/link";

import ContactBand from "../components/ContactBand";
import {
  attorneys,
  firmInfo,
  homeAttorneySlugs,
  homeQuickCards,
  homeStats,
  homeValues,
} from "../lib/site-data";

export const metadata = {
  openGraph: {
    url: "https://southnaticklaw.com",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "South Natick Law",
  alternateName: "Richards, Biller, Schindel, Winter & Mulcahy, LLP",
  description:
    "South Natick Law provides experienced legal counsel in real estate, estate planning, probate, domestic relations, employment law, elder law, and health care law.",
  url: "https://southnaticklaw.com",
  telephone: firmInfo.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: firmInfo.addressLine,
    addressLocality: firmInfo.addressCity,
    addressRegion: firmInfo.addressState,
    postalCode: firmInfo.addressZip,
    addressCountry: "US",
  },
  areaServed: "MetroWest Massachusetts",
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <section className="hero">
        <div className="copy">
          <div className="eyebrow">Serving MetroWest Massachusetts since 1985</div>
          <h1>
            Big firm sophistication,
            <br />
            <em>small firm</em> attention.
          </h1>
          <p className="sub">
            Richards, Biller, Schindel, Winter &amp; Mulcahy represents
            MetroWest families and businesses in real estate, estate planning,
            domestic relations, elder law, and health care law.
          </p>
          <div className="ctas">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/about" className="btn-ghost">
              Meet Our Attorneys
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/assets/img/library.jpg"
            alt="Warm wood-paneled library interior near the South Natick Law office"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: "cover" }}
          />
          <div className="hero-stats">
            {homeStats.map((s) => (
              <div className="s" key={s.lbl}>
                <div className="big">{s.big}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="arrow-h">Our Approach</div>
        <div className="rule" />
        <blockquote>
          “We have the patience to listen to you. We take the time to
          understand your problems and the outcomes you hope to achieve.”
        </blockquote>
        <div className="attrib">— South Natick Law</div>
      </section>

      <section className="quick">
        <div className="quick-head">
          <div className="eyebrow on-dark">What We Do</div>
          <h2>Get to know us and what we do.</h2>
        </div>
        <div className="quick-grid">
          {homeQuickCards.map((card) => (
            <Link href={card.href} className="cell" key={card.num}>
              <div className="num">— {card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="more">Learn More →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="strip">
        <div className="strip-bg">
          <Image
            src="/assets/img/South_Natick_Law_home.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="eyebrow on-dark">Experience</div>
        <div className="big">Over 100 Years</div>
        <div className="sub">of combined experience</div>
      </section>

      <section className="attys">
        <div className="attys-head">
          <div>
            <div className="eyebrow">Our Team</div>
            <h2>Meet our attorneys.</h2>
          </div>
          <Link href="/about" className="all-link">
            View full team →
          </Link>
        </div>
        <div className="atty-grid">
          {homeAttorneySlugs.map((slug) => {
            const a = attorneys[slug];
            const href = `/${slug}`;
            return (
              <article className="atty" key={slug}>
                <Link href={href} className="atty-photo">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    width={480}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="atty-card-body">
                  <div className="role">{a.role}</div>
                  <h3>{a.name}</h3>
                  <div className="atty-rule" />
                  <div className="prac">
                    {a.practices.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                  <Link href={href} className="meet">
                    Meet {a.firstName} →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="values">
        <div className="values-head">
          <div className="eyebrow on-dark">Our Values</div>
          <h2>Four pillars of practice.</h2>
          <p>
            Over the years we have developed four pillars of practice that
            guide us in our representation of you.
          </p>
        </div>
        <div className="values-grid">
          {homeValues.map((v) => (
            <div className="v" key={v.numeral}>
              <div className="num">{v.numeral}</div>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
