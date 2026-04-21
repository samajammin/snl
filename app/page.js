import Cta from "../components/Cta";
import {
  homeAttorneyCards,
  homeFeatureCards,
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
  telephone: "(508) 651-1000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Natick",
    addressRegion: "MA",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <header id="home">
        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center inner">
                <h1 className="animated fadeInDown">
                  <strong>SOUTH NATICK LAW</strong>
                </h1>
                <h4 className="animated fadeInUp delay-05s">
                  Richards, Biller, Schindel, Winter &amp; Mulcahy, LLP
                </h4>
                <h2 className="animated fadeInUp delay-05s">
                  Innovation • Experience • Results
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-md-offset-3 text-center">
                <a href="#intro" className="learn-more-btn">
                  Learn More
                </a>
              </div>
              <div className="col-md-3 text-center">
                <a href="/contact" className="learn-more-btn">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="intro text-center section-padding" id="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 wp1">
              <h2 className="arrow">
                Big Firm Sophistication, Small Firm Attention
              </h2>
              <p>
                At South Natick Law we have the patience to listen to you. We
                take the time to understand your problems and the outcomes you
                hope to achieve. Our goal is to design and implement a plan to
                effectively and efficiently address your legal issues and achieve
                your goals. When attorneys and clients work together as a team
                the sky is the limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features text-center section-padding" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="arrow">Get to Know Us and What We Do</h2>
              <div className="features-wrapper">
                {homeFeatureCards.map((card, index) => (
                  <div
                    className={`col-md-4 wp2${card.delayClass ? ` ${card.delayClass}` : ""}`}
                    key={card.title}
                  >
                    <a href={card.href}>
                      <div className="icon">
                        <i className={`fa ${card.iconClass}`}></i>
                      </div>
                    </a>
                    <a href={card.href}>
                      <h3>{card.title}</h3>
                    </a>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="swag text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>
                <strong>Over 100 Years</strong>
                <span>of combined experience</span>
              </h2>
              <a href="#portfolio" className="down-arrow-btn">
                <i className="fa fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio text-center section-padding" id="portfolio">
        <div className="container">
          <div className="row" id="attorneys">
            <div className="col-md-12">
              <h2 className="arrow">Meet Our Attorneys</h2>
            </div>
          </div>
          <div className="row">
            <div id="portfolioSlider">
              <ul className="slides">
                <li>
                  {homeAttorneyCards.map((attorney) => (
                    <div
                      className={`col-md-4 wp4 ${attorney.delayClass}`}
                      key={attorney.slug}
                    >
                      <div className="overlay-effect effects clearfix">
                        <div className="img">
                          <img
                            className={attorney.centerImage ? "center-block" : undefined}
                            src={attorney.image}
                            alt={attorney.imageAlt}
                          />
                          <div className="overlay">
                            <a href={attorney.href} className="expand">
                              <i className="fa fa-coffee"></i>
                              <br />
                              {attorney.ctaLabel}
                            </a>
                            <a className="close-overlay hidden">x</a>
                          </div>
                        </div>
                      </div>
                      <h3>
                        {attorney.name}
                        <br />
                        <small>{attorney.role}</small>
                      </h3>
                      {attorney.practices.map((practice) => (
                        <p key={practice}>{practice}</p>
                      ))}
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe text-center">
        <div className="container">
          <a href="/contact" className="ignite-btn">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <section className="team section-padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="arrow">Our Core Values</h2>
            </div>
          </div>
          <div className="row roman">
            <div className="col-md-12 text-center">
              <p>
                Over the years we have developed{" "}
                <strong>four pillars of practice</strong> that guide us in our
                representation of you:
              </p>
            </div>
          </div>
          <div className="row text-center">
            {homeValues.map((value) => (
              <div className="col-md-3" key={value.numeral}>
                <span className="fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x text-primary roman"></i>
                  <span className="roman">{value.numeral}</span>
                </span>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                In short, we utilize our combined knowledge and skill to obtain
                successful results for our clients both in and out of court.
                Whether your problem is complex or simple, we have the
                experience and expertise to find workable solutions at a
                reasonable cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
