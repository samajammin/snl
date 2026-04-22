const socialLinks = [
  {
    href: "https://www.linkedin.com/company/south-natick-law",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/southnaticklaw",
    label: "Facebook",
  },
  {
    href: "http://www.yelp.com/biz/south-natick-law-south-natick",
    label: "Yelp",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} Richards, Biller, Schindel, Winter &amp;
        Mulcahy, LLP
      </span>
      <div className="social">
        {socialLinks.map((link, i) => (
          <span key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
            {i < socialLinks.length - 1 ? " ·" : null}
          </span>
        ))}
      </div>
    </footer>
  );
}
