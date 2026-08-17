import ServicesDetails from "../../../components/pages/services-details/page";

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesDetails slug={slug} />;
}