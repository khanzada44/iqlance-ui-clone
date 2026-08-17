"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import parse, { domToReact } from "html-react-parser";
import { singlePortfolio } from "../../../services/all-sub-categories";
import ContactForm from "../../components/contactForm/ContactForm";

export default function SinglePortfolioPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPortfolioDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await singlePortfolio(slug);
        setPortfolio(data);
      } catch (err) {
        console.error("Failed to fetch portfolio detail:", err);
        setError("Failed to load portfolio details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioDetails();
  }, [slug]);

  // Comprehensive DOM transformer for dynamic HTML parsing
  const parseOptions = {
    replace: (domNode) => {
      // 1. Invalid HTML Tag Typo Fix (<dv> -> <div>)
      if (domNode.type === "tag" && domNode.name === "dv") {
        return (
          <div className={domNode.attribs?.class || ""}>
            {domToReact(domNode.children, parseOptions)}
          </div>
        );
      }

      // 2. Dynamic Image Transformation for CSS & Lazy Loading
      if (domNode.type === "tag" && domNode.name === "img") {
        const {
          src,
          alt,
          class: existingClass,
          width,
          height,
        } = domNode.attribs || {};
        return (
          <img
            src={src}
            alt={
              alt && alt !== "javascript:void(0);" ? alt : "portfolio visual"
            }
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className={`${existingClass || ""} portfolio-parsed-img`.trim()}
          />
        );
      }

      // 3. Clean JSX Attribute Mapping
      if (domNode.attribs) {
        if ("fetchpriority" in domNode.attribs) {
          domNode.attribs.fetchPriority = domNode.attribs.fetchpriority;
          delete domNode.attribs.fetchpriority;
        }

        if ("class" in domNode.attribs) {
          domNode.attribs.className = domNode.attribs.class;
          delete domNode.attribs.class;
        }

        if ("autoplay" in domNode.attribs) {
          domNode.attribs.autoPlay = domNode.attribs.autoplay;
          delete domNode.attribs.autoplay;
        }
      }
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6 animate-pulse w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Loader 1 */}
          <div className="border border-gray-100 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded-md w-3/5"></div>
              <div className="h-4 bg-gray-100 rounded-md w-2/5"></div>
            </div>
            <div className="h-12 bg-gray-100 rounded-full w-full"></div>
            <div className="h-72 bg-gray-100 rounded-2xl w-full"></div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-4 bg-gray-100 rounded-md w-32"></div>
              <div className="h-3 bg-gray-100 rounded-md w-12"></div>
            </div>
            <div className="flex gap-4 overflow-x-hidden">
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
            </div>
          </div>

          {/* Phone Loader 2 */}
          <div className="border border-gray-100 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded-md w-3/5"></div>
              <div className="h-4 bg-gray-100 rounded-md w-2/5"></div>
            </div>
            <div className="h-12 bg-gray-100 rounded-full w-full"></div>
            <div className="h-72 bg-gray-100 rounded-2xl w-full"></div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-4 bg-gray-100 rounded-md w-32"></div>
              <div className="h-3 bg-gray-100 rounded-md w-12"></div>
            </div>
            <div className="flex gap-4 overflow-x-hidden">
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
            </div>
          </div>

          {/* Phone Loader 3 */}
          <div className="border border-gray-100 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded-md w-3/5"></div>
              <div className="h-4 bg-gray-100 rounded-md w-2/5"></div>
            </div>
            <div className="h-12 bg-gray-100 rounded-full w-full"></div>
            <div className="h-72 bg-gray-100 rounded-2xl w-full"></div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-4 bg-gray-100 rounded-md w-32"></div>
              <div className="h-3 bg-gray-100 rounded-md w-12"></div>
            </div>
            <div className="flex gap-4 overflow-x-hidden">
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
              <div className="h-28 bg-gray-100 rounded-2xl w-28 shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="text-center py-16 text-red-500 font-medium">
        {error || "Portfolio not found."}
      </div>
    );
  }

  return (
    <>
      <div className="portfolio-page-wrapper w-full overflow-hidden">
        {/* Full Width Dynamic Content Section */}
        <main className="w-full">
          {portfolio.content && (
            <div className="portfolio-dynamic-content w-full">
              {parse(portfolio.content, parseOptions)}
            </div>
          )}
        </main>

        {/* Bottom Contact Form Section */}
        {ContactForm && <ContactForm />}
      </div>
    </>
  );
}
