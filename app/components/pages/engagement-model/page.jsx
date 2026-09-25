"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Paperclip } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import { comparisonData, features, tabsData } from "../engagement-model/data";
import { submitContactForm } from "../../../../services/send-call-request";
import { useRouter } from "next/navigation";
import { stats,faqsData } from "../../../../utils/data";
export default function EngagementModelSection() {
  const [open, setOpen] = useState(null);
  const [activeModelTab, setActiveModelTab] = useState("hourly");
  const router = useRouter();
  const fileInputRef = useRef(null);

  const currentTab =
    tabsData.find((tab) => tab.id === activeModelTab) || tabsData[0];

  // Form State & Event Handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "Engagement Model",
    service_category: "",
    file: null,
    sendNda: false,
  });

  const [errors, setErrors] = useState({}); 

  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
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

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
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
      payload.append("phone", formData.phone || "");
      payload.append("message", formData.message || "");
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      console.log("Submitting form...");

      const response = await submitContactForm(payload);
      router.push("/thanks-You");

      console.log("API SUCCESS:", response);

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "Engagement Model",
        service_category: "",
        file: null,
        sendNda: false,
      });

      setErrors({});

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      console.error("Message:", error?.message);
      console.error("Response:", error?.response);
      console.error("Response Data:", error?.response?.data);
      console.error("Status:", error?.response?.status);

      let errorMsg = "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors) {
        const errorData = error.response.data.errors;
        errorMsg = Object.values(errorData).flat().join(" ");
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error?.message) {
        errorMsg = error.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section className="py-2 bg-white">
          <div className="w-full px-3 sm:px-5">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 text-center lg:text-left mt-8">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                  Engagement Model
                </h3>

                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">
                  A Process You Can Trust, Results That Speak for Themselves

                </h3>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-black">
                 Devapp Grid has built its reputation on more than just great technology; it's the long-term 
                  relationships we build with clients that set us apart. Our experienced development team knows that 
                  the right engagement model isn't a small detail, it's the foundation for quality delivery, real 
                  transparency, and a project that actually succeeds.
                </p>

                <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-black">
                  As a seasoned mobile app and software development company, we offer three flexible engagement 
                  models designed to fit different project needs, budgets, and business goals because no two projects (or 
                  businesses) are exactly alike. Not sure which one fits you? Get in touch with our consultants today 
                  and find the right model for your next project.
                </p>

                <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 inline-block lg:block text-left">
                  {features?.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 shrink-0" />
                      <span className="text-base sm:text-lg md:text-xl font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10 items-center lg:items-start">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
                  >
                    Contact Us
                    <ArrowRight
                      size={22}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border border-gray-300 group inline-flex items-center gap-3 bg-gray-50 px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
                  >
                    See Our Work
                    <ArrowRight
                      size={22}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Form Container */}
              <div className="lg:col-span-5 relative pt-6 pr-4">
                <div className="relative bg-[#F7F8FA] border border-blue-100/60 p-6 md:p-8 w-full shadow-lg">
                  {/* Top Right Ribbon Badge */}
                  <div className="absolute -top-6 -right-3 z-10 w-24 md:w-28 drop-shadow-md">
                    <img
                      src="/images/contact-form-logo.png"
                      alt="Same Day Response Guaranteed"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Form Heading */}
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
                    Request a Free Quote
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 font-medium mb-8">
                    Guaranteed Response within One Business Day!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors`}
                      />
                      {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors`}
                      />
                      {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone*"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors`}
                      />
                      {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
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
                        className="text-xs md:text-sm font-semibold text-black cursor-pointer select-none"
                      >
                        Please Send NDA
                      </label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
          </div>
        </section>
          {/* Comparison & Table Section */}
        <section className="mb-2 bg-white mt-12">
          <div className="w-full px-3 sm:px-5">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
              <div>
                <Image
                  src="/images/about/engagement-model/engagement-model-lefts.webp"
                  alt="Engagement Model"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-black">
                  What's the Right Engagement Model for You?
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-gray-600">
                  As your technology partner, we offer three flexible engagement models built to
                  match different project scopes and business needs, whether you've got every detail
                  mapped out already or you're still shaping the idea.
                  Either way, our team can help you find the model that fits.
                </p>

                <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-gray-600">
                  Not sure where to start? That's exactly what we're here for.
                  Devapp Grid offers a free 20-minute consultation with an experienced expert to
                  help you nail down your product vision, development requirements, and project goals.
                  Get in touch with us today. Let's figure it out together.
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-14 overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
              <table className="w-full min-w-160 border border-gray-300 text-center">
                <thead>
                  <tr>
                    <th className="border border-red-100 bg-red-50 p-3 sm:p-6 w-40 sm:w-64">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/about/engagement-model/Dev-App-04.webp"
                          alt="Logo"
                          width={100}
                          height={35}
                          className="w-20 sm:w-30 h-auto"
                        />
                        <p className="mt-2 font-bold text-base sm:text-xl md:text-2xl">
                          Engagement Model
                        </p>
                      </div>
                    </th>

                    <th className="border border-red-100 bg-red-50 p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/about/engagement-model/emodel-hourly-icn.webp"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-11.25 h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Time and Material
                        </span>
                      </div>
                    </th>

                    <th className="border border-red-100 bg-red-50 p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/about/engagement-model/fixbg-icn-em.webp"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-11.25 h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Fixed
                        </span>
                      </div>
                    </th>

                    <th className="border border-red-100 bg-red-50 p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/about/engagement-model/dedicated-icn-em.webp"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-11.25 h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Dedicated
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData?.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-red-300 text-left px-3 sm:px-5 py-3 sm:py-4 font-medium text-sm sm:text-base">
                        {row.title}
                      </td>

                      <td className="border border-red-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.time}
                      </td>

                      <td className="border border-red-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.fixed}
                      </td>

                      <td className="border border-red-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.dedicated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto px-4 py-12 text-gray-700">
          {/* Navigation Tabs */}
          <div className="border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveModelTab(tab.id)}
                  className={`pb-3 text-sm font-semibold transition-all relative ${activeModelTab === tab.id
                      ? "text-red-700 border-b-2 border-red-600"
                      : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab.navLabel}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Layout (LEFT Text, RIGHT Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT SIDE: Text Details */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-sm text-gray-400 font-medium block">
                {currentTab.modelNum}
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentTab.title}
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                {currentTab.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How It Works
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                  {currentTab.howItWorks.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Image Container */}
            <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-auto lg:h-full min-h-75 overflow-hidden rounded-md">
              <Image
                src={currentTab.image}
                alt={currentTab.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight faq">
              Let’s Discuss Your Project With Our Technical Experts and Bring
              Your Idea to Life.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed faq">
              Send your Requirements on :
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-300 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@devappgrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
                >
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>info@devappgrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>USA :</span>
                  <a href="tel:+18669788570" className="transition-colors">
                    +1 (866) 978-8570
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Discuss
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full px-5">
            <h2 className="text-4xl font-bold text-center">
              A Development Partner Businesses Actually Trust
            </h2>
            <p className="w-full mx-auto mt-4 text-center text-1xl leading-8 text-black">
              Devapp Grid has spent years earning its reputation as a go-to name
              in custom software, web, and mobile app development, and it shows in the work.
              We build secure, scalable technology solutions shaped around what each business
              actually needs, not a generic template. Pair that with a team that knows both
              the technical side and the strategy side, and you get more than just a vendor:
              you get a partner invested in helping your digital product actually succeed.
            </p>

            <section>
              <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full sm:w-70 lg:w-35 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
                  >
                    <div className="absolute -top-8 right-0 w-15.5 h-15.5 rounded-2xl border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-11 h-11 object-contain"
                      />
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-black leading-none">
                        {item.value}
                      </h3>

                      <p className="text-sm leading-tight text-black">
                        {item.line1}
                        <br />
                        {item.line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight faq">
              Not Sure Which Engagement Model Fits Your Project? Let's Talk It Through.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-4xl mb-8 leading-relaxed faq">
              Choosing the right engagement model can make or break a project, and that's exactly where our experts come in. Devapp Grid has built its name as a trusted software, web, and mobile app development company, delivering secure, scalable, custom technology solutions for years. Our team brings together technical know-how and a structured development approach, helping businesses turn great ideas into digital products that actually succeed. Talk to us today, and let's find the model that works for you.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-300 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@devappgrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
                >
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>info@devappgrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>USA :</span>
                  <a href="tel:+18669788570" className="transition-colors">
                    +1 (866) 978-8570
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Discuss
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>
                <section className="py-20 bg-white">
                  <div className="w-full px-5">
                    <h2 className="text-4xl font-bold text-center">
                      Frequently Asked Questions
                    </h2>
        
                    <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto">
                      Have questions about working with Devapp Grid? Here are some quick answers to help you understand our 
                      development process, services, and how we can support your project. Still have questions? Reach out 
                      to our team and we’ll be happy to discuss your requirements. To understand how to choose a 
                      software development company, evaluate technical expertise, relevant portfolio work, 
                      communication, security, development process, scalability, and support.
                    </p>
        
<div className="mt-12 space-y-4">
  {faqsData.map((faq, index) => {
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
            <div className="px-5 pb-5 text-[16px] leading-8 text-gray-600">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
        
                    <div className="mt-20 text-center">
                      <h3 className="text-4xl font-bold">
                        Have Something in Mind? Let's Talk
                      </h3>
        
                      <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600">
                        Have a look at the services and development process of the
                        Devapp Grid. See what process we follow for mobile app and
                        software development. Have a look at how we are praised by our
                        clients. Start a conversation to innovate your next great idea
                        into reality with us.
                      </p>
                    </div>
                  </div>
                </section>
      </div>
    </>
  );
}