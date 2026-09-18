"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import parse, { domToReact } from "html-react-parser";
import { singlePortfolio } from "../../../services/all-sub-categories";
import ContactForm from "../../components/contactForm/ContactForm";

function SinglePortfolioContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("Portfolio slug is missing.");
      return;
    }

    const fetchPortfolioDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await singlePortfolio(slug);
        setPortfolio(data);

        if (data) {
          // Set page title
          if (data.title || data.meta_title) {
            document.title = data.meta_title || data.title;
          }

          // Set meta description
          const descriptionText = data.description || data.meta_description;

          if (descriptionText) {
            let metaDesc = document.querySelector('meta[name="description"]');

            if (!metaDesc) {
              metaDesc = document.createElement("meta");
              metaDesc.name = "description";
              document.head.appendChild(metaDesc);
            }

            metaDesc.setAttribute("content", descriptionText);
          }
        }
      } catch (err) {
        console.error("Failed to fetch portfolio detail:", err);
        setError("Failed to load portfolio details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioDetails();
  }, [slug]);

  const parseOptions = {
    replace: (domNode) => {
      if (!domNode.attribs) return;

      // 1. Remove inline CSS
      if ("style" in domNode.attribs) {
        delete domNode.attribs.style;
      }

      // 2. Convert standard attributes to React equivalents
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

      // 3. Fix invalid <dv> tag and convert to <div>
      if (domNode.type === "tag" && domNode.name === "dv") {
        return (
          <div className={domNode.attribs.className || ""}>
            {domToReact(domNode.children, parseOptions)}
          </div>
        );
      }

      // 4. Custom image handling
      if (domNode.type === "tag" && domNode.name === "img") {
        const { src, alt, className, width, height, fetchPriority } = domNode.attribs;

        return (
          <img
            src={src}
            alt={alt && alt !== "javascript:void(0);" ? alt : "portfolio visual"}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            fetchPriority={fetchPriority}
            className={`${className || ""} portfolio-parsed-img`.trim()}
          />
        );
      }
    },
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6 animate-pulse w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-100 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="h-6 bg-gray-100 rounded-md w-3/5" />
              <div className="h-4 bg-gray-100 rounded-md w-2/5" />
            </div>
            <div className="h-12 bg-gray-100 rounded-full w-full" />
            <div className="h-72 bg-gray-100 rounded-2xl w-full" />
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !portfolio) {
    return (
      <div className="text-center py-16 text-red-500 font-medium">
        {error || "Portfolio not found."}
      </div>
    );
  }

  return (
    <div className="w-full">
      <main className="w-full">
        {portfolio.content && (
          <div className="portfolio-dynamic">
            {parse(portfolio.content, parseOptions)}
          </div>
        )}
      </main>

      <ContactForm />
    </div>
  );
}

export default function SinglePortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white p-6 animate-pulse w-full">
          <div className="max-w-7xl mx-auto">
            <div className="h-8 bg-gray-100 rounded-md w-1/3 mb-6" />
            <div className="h-64 bg-gray-100 rounded-2xl w-full mb-6" />
          </div>
        </div>
      }
    >
      <SinglePortfolioContent />
    </Suspense>
  );
}