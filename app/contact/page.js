export const metadata = {
  title: "Contact | South Natick Law",
  description:
    "Contact South Natick Law to schedule a consultation. Call us or submit a message to connect with one of our experienced MetroWest attorneys.",
  openGraph: {
    title: "Contact | South Natick Law",
    description:
      "Contact South Natick Law to schedule a consultation. Call us or submit a message to connect with one of our experienced MetroWest attorneys.",
    url: "https://southnaticklaw.com/contact",
  },
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === "1";

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="arrow">Contact South Natick Law</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <p>
              Have a question? We&apos;re happy to discuss the legal issues and
              available options in your case.
              <br />
              Call us today or fill out the form below to connect directly with
              one of <a href="/about">our professional attorneys</a>
            </p>
          </div>
        </div>
        {hasError ? (
          <div className="row">
            <div className="col-sm-offset-2 col-sm-8">
              <div className="alert alert-danger">
                We couldn&apos;t submit your message just now. Please try again or
                call us at (508) 651-1000.
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <form action="/api/contact" method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="nameInput">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="nameInput"
                    placeholder="Your name..."
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="emailInput">Email address</label>
                  <input
                    type="email"
                    name="_replyto"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Your email..."
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="detailsInput">Message</label>
                <textarea
                  id="detailsInput"
                  name="message"
                  rows="8"
                  cols="80"
                  className="form-control"
                  placeholder="Anything else you'd like us to know..."
                  required
                ></textarea>
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="websiteInput">
                  Leave this field blank
                </label>
                <input
                  type="text"
                  name="website"
                  id="websiteInput"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <p className="text-muted" style={{ fontSize: "0.9em" }}>
                This form is for prospective clients only. No solicitations,
                vendor pitches, or marketing outreach, please.
              </p>
              <button type="submit" className="learn-more-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
