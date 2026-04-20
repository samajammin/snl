import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export const metadata = {
  title: "Caren Schindel | South Natick Law",
};

export default function CarenSchindelPage() {
  return <AttorneyProfile attorney={attorneys["caren-schindel"]} />;
}
