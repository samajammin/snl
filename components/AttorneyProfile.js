import Image from "next/image";

export default function AttorneyProfile({ attorney }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: attorney.pageTitle,
    jobTitle: attorney.subtitle,
    telephone: attorney.phone,
    email: attorney.email,
    image: `https://southnaticklaw.com${attorney.image}`,
    url: `https://southnaticklaw.com/${attorney.slug}`,
    worksFor: {
      "@type": "LegalService",
      name: "South Natick Law",
      url: "https://southnaticklaw.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="atty-hero">
        <div className="portrait">
          <Image
            src={attorney.image}
            alt={attorney.imageAlt}
            width={880}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
        <div>
          <div className="eyebrow">{attorney.roleEyebrow}</div>
          <h1>{attorney.name}</h1>
          <div className="atty-meta">
            {attorney.meta.map((m) => (
              <div className="row" key={m.lbl}>
                <span className="lbl">{m.lbl}</span>
                <span>{m.val}</span>
              </div>
            ))}
            <div className="row">
              <span className="lbl">Phone</span>
              <span>{attorney.phone}</span>
            </div>
            <div className="row">
              <span className="lbl">Email</span>
              <span>
                <a href={`mailto:${attorney.email}`}>{attorney.email}</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="atty-body">
        <div className="bio">
          {attorney.bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <aside className="atty-facts">
          <div className="sect">
            <h4>Practice Areas</h4>
            <ul>
              {attorney.practiceAreas.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="sect">
            <h4>Education</h4>
            <ul>
              {attorney.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="sect">
            <h4>Memberships</h4>
            <ul>
              {attorney.memberships.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
