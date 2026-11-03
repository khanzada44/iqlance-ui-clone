import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  blogs,
  getBlogBySlug,
} from "../../../components/pages/blog/data";

const SITE_URL = "https://devappgrid.com";

// Static export: sirf yahi slugs bante hain, baaqi 404
export const dynamicParams = false;

// Required for static export with dynamic blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* HTML hata kar saaf text — description ke liye */
function plain(html = "", max = 0) {
  const text = String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

const absUrl = (src) => (!src ? undefined : /^https?:\/\//i.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`);

function describe(blog) {
  if (blog.meta_description) return blog.meta_description;
  const firstText = (blog.content || []).map((s) => s.text || s.description || "").find(Boolean) || "";
  return plain(firstText, 155) || `${blog.title} — insights from the DevApp Grid team.`;
}

// Har post ka apna title, description, canonical aur social tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  const url = `${SITE_URL}/blog/${slug}`;
  const title = blog.meta_title || `${blog.title} | DevApp Grid`;
  const description = describe(blog);
  const image = absUrl(blog.image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "DevApp Grid",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const popularPosts = (blog.Popular || []).filter((p) => p?.slug && p.slug !== slug);

  const url = `${SITE_URL}/blog/${slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: describe(blog),
      ...(absUrl(blog.image) ? { image: absUrl(blog.image) } : {}),
      ...(blog.date && !isNaN(Date.parse(blog.date)) ? { datePublished: new Date(blog.date).toISOString() } : {}),
      author: { "@type": blog.author ? "Person" : "Organization", name: blog.author || "DevApp Grid" },
      publisher: { "@type": "Organization", name: "DevApp Grid", url: SITE_URL },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: blog.title, item: url },
      ],
    },
  ];

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-16">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}

      {/* Breadcrumb (visible) */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-red-600">Blog</Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Side - Blog Content */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#1E4F91] leading-tight">
            {blog.title}
          </h1>

          {/* Author, Date and Category */}
          <div className="flex flex-wrap items-center gap-1 mt-5 text-lg">
            <span className="text-[#2878ff] font-medium">
              {blog.author}
            </span>

            <span className="text-black">Posted</span>

            <time className="text-[#2878ff]" dateTime={!isNaN(Date.parse(blog.date)) ? new Date(blog.date).toISOString().slice(0, 10) : undefined}>
              {blog.date}
            </time>

            <span className="text-black">In</span>

            <span className="text-[#2878ff]">
              {blog.category}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-75 sm:h-100 lg:h-137.5 mt-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Blog Sections */}
          <div className="mt-12 space-y-10">
            {blog.content?.map((section, index) => (
              <div key={index} className="m-0">

                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1E4F91] mb-4 mt-3">
                    {section.heading}
                  </h2>
                )}

                {section.text && (
                  <div
                    className="text-base sm:text-lg font-semibold leading-7 text-black mb-2"
                    dangerouslySetInnerHTML={{
                      __html: section.text,
                    }}
                  />
                )}

                {section.description && (
                  <div
                    className="text-sm sm:text-base font-semibold leading-6 text-black mb-2"
                    dangerouslySetInnerHTML={{
                      __html: section.description,
                    }}
                  />
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Popular Posts */}
        <aside className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Popular Posts
          </h2>

          <div className="space-y-6">
            {popularPosts.map((post, index) => (
              <Link
                key={post.slug || index}
                href={`/blog/${post.slug}`}
                className="flex gap-4 pb-6 border-b border-gray-200 hover:opacity-80 transition"
              >
                {/* Popular Post Image */}
                <div className="relative w-24 sm:w-28 h-20 rounded overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title || "Popular blog post"}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                {/* Popular Post Details */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6">
                    {post.title}
                  </p>

                  {post.date && (
                    <p className="text-sm text-black mt-2">
                      {post.date}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}