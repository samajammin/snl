import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Richard Biller | South Natick Law",
};

export default function RichardBillerPage() {
  return <AttorneyProfile attorney={attorneys["richard-biller"]} />;
}
