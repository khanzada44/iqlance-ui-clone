"use client";

/* components/pages/single-blog/page.jsx
   ⚠️ Pehle: useSearchParams + <Suspense> + useEffect fetch → static export mein page ka
   HTML sirf grey "loading" dabbe hote the; Google ko blog ka text, H1, kuch nahi milta tha.
   Ab: post build ke waqt server (app/(website)/blog/[slug]/page.jsx) se `initialBlog`
   mein aati hai, is liye poora article HTML mein hota hai. Browser fetch sirf backup hai. */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { getSingleBlog, blogCategories } from "@/services/blog";

import { blogImageUrl, pickBlog, pickList } from "../blog/blog-utils";

const pickPopular = (b) =>
  Array.isArray(b?.Popular) ? b.Popular : Array.isArray(b?.popular_posts) ? b.popular_posts : [];

const catName = (cat) =>
  typeof cat === "string" ? cat : cat?.name || cat?.title || cat?.category_name || "";
const catSlug = (cat) =>
  (typeof cat === "object" && cat?.slug) ||
  String(catName(cat)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const catHref = (cat) => {
  const id = typeof cat === "object" ? cat?.id || cat?._id : null;
  return id
    ? `/blog?category_id=${encodeURIComponent(id)}&category=${encodeURIComponent(catSlug(cat))}`
    : `/blog?category=${encodeURIComponent(catSlug(cat))}`;
};

/* Article ke andar (backend/WordPress) apna H1 hota hai — page par pehle se H1 hai.
   Do H1 se bachne ke liye content wale H1 ko H2 bana do. */
const noExtraH1 = (html = "") =>
  String(html || "")
    .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
    .replace(/<\/h1>/gi, "</h2>");

function formatDate(d) {
  if (!d || isNaN(Date.parse(d))) return "";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function SingleBlog({ slug, initialBlog = null, initialCategories = [] }) {
  const [blog, setBlog] = useState(initialBlog);
  const [categories, setCategories] = useState(initialCategories);
  const [loading, setLoading] = useState(!initialBlog);
  const [error, setError] = useState(null);

  // Backup: agar build ke waqt API se post nahi mili thi to browser mein lao
  useEffect(() => {
    if (initialBlog || !slug) return;
    let cancelled = false;
    (async () => {
      try {
        const [res, catRes] = await Promise.all([
          getSingleBlog(slug),
          initialCategories.length ? null : blogCategories().catch(() => null),
        ]);
        if (cancelled) return;
        setBlog(pickBlog(res));
        if (catRes) setCategories(pickList(catRes));
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        if (!cancelled) setError("Blog load karne me error aaya.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, initialBlog, initialCategories.length]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-10 bg-gray-200 rounded-md w-11/12" />
            <div className="h-10 bg-gray-200 rounded-md w-3/4" />
            <div className="w-full h-80 bg-gray-200 rounded-lg mt-4" />
          </div>
          <div className="h-64 bg-gray-100 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (error || !blog?.title) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 font-medium mb-4">{error || "Blog nahi mila."}</p>
        <Link href="/blog" className="text-red-600 underline font-semibold">
          Back to Blog
        </Link>
      </div>
    );
  }

  const imageUrl = blogImageUrl(blog.image_url || blog.image);
  const popularPosts = pickPopular(blog).filter((p) => p?.slug && p.slug !== blog.slug);
  const dateText = formatDate(blog.created_at || blog.updated_at);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-red-600">Blog</Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT: Blog Content */}
        <article className="lg:col-span-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2 mb-3 leading-tight">
            {blog.title}
          </h1>

          {dateText && (
            <p className="text-sm text-black mb-6">
              Posted{" "}
              <time
                className="text-red-600 font-medium"
                dateTime={new Date(blog.created_at || blog.updated_at).toISOString().slice(0, 10)}
              >
                {dateText}
              </time>
            </p>
          )}

          {imageUrl && (
            <div className="relative h-[300px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl mb-8 bg-gray-100 shadow-sm">
              <Image
                src={imageUrl}
                alt={blog.title}
                fill
                unoptimized
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 1200px"
              />
            </div>
          )}

          {/* WordPress HTML Content */}
          <div
            className="blog-content prose prose-lg max-w-none text-slate-800 leading-relaxed prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: noExtraH1(blog.content) }}
          />
        </article>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-6">
          {popularPosts.length > 0 && (
            <div className="bg-white rounded-lg p-2">
              <p className="text-xl font-bold text-slate-900 mb-6">Popular Posts</p>

              <div className="space-y-5">
                {popularPosts.map((post, index) => {
                  const postImage = blogImageUrl(post.image_url || post.image);
                  return (
                    <Link
                      key={post.id || post.slug || index}
                      // Pehle /blog-details?slug= (teesra URL!) — ab saaf URL
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="flex items-center gap-4 group transition-colors"
                    >
                      <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-gray-100">
                        {postImage && (
                          <Image
                            src={postImage}
                            alt=""
                            fill
                            unoptimized
                            sizes="80px"
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-red-600 line-clamp-2 leading-snug">
                        {post.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sidebar Contact Form */}
          <div className="relative bg-[#F7F8FA] border border-[#F7F8FA] rounded-2xl p-6 md:p-8 pt-12 shadow-sm mt-10">
            <div className="absolute -top-10 left-3/4 -translate-x-1/2 z-10 w-10 sm:w-30">
              <img
                src="/images/contact-form-logo.png"
                alt="Same Day Response Guaranteed"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            <p className="text-2xl font-bold text-[#0F172A] mb-6">Get in Touch</p>

            {/* ⚠️ Ye form abhi kahin SEND nahi karta (sirf preventDefault). */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" aria-label="Full Name"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors" />
              <input type="email" name="email" placeholder="Email" aria-label="Email"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors" />
              <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors" />
              <textarea rows={3} name="message" placeholder="Message" aria-label="Message"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 resize-none transition-colors" />
              <div className="pt-2 flex items-center gap-3">
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">9 - 1 =</span>
                <input type="text" aria-label="Answer to 9 minus 1"
                  className="w-24 bg-transparent border-b border-[#94A3B8] py-1 text-sm text-slate-800 focus:outline-none focus:border-red-600 text-center" />
              </div>
              <div className="pt-2">
                <button type="submit"
                  className="w-32 bg-red-700 hover:bg-red-600 text-white font-semibold py-2.5 px-6 text-sm transition-colors shadow-sm">
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Categories — ab asli <a> links (pehle button the, Google follow nahi kar sakta tha) */}
          <div className="bg-[#F7F8FA] rounded-lg p-5 border border-slate-200 shadow-sm">
            <p className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-300">Categories</p>
            <ul className="space-y-2.5">
              {categories.length > 0 ? (
                categories.map((cat, index) => (
                  <li key={(typeof cat === "object" && (cat.id || cat._id)) || index}>
                    <Link
                      href={catHref(cat)}
                      className="flex items-start gap-2 text-sm text-slate-700 hover:text-red-600 transition-colors group leading-snug"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-red-600 shrink-0 mt-0.5" />
                      <span>{catName(cat)}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-xs text-slate-500">No categories found.</li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}