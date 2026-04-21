import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Richard Biller | South Natick Law",
  description:
    "Richard Biller is a principal attorney at South Natick Law with 25+ years of experience in domestic relations and employment law, serving the MetroWest Massachusetts area.",
  openGraph: {
    title: "Richard Biller | South Natick Law",
    description:
      "Richard Biller is a principal attorney at South Natick Law with 25+ years of experience in domestic relations and employment law, serving the MetroWest Massachusetts area.",
    url: "https://southnaticklaw.com/richard-biller",
    images: [{ url: "/assets/img/biller_full.jpg", alt: "Richard Biller" }],
  },
};

export default function RichardBillerPage() {
  return <AttorneyProfile attorney={attorneys["richard-biller"]} />;
}
