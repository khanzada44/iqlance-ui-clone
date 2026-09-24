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
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import ContactForm from "../../contactForm/ContactForm";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { submitContactForm } from "../../../../services/send-call-request";
import { serviceCategorieSlug } from "../../../../services/all-sub-categories";

import { partners } from "../../../../utils/data";

import Image from "next/image";

export default function ServicesCategory({ slug }) {
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [serviceData, setServiceData] = useState(null);

  const [serviceLoading, setServiceLoading] = useState(true);

  const [serviceError, setServiceError] = useState("");

  const [activeTab, setActiveTab] = useState("driver");

  const [activetechnologies, setActivetechnologies] = useState(0);

  const [open, setOpen] = useState(-1);

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const [blogs, setBlogs] = useState([]);

  const fileInputRef = useRef(null);

  // Fixed: Added firstName and lastName to state initialization
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
        return;
      }

      try {
        setServiceLoading(true);
        setServiceError("");
        const data = await serviceCategorieSlug(slug);
        const service = data?.[0] || null;

        setServiceData(service);

        setFormData((prev) => ({
          ...prev,
          service: service?.name || service?.title || "",
          service_category:
            service?.category_name || service?.category || "",
        }));
      } catch (error) {
        console.error("Service API Error:", error);
        console.error("API Response:", error?.response?.data);

        setServiceError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load service."
        );
      } finally {
        setServiceLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  // Updated: Input change hote hi related error remove ho jayega
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files[0],
      }));
    }
  };

const validateForm = () => {
  const newErrors = {};
  if (!formData.firstName || !formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }
  if (!formData.lastName || !formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }
  if (!formData.email || !formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }
  if (!formData.phone || !formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  }

  return newErrors;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate Form before making API call
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = new FormData();

      // Combine First and Last name for backend "name" field
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      payload.append("name", fullName);

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
      router.push("/thanks-You");

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // Reset Form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        service: serviceData?.name || serviceData?.title || "",
        service_category:
          serviceData?.category_name || serviceData?.category || "",
        file: null,
        sendNda: false,
      });

      setErrors({});

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      // Improved Error Logging
      console.error("API Error Full:", error);
      console.error("API Error Response Data:", error?.response?.data);

      let errorMsg = "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors) {
        // Backend validation errors (e.g. file, email, name)
        const firstErrorKey = Object.keys(error.response.data.errors)[0];
        errorMsg = error.response.data.errors[firstErrorKey][0];
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error?.message) {
        errorMsg = error.message; // Network or CORS error message
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
            <div className="h-10 bg-gray-200 rounded-md w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded-xl w-full mt-6"></div>
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/5"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>

          {/* Right Side: Request a Quote Form Skeleton */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm animate-pulse space-y-4">
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="space-y-4 pt-2">
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-11 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-24 bg-gray-200 rounded-lg w-full"></div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
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
      <div className="mx-auto w-full">
        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ================= LEFT CONTENT ================= */}
            <div className="min-w-0 lg:col-span-7">
              {/* CATEGORY DESCRIPTION */}
              {serviceData?.description ? (
                <div
                  className="mt-6 text-base leading-7 text-black md:text-lg md:leading-8"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.description,
                  }}
                />
              ) : (
                <p className="mt-6 text-base leading-7 text-black md:text-lg md:leading-8">
                  Many conventional retailers have moved to digitalization
                  with the introduction of on-demand options. Technology
                  advancements, particularly mobile evolution, have
                  dramatically changed the eatery and café sector.
                </p>
              )}
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative w-full border border-blue-100/60 bg-[#F7F8FA] p-6 shadow-lg md:p-8">
                {/* FORM BADGE */}
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300 focus:border-red-600"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-600 font-semibold mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-gray-300 focus:border-red-600"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-600 font-semibold mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-red-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 font-semibold mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone || ""}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-300 focus:border-red-600"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 font-semibold mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      value={formData.message || ""}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-black pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-black">
                      <Paperclip className="w-4 h-4 text-black" />
                      <span>Upload file:</span>
                      <input
                        ref={fileInputRef}
                        type="file"
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
                      checked={formData.sendNda || false}
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
                      className="text-xs md:text-sm font-semibold text-black cursor-pointer select-none"
                    >
                      Please Send NDA
                    </label>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
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
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
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

        <section className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
          <div className="w-full">
            {serviceData?.content ? (
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: serviceData.content
                    .replace(/\sstyle="[^"]*"/gi, "")
                    .replace(/\sstyle='[^']*'/gi, ""),
                }}
              />
            ) : (
              <p className="text-base leading-7 text-black md:text-lg md:leading-8">
                Many conventional retailers have moved to digitalization
                with the introduction of on-demand options. Technology
                advancements, particularly mobile evolution, have
                dramatically changed the eatery and café sector.
              </p>
            )}
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