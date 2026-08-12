"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
// Assumed service imports
import { getSingleBlog, blogCategories } from "@/services/blog";
import { blogByCategory } from "../../services/blog";

export default function SingleBlogPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    const [categories, setCategories] = useState([]);
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dynamic Category Click Handler (API hit + Redirect)
    const [loadingCatId, setLoadingCatId] = useState(null);

    const handleCategoryClick = async (e, cat) => {
        e.preventDefault();

        const catId = typeof cat === "object" ? cat?.id || cat?._id : null;
        const catName = typeof cat === "string" ? cat : cat?.name || cat?.title || cat?.category_name || "";
        const catSlug = typeof cat === "object" && cat?.slug ? cat.slug : String(catName).toLowerCase().replace(/[^a-z0-9]+/g, "-");

        if (catId) {
            try {
                setLoadingCatId(catId);
                // 1. API Hit for Sub-Categories
                const subCatRes = await blogCategories(catId);
                console.log("Sub Categories Data:", subCatRes);
            } catch (err) {
                console.error("Failed to fetch sub-categories:", err);
            } finally {
                setLoadingCatId(null);
            }
        }

        // 2. Redirect to /blog page with Query Params
        if (catId) {
            router.push(`/blog?category_id=${catId}&category=${catSlug}`);
        } else {
            router.push(`/blog?category=${catSlug}`);
        }
    };

    useEffect(() => {
        if (!slug) return;
        const fetchInitialData = async () => {
            try {
                setLoading(true);

                // Fetch Categories
                const catRes = await blogCategories();
                const catData = catRes?.response?.data || catRes?.data || catRes || [];
                console.log('catData', catData);

                setCategories(Array.isArray(catData) ? catData : []);

                // Fetch Single Blog if Slug Available
                if (slug) {
                    const res = await getSingleBlog(slug);
                    const actualData = res?.response?.data || res?.data || res;
                    setBlog(actualData);
                }
            } catch (err) {
                console.error("Failed to fetch data:", err);
                setError("Blog load karne me error aaya.");
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [slug]);

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Blog Details (Left Side - 2 Columns) */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Title Skeleton */}
                        <div className="h-10 bg-gray-200 rounded-md w-11/12"></div>
                        <div className="h-10 bg-gray-200 rounded-md w-3/4"></div>

                        {/* Date / Metadata Skeleton */}
                        <div className="h-4 bg-gray-200 rounded w-1/4 my-2"></div>

                        {/* Big Banner Image Skeleton */}
                        <div className="w-full h-80 bg-gray-200 rounded-lg mt-4"></div>

                        {/* Paragraph Lines Skeleton */}
                        <div className="space-y-3 pt-4">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                        </div>
                    </div>

                    {/* Sidebar / Get In Touch Form (Right Side - 1 Column) */}
                    <div className="space-y-6">
                        {/* Form Skeleton Card */}
                        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-6">
                            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                            <div className="h-16 bg-gray-200 rounded w-full"></div>
                            <div className="h-10 bg-gray-300 rounded-lg w-28"></div>
                        </div>

                        {/* Categories Box Skeleton */}
                        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-3">
                            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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
            : `https://www.iqlance.com/wp-content/uploads/2026/06/${blog.image}`
        : null;

    return (
        <>
            {/* Main Container - Desktop par 2 Columns Grid */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT SIDE: Blog Content (8 Columns) */}
                    <div className="lg:col-span-8">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Metadata Row */}
                        <div className="flex items-center gap-3 text-sm text-slate-600 mb-6">
                            <span className="capitalize">{blog.status}</span>
                            <span>
                                Posted{" "}
                                <span className="text-blue-600 font-medium">
                                    {new Date(blog.updated_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </span>
                        </div>

                        {/* Main Image */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8 bg-gray-100 shadow-sm">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt={blog.title}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    No Image Available
                                </div>
                            )}
                        </div>

                        {/* WordPress HTML Content */}
                        <article
                            className="blog-content prose prose-lg max-w-none text-slate-800 leading-relaxed 
                         prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-lg"
                            dangerouslySetInnerHTML={{ __html: blog.content || "" }}
                        />
                    </div>

                    {/* RIGHT SIDEBAR: Popular Posts + Contact Form Widget (4 Columns) */}
                    <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-6">

                        {/* Popular Posts Section */}
                        {typeof popularPosts !== "undefined" && popularPosts.length > 0 && (
                            <div className="bg-white rounded-lg p-2">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">
                                    Popular Post
                                </h3>
                                <div className="space-y-5">
                                    {popularPosts.map((post) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog?slug=${post.slug}`}
                                            className="flex items-center gap-4 group transition-colors"
                                        >
                                            <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-gray-100">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                                />
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug">
                                                {post.title}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sidebar Contact Form */}
                        <div className="relative bg-[#EAF3FC] border border-[#D0E2F7] rounded-2xl p-6 md:p-8 pt-12 shadow-sm mt-10">
                            <div className="absolute -top-10 left-3/4 -translate-x-1/2 z-5 w-10 sm:w-30">
                                <img
                                    src="/images/badge-sameday-resposnse.png"
                                    alt="Same Day Response Guaranteed"
                                    className="w-full h-auto object-contain mx-auto"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
                                Get in Touch
                            </h3>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-blue-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-blue-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-blue-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={3}
                                        placeholder="Message"
                                        className="w-full bg-transparent border-b border-[#94A3B8] py-2 text-sm text-slate-800 placeholder-[#64748B] focus:outline-none focus:border-blue-600 resize-none transition-colors"
                                    ></textarea>
                                </div>

                                <div className="pt-2 flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                                        9 - 1 =
                                    </span>
                                    <input
                                        type="text"
                                        className="w-24 bg-transparent border-b border-[#94A3B8] py-1 text-sm text-slate-800 focus:outline-none focus:border-blue-600 text-center"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-32 bg-black hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-md text-sm transition-colors shadow-sm"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Dynamic Categories Section */}
                        <div className="bg-[#EEF2F6] rounded-lg p-5 border border-slate-200 shadow-sm">
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

                                        const catId = typeof cat === "object" ? cat?.id || cat?._id : null;

                                        return (
                                            <li key={catId || index}>
                                                <button
                                                    type="button"
                                                    onClick={(e) => handleCategoryClick(e, cat)}
                                                    className="w-full flex items-center justify-between text-left text-sm text-slate-700 hover:text-blue-600 transition-colors group leading-snug cursor-pointer"
                                                >
                                                    <div className="flex items-start gap-2">
                                                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600 shrink-0 mt-0.5" />
                                                        <span>{catName}</span>
                                                    </div>
                                                    {loadingCatId === catId && (
                                                        <span className="text-xs text-blue-500 animate-pulse">Loading...</span>
                                                    )}
                                                </button>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <p className="text-xs text-slate-500">No categories found.</p>
                                )}
                            </ul>
                        </div>

                    </aside>
                </div>
            </main>

            {/* Author Section */}
            <section className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800 border-t">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/krunal_Vyash_CEO.jpg"
                            alt="Author Profile"
                            className="w-72 h-auto object-cover rounded-lg shadow-sm"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            About the Author:
                        </p>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Krunal Vyas</h2>
                            <p className="text-sm text-gray-600 font-medium">B.Eng., MBA, PMP®</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base">
                            I’m Krunal Vyas, IT Consultant at iQlance Solutions. Is one of the name of website and Mobile app Development, I’ve helped more than 250+ Clients to build meaningful mobile apps and website. Call me today for FREE CONSULTATIONS:
                        </p>

                        <div className="inline-flex items-center gap-3 border border-gray-900 rounded-md px-4 py-2 text-sm font-semibold text-gray-900">
                            <img src="/icons/phone-icon.svg" alt="" />
                            <span>US : +1 (000) 000-0000, CA : +1 647 637 9108</span>
                        </div>

                        <div>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md rounded"
                            >
                                Let’s Talk <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 pt-2 text-gray-600">
                            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-black transition-colors">X</a>
                            <a href="#" className="hover:text-blue-500 transition-colors">Mail</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-4 border-t pt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Have Something in Mind? Let's Talk
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Take a look at the services and development process we follow for custom web apps, mobile solutions, and cloud architecture. Start a conversation to innovate your next great idea into reality with us.
                    </p>
                </div>
            </section>

            {/* Main Contact Form */}
            {typeof ContactForm !== "undefined" && (
                <div className="mb-2.5 pb-2">
                    <ContactForm />
                </div>
            )}

            {/* Partners Marquee */}
            {typeof partners !== "undefined" && Array.isArray(partners) && (
                <section className="mb-5 overflow-hidden">
                    <div className="marquee">
                        <div className="marquee-content">
                            {[...partners, ...partners].map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="w-35 h-17.5 sm:w-42.5 sm:h-20 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-3 shrink-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}