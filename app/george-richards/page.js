import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "George Richards III | South Natick Law",
  description:
    "George Richards III is a principal attorney at South Natick Law specializing in commercial and residential real estate, estate planning, probate, and small business law in MetroWest MA.",
  openGraph: {
    title: "George Richards III | South Natick Law",
    description:
      "George Richards III is a principal attorney at South Natick Law specializing in commercial and residential real estate, estate planning, probate, and small business law in MetroWest MA.",
    url: "https://southnaticklaw.com/george-richards",
    images: [{ url: "/assets/img/richards_full.jpg", alt: "George L. Richards III" }],
  },
};

export default function GeorgeRichardsPage() {
  return <AttorneyProfile attorney={attorneys["george-richards"]} />;
}
