export const metadata = {
  title: "Thanks | South Natick Law",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="arrow">Contact South Natick Law</h2>
          </div>
        </div>
        <div className="row">
          <br />
          <div className="col-sm-12 text-center alert-success">
            <p>
              Thank you for your inquiry! One of our attorneys will be in touch
              with you within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
