"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ChevronRight, ArrowRight, Paperclip } from "lucide-react";
// Assumed service imports - inko apne file structure ke hisab se update rakhein
import { getBlogs } from "@/services/blog";
import { blogByCategory } from "../../../../services/blog";
import { submitContactForm } from "../../../../services/send-call-request";
import {
  partners,
  bottomFeatures,
  slides,
  portfolioSlides,
  technologies,
  stats,
  industries,
  services,
  faqsData,
  testimonials,
} from "../../../../utils/data";

export default function Blog() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category_id"); // URL se category_id check kar rahe hain

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    service_category: "",
    file: null,
    sendNda: false,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [fetchingBlogs, setFetchingBlogs] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = new FormData();
      payload.append("name", formData.name || "");
      payload.append("email", formData.email || "");
      payload.append("phone", formData.phone || "");
      payload.append("message", formData.message || "");
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      if (formData.file && formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      await submitContactForm(payload);

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        service_category: "",
        file: null,
        sendNda: false,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("API Error Response:", error?.response?.data);

      let errorMsg = "Failed to send message. Please try again later.";
      if (error?.response?.data?.errors?.file) {
        errorMsg = error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  // Condition-based Blog Fetch Function
  const fetchBlogs = async (page = 1) => {
    setFetchingBlogs(true);
    try {
      let res;

      // Check: Agar URL me category_id mojood hai
      if (categoryId) {
        // all-blogs API bypass ho jayegi, directly Category API hit hogi
        res = await blogByCategory(categoryId, page);
      } else {
        // Agar normal blog route par aaye hain to standard all-blogs API hit hogi
        res = await getBlogs(page);
      }

      const paginatedData = res?.response?.data || res?.data || res;

      // Data handling depending on response structure
      const blogList = Array.isArray(paginatedData)
        ? paginatedData
        : paginatedData?.data || [];

      setBlogs(blogList);
      setCurrentPage(paginatedData?.current_page || 1);
      setLastPage(paginatedData?.last_page || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setFetchingBlogs(false);
    }
  };

  // Re-fetch trigger jab page number ya category_id badle
  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage, categoryId]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div>
          <section className="py-10 bg-white mt-2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div>
                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-red-600">Blog</span>
                  </h1>

                  <p className="mt-6 text-black leading-8 text-lg">
                    Curious about what goes into building a great digital product?
                  </p>
                    <p className="mt-6 text-black leading-8 text-lg">
                      We share practical lessons, ideas, and insights from the world of software
                      and app development, without all the technical jargon.
                    </p>

                    <p className="mt-6 text-black leading-8 text-lg">
                      From choosing the right technology and improving app performance to creating
                      better user experiences and planning new features, our articles cover the
                      questions businesses often face when building or growing a digital product.
                    </p>

                    <p className="mt-6 text-black leading-8 text-lg">
                      Whether you&apos;re starting an app from scratch, upgrading an existing
                      platform, or simply exploring what&apos;s possible with technology,
                      you&apos;ll find useful advice and real-world perspectives to help you make
                      better decisions.
                    </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <button className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                      Contact Us
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <button className="group w-full sm:w-auto border border-gray-300 hover:border-red-600 px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                      See Our Work
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>

                {/* Right Form */}
                <div className="relative">
                  <img
                    src="/images/contact-form-logo.png"
                    alt="Guaranteed"
                    className="absolute -top-12 right-6 w-28 z-10"
                  />

                  <div className="bg-[#F7F8FA]  border-[#F7F8FA] rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-3xl font-bold">Request a Free Quote</h2>
                    <p className="mt-3 text-lg mb-6">
                      Guaranteed Response within One Business Day!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {statusMessage.text && (
                        <div
                          className={`p-3 text-sm rounded ${statusMessage.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                        >
                          {statusMessage.text}
                        </div>
                      )}

                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone*"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                        />
                      </div>

                      <div>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Write here Brief about the project..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
                        />
                      </div>

                      {/* File Upload */}
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 pt-1">
                        <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-gray-900">
                          <Paperclip className="w-4 h-4 text-gray-600" />
                          <span>Upload file:</span>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <span className="text-gray-500 truncate max-w-45">
                          {formData.file ? formData.file.name : "No file chosen."}
                        </span>
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="nda"
                          checked={formData.sendNda}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              sendNda: e.target.checked,
                            }))
                          }
                          className="w-4 h-4 border-gray-400 text-red-600 focus:ring-red-600 accent-gray-600 cursor-pointer"
                        />
                        <label
                          htmlFor="nda"
                          className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer select-none"
                        >
                          Please Send NDA
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-red-700 hover:bg-red-600 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-50"
                        >
                          {loading ? "Submitting..." : "Schedule a free consultation"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h1 className="md:text-5xl text-center leading-tight text-3xl font-bold">
                Our Blog
              </h1>
              <p className="mt-2 space-y-6 text-center md:text-lg leading-7">
               Get practical ideas, expert perspectives, and useful tips on software, apps, and digital products. Explore our latest articles to make smarter decisions for your next project.

              </p>
            </div>
          </section>


          <section className="mt-12 mb-8">
            {fetchingBlogs ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 py-10">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-full space-y-4 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-lg"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs && blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <div
                    key={`${blog.slug}-${index}`}
                    className="p-px bg-transparent hover:bg-linear-to-r hover:from-red-300 hover:to-red-800 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Link
                      href={`/single-blog?slug=${blog.slug}`}
                      className="group block overflow-hidden bg-white h-full"
                    >
                      <div className="relative aspect-4/3 overflow-hidden">
                        {blog.image_url || blog.image ? (
                          <Image
                            src={blog.image_url || blog.image}
                            alt={blog.title}
                            fill
                            unoptimized
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-200">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        {blog.category?.name && (
                          <span className="text-sm text-red-600 font-medium">
                            {blog.category.name}
                          </span>
                        )}

                        <h3 className="mt-3 text-xl font-semibold leading-7 text-red-800 line-clamp-2">
                          {blog.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) :
              (
                <div className="text-center py-10 text-gray-500">
                  No blogs available.
                </div>
              )}

            {lastPage >= 1 && (
              <div className="flex  mt-10 mb-6">
                <div className="inline-flex rounded-md shadow-xs border border-red-200 overflow-hidden bg-white">

                  {/* Previous Arrow Button */}
                  {currentPage > 1 && (
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="px-3.5 py-2 text-red-600 border-r border-blue-200 hover:bg-gray-50 flex items-center justify-center transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                  )}

                  {/* Page 1 */}
                  <button
                    onClick={() => handlePageChange(1)}
                    className={`px-4 py-2 font-medium text-sm border-r border-red-200 transition cursor-pointer ${currentPage === 1
                      ? "bg-red-600 text-white font-bold"
                      : "text-blue-600 hover:bg-gray-50"
                      }`}
                  >
                    1
                  </button>

                  {/* Page 2 (if available) */}
                  {lastPage >= 2 && (
                    <button
                      onClick={() => handlePageChange(2)}
                      className={`px-4 py-2 font-medium text-sm border-r border-red-200 transition cursor-pointer ${currentPage === 2
                        ? "bg-blue-950 text-white font-bold"
                        : "text-blue-600 hover:bg-gray-50"
                        }`}
                    >
                      2
                    </button>
                  )}

                  {/* Ellipsis (...) */}
                  {lastPage > 3 && (
                    <span className="px-3 py-2 text-red-600 text-sm font-medium border-r border-blue-200 bg-white select-none">
                      ...
                    </span>
                  )}

                  {/* Last Page Number */}
                  {lastPage > 2 && (
                    <button
                      onClick={() => handlePageChange(lastPage)}
                      className={`px-4 py-2 font-medium text-sm border-r border-red-200 transition cursor-pointer ${currentPage === lastPage
                        ? "bg-black text-white font-bold"
                        : "text-blue-600 hover:bg-gray-50"
                        }`}
                    >
                      {lastPage}
                    </button>
                  )}

                  {/* Next Arrow Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === lastPage}
                    className="px-3.5 py-2 text-red-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            )}
          </section>
        </div>

        {typeof ContactForm !== "undefined" && <ContactForm />}
      </div>

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