import Blog from "../../components/pages/blog/page"; // aap ka component path
import { parseBlogs } from "../../components/pages/blog/blog-utils"; // "use client" file se NAHI
import { getBlogs } from "@/services/blog";

const SITE_URL = "https://devappgrid.com";
export const metadata = {
  title: { absolute: "Blog – App & Software Development Insights | DevApp Grid" },
  description:
    "Practical tips, ideas, and expert insights on mobile app, web, and software development from the DevApp Grid team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog – App & Software Development Insights | DevApp Grid",
    description:
      "Practical tips, ideas, and expert insights on mobile app, web, and software development.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "DevApp Grid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – App & Software Development Insights | DevApp Grid",
    description:
      "Practical tips, ideas, and expert insights on mobile app, web, and software development.",
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getFirstPage() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const parsed = parseBlogs(await getBlogs(1));
      if (parsed.blogs.length > 0) return parsed;
      console.warn(`[blog] koshish ${attempt}/3: backend ne 0 posts di`);
    } catch (error) {
      console.warn(`[blog] koshish ${attempt}/3 fail:`, error?.response?.status || "", error?.message || error);
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  console.error("[blog] build mein posts NAHI mili — blog page Google ko khaali milega");
  return { blogs: [], lastPage: 1 }; // khaali hua to component browser mein fetch karega
}

export default async function BlogPage() {
  const { blogs, lastPage } = await getFirstPage();
  return <Blog initialBlogs={blogs} initialLastPage={lastPage} />;
}