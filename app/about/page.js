import Cta from "../../components/Cta";
import { aboutPage, aboutTeamCards } from "../../lib/site-data";

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

export default function AboutPage() {
  return (
    <>
      <section className="team text-center section-padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="arrow">{aboutPage.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>{aboutPage.intro}</p>
            </div>
          </div>

          {aboutTeamCards.map((row, rowIndex) => (
            <div className="row" id="team-row" key={`row-${rowIndex}`}>
              {row.map((person) => (
                <div
                  className={`col-md-6 wp5${person.delayClass ? ` ${person.delayClass}` : ""}`}
                  key={person.name}
                >
                  {person.href ? (
                    <a href={person.href}>
                      <img
                        className="img-thumbnail img-responsive center-block"
                        src={person.image}
                        alt={person.imageAlt}
                      />
                    </a>
                  ) : (
                    <img
                      className="img-thumbnail img-responsive center-block"
                      src={person.image}
                      alt={person.imageAlt}
                    />
                  )}
                  <h2>{person.name}</h2>
                  <p>{person.summary}</p>
                  <div className="social">
                    <ul className="social-buttons">
                      {person.socials.map((social) => (
                        <li key={`${person.name}-${social.iconClass}`}>
                          <a
                            href={social.href}
                            target={social.external ? "_blank" : undefined}
                            rel={social.external ? "noreferrer" : undefined}
                            className="social-btn"
                          >
                            <i className={`fa ${social.iconClass}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
