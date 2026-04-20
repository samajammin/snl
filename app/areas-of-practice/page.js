import Cta from "../../components/Cta";
import { practiceAreasPage } from "../../lib/site-data";

export default function AreasOfPracticePage() {
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" id="arrow-head-row">
              <h1 className="arrow">{practiceAreasPage.title}</h1>
              {practiceAreasPage.intro ? <p>{practiceAreasPage.intro}</p> : null}
            </div>
          </div>

          {practiceAreasPage.rows.map((row, rowIndex) => (
            <div className="row" key={`practice-row-${rowIndex}`}>
              {row.map((area) => (
                <div
                  className={`col-sm-4 wp2${area.delayClass ? ` ${area.delayClass}` : ""}`}
                  key={area.title}
                >
                  <div className="media aop-media">
                    <div className="pull-left">
                      <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className={`fa ${area.iconClass} fa-stack-1x fa-inverse`}></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{area.title}</h4>
                      <dl>
                        {area.items.map((item) => (
                          <dd key={item}>{item}</dd>
                        ))}
                      </dl>
                    </div>
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
