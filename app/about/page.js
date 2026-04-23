import Image from "next/image";
import Link from "next/link";

import ContactBand from "../../components/ContactBand";
import { aboutPage, aboutTeam, firmInfo } from "../../lib/site-data";

export const metadata = {
  title: "About | South Natick Law",
  description:
    "Meet the attorneys at South Natick Law — experienced legal professionals serving MetroWest Massachusetts with expertise in real estate, estate planning, domestic relations, elder law, and more.",
  openGraph: {
    title: "About | South Natick Law",
    description:
      "Meet the attorneys at South Natick Law — experienced legal professionals serving MetroWest Massachusetts with expertise in real estate, estate planning, domestic relations, elder law, and more.",
    url: "https://southnaticklaw.com/about",
  },
};

function renderTitleWithEmphasis(title, emphasis) {
  if (!emphasis || !title.includes(emphasis)) return title;
  const parts = title.split(emphasis);
  return (
    <>
      {parts[0]}
      <em>{emphasis}</em>
      {parts[1]}
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <div className="eyebrow">{aboutPage.eyebrow}</div>
          <h1>{renderTitleWithEmphasis(aboutPage.title, aboutPage.emphasis)}</h1>
        </div>
        <p>{aboutPage.intro}</p>
      </section>

      <div className="about-meta">
        {aboutPage.meta.map((m) => (
          <div className="m" key={m.lbl}>
            <div className="big">{m.big}</div>
            <div className="lbl">{m.lbl}</div>
          </div>
        ))}
      </div>

      <section className="office">
        <div className="office-photo">
          <Image
            src={aboutPage.office.photo}
            alt={aboutPage.office.photoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="office-copy">
          <div className="eyebrow">{aboutPage.office.eyebrow}</div>
          <h2>{aboutPage.office.title}</h2>
          <p>{aboutPage.office.body}</p>
          <div className="office-facts">
            <div>
              <div className="lbl">Address</div>
              <div className="val">
                {firmInfo.addressLine}
                <br />
                {firmInfo.addressCity}, {firmInfo.addressState}{" "}
                {firmInfo.addressZip}
              </div>
            </div>
            <div>
              <div className="lbl">Hours</div>
              <div className="val">
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-head">
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            Our Team
          </div>
          <h2>The attorneys.</h2>
          <p className="sub">
            Each attorney has their own areas of specialization.
          </p>
        </div>
        <div className="atty-grid">
          {aboutTeam.map((person) => (
            <article className="atty" key={person.slug}>
              <Link href={`/${person.slug}`} className="atty-photo">
                <Image
                  src={person.image}
                  alt={person.imageAlt}
                  width={480}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="atty-card-body">
                <div className="role">{person.role}</div>
                <h3>{person.name}</h3>
                <div className="atty-rule" />
                <p className="bio">{person.summary}</p>
                <Link href={`/${person.slug}`} className="meet">
                  View Profile →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
