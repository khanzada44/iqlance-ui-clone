"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import { singlePortfolio } from "../../services/all-sub-categories"; // Aapki API call function path

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

  // Fix HTML typos and attributes for React DOM compatibility
  const parseOptions = {
    replace: (domNode) => {
      // 1. Invalid HTML Tag Typo Fix (<dv> -> <div>)
      if (domNode.type === "tag" && domNode.name === "dv") {
        domNode.name = "div";
      }

      // 2. React JSX Attribute Mappings
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
      <div className="flex justify-center items-center min-h-100">
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
        <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Portfolio Header */}
        {/* <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {portfolio.title}
            </h1>
        </div> */}

        {/* Description Section */}
        {/* {portfolio.description && (
            <div className="portfolio-dynamic-content mb-12 text-center max-w-3xl mx-auto">
            {parse(portfolio.description, parseOptions)}
            </div>
        )} */}

        {/* Main Dynamic Content Layout */}
        {portfolio.content && (
            <div className="portfolio-dynamic-content space-y-8">
            {parse(portfolio.content, parseOptions)}
            </div>
        )}
        </main>
  );
}