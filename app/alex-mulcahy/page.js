import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Alex Mulcahy | South Natick Law",
  description:
    "Alex Mulcahy is an associate attorney at South Natick Law focused on residential real estate, title curative, and lender representation in MetroWest Massachusetts.",
  openGraph: {
    title: "Alex Mulcahy | South Natick Law",
    description:
      "Alex Mulcahy is an associate attorney at South Natick Law focused on residential real estate, title curative, and lender representation in MetroWest Massachusetts.",
    url: "https://southnaticklaw.com/alex-mulcahy",
    images: [{ url: "/assets/img/mulcahy_full.jpg", alt: "Alex Mulcahy" }],
  },
};

export default function AlexMulcahyPage() {
  return <AttorneyProfile attorney={attorneys["alex-mulcahy"]} />;
}
