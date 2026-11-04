// app/(website)/blog/[slug]/page.jsx — SERVER component ("use client" NAHI)
// Dono blog systems ek URL par: /blog/<slug>
//   1) components/pages/blog/data.js wali local posts
//   2) Backend (API) wali posts — pehle /single-blog?slug= par thin, ab yahan
// Dono ka poora HTML build ke waqt banta hai (Google ko text, H1, schema milta hai).

import Link from "next/link";
import Image from "next/image";

import { blogs, getBlogBySlug } from "../../../components/pages/blog/data";
import SingleBlog from "../../../components/pages/single-blog/page";
import { parseBlogs, pickBlog, pickList, blogImageUrl } from "../../../components/pages/blog/blog-utils";
import { getBlogs, getSingleBlog, blogCategories } from "@/services/blog";

const SITE_URL = "https://devappgrid.com";

// Static export: sirf build wale slugs bante hain, baaqi 404
export const dynamicParams = false;

/* ---------- build-time fetch: retry + ek waqt mein 3 requests ---------- */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const MAX_PARALLEL = 3;
let running = 0;
const queue = [];
async function limited(fn) {
  if (running >= MAX_PARALLEL) await new Promise((r) => queue.push(r));
  running++;
  try {
    return await fn();
  } finally {
    running--;
    queue.shift()?.();
  }
}
async function withRetry(label, fn) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await limited(fn);
    } catch (err) {
      console.warn(`[blog] ${label} koshish ${attempt}/3 fail:`, err?.response?.status || "", err?.message || err);
      if (attempt < 3) await sleep(1000 * attempt);
    }
  }
  console.error(`[blog] ❌ ${label} — build mein nahi mila`);
  return null;
}

// Metadata aur page dono same post mangte hain — ek hi dafa fetch
const blogCache = new Map();
function getApiBlog(slug) {
  if (!blogCache.has(slug)) {
    blogCache.set(
      slug,
      withRetry(`post "${slug}"`, () => getSingleBlog(slug)).then((res) => {
        const b = pickBlog(res);
        return b?.title ? b : null;
      }),
    );
  }
  return blogCache.get(slug);
}
let categoriesPromise;
const getCategories = () =>
  (categoriesPromise ??= withRetry("categories", () => blogCategories()).then(pickList));

/* Backend ki SAARI posts ke slugs (har page) */
async function getAllApiSlugs() {
  const slugs = [];
  const first = parseBlogs(await withRetry("listing page 1", () => getBlogs(1)));
  first.blogs.forEach((b) => b?.slug && slugs.push(b.slug));
  for (let page = 2; page <= Math.min(first.lastPage, 50); page++) {
    const { blogs: list } = parseBlogs(await withRetry(`listing page ${page}`, () => getBlogs(page)));
    list.forEach((b) => b?.slug && slugs.push(b.slug));
  }
  return slugs;
}

export async function generateStaticParams() {
  const local = blogs.map((b) => b.slug);
  const api = await getAllApiSlugs();
  if (api.length === 0) console.error("[blog] ❌ backend se 0 posts — sirf local posts banengi");
  const all = [...new Set([...local, ...api].filter(Boolean).map(String))];
  console.log(`[blog] ${all.length} posts banengi (local ${local.length}, API ${api.length})`);
  return all.map((slug) => ({ slug }));
}

/* HTML hata kar saaf text — description ke liye */
function plain(html = "", max = 0) {
  const text = String(html)
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;|&rsquo;|&lsquo;/g, "'")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\-]+$/, "") + "…";
}

const absUrl = (src) => (!src ? undefined : /^https?:\/\//i.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`);

/* Local post (data.js) ki description */
function describe(blog) {
  if (blog.meta_description) return blog.meta_description;
  const firstText = (blog.content || []).map((s) => s.text || s.description || "").find(Boolean) || "";
  return plain(firstText, 155) || `${blog.title} — insights from the DevApp Grid team.`;
}

/* Kisi bhi post ko ek shape mein lao (metadata + schema ke liye) */
async function loadPost(slug) {
  const local = getBlogBySlug(slug);
  if (local) {
    return {
      source: "local",
      blog: local,
      title: local.title,
      metaTitle: local.meta_title,
      description: describe(local),
      image: absUrl(local.image),
      date: local.date,
      author: local.author,
    };
  }
  const api = await getApiBlog(slug);
  if (!api) return { source: "api", blog: null };
  return {
    source: "api",
    blog: api,
    title: api.title,
    metaTitle: api.meta_title,
    description: api.meta_description || plain(api.content, 155) || `${api.title} — insights from the DevApp Grid team.`,
    image: blogImageUrl(api.image_url || api.image) || undefined,
    date: api.created_at || api.updated_at,
    author: api.author?.name || api.author || null,
  };
}

// Har post ka apna title, description, canonical aur social tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  if (!post.blog) return { alternates: { canonical: url } };

  const title = post.metaTitle || `${post.title} | DevApp Grid`;
  return {
    title: { absolute: title }, // root layout ka template dobara na lage
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      type: "article",
      siteName: "DevApp Grid",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

function Schemas({ post, url }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      ...(post.image ? { image: post.image } : {}),
      ...(post.date && !isNaN(Date.parse(post.date)) ? { datePublished: new Date(post.date).toISOString() } : {}),
      author: { "@type": post.author ? "Person" : "Organization", name: post.author || "DevApp Grid" },
      publisher: { "@type": "Organization", name: "DevApp Grid", url: SITE_URL },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
  return schemas.map((schema, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  ));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  const url = `${SITE_URL}/blog/${slug}`;

  // Local post (data.js)
  if (post.source === "local") {
    return (
      <>
        <Schemas post={post} url={url} />
        <LocalBlogView blog={post.blog} slug={slug} />
      </>
    );
  }

  // API post. Build mein na mili to bhi page khaali/404 NAHI — browser khud fetch karega
  const categories = await getCategories();
  return (
    <>
      {post.blog && <Schemas post={post} url={url} />}
      <SingleBlog slug={slug} initialBlog={post.blog} initialCategories={categories || []} />
    </>
  );
}

/* ================= Local post ka layout (pehle wala hi) ================= */
function LocalBlogView({ blog, slug }) {

  const popularPosts = (blog.Popular || []).filter((p) => p?.slug && p.slug !== slug);

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-16">
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