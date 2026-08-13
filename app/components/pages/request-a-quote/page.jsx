"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { offices } from "../contact-us/data";
import ContactForm from "../../contactForm/ContactForm";
import {
  partners
} from "../../../../utils/data";
import { submitContactForm } from "@/services/send-call-request";

export default function ContactSection() {
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const [activeTab, setActiveTab] = useState("customer");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    sendNda: false,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  // API Integration Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    // 1. Plain JavaScript Object ki jagah FormData banayein
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("message", formData.message);
    payload.append("sendNda", String(formData.sendNda));

    // File binary append karein
    if (formData.file) {
      payload.append("file", formData.file);
    }

    try {
      // 2. Dynamic FormData Pass karein
      const result = await submitContactForm(payload);

      setSuccessMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        sendNda: false,
        file: null,
      });
    } catch (error) {
      const backendMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to submit form.";
      setErrorMessage(backendMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto max-w-full overflow-hidden">
        {/* Main Form & Content Grid */}
        <section className="py-6 bg-white w-full">
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
              {/* Left Side Info */}
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mt-10">
                  Request a Quote
                </h1>
                <p className="mt-6 text-gray-700">
                  Share Your Project Details on{" "}
                  <span className="font-semibold">info@iqlance.com</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg">Talk To Experts:</h3>
                  <p className="mt-2 text-gray-700">
                    USA: +1 (469) 793-9837 &nbsp;&nbsp; Canada: +1 (647)
                    637-9108
                  </p>
                </div>
                <p className="mt-6 text-black leading-8">
                  Get in touch with us for app development, software development
                  and Hire Dedicated Developers to bring your product into life
                  within your timeline and budget. Let’s work as a team to build
                  a great product.
                </p>

                <ul className="mt-8 space-y-5 text-lg">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>45 minutes of free consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>A strict non-disclosure policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>Detailed Feature List Document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>Action plan to kick start your project</span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-white text-gray-800 border border-[#F7F8FA] hover:border-gray-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                  >
                    See Our Work <ArrowRight className="w-4 h-4 text-gray-600" />
                  </Link>
                </div>
              </div>



              {/* Right Side Form Container */}
              <div className="w-full relative pt-6 pr-2 sm:pr-4">
                <div className="relative bg-[#F7F8FA] border border-blue-100/60 p-6 md:p-8 w-full shadow-lg">
                  {/* Top Right Ribbon Badge */}
                  <div className="absolute -top-6 -right-2 sm:-right-3 z-10 w-20 md:w-24 drop-shadow-md">
                    <img
                      src="/images/contact-form-logo.png"
                      alt="Same Day Response Guaranteed"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
                    Got a Project in Mind?
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 font-medium mb-8">
                    We Guarantee To Get Back To You Within A Business Day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    {/* Error Message Display */}
                    {errorMessage && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    {/* Success Message Display */}
                    {successMessage && (
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 text-green-700 text-sm">
                        {successMessage}
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
                      <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-gray-900 shrink-0">
                        <Paperclip className="w-4 h-4 text-gray-600" />
                        <span>Upload file:</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <span className="text-gray-500 truncate max-w-37.5 sm:max-w-50">
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
                        className="w-4 h-4 border-gray-400 text-[#1E40AF] focus:ring-red-600 accent-gray-600 cursor-pointer"
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
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer"
                      >
                        {isSubmitting ? "Submitting..." : "Schedule a free consultation"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Office Heading */}
            <div className="mt-20 text-center w-full">
              <h2 className="text-4xl font-bold">Our Office</h2>

              <p className="max-w-5xl mx-auto mt-6 text-gray-600 leading-8">
                To better serve our clients, iQlance Solutions has established a
                global presence, delivering innovative web, mobile, and software
                development services with local expertise and worldwide reach.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 font-semibold">
                <span className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/teams.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/teams.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  iQlance
                </span>

                <span className="flex items-center gap-2">
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
                  info@iqlance.com
                </span>

                <span className="flex items-center gap-2">
                   <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/calendar.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/calendar.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  schedule meeting
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Office Cards Section */}
        <section className="py-10 bg-red-50 w-full">
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white shadow-sm hover:shadow-lg transition rounded-md p-6 sm:p-10 text-center w-full"
                >
                  {office.title && (
                    <h4 className="text-2xl font-bold mb-6">{office.title}</h4>
                  )}

                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-24 h-24 mx-auto object-contain"
                  />

                  <h3 className="text-3xl sm:text-4xl font-bold mt-6">
                    {office.city}
                  </h3>

                  <p className="text-gray-600 mt-5 leading-8">
                    {office.address}
                  </p>

                  {office.phone && (
                    <div className="flex justify-center items-center gap-2 mt-8 text-xl sm:text-2xl font-semibold">
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
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="py-10 bg-white w-full">
          <div className="w-full px-2 sm:px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Client Testimonials
            </h2>

            <p className="mt-8 text-gray-700 text-base md:text-xl leading-8 md:leading-10 max-w-5xl mx-auto">
              Innovating user centric and results driven solutions based on the
              demanded industry of the client makes them speak about our work.
              Let’s see what they think about our development method.
            </p>
          </div>
        </section>

        <div className="mb-2.5 pb-2 w-full">
          <ContactForm />
        </div>
      </div>
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
