import Script from "next/script";

import FooterContact from "../components/FooterContact";
import Navbar from "../components/Navbar";

const siteTitle = "South Natick Law | MetroWest Attorneys";
const siteDescription =
  "South Natick Law provides experienced legal counsel in real estate, estate planning, probate, domestic relations, employment law, elder law, and health care law.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/flexslider.css" rel="stylesheet" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link href="/assets/css/custom.css" rel="stylesheet" />
        <link href="/assets/css/queries.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
      </head>
      <body id="top">
        <Navbar />
        {children}
        <FooterContact />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.flexslider.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/modernizr.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
