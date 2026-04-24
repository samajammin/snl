import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

import "./snl.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteTitle = "South Natick Law | MetroWest Attorneys";
const siteDescription =
  "South Natick Law provides experienced legal counsel in real estate, estate planning, probate, domestic relations, employment law, elder law, and health care law.";

export const metadata = {
  metadataBase: new URL("https://southnaticklaw.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "South Natick Law",
    title: siteTitle,
    description: siteDescription,
    url: "https://southnaticklaw.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
