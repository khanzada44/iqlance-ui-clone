"use client";

import {
  ChevronDown,
  ChevronUp,
  Paperclip,
  ArrowRight,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ContactForm from "../../contactForm/ContactForm";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import { submitContactForm } from "../../../../services/send-call-request";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";

import {
  partners,
  industries,
  faqsData,
} from "../../../../utils/data";


// Phone: sirf digits, +, space, -, ( ) — "+" sirf shuru mein
const sanitizePhone = (value) =>
  value.replace(/[^\d+\s()-]/g, "").replace(/(?!^)\+/g, "").slice(0, 20);

// 10–15 digits zaroori
const getPhoneError = (phone) => {
  const value = (phone || "").trim();
  if (!value) return "Phone number is required";
  const cleaned = value.replace(/[\s()-]/g, "");
  if (!/^\+?\d+$/.test(cleaned)) return "Phone number can only contain digits";
  const digits = cleaned.replace(/\D/g, "");
  if (digits.length < 10) return "Phone number must be at least 10 digits";
  if (digits.length > 15) return "Phone number cannot be more than 15 digits";
  if (/^(\d)\1+$/.test(digits)) return "Enter a valid phone number";
  return "";
};

// Backend ke HTML mein agar <h1> ho to use <h2> bana do (page par sirf EK H1 rahe)
const demoteH1 = (html = "") =>
  String(html).replace(/<h1(\s|>)/gi, "<h2$1").replace(/<\/h1>/gi, "</h2>");

const cleanStyles = (html = "") =>
  String(html).replace(/\sstyle="[^"]*"/gi, "").replace(/\sstyle='[^']*'/gi, "");

/* Main content ka heading theek karo — page par sirf EK H1:
   1) Content mein pehle se <h1> hai  → pehla rakho, baaqi <h2>
   2) <h1> nahi, <h2> hai             → pehla <h2> ko <h1> bana do
   3) Dono nahi                        → hasH1 = false (phir service ka naam H1 banega) */
const withSingleH1 = (html = "") => {
  let out = String(html);
  if (/<h1[\s>]/i.test(out)) {
    let open = 0;
    let close = 0;
    out = out
      .replace(/<h1(\s|>)/gi, (m, c) => (++open === 1 ? m : "<h2" + c))
      .replace(/<\/h1>/gi, (m) => (++close === 1 ? m : "</h2>"));
    return { html: out, hasH1: true };
  }
  const h2 = /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/i;
  if (h2.test(out)) {
    out = out.replace(h2, (m, attrs = "", inner) => `<h1${attrs}>${inner}</h1>`);
    return { html: out, hasH1: true };
  }
  return { html: out, hasH1: false };
};

export default function ServicesDetails({ slug, initialService = null }) {
  const [serviceData, setServiceData] = useState(initialService);
  const [serviceLoading, setServiceLoading] = useState(!initialService);
  const [serviceError, setServiceError] = useState("");

  const [activeTab, setActiveTab] = useState("driver");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const router = useRouter();

  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: initialService?.name || initialService?.title || "",
    service_category: initialService?.category_name || initialService?.category || "",
    file: null,
    sendNda: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    const fetchService = async () => {
      // Server se data aa chuka hai to dobara fetch nahi
      if (!slug || initialService) {
        return;
      }

      try {
        setServiceLoading(true);
        setServiceError("");
        // Route file jaisa hi: res.data ho to wo, warna res
        const res = await serviceCategorieBySlug(slug);
        const data = res?.data ?? res ?? null;
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
          "Failed to load service."
        );
      } finally {
        setServiceLoading(false);
      }
    };

    fetchService();
  }, [slug, initialService]);

  const handleChange = (e) => {
    const { name } = e.target;
    const value = name === "phone" ? sanitizePhone(e.target.value) : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this specific field as the user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updated = { ...prevErrors };
        delete updated[name];
        return updated;
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

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    const phoneError = getPhoneError(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatusMessage({
      type: "",
      text: "",
    });

    try {
      const payload = new FormData();

      payload.append("name", formData.name || "");
      payload.append("email", formData.email || "");
      payload.append("phone", (formData.phone || "").replace(/[\s()-]/g, ""));
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

      setErrors({});

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

  const serviceName = serviceData?.h1 || serviceData?.name || serviceData?.title || "";
  // Kuch services mein text "description" mein hota hai, kuch mein "content" mein
  const mainHtml = serviceData?.description || serviceData?.content || "";
  const main = withSingleH1(cleanStyles(mainHtml));

  // Har service ke apne FAQs (backend se) — na hon to general faqsData
  const faqList =
    Array.isArray(serviceData?.faqs) && serviceData.faqs.length > 0
      ? serviceData.faqs.map((f) => ({ question: f.question, answer: f.answer }))
      : faqsData;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: String(f.question || ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: [String(f.answer || ""), ...(f.points || [])].join(" ").replace(/<[^>]*>/g, "").trim(),
      },
    })),
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
          <h2 className="text-2xl font-bold text-red-600">Network Error</h2>
          <p className="mt-3 text-gray-600">{serviceError}</p>
          <p className="mt-2 text-sm text-gray-400">{slug}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      {/* Content wale H1 ki styling (backend ka pehla H2 jo ab H1 hai) */}
      <style>{`
        .portfolio-dynamic-content h1,
        .svc-h1 {
          font-size: clamp(30px, 4.2vw, 52px) !important;
          line-height: 1.15 !important;
          font-weight: 800 !important;
          letter-spacing: -0.02em;
          margin: 0 0 18px !important;
          /* Laal se gehra maroon gradient (screenshot jaisa) */
          background: linear-gradient(90deg, #e10600 0%, #b00012 45%, #5c0712 100%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: #b00012 !important; /* purane browser ke liye */
          display: inline-block;
          padding-bottom: 0.06em; /* "g", "y" ke neeche wale hisse na katein */
        }
        .portfolio-dynamic-content h1 + h4,
        .portfolio-dynamic-content h1 + h2 {
          font-size: clamp(17px, 1.6vw, 22px);
          font-weight: 600;
          margin-top: 0;
        }
      `}</style>
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
            <div className="w-full lg:flex-1 lg:min-w-0 px-5">
              {/* H1 content ki pehli heading hai (jaise "Top iOS App Development Company in the USA").
                  Sirf tab service ka naam H1 banta hai jab content mein koi heading hi na ho. */}
              {!main.hasH1 && serviceName && (
                <h1 className="svc-h1">
                  {serviceName}
                </h1>
              )}
              {mainHtml && (
                <div
                  className="portfolio-dynamic-content w-full text-base leading-relaxed text-black md:text-lg"
                  dangerouslySetInnerHTML={{ __html: main.html }}
                />
              )}
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

            {/* RIGHT - FORM */}
            <div className="relative w-full shrink-0 pt-2 lg:w-105 lg:max-w-105">
              <div className="relative w-full border border-blue-100/60 bg-[#F7F8FA] p-6 shadow-lg md:p-8">
                {/* BADGE */}
                <div className="absolute -right-3 -top-6 z-10 w-24 drop-shadow-md md:w-28">
                  <img
                    src="/images/contact-form-logo.png"
                    alt="Same Day Response Guaranteed"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <h2 className="mb-1 text-xl font-extrabold text-black md:text-2xl">
                  Request a Free Quote
                </h2>

                <p className="mb-8 text-xs font-medium text-black md:text-sm">
                  Guaranteed Response within One Business Day!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="sc-name" className="sr-only">Name</label>
                    <input
                      id="sc-name"
                      autoComplete="name"
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border-b-2 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 transition-colors ${errors.name
                          ? "border-red-500 focus:border-red-600"
                          : "border-gray-300 focus:border-red-600"
                        }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="sc-email" className="sr-only">Email</label>
                    <input
                      id="sc-email"
                      autoComplete="email"
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border-b-2 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 transition-colors ${errors.email
                          ? "border-red-500 focus:border-red-600"
                          : "border-gray-300 focus:border-red-600"
                        }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="sc-phone" className="sr-only">Phone</label>
                    <input
                      id="sc-phone"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      aria-invalid={!!errors.phone}
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() =>
                        formData.phone &&
                        setErrors((prev) => ({ ...prev, phone: getPhoneError(formData.phone) }))
                      }
                      className={`w-full border-b-2 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 transition-colors ${errors.phone
                          ? "border-red-500 focus:border-red-600"
                          : "border-gray-300 focus:border-red-600"
                        }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <label htmlFor="sc-message" className="sr-only">Project details</label>
                  <textarea
                    id="sc-message"
                    name="message"
                    rows={3}
                    placeholder="Write a brief about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-y border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-red-600"
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
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full cursor-pointer items-center justify-center bg-red-600 px-6 py-3 text-xs font-bold text-white shadow transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
                    >
                      {loading ? "Sending..." : "Schedule a free consultation"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* BELOW CONTENT - FULL WIDTH */}
          {serviceData?.content_1 && (
            <div
              className="mt-10 w-full"
              dangerouslySetInnerHTML={{
                __html: demoteH1(cleanStyles(serviceData.content_1)),
              }}
            />
          )}
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center faq">
              Industries We Serve
            </h2>

            <p className="max-w-6xl mx-auto text-center text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base faq px-4">
              At DevApp Grid, we don't believe in one-size-fits-all; every industry
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
                    alt={`${item.title} app development`}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        loading="lazy"
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

        {/* FAQ SECTION */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-5">
            <h2 className="text-4xl font-bold text-center faq">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto faq">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

          <div className="mt-12 space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown size={22} />
                    </span>
                  </button>

                  {/* Smooth FAQ Content */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/<[a-z][\s\S]*>/i.test(String(faq.answer || "")) ? (
                        <div
                          className="px-5 pb-5 text-[16px] leading-8 text-black"
                          dangerouslySetInnerHTML={{ __html: demoteH1(cleanStyles(faq.answer)) }}
                        />
                      ) : (
                        <div className="px-5 pb-5 text-[16px] leading-8 text-black">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

            <div className="mt-15 text-center">
              <h2 className="text-4xl font-bold">
                Have Something in Mind? Let's Talk
              </h2>

              <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600 faq px-4">
                Explore DevApp Grid’s services and the development process we
                follow for mobile app and software projects, and see what our
                clients say about working with us. Then start a conversation
                and let’s turn your next great idea into reality together.
              </p>
            </div>
          </div>
        </section>
        <ContactForm />
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
                  loading="lazy"
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