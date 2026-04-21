import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Caren Schindel | South Natick Law",
  description:
    "Caren Schindel is a principal attorney at South Natick Law with 30+ years of experience in elder law, estate planning, domestic relations, and probate in MetroWest Massachusetts.",
  openGraph: {
    title: "Caren Schindel | South Natick Law",
    description:
      "Caren Schindel is a principal attorney at South Natick Law with 30+ years of experience in elder law, estate planning, domestic relations, and probate in MetroWest Massachusetts.",
    url: "https://southnaticklaw.com/caren-schindel",
    images: [{ url: "/assets/img/schindel_full.jpg", alt: "Caren Schindel" }],
  },
};

export default function CarenSchindelPage() {
  return <AttorneyProfile attorney={attorneys["caren-schindel"]} />;
}
