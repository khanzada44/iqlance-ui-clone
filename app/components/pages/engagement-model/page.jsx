"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Paperclip } from "lucide-react";
import { comparisonData, features, tabsData } from "../engagement-model/data";
import { stats } from "../../../../utils/data";
import { submitContactForm } from "../../../../services/send-call-request";

export default function EngagementModelSection() {
  const [activeModelTab, setActiveModelTab] = useState("hourly");
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

  const [errors, setErrors] = useState({}); // <-- Added missing state hook

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
      console.error("========== FORM ERROR ==========");
      console.error("Error:", error);
      console.error("Message:", error?.message);
      console.error("Response:", error?.response);
      console.error("Response Data:", error?.response?.data);
      console.error("Status:", error?.response?.status);
      console.error("================================");

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
                  Devapp Solutions has built its reputation on more than just great technology;
                  it's the long-term relationships we build with clients that set us apart. Our experienced
                  development team knows that the right engagement model isn't a small detail, it's
                  the foundation for quality delivery, real transparency, and a project that actually succeeds.
                </p>

                <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-black">
                  As a seasoned mobile app and software development company, we offer three flexible
                  engagement models designed to fit different project needs, budgets, and business goals
                  because no two projects (or businesses) are exactly alike. Not sure which one fits you?
                  Get in touch with our consultants today and find the right model for your next project.
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

                    {statusMessage.text && (
                      <div
                        className={`p-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                          statusMessage.type === "success"
                            ? "bg-green-100 border border-green-400 text-green-800"
                            : "bg-red-100 border border-red-400 text-red-800"
                        }`}
                      >
                        {statusMessage.text}
                      </div>
                    )}

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
      </div>
    </>
  );
}