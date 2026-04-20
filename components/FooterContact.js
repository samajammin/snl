const socialLinks = [
  {
    href: "https://www.linkedin.com/company/south-natick-law",
    iconClass: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/southnaticklaw",
    iconClass: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "http://www.yelp.com/biz/south-natick-law-south-natick",
    iconClass: "fa-yelp",
    label: "Yelp",
  },
  {
    href: "https://plus.google.com/109804537626517034946/about?hl=en",
    iconClass: "fa-google-plus",
    label: "Google Plus",
  },
];

export default function FooterContact() {
  return (
    <>
      <section className="dark-bg text-center section-padding contact-wrap" id="contact">
        <a href="#top" className="up-btn">
          <i className="fa fa-chevron-up"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="arrow">Get in Touch</h2>
            </div>
          </div>
          <div className="row contact-details">
            <div className="col-md-4">
              <div className="light-box box-hover">
                <h3>
                  <i className="fa fa-home fa-2x"></i>
                  <span>Address</span>
                </h3>
                <address>8E Pleasant Street, Natick, MA 01760</address>
              </div>
            </div>
            <div className="col-md-4">
              <div className="light-box box-hover">
                <h3>
                  <i className="fa fa-phone fa-2x"></i>
                  <span>Phone</span>
                </h3>
                <p>(508) 651-1000</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="light-box box-hover">
                <h3>
                  <i className="fa fa-envelope fa-2x"></i>
                  <span>Email</span>
                </h3>
                <p>
                  <a href="mailto:info@southnaticklaw.com">
                    info@southnaticklaw.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="social-buttons">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={social.href}
                      className="social-btn"
                      aria-label={social.label}
                    >
                      <i className={`fa ${social.iconClass}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 credit">
              <p>
                Copyright &copy; 2019 Richards, Biller, Schindel, Winter &amp;
                Mulcahy, LLP. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
