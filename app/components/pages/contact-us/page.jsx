"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Paperclip,
  Star,
  ArrowLeft
} from "lucide-react";

import { submitContactForm } from "@/services/send-call-request";
import { offices, testimonials } from "../contact-us/data"
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { stats, partners, faqsData } from "../../../../utils/data";
export default function ContactSection() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");
    console.log("FORM DATA:", formData);

    setLoading(true);

    setStatusMessage({
      type: "",
      text: "",
    });

    try {
      // --------------------------------
      // CREATE FORMDATA
      // --------------------------------

      const payload = new FormData();

      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());

      payload.append(
        "is_nda",
        formData.sendNda ? "1" : "0"
      );

      payload.append(
        "service",
        formData.service || ""
      );

      payload.append(
        "service_category",
        formData.service_category || ""
      );

      // --------------------------------
      // FILE
      // --------------------------------

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      // --------------------------------
      // DEBUG PAYLOAD
      // --------------------------------

      console.log("FORM PAYLOAD:");

      for (const [key, value] of payload.entries()) {
        console.log(key, value);
      }

      // --------------------------------
      // API CALL
      // --------------------------------

      const response = await submitContactForm(payload);

      console.log("API SUCCESS:", response);

      // --------------------------------
      // SUCCESS MESSAGE
      // --------------------------------

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // --------------------------------
      // RESET FORM
      // --------------------------------

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

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("API ERROR:", error);
      console.error(
        "API RESPONSE:",
        error?.response?.data
      );

      let errorMessage =
        "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors?.file) {
        errorMessage =
          error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMessage =
          error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">

          {/* Left Column: Info & Perks */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-950 bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg">
              Share Your Project Details on{" "}
              <span className="font-semibold break-all">
                info@DevAppGrid.com
              </span>
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-lg">
                Talk To Experts:
              </h3>

              <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                USA: +1 (469) 793-9837
                <br />
                Canada: +1 (647) 637-9108
              </p>
            </div>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Get in touch with us for app development, software development and Hire Dedicated
              Developers to bring your product to reality within your timeline and budget.
            </p>

            <ul className="mt-8 space-y-4 sm:space-y-5 text-base sm:text-lg">
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="shrink-0 text-red-600" />
                <span>45 minutes of free consultation</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="shrink-0 text-red-600" />
                <span>A strict non-disclosure policy</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="shrink-0 text-red-600" />
                <span>Detailed Feature List Document</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="shrink-0 text-red-600" />
                <span>Action plan to kick start your project</span>
              </li>
            </ul>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-3 border border-red-300 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-black transition mt-8 sm:mt-10 hover:border-red-600 rounded-sm"
            >
              See Our Work
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Right Column: Request a Free Quote Form */}
          <div className="relative w-full pt-4 sm:pt-0">
            <div className="relative bg-[#F7F8FA] border border-blue-100/60 p-6 sm:p-8 w-full lg:w-[95%] xl:w-[90%] shadow-lg rounded-md">

              {/* Ribbon / Badge (Responsive positioning for mobile & desktop) */}
              <div className="absolute -top-5 right-2 sm:-top-6 sm:-right-3 z-10 w-20 sm:w-24 drop-shadow-md">
                <img
                  src="/images/contact-form-logo.png"
                  alt="Same Day Response Guaranteed"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Form Heading */}
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1 pr-16 sm:pr-0">
                Request a Free Quote
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 font-medium mb-6 sm:mb-8">
                Guaranteed Response within One Business Day!
              </p>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50"
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Write here Brief about the project..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 resize-y transition-colors disabled:opacity-50"
                />

                {/* File Upload & NDA Checkbox */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm text-gray-700 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-gray-900 shrink-0">
                    <Paperclip className="w-4 h-4 text-gray-600" />
                    <span>Upload file:</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      disabled={loading}
                      className="hidden"
                    />
                  </label>

                  <span className="text-gray-500 truncate max-w-full sm:max-w-45">
                    {formData.file ? formData.file.name : "No file chosen."}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.sendNda}
                    disabled={loading}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        sendNda: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 border-gray-400 text-red-600 focus:ring-red-600 cursor-pointer rounded-xs"
                  />
                  <label htmlFor="nda" className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer">
                    Please Send NDA
                  </label>
                </div>

                {/* Status Message */}
                {statusMessage.text && (
                  <div
                    className={`p-3 text-sm font-medium border rounded-sm ${statusMessage.type === "success"
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-red-50 border-red-200 text-red-700"
                      }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-700 hover:bg-red-600 disabled:bg-red-400 font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed rounded-sm text-white!"
                >
                  {loading ? (
                    <span className="text-white font-bold">Sending...</span>
                  ) : (
                    <span className="text-white font-bold flex items-center gap-2">
                      Schedule a free consultation
                      <ArrowRight className="w-4 h-4 shrink-0 text-white" />
                    </span>
                  )}
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <section className="py-10 mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white shadow-sm hover:shadow-lg transition rounded-lg p-6 md:p-8 text-center h-full flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    {office.title && (
                      <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                        {office.title}
                      </h4>
                    )}
                    <img
                      src={office.image}
                      alt={office.city}
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
                    />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6 text-gray-900">
                      {office.city}
                    </h3>
                    <p className="text-gray-600 mt-2 sm:mt-3 text-sm md:text-base leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  {office.phone && (
                    <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 shrink-0"
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

        {/* Testimonials Section */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto text-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
              Client Testimonials
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed max-w-4xl mx-auto">
              Innovating user-centric and results-driven solutions based on the
              demanded industry of the client makes them speak about our work.
            </p>
          </div>

          {/* Testimonials Slider Wrapper */}
          <div className="relative bg-white border border-red-300 p-6 sm:p-8 md:p-10 shadow-sm hover:border-red-600 transition-all duration-300 mt-8 rounded-lg">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="pr-0 md:pr-24">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 rounded-full border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            e.target.src =
                              "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(item.review)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-4xl font-normal">
                      {item.review}
                    </p>

                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 font-medium block">
                        verified
                      </span>
                      <img
                        src={item.verifiedImage}
                        alt="Google Logo"
                        className="h-6 sm:h-7 object-contain"
                        onError={(e) => {
                          e.target.src =
                            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 justify-end mt-6 md:absolute md:bottom-8 md:right-8 z-25">
              <button
                className="custom-prev bg-red-700 hover:bg-red-600 text-white p-2.5 sm:p-3 transition-colors duration-200 focus:outline-none cursor-pointer rounded-sm"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                className="custom-next bg-red-700 hover:bg-red-600 text-white p-2.5 sm:p-3 transition-colors duration-200 focus:outline-none cursor-pointer rounded-sm"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </section>
      </section>


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
