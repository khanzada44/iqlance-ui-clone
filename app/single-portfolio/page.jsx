"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import parse, { domToReact } from "html-react-parser";
import { singlePortfolio } from "../../services/all-sub-categories";
import ContactForm from "../components/contactForm/ContactForm";

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
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-gray-500 font-medium animate-pulse">
          Loading portfolio details...
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
