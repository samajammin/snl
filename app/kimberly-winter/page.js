import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Kimberly E. Winter | South Natick Law",
  description:
    "Kimberly E. Winter is an attorney at South Natick Law concentrating in health care law, medical malpractice, and personal injury, serving clients throughout Massachusetts.",
  openGraph: {
    title: "Kimberly E. Winter | South Natick Law",
    description:
      "Kimberly E. Winter is an attorney at South Natick Law concentrating in health care law, medical malpractice, and personal injury, serving clients throughout Massachusetts.",
    url: "https://southnaticklaw.com/kimberly-winter",
    images: [{ url: "/assets/img/winter_full.jpg", alt: "Kimberly E. Winter" }],
  },
};

export default function KimberlyWinterPage() {
  return <AttorneyProfile attorney={attorneys["kimberly-winter"]} />;
}
