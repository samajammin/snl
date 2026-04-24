import { notFound } from "next/navigation";

import AttorneyProfile from "../../components/AttorneyProfile";
import { attorneys } from "../../lib/site-data";

export function generateStaticParams() {
  return Object.keys(attorneys).map((attorney) => ({ attorney }));
}

export async function generateMetadata({ params }) {
  const { attorney: slug } = await params;
  const person = attorneys[slug];
  if (!person) return {};

  const title = `${person.pageTitle} | South Natick Law`;
  return {
    title,
    description: person.metaDescription,
    openGraph: {
      title,
      description: person.metaDescription,
      url: `https://southnaticklaw.com/${slug}`,
      images: [{ url: person.image, alt: person.imageAlt }],
    },
  };
}

export default async function AttorneyPage({ params }) {
  const { attorney: slug } = await params;
  const person = attorneys[slug];
  if (!person) notFound();
  return <AttorneyProfile attorney={person} />;
}
