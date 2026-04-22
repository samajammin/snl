import Image from "next/image";
import Link from "next/link";

import AopIcon from "../../components/AopIcon";
import ContactBand from "../../components/ContactBand";
import { aopAreas, aopPage } from "../../lib/site-data";

export const metadata = {
  title: "Areas of Practice | South Natick Law",
  description:
    "South Natick Law handles elder law, probate, bankruptcy, real estate, domestic relations, employment law, civil litigation, estate administration, and health care law in MetroWest MA.",
  openGraph: {
    title: "Areas of Practice | South Natick Law",
    description:
      "South Natick Law handles elder law, probate, bankruptcy, real estate, domestic relations, employment law, civil litigation, estate administration, and health care law in MetroWest MA.",
    url: "https://southnaticklaw.com/areas-of-practice",
  },
};

export default function AreasOfPracticePage() {
  return (
    <>
      <section className="aop-hero">
        <div className="eyebrow">{aopPage.eyebrow}</div>
        <h1>{aopPage.title}</h1>
        <p>{aopPage.intro}</p>
      </section>

      <section className="aop-grid">
        <div className="aop-list">
          {aopAreas.map((area) => (
            <article className="aop-area" key={area.slug}>
              <div className="icon">
                <AopIcon slug={area.slug} />
              </div>
              <div>
                <h3>{area.title}</h3>
                <div className="items">
                  {area.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link
                  href={`/contact?practiceArea=${area.slug}`}
                  className="area-inquire"
                >
                  Inquire about {area.title} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="strip">
        <div className="strip-bg">
          <Image
            src="/assets/img/south-natick-law-room.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="eyebrow on-dark">Our Approach</div>
        <div className="big">Broad practice. Deep attention.</div>
        <div className="sub">every matter treated with care</div>
      </section>

      <ContactBand />
    </>
  );
}
