import Cta from "./Cta";
import { getAttorneyBioParagraphs } from "../lib/site-data";

export default function AttorneyProfile({ attorney }) {
  const bioParagraphs = getAttorneyBioParagraphs(attorney.slug);

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">
                {attorney.pageTitle} <small>{attorney.subtitle}</small>
              </h1>
            </div>
            <div className="col-md-4">
              <img
                className="img-responsive img-rounded"
                src={attorney.image}
                alt={attorney.imageAlt}
              />
              <br />
              <h2>Contact Details</h2>
              <p>
                <abbr title="Phone">
                  <i className="fa fa-phone"></i>
                </abbr>{" "}
                : {attorney.phone}
              </p>
              <p>
                <abbr title="Email">
                  <i className="fa fa-envelope-o"></i>
                </abbr>{" "}
                : <a href={`mailto:${attorney.email}`}>{attorney.email}</a>
              </p>
              <p>
                <abbr title="Hours">
                  <i className="fa fa-clock-o"></i>
                </abbr>{" "}
                : Monday - Friday: 9:00 AM to 5:00 PM
              </p>
              {attorney.profileSocials.length ? (
                <ul className="list-unstyled list-inline list-social-icons">
                  {attorney.profileSocials.map((social) => (
                    <li key={`${attorney.slug}-${social.iconClass}`}>
                      <a href={social.href} target="_blank" rel="noreferrer">
                        <i className={`fa ${social.iconClass}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="col-md-8">
              {bioParagraphs.map((paragraph, index) => (
                <p key={`${attorney.slug}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
