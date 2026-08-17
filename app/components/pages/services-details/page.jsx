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
      <div className="flex min-h-125 items-center justify-center">
        <div className="flex items-center gap-3">
          <svg
            className="h-6 w-6 animate-spin text-red-600"
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

          <span className="text-sm font-medium text-gray-600">
            Loading service...
          </span>
        </div>
      </div>
    );
  }
  if (serviceError && !serviceData) {
    return (
      <div className="flex min-h-125 items-center justify-center px-5">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">
            Unable to load service
          </h2>

          <p className="mt-3 text-gray-600">{serviceError}</p>

          <p className="mt-2 text-sm text-gray-400">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto w-full max-w-[80%]">

        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <h1 className="text-3xl font-bold leading-tight text-red-600 md:text-5xl">
                {serviceData?.name || serviceData?.title || "Services Details"}
              </h1>

              {/* URL SLUG */}

              <p className="text-sm text-gray-400">Slug: {slug}</p>

              {/* API DESCRIPTION */}

              {serviceData?.description && (
                <div
                  className="text-base leading-relaxed text-black md:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.description,
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
            {serviceData?.image && typeof serviceData.image === 'string' && serviceData.image.trim() !== '' && (
              <div className="relative mt-6 h-75 w-full overflow-hidden rounded-lg">
                <Image
                    src={`/${serviceData.image}`}
                    alt={serviceData?.name || "Service"}
                    fill
                    className="object-cover"
                  />
              </div>
            )}

              {/* FEATURES */}

              {Array.isArray(serviceData?.features) && (
                <ul className="mt-8 space-y-5 text-lg">
                  {serviceData.features.map((item, index) => (
                    <li key={index} className="mb-2 flex items-center gap-1">
                      <ChevronRight size={14} />

                      {typeof item === "string"
                        ? item
                        : item?.name || item?.title || ""}
                    </li>
                  ))}
                </ul>
              )}

              {/* DEFAULT FEATURES */}

              {!Array.isArray(serviceData?.features) && (
                <ul className="mt-8 space-y-5 text-lg">
                  <li className="mb-2 flex items-center gap-1">
                    <ChevronRight size={14} />
                    Best Delivery App Development
                  </li>

                  <li className="mb-2 flex items-center gap-1">
                    <ChevronRight size={14} />
                    Mobile App Solution for Food Stores
                  </li>
                </ul>
              )}

              {/* ACTION BUTTONS */}

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
