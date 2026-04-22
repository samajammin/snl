"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/areas-of-practice", label: "Areas of Practice", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const desktopLinks = navLinks.slice(0, 3);

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" className="brand">
          South Natick Law
        </Link>
        <ul>
          {desktopLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`cta${isActive("/contact") ? " active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav" aria-label="Primary mobile">
        <Link href="/" className="brand">
          South Natick Law
          <small>EST. 1985</small>
        </Link>
        <button
          type="button"
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true">
          <div className="eyebrow">Navigate</div>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={isActive(link.href) ? "active" : undefined}
              >
                <Link href={link.href}>{link.label}</Link>
                <span className="num">— {link.num}</span>
              </li>
            ))}
          </ul>
          <div className="foot">
            <div className="lbl">Call the office</div>
            <div className="val">
              <a href="tel:+15086511000">(508) 651-1000</a>
            </div>
            <div className="lbl">Visit</div>
            <div className="val">8E Pleasant St, Natick MA</div>
            <Link href="/contact" className="btn-primary cta">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
