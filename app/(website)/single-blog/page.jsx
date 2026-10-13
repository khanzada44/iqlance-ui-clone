
"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { getSingleBlog, blogCategories } from "@/services/blog";

function SingleBlogPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingCatId, setLoadingCatId] = useState(null);

  const [popularPosts, setPopularPosts] = useState([]);

  // Fetch blog and categories
  useEffect(() => {
    let cancelled = false;

    const fetchInitialData = async () => {
      try {
        setLoading(true);
        setError(null);

        const catRes = await blogCategories();
        const catData =
          catRes?.response?.data || catRes?.data || catRes || [];

        if (!cancelled) {
          setCategories(Array.isArray(catData) ? catData : []);
        }

        if (!slug) {
          if (!cancelled) {
            setBlog(null);
            setLoading(false);
          }
          return;
        }

        const res = await getSingleBlog(slug);
        const actualData = res?.response?.data || res?.data || res;

        if (!cancelled) {
          setBlog(actualData);
          setPopularPosts(
            Array.isArray(actualData?.Popular)
              ? actualData.Popular
              : Array.isArray(actualData?.popular_posts)
                ? actualData.popular_posts
                : []
          );
        }
      } catch (err) {
        console.error("Failed to fetch blog data:", err);

        if (!cancelled) {
          setError("Blog load karne me error aaya.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchInitialData();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Category click handler
  const handleCategoryClick = async (e, cat) => {
    e.preventDefault();

    const catId =
      typeof cat === "object" ? cat?.id || cat?._id : null;

    const catName =
      typeof cat === "string"
        ? cat
        : cat?.name || cat?.title || cat?.category_name || "";

    const catSlug =
      typeof cat === "object" && cat?.slug
        ? cat.slug
        : String(catName)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

    if (catId) {
      try {
        setLoadingCatId(catId);
        await blogCategories(catId);
      } catch (err) {
        console.error("Failed to fetch sub-categories:", err);
      } finally {
        setLoadingCatId(null);
      }
    }

    if (catId) {
      router.push(
        `/blog?category_id=${encodeURIComponent(catId)}&category=${encodeURIComponent(catSlug)}`
      );
    } else {
      router.push(`/blog?category=${encodeURIComponent(catSlug)}`);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-10 bg-gray-200 rounded-md w-11/12" />
            <div className="h-10 bg-gray-200 rounded-md w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4 my-2" />
            <div className="w-full h-80 bg-gray-200 rounded-lg mt-4" />

            <div className="space-y-3 pt-4">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-4/5" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-6">
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="h-8 bg-gray-200 rounded w-full" />
              <div className="h-8 bg-gray-200 rounded w-full" />
              <div className="h-8 bg-gray-200 rounded w-full" />
              <div className="h-16 bg-gray-200 rounded w-full" />
              <div className="h-10 bg-gray-300 rounded-lg w-28" />
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center py-16 text-red-500 font-medium">
        {error || "Blog nahi mila."}
      </div>
    );
  }

  const imageUrl = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `https://devappgrid.dev-staging.live/uploads/front/${blog.image}`
    : null;

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT SIDE: Blog Content */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2 mb-3 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-black mb-6">
            <span className="capitalize">{blog.status}</span>

            <span>
              Posted{" "}
              <span className="text-red-600 font-medium">
                {blog.updated_at
                  ? new Date(blog.updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </span>
            </span>
          </div>

          <div className="relative h-[300px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl mb-8 bg-gray-100 shadow-sm">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={blog.title || "Blog image"}
                fill
                unoptimized
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 1200px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
          </div>

          {/* WordPress HTML Content */}
          <article
            className="blog-content prose prose-lg max-w-none text-slate-800 leading-relaxed prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{
              __html: blog.content || "",
            }}
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-6">
          {/* Popular Posts */}
          {popularPosts.length > 0 && (
            <div className="bg-white rounded-lg p-2">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Popular Post
              </h3>

              <div className="space-y-5">
                {popularPosts.map((post, index) => {
                  const postImage = post.image
                    ? post.image.startsWith("http")
                      ? post.image
                      : `https://devappgrid.dev-staging.live/uploads/front/${post.image}`
                    : null;

                  return (
                    <Link
                      key={post.id || post.slug || index}
                      href={`/blog?slug=${encodeURIComponent(post.slug || "")}`}
                      className="flex items-center gap-4 group transition-colors"
                    >
                      <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-gray-100">
                        {postImage ? (
                          <Image
                            src={postImage}
                            alt={post.title || "Popular blog post"}
                            fill
                            unoptimized
                            sizes="80px"
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                            No image
                          </div>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-slate-800 group-hover:text-red-600 line-clamp-2 leading-snug">
                        {post.title}
                      </p>
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

            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
              Get in Touch
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 transition-colors"
              />

              <textarea
                rows={3}
                placeholder="Message"
                className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-red-600 resize-none transition-colors"
              />

              <div className="pt-2 flex items-center gap-3">
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  9 - 1 =
                </span>

                <input
                  type="text"
                  aria-label="Answer to 9 minus 1"
                  className="w-24 bg-transparent border-b border-[#94A3B8] py-1 text-sm text-slate-800 focus:outline-none focus:border-red-600 text-center"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-32 bg-red-700 hover:bg-red-600 text-white font-semibold py-2.5 px-6 text-sm transition-colors shadow-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Categories */}
          <div className="bg-[#F7F8FA] rounded-lg p-5 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-300">
              Categories
            </h3>

            <ul className="space-y-2.5">
              {categories.length > 0 ? (
                categories.map((cat, index) => {
                  const catName =
                    typeof cat === "string"
                      ? cat
                      : cat?.name || cat?.title || cat?.category_name || "";

                  const catId =
                    typeof cat === "object" ? cat?.id || cat?._id : null;

                  return (
                    <li key={catId || index}>
                      <button
                        type="button"
                        onClick={(e) => handleCategoryClick(e, cat)}
                        className="w-full flex items-center justify-between text-left text-sm text-slate-700 hover:text-red-600 transition-colors group leading-snug cursor-pointer"
                      >
                        <span className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-red-600 shrink-0 mt-0.5" />
                          <span>{catName}</span>
                        </span>

                        {loadingCatId === catId && (
                          <span className="text-xs text-red-500 animate-pulse">
                            Loading...
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="text-xs text-slate-500">
                  No categories found.
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

// Suspense boundary fixes useSearchParams prerendering error
export default function SingleBlogPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-4" />
          <div className="h-80 bg-gray-200 rounded-lg" />
        </div>
      }
    >
      <SingleBlogPageContent />
    </Suspense>
  );
}
