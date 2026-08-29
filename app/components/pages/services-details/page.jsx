"use client";

import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";

import { useState, useCallback, useRef, useEffect } from "react";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import ContactForm from "../../contactForm/ContactForm";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { submitContactForm } from "../../../../services/send-call-request";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";

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

import Image from "next/image";

export default function ServicesCategory({ slug }) {
  const [serviceData, setServiceData] = useState(null);

  const [serviceLoading, setServiceLoading] = useState(true);

  const [serviceError, setServiceError] = useState("");

  const [activeTab, setActiveTab] = useState("driver");

  const [activetechnologies, setActivetechnologies] = useState(0);

  const [open, setOpen] = useState(-1);

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const [blogs, setBlogs] = useState([]);

  const fileInputRef = useRef(null);
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

  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) {
        console.log("Slug not found");
        return;
      }

      try {
        setServiceLoading(true);
        setServiceError("");

        console.log("URL Slug:", slug);

        const data = await serviceCategorieBySlug(slug);

        console.log("Service API Response:", data);

        setServiceData(data);

        /* Set API service values into form */

        setFormData((prev) => ({
          ...prev,
          service: data?.name || data?.title || "",
          service_category: data?.category_name || data?.category || "",
        }));
      } catch (error) {
        console.error("Service API Error:", error);

        console.error("API Response:", error?.response?.data);

        setServiceError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load service.",
        );
      } finally {
        setServiceLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatusMessage({
      type: "",
      text: "",
    });

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
        service: serviceData?.name || serviceData?.title || "",
        service_category:
          serviceData?.category_name || serviceData?.category || "",
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

  if (serviceLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Content & Stats Skeleton */}
          <div className="lg:col-span-7 space-y-6 animate-pulse">
            {/* Main Title Skeleton */}
            <div className="h-10 bg-gray-200 rounded-md w-3/4"></div>

            {/* Subtitle / Description Lines */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Large Content Box / Image placeholder */}
            <div className="h-64 bg-gray-200 rounded-xl w-full mt-6"></div>

            {/* Stats / Bullet points skeleton */}
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/5"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>

          {/* Right Side: Request a Quote Form Skeleton */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm animate-pulse space-y-4">
            {/* Form Title */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Input fields skeletons */}
            <div className="space-y-4 pt-2">
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-24 bg-gray-200 rounded-lg w-full"></div>
            </div>

            {/* File upload & checkbox placeholder */}
            <div className="space-y-3 pt-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>

            {/* Submit Button Skeleton */}
            <div className="h-12 bg-gray-300 rounded-lg w-full mt-4"></div>
          </div>
        </div>
      </div>
    );
  }
  if (serviceError && !serviceData) {
    return (
      <div className="flex min-h-125 items-center justify-center px-5">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">
            Network Error
          </h2>

          <p className="mt-3 text-gray-600">{serviceError}</p>

          <p className="mt-2 text-sm text-gray-400">{slug}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto w-full">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              {/* API DESCRIPTION */}

              {/* DESCRIPTION */}
              {serviceData?.description && (
                <div
                  className="text-base leading-relaxed text-black md:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.description,
                  }}
                />
              )}

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-red-600"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition duration-200 hover:border-gray-400"
                >
                  See Our Work
                  <ArrowRight className="h-4 w-4 text-black" />
                </Link>
              </div>

              {/* FEATURES LIST */}
              {serviceData?.content_1 && (
                <div
                  className="text-base leading-relaxed text-black md:text-lg mt-8"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.content_1,
                  }}
                />
              )}

              {/* FALLBACK DESCRIPTION */}

              {!serviceData?.description && (
                <>
                  <p className="text-base leading-relaxed text-black md:text-lg">
                    Many conventional retailers have moved to digitalization
                    with the introduction of on-demand options. Technology
                    advancements, particularly mobile evolution, have
                    dramatically changed the eatery and café sector.
                  </p>

                  <p className="text-base leading-relaxed text-black md:text-lg">
                    Technology solutions help businesses grow their brand,
                    manage customers, and improve their overall digital
                    experience.
                  </p>
                </>
              )}
            </div>

            <div className="relative pt-6 pr-4 lg:col-span-5">
              <div className="relative w-full border border-blue-100/60 bg-[#F7F8FA] p-6 shadow-lg md:p-8">
                {/* BADGE */}

                <div className="absolute -right-3 -top-6 z-10 w-24 drop-shadow-md md:w-28">
                  <img
                    src="/images/contact-form-logo.png"
                    alt="Contact Form"
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* FORM HEADING */}

                <h2 className="mb-1 text-xl font-extrabold text-black md:text-2xl">
                  Request a Free Quote
                </h2>

                <p className="mb-8 text-xs font-medium text-black md:text-sm">
                  Guaranteed Response within One Business Day!
                </p>

                {/* STATUS */}

                {statusMessage.text && (
                  <p
                    className={`mb-4 text-center text-xs font-semibold ${
                      statusMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {statusMessage.text}
                  </p>
                )}

                {/* FORM */}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}

                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-red-600"
                  />

                  {/* EMAIL */}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-red-600"
                  />

                  {/* PHONE */}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-red-600"
                  />

                  {/* MESSAGE */}

                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Write here Brief about the project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-y border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-red-600"
                  />

                  {/* FILE */}

                  <div className="flex items-center gap-2 pt-1 text-xs text-black md:text-sm">
                    <label className="flex cursor-pointer items-center gap-1.5 font-medium">
                      <Paperclip className="h-4 w-4 text-black" />

                      <span>Upload file:</span>

                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    <span className="max-w-45 truncate text-gray-500">
                      {formData.file ? formData.file.name : "No file chosen."}
                    </span>
                  </div>

                  {/* NDA */}

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
                      className="h-4 w-4 cursor-pointer border-gray-400 accent-gray-600"
                    />

                    <label
                      htmlFor="nda"
                      className="cursor-pointer select-none text-xs font-semibold text-black md:text-sm"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  {/* SUBMIT */}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex cursor-pointer items-center justify-center bg-red-600 px-6 py-3 text-xs font-bold text-white shadow transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Schedule a free consultation"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              Industries We Serve
            </h2>

            <p className="max-w-6xl mx-auto text-center text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
              At Devapp, we don't believe in one-size-fits-all every industry
              has its own challenges, and our solutions are built to match.
              Backed by deep, hands-on experience across sectors, we deliver
              high-quality web applications, mobile apps, and custom software
              built around what your industry actually needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8 sm:mt-12">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="relative h-40 sm:h-56 md:h-72 overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 text-white font-bold text-sm sm:text-lg md:text-xl text-center w-full px-2">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

          <section className="py-20 bg-white">
            <div className="w-full px-0 sm:px-5">
            <h2 className="text-4xl font-bold text-center">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

            <div className="mt-12 space-y-4 px-0 sm:px-0">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex justify-between items-center px-5 py-5 text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    {open === index ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-[16px] leading-8 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-4xl font-bold">
                Have Something in Mind? Let's Talk
              </h3>

              <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600">
                Have a look at the services and development process of the
                Devapp solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>
        </section>

        <div className="mb-2.5 pb-2">
          <ContactForm />
        </div>
      </div>
      <section className="mb-5 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...partners, ...partners].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex h-17.5 w-35 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white p-3 shadow-sm sm:h-20 sm:w-42.5 md:h-23.75 md:w-55"
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
