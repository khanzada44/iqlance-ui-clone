// import ServicesDetails from "../../../components/pages/services-details/page";
// import { getServicesData } from "@/lib/navigation-data";

// export async function generateStaticParams() {
//   const servicesData = await getServicesData();

//   const slugs = [];

//   servicesData.categories?.forEach((category) => {
//     category.items?.forEach((item) => {
//       if (item.href) {
//         const slug = item.href.split("/").filter(Boolean).pop();

//         if (slug) {
//           slugs.push(slug);
//         }
//       }
//     });
//   });

//   return [...new Set(slugs)].map((slug) => ({
//     slug,
//   }));
// }

// export default async function Page({ params }) {
//   const { slug } = await params;

//   return <ServicesDetails slug={slug} />;
// }
import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";

export async function generateStaticParams() {
  const servicesData = await getServicesData();

  const slugs = [];

  servicesData.categories?.forEach((category) => {
    category.items?.forEach((item) => {
      if (item.href) {
        const slug = item.href.split("/").filter(Boolean).pop();

        if (slug) {
          slugs.push(slug);
        }
      }
    });
  });

  return [...new Set(slugs)].map((slug) => ({
    slug,
  }));
}

// Dynamic Meta Tags
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const servicesData = await getServicesData();

  let service = null;

  servicesData.categories?.forEach((category) => {
    category.items?.forEach((item) => {
      if (item.href) {
        const itemSlug = item.href.split("/").filter(Boolean).pop();

        if (itemSlug === slug) {
          service = item;
        }
      }
    });
  });

  const title = service?.name || service?.title || "Services";
  const description =
    service?.description ||
    `Explore our ${title} services and solutions.`;

  return {
    title: `${title} | DEVAPP`,
    description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesDetails slug={slug} />;
}