import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Kimberly E. Winter | South Natick Law",
};

export default function KimberlyWinterPage() {
  return <AttorneyProfile attorney={attorneys["kimberly-winter"]} />;
}
