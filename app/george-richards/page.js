import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "George Richards III | South Natick Law",
};

export default function GeorgeRichardsPage() {
  return <AttorneyProfile attorney={attorneys["george-richards"]} />;
}
