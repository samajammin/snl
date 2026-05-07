import Link from "next/link";

import { firmInfo } from "../lib/site-data";

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div className="contact-band-head">
        <div className="eyebrow">Get in Touch</div>
        <h2>We&apos;d love to hear from you.</h2>
      </div>
      <div className="cc">
        <div className="cell">
          <div className="lbl">Address</div>
          <div className="val">
            {firmInfo.addressLine}
            <br />
            {firmInfo.addressCity}, {firmInfo.addressState} {firmInfo.addressZip}
          </div>
        </div>
        <div className="cell">
          <div className="lbl">Phone</div>
          <div className="val">
            <a href={`tel:${firmInfo.phoneTel}`}>{firmInfo.phoneDisplay}</a>
          </div>
        </div>
        <div className="cell">
          <div className="lbl">Email</div>
          <div className="val">
            <a href={`mailto:${firmInfo.email}`}>{firmInfo.email}</a>
          </div>
        </div>
      </div>
      <div className="contact-band-cta">
        <Link href="/contact" className="btn-primary">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
