"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Paperclip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../contactForm/ContactForm";
import { getBlogs } from "@/services/blog";
import { submitContactForm } from "@/services/send-call-request"; 
import { partners } from "../blog/data";

export default function Blog() {
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

      // File ko tabhi payload me append karein jab ye valid File instance ho
      if (formData.file && formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      await submitContactForm(payload);

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // Reset Form State
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

      // Backend Error response handling
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        const blogList = data?.response?.data || [];
        setBlogs(blogList);
      } catch (error) {
        console.log("Message:", error.message);
        console.log("Code:", error.code);
        console.log("Response:", error.response);
        console.log("Request:", error.request);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <section className="py-10 bg-white mt-2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div>
                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-[#1F4E99]">Blog</span>
                  </h1>

                  <p className="mt-6 text-black leading-8 text-lg">
                    iQlance - A Reliable and Professional Mobile App & Software
                    Development Company
                  </p>
                  <p className="mt-6 text-black leading-8 text-lg">
                    iQlance offers robust software development services that
                    really make a difference to businesses and brands worldwide.
                    We are a leading mobile app development company in Canada.
                    Right from the time we started till today, we have
                    successfully completed several projects - mobile app
                    development, web development, and e-commerce development for
                    businesses from diverse industry verticals.
                  </p>
                  <p className="mt-6 text-black leading-8 text-lg">
                    With iQlance, a brand will always get something that is
                    tailored to suit their business requirements. At iQlance, we
                    understand that every business is unique and has
                    requirements different from others. Hire dedicated
                    developers from iQlance and see a visible change in your
                    business.
                  </p>

                  <ul className="mt-8 space-y-5 text-lg text-black">
                    <li className="flex items-center gap-1 mb-2 font-semibold">
                      <ChevronRight size={14} />
                      Software Development News
                    </li>
                    <li className="flex items-center gap-1 mb-2 text-black font-semibold">
                      <ChevronRight size={14} />
                      Mobile App Development News
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <button className="group w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                      Contact Us
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <button className="group w-full sm:w-auto border border-gray-300 hover:border-[#184A8B] px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
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
                    src="https://www.iqlance.com/wp-content/uploads/2025/11/badge-sameday-resposnse.png"
                    alt="Guaranteed"
                    className="absolute -top-12 right-6 w-28 z-10"
                  />

                  <div className="bg-[#EEF5FF] border border-[#BFD3F6] rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-3xl font-bold">Request a Free Quote</h2>
                    <p className="mt-3 text-lg mb-6">
                      Guaranteed Response within One Business Day!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {statusMessage.text && (
                        <div
                          className={`p-3 text-sm rounded ${
                            statusMessage.type === "success"
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
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                        />
                      </div>

                      <div>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Write here Brief about the project..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
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
                          className="w-4 h-4 border-gray-400 text-[#1E40AF] focus:ring-[#1E40AF] accent-gray-600 cursor-pointer"
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
                          className="bg-[#1E4B82] hover:bg-[#163a66] text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-50"
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
                Have a software and mobile app development project in mind? Here
                are some of the blogs that will offer valuable insights when you
                are planning to hire a software and mobile app development
                company for your dream project.
              </p>
            </div>
          </section>

          {/* Dynamic Blogs Rendering */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div
                  key={`${blog.slug}-${index}`}
                  className="p-px bg-transparent hover:bg-linear-to-r hover:from-blue-300 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Link
                    href={`/single-blog?slug=${blog.slug}`}
                    className="group block overflow-hidden bg-white h-full"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      {blog.image_url ? (
                        <Image
                          src={blog.image_url}
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
                        <span className="text-sm text-[#1F4E99] font-medium">
                          {blog.category.name}
                        </span>
                      )}

                      <h3 className="mt-3 text-xl font-semibold leading-7 text-black line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No blogs available.
              </div>
            )}
          </section>
        </div>
        <ContactForm />
      </div>

      {/* Partners Marquee */}
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
    </>
  );
}