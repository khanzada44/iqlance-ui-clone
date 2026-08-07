"use client";
import { useState } from "react";
import { offices } from "../contact-us/data";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
  ArrowRight,
  Phone,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "../../contactForm/ContactForm";
import { partners, testimonials } from "../../pages/contact-us/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ContactSection() {
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const [activeTab, setActiveTab] = useState("customer");

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
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      // Form Data construct karna file upload ke liye
      const bodyData = new FormData();
      bodyData.append("name", formData.name);
      bodyData.append("email", formData.email);
      bodyData.append("phone", formData.phone);
      bodyData.append("message", formData.message);
      bodyData.append("sendNda", formData.sendNda);

      if (formData.file) {
        bodyData.append("file", formData.file);
      }

      // API Call
      await submitContactForm(bodyData);

      setStatusMessage({
        type: "success",
        text: "Thank you! Your inquiry has been submitted successfully.",
      });

      // Form reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        file: null,
        sendNda: false,
      });
    } catch (error) {
      console.error("Submission Error:", error);
      setStatusMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto max-w-full overflow-hidden">
        {/* Main Contact Section */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side Info */}
              <div>
                <h2 className="text-4xl font-bold text-[#184A8B]">
                  Contact Us
                </h2>
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

                <p className="mt-6 text-gray-600 leading-8">
                  Get in touch with us for app development, software development
                  and Hire Dedicated Developers to bring your product to Reality
                  within your timeline and budget.
                </p>

                <ul className="mt-8 space-y-5 text-lg">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} className="shrink-0" />
                    <span>45 minutes of free consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} className="shrink-0" />
                    <span>A strict non-disclosure policy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} className="shrink-0" />
                    <span>Detailed Feature List Document</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={14} className="shrink-0" />
                    <span>Action plan to kick start your project</span>
                  </li>
                </ul>

                <Link href="/portfolio" className="inline-block mt-10">
                  <button className="bg-[#EEF2F7] hover:bg-gray-200 transition px-6 py-3 rounded-md flex items-center gap-3 font-semibold">
                    See Our Work
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>

              {/* Right Side Form */}
              <div className="relative w-full">
                <div className="relative bg-[#EFF6FF] border border-blue-100/60 p-6 md:p-8 w-full shadow-lg">
                  {/* Ribbon Badge */}
                  <div className="absolute -top-6 -right-3 z-10 w-20 md:w-24 drop-shadow-md">
                    <img
                      src="/images/badge-sameday-resposnse.png"
                      alt="Same Day Response Guaranteed"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
                    Request a Free Quote
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 font-medium mb-8">
                    Guaranteed Response within One Business Day!
                  </p>

                  {/* Inputs */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
                    />

                    {/* Upload File */}
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
                      <span className="text-gray-500 truncate max-w-[180px]">
                        {formData.file ? formData.file.name : "No file chosen."}
                      </span>
                    </div>

                    {/* NDA Checkbox */}
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
                        className="w-4 h-4 border-gray-400 text-[#1E40AF] focus:ring-[#1E40AF] cursor-pointer"
                      />
                      <label
                        htmlFor="nda"
                        className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer"
                      >
                        Please Send NDA
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#1E4B82] hover:bg-[#163a66] text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer"
                      >
                        Schedule a free consultation
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Office Section Header */}
            <div className="mt-20 text-center">
              <h2 className="text-4xl font-bold">Our Office</h2>
              <p className="max-w-5xl mx-auto mt-6 text-gray-600 leading-8">
                To better serve our clients, iQlance Solutions has opened
                locations throughout the world.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 font-semibold">
                <span className="flex items-center gap-2">
                  <img src="/icons/teams.svg" alt="" className="w-5 h-5" />{" "}
                  iQlance
                </span>
                <span className="flex items-center gap-2">
                  <img src="/icons/email-icon.svg" alt="" className="w-5 h-5" />{" "}
                  info@iqlance.com
                </span>
                <span className="flex items-center gap-2">
                  <img src="/icons/calendar.svg" alt="" className="w-5 h-5" />{" "}
                  schedule meeting
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-10 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white shadow-sm hover:shadow-lg transition rounded-md p-6 md:p-10 text-center"
                >
                  {office.title && (
                    <h4 className="text-2xl font-bold mb-6">{office.title}</h4>
                  )}
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-24 h-24 mx-auto object-contain"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold mt-6">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 mt-5 leading-relaxed">
                    {office.address}
                  </p>
                  {office.phone && (
                    <div className="flex justify-center items-center gap-2 mt-8 text-xl md:text-2xl font-semibold">
                      <Phone size={24} />
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Client Testimonials
            </h2>
            <p className="mt-8 text-black text-base md:text-xl leading-relaxed max-w-5xl mx-auto">
              Innovating user-centric and results-driven solutions based on the
              demanded industry of the client makes them speak about our work.
            </p>
          </div>

          {/* Testimonials Slider Wrapper */}
          <div className="relative bg-white border border-gray-300 p-6 md:p-8 shadow-sm hover:border-[#1e40af] transition-all duration-300 mt-8">
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
                    <div className="flex items-center gap-4 mb-6">
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
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(item.review)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-normal">
                      {item.review}
                    </p>

                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 font-medium block">
                        verified
                      </span>
                      <img
                        src={item.verifiedImage}
                        alt="Google Logo"
                        className="h-7 object-contain"
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
            <div className="flex items-center gap-2 justify-end mt-6 md:absolute md:bottom-8 md:right-8 z-20">
              <button
                className="custom-prev bg-[#1B4B82] hover:bg-[#133761] text-white p-3 transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="custom-next bg-[#1B4B82] hover:bg-[#133761] text-white p-3 transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
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
