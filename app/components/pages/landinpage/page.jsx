"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  Paperclip,
  Star,
  Building2,
  Calendar,
} from "lucide-react";
import { testimonials, faqsData } from "../landinpage/data";
import {
  partners,
  slides,
  stats,
  industries,
  services,
} from "../../../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { submitContactForm } from "../../../../services/send-call-request";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getBlogs } from "@/services/blog";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("driver");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);

  const fileInputRef = useRef(null);

  // =========================
  // FORM STATE
  // =========================
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

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================
  // HANDLE FILE
  // =========================
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files[0],
      }));
    }
  };

  // =========================
  // SUBMIT FORM
  // =========================
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

      // SUCCESS
      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // RESET FORM
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

      // RESET FILE INPUT
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

  // =========================
  // AUTO HIDE MESSAGE
  // =========================
  useEffect(() => {
    if (statusMessage.text) {
      const timer = setTimeout(() => {
        setStatusMessage({
          type: "",
          text: "",
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage.text]);

  return (
    <>
      <main className="w-full bg-white">
        <header className="w-full border-t border-gray-800 bg-white">
          <div className=" mx-auto flex h-18 w-[94%] items-center justify-between sm:w-[92%] lg:w-[90%] xl:w-[88%]">
            {/* LOGO */}
            <div className="flex items-center">
              <img
                src="/images/Dev-App-04.png"
                alt="Dev App Grid"
                className="h-10.5 w-auto object-contain sm:h-11.5 lg:h-12"
              />
            </div>

            {/* RIGHT HEADER */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
              {/* PHONE */}
              <div className="flex items-center gap-2">
                <div
                  className="
                  flex h-7.5 w-7.5
                  shrink-0 items-center justify-center
                  rounded-full bg-red-100
                "
                >
                  <Phone size={15} className="text-red-500" />
                </div>

                <div className="hidden leading-tight sm:block">
                  <p className="text-[12px] font-semibold text-gray-800 lg:text-[13px]">
                    +1 (844) 673 6849
                  </p>

                  <p className="text-[9px] font-medium text-red-500 lg:text-[10px]">
                    Call Us Today!
                  </p>
                </div>
              </div>

              <Link
                href="/request-a-quote"
                className="group flex h-9 items-center gap-2 rounded-sm bg-red-600 px-4 text-[10px] font-semibold text-white transition hover:bg-red-700 sm:px-5 sm:text-[11px] lg:h-9.5 lg:px-6 lg:text-[12px]"
              >
                <span className="hidden sm:inline">Get A Free Quote</span>
                <span className="sm:hidden">Quote</span>

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden bg-linear-to-r from-[#ed0505] via-[#a60000] to-[#080000]">
          <div className="mx-auto flex w-[94%] flex-col items-center gap-12 py-10 sm:w-[92%] sm:py-12 lg:min-h-125 lg:w-[90%] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-12 xl:w-[88%]">
            <div className="w-full text-white sm:w-[90%] lg:w-[52%] xl:w-[54%]">
              {/* SMALL TITLE */}
              <p className="mb-4 text-[12px] font-medium sm:text-[13px] lg:text-[14px]">
                Let&apos;s bring your idea into reality
              </p>

              {/* MAIN TITLE */}
              <h1 className="mb-4 text-[30px] font-bold leading-tight sm:text-[34px] lg:text-[38px]">
                Request a Quote
              </h1>

              {/* EMAIL */}
              <p className="text-[12px] leading-[1.7] sm:text-[13px] lg:text-[14px]">
                Share Your Project Details on{" "}
                <span className="font-bold">info@Dev App Grid.com</span>
              </p>

              {/* PHONE */}
              <p className="mb-5 text-[12px] font-semibold leading-[1.7] sm:text-[13px] lg:text-[14px]">
                Talk To Experts:
                <br />
                USA: +1 (469) 793-9837
              </p>

              {/* DESCRIPTION */}
              <p className="max-w-140 text-[12px] leading-[1.8] sm:text-[13px] lg:text-[14px]">
                Get in touch with us for app development, software development
                and Hire Dedicated Developers to bring your product into life
                within your timeline and budget. Let&apos;s work as a team to
                build a great product.
              </p>

              {/* BENEFITS */}
              <ul className="mt-5 space-y-3 text-[12px] leading-6 sm:text-[13px] lg:text-[13px]">
                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>45 minutes of free consultation</span>
                </li>

                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>A strict non-disclosure policy</span>
                </li>

                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>Detailed Feature List Document</span>
                </li>

                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>Action plan to kick start your project</span>
                </li>
              </ul>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="group flex h-9 items-center gap-2 rounded-[3px] bg-white px-5 text-[10px] font-semibold text-black transition hover:bg-gray-100 sm:h-9.5 sm:px-6 sm:text-[11px]"
                >
                  Contact Us
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

               <Link
                href="/portfolio"
                className="group flex h-9 items-center gap-2 rounded-[3px] bg-white px-5 text-[10px] font-semibold text-black transition hover:bg-gray-100 sm:h-9.5 sm:px-6 sm:text-[11px]"
              >
                See Our Work

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="relative w-full max-w-107.5 sm:w-[80%] lg:w-[42%] lg:max-w-100 xl:w-[40%] xl:max-w-105">
              {/* BADGE */}
              <div className="absolute -right-1 -top-8 z-10 sm:-right-2 sm:-top-9">
                <img
                  src="/images/Group-46.png"
                  alt="Same Day Response"
                  className="h-16 w-auto object-contain sm:h-18 lg:h-19.5"
                />
              </div>

              {/* FORM BOX */}
              <div className="rounded-[9px] bg-[#fff0f1] px-6 py-6 shadow-xl sm:px-7 sm:py-7">
                {/* FORM TITLE */}
                <h2 className="text-[19px] font-bold text-black sm:text-[20px] lg:text-[21px]">
                  Got a Project in Mind?
                </h2>

                {/* FORM DESCRIPTION */}
                <p className="mt-1 text-[10px] text-gray-600 sm:text-[11px]">
                  We Guarantee To Get Back To You Within A Business Day.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {/* NAME */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name *"
                      required
                      className="h-9 w-full border-b border-gray-500 bg-transparent text-[11px] text-gray-800 outline-none placeholder:text-gray-500 focus:border-red-500 sm:h-9.5 sm:text-[12px]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="h-9 w-full border-b border-gray-500 bg-transparent text-[11px] text-gray-800 outline-none placeholder:text-gray-500 focus:border-red-500 sm:h-9.5 sm:text-[12px]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone *"
                      required
                      className="h-9 w-full border-b border-gray-500 bg-transparent text-[11px] text-gray-800 outline-none placeholder:text-gray-500 focus:border-red-500 sm:h-9.5 sm:text-[12px]"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write here Brief about the project..."
                      rows={3}
                      className="w-full resize-none border-b border-gray-500 bg-transparent pt-2 text-[11px] text-gray-800 outline-none placeholder:text-gray-500 focus:border-red-500 sm:text-[12px]"
                    />
                  </div>

                  {/* UPLOAD */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-700 sm:text-[11px]">
                    <label className="flex cursor-pointer items-center gap-1 font-medium">
                      <Paperclip size={13} />

                      <span>Upload file:</span>

                      <input
                        ref={fileInputRef}
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    <span className="max-w-45 truncate">
                      {formData.file ? formData.file.name : "No file chosen."}
                    </span>
                  </div>

                  {/* NDA */}
                  <label className="flex cursor-pointer items-center gap-2 text-[10px] text-gray-700 sm:text-[11px]">
                    <input
                      type="checkbox"
                      name="sendNda"
                      checked={formData.sendNda}
                      onChange={handleChange}
                      className="h-3 w-3"
                    />

                    <span>Please Send NDA</span>
                  </label>

                  {/* STATUS MESSAGE */}
                  {statusMessage.text && (
                    <div
                      className={`rounded px-3 py-2 text-[10px] sm:text-[11px] ${
                        statusMessage.type === "success"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`h-9 rounded-[3px] px-5 text-[10px] font-semibold text-white transition sm:h-9.5 sm:px-6 sm:text-[11px] ${
                      loading
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {loading ? "Sending..." : "Schedule a free consultation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 sm:py-9 lg:py-10">
          <div className="mx-auto grid w-[90%] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:w-[85%] sm:grid-cols-3 lg:flex lg:w-[90%] lg:justify-between xl:w-[88%]">
            {/* REACT */}
            <img
              src="/images/React-Native.png"
              alt="React Native"
              className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
            />

            {/* FLUTTER */}
            <img
              src="/images/Flutter.png"
              alt="Flutter"
              className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
            />

            {/* XAMARIN */}
            <img
              src="/images/Xamarin.png"
              alt="Xamarin"
              className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
            />

            {/* ORACLE */}
            <img
              src="/images/Oracle.png"
              alt="Oracle"
              className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
            />

            {/* UNITY */}
            <img
              src="/images/unity.png"
              alt="Unity"
              className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
            />
          </div>
        </section>

        <section className="">
          <div className=" mx-auto w-[94%] text-center sm:w-[90%] lg:w-[90%] xl:w-[88%]">
            <h2 className="text-[20px] font-bold text-black sm:text-[22px] lg:text-[24px]">
              Our Locations
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-3 max-w-190 text-[11px] leading-[1.8] text-gray-700 sm:text-[12px] lg:text-[13px]">
              To better serve our clients, Dev App Grid Solutions has
              established a global presence, delivering innovative web, mobile,
              and software development services with local expertise and
              worldwide reach.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-800 sm:text-[11px]">
                <img src="/icons/landin-teams-icon.svg" alt="" />
                Dev App Grid
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-800 sm:text-[11px]">
                <img src="/icons/landin-mail-icon.svg" alt="" />
                info@Dev App Grid.com
              </div>

              {/* MEETING */}
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-800 sm:text-[11px]">
                <img src="/icons/landin-schedule.svg" alt="" />
                Schedule Meeting
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"></div>
          </div>
        </section>
        <section className="bg-white pb-0">
          <div className="mx-auto w-[94%] text-center sm:w-[90%] lg:w-[90%] xl:w-[88%]">
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <h3 className="text-[13px] font-bold text-black sm:text-[14px]">
                  Headquarter
                </h3>

                <img
                  src="/images/texas_usa_office_iq.png"
                  alt="Texas"
                  className="my-2 h-12 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  Texas, USA
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  17250 Dallas Pkwy Dallas, TX 75248, USA
                </p>

                <p className="mt-2 text-[10px] font-semibold text-black sm:text-[11px] flex items-center">
                  <img src="/icons/phone.svg" alt="" />
                  +1 469 793 9837
                </p>
              </div>
              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <h3 className="text-[13px] font-bold text-black sm:text-[14px]">
                  Branch
                </h3>

                <img
                  src="/images/canada-office-icn.png"
                  alt="Toronto"
                  className="my-2 h-12 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  Toronto, Canada
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  502-10 Murdock Road, Etobicoke,
                  <br />
                  M9V5E3
                </p>

                <p className="mt-2 text-[10px] font-semibold text-black sm:text-[11px] flex items-center">
                  <img src="/icons/phone.svg" alt="" />
                  +1 647 637 9108
                </p>
              </div>

              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/newyork-office-icn.png"
                  alt="New York"
                  className="mb-2 h-13 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  New York, USA
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  349 5th Ave, New York, NY 10016, USA
                </p>

                <p className="text-[10px] font-semibold text-black sm:text-[11px] flex items-center mt-10">
                  <img src="/icons/phone.svg" alt="" />
                  +1 917 477 8991
                </p>
              </div>

              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/london-office-icn.png"
                  alt="Austin"
                  className="mb-2 h-13 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  Austin
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  701 Brazos St 4th floor ste 415,
                  <br />
                  Austin, TX 78701
                </p>
              </div>
              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/california.png"
                  alt="California"
                  className="mb-2 h-13 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  California, USA
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  2976 Casa Nueva Ct, San Jose, CA
                  <br />
                  95124, USA
                </p>
              </div>

              <div className="flex min-h-45 flex-col items-center justify-center rounded-sm bg-white px-4 py-5 shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/australia-office-icn.png"
                  alt="Australia"
                  className="mb-2 h-13 w-auto object-contain"
                />

                <h4 className="text-[12px] font-bold text-black sm:text-[13px]">
                  Australia
                </h4>

                <p className="mt-1 text-[8px] leading-4 text-gray-600 sm:text-[9px]">
                  19 Burnes Ave, Clayton South VIC 3169,
                  <br />
                  Australia
                </p>
              </div>
            </div>
          </div>

          <section className="mt-5 w-full bg-black">
            <div className="mx-auto flex min-h-19 w-[94%] flex-col items-center justify-center gap-4 py-4 sm:w-[90%] sm:flex-row sm:justify-between sm:gap-6 lg:w-[90%] lg:min-h-19">
              {/* LEFT TEXT */}
              <div className="text-center sm:text-left">
                <p className="text-[16px] font-medium leading-tight text-white sm:text-[17px] lg:text-[18px]">
                  WE ARE WIDELY
                </p>

                <p className="text-[15px] font-light leading-tight text-white sm:text-[16px] lg:text-[17px]">
                  RECOGNIZED ON
                </p>
              </div>

              {/* TRUSTPILOT IMAGE */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/Container.png"
                  alt="Trustpilot Reviews"
                  className="h-10.5 w-auto object-contain sm:h-12 lg:h-13"
                />
              </div>
              {/* ORDER BUTTON */}
              <button className="flex h-7.5 items-center gap-2 rounded-sm bg-red-600 px-6 text-[9px] font-semibold text-white transition hover:bg-red-700 sm:h-8.5 sm:px-7 sm:text-[10px]">
                ORDER NOW
                <ArrowRight size={12} />
              </button>
            </div>
          </section>
        </section>
        <section>
          <div className="flex justify-center mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              Client Testimonials
            </h1>
          </div>
          <p className="text-center mx-auto mt-3 max-w-212.5 leading-[1.7] text-gray-700 sm:text-[11px] lg:text-[12px] ">
            Innovating user centric and results driven solutions based on the
            demanding industry of the client makes them speak about our work.
            Let&apos;s see what they think about our development method.
          </p>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-red-200 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
            {/* Left Blue Accent Line (Static) */}
            <div className="absolute top-0 left-0 bottom-0  z-10" />

            {/* Swiper Slider Component */}
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
                  <div>
                    {/* Top User Info & Rating Section */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Avatar Circle */}
                      <div className="w-16 h-16  border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain "
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
                        {/* Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.review)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-normal">
                      {item.review}
                    </p>

                    {/* Google Verified Branding */}
                    <div className="space-y-1 pb-2 md:pb-0">
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

            {/* STATIC NAVIGATION BUTTONS (Outside Swiper, inside Outer Card) */}
            <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center gap-2 z-20">
              <button
                className="custom-prev bg-red-700 hover:bg-red-600 text-white p-3  transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="custom-next bg-red-700 hover:bg-red-600 text-white p-3  transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-[94%] sm:w-[90%] lg:w-[88%]">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900 items-center mb-10 flex justify-center">
              How it Works
            </h2>
            <div className="relative flex justify-center">
              <div className="w-full">
                <div className="flex w-full max-w-240 items-center gap-3 bg-[#fffbed] px-4 py-5 sm:gap-5 sm:px-6 sm:py-6 lg:gap-6 lg:px-7 rounded-lg">
                  {/* ICON */}
                  <div className="flex shrink-0 items-center justify-center">
                    <Mail
                      size={25}
                      strokeWidth={1.5}
                      className="text-black sm:h-7.5 sm:w-7.5 lg:h-8 lg:w-8"
                    />
                  </div>

                  {/* NUMBER */}
                  <div className="shrink-0 text-[28px] font-light leading-none text-black sm:text-[34px] lg:text-[38px]">
                    01.
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-bold leading-tight text-black sm:text-[17px] lg:text-[18px]">
                      Submit a Request
                    </h3>
                    <p className="mt-1.5 max-w-82.5 text-[12px] leading-normal text-gray-700 sm:text-[13px] lg:text-[14px]">
                      Our Business Analyst will meet with you to discuss and
                      define project requirements in detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT ARROW (SVG) */}
              <div className="absolute right-17 top-5 hidden h-25 w-18.75 sm:block">
                <svg
                  width="104"
                  height="103"
                  viewBox="0 0 104 183"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80.5965 171.96L71.5565 160.954L86.7701 168.257C84.6407 162.45 82.9559 156.487 81.7304 150.422C79.8379 141.23 78.622 131.91 78.0924 122.537C77.4475 111.101 77.4711 99.637 78.1633 88.2038C78.4939 82.1347 79.1397 74.1269 80.1319 64.7978C80.6201 60.1293 81.2265 55.1521 81.7068 49.9613C81.9588 47.3581 82.1714 44.7072 82.3525 41.9932C82.5337 39.2791 82.6202 36.5333 82.6202 33.7401C82.6202 30.9469 82.5021 28.122 82.258 25.2813C81.9862 22.4161 81.5551 19.5683 80.9666 16.7513C80.6826 15.383 80.3091 14.0348 79.8484 12.7159C79.6214 12.0891 79.3585 11.4762 79.0609 10.88C78.7828 10.3068 78.4643 9.75412 78.1081 9.22635C77.4422 8.21725 76.5862 7.34896 75.5882 6.67048C75.093 6.33347 74.5654 6.04718 74.0134 5.8159C73.7255 5.69394 73.431 5.58827 73.1314 5.49939C72.9844 5.44623 72.8345 5.40132 72.6825 5.36487L72.2258 5.25409C72.0683 5.20661 71.9108 5.19079 71.7533 5.15914C71.5959 5.12749 71.4383 5.09584 71.2808 5.08001C70.9501 5.08001 70.6351 4.99297 70.3044 4.98505H69.8162H69.076H68.824H68.3279C67.6656 5.04411 67.0079 5.1472 66.3592 5.29365C66.0286 5.35695 65.7057 5.45982 65.3828 5.54687C65.2253 5.58643 65.0599 5.64973 64.8945 5.70512C64.7293 5.76051 64.5717 5.80799 64.4142 5.87129C61.7598 6.91551 59.3059 8.41483 57.1618 10.3024C56.0278 11.252 54.9411 12.2806 53.878 13.3568C53.3426 13.8948 52.8307 14.4487 52.3032 14.9947C51.7756 15.5407 51.2716 16.1183 50.7755 16.696C48.7911 19.0065 46.8933 21.3804 45.0507 23.8333C41.3733 28.6838 37.8848 33.6768 34.1129 38.29C30.5152 42.857 26.3498 46.9416 21.7183 50.444C20.5917 51.2911 19.3987 52.0452 18.1511 52.6992C17.5211 53.0268 16.8716 53.3148 16.2061 53.5617C16.0407 53.625 15.8675 53.6724 15.7022 53.7357C15.5368 53.799 15.3636 53.8465 15.1903 53.8861L14.6784 54.0285L14.1508 54.1314C13.0982 54.3422 12.0184 54.3797 10.9538 54.2421C10.7726 54.2421 10.5994 54.1789 10.4261 54.1472L10.1585 54.0997L9.90646 54.0285C8.56233 53.67 7.3178 53.0069 6.2684 52.0898C5.29573 51.2307 4.45927 50.2274 3.78792 49.1147C3.16407 48.068 2.6369 46.9661 2.21301 45.8229C1.81354 44.7336 1.47958 43.6212 1.21293 42.4916C1.08694 41.9377 0.992442 41.3996 0.890075 40.8537L0.732583 40.0625L0.614465 39.2712C0.43335 38.2108 0.33098 37.1663 0.220736 36.1535L0.110493 34.6501C0.0711198 34.1516 0.0632451 33.661 0.0396213 33.1783L-0.0312499 32.4583V31.7461C-0.03125 31.2714 -0.03125 30.8124 -0.03125 30.3534C0.00812279 29.4435 0.0238719 28.5572 0.102618 27.7106C0.212861 26.0014 0.441223 24.4188 0.661711 22.9629L1.06331 20.8977C1.21293 20.2409 1.3468 19.6158 1.48854 19.0302C2.07126 16.6564 2.72485 14.9156 3.1422 13.7128L3.90604 11.885L3.26819 13.7287C2.69876 15.4903 2.22298 17.2811 1.8429 19.0936C1.72478 19.687 1.61453 20.3121 1.49641 20.961L1.1893 23.0262C1.03182 24.4743 0.866451 26.041 0.827078 27.7264C0.787705 28.5731 0.827078 29.4435 0.827078 30.3455C0.827079 30.7887 0.866451 31.2476 0.8822 31.7065V32.4029L0.937319 33.115C0.976695 33.5819 1.00032 34.0646 1.05544 34.5472L1.22868 36.019C1.37829 37.0081 1.52004 38.0289 1.74053 39.0496L1.89015 39.8409L2.07126 40.6322C2.19726 41.1544 2.3075 41.6846 2.45712 42.2147C2.74567 43.2738 3.10343 44.3126 3.52806 45.3244C3.96225 46.3595 4.4894 47.3527 5.10297 48.2917C5.72211 49.2361 6.48469 50.0771 7.36297 50.7843C8.23156 51.4899 9.25 51.9853 10.3396 52.2323H10.5443H10.7491C10.8829 52.2323 11.0246 52.2323 11.1585 52.2956C11.442 52.2956 11.7255 52.2956 12.009 52.2956C12.5846 52.2803 13.1572 52.2061 13.7178 52.074L14.1508 51.9633L14.5761 51.8287C14.7178 51.8287 14.8595 51.7338 15.0013 51.6784C15.143 51.623 15.2848 51.5835 15.4265 51.5201C15.9948 51.2881 16.5496 51.024 17.0881 50.7289C18.2091 50.0815 19.2758 49.3431 20.2773 48.5212C24.5933 44.9943 28.4413 40.9256 31.7269 36.4147C35.2311 31.7777 38.4912 26.7056 42.0347 21.6336C43.8144 19.0936 45.6649 16.5536 47.6729 14.0848C48.169 13.4676 48.6887 12.8582 49.2006 12.249C49.7124 11.6397 50.2558 11.0383 50.7755 10.4528C51.8622 9.2659 52.9961 8.07895 54.2245 6.99491C54.8309 6.4331 55.4687 5.90294 56.1144 5.41235C56.7602 4.92175 57.4532 4.3362 58.1776 3.86935C59.6007 2.89579 61.1208 2.07371 62.7134 1.41639C62.9181 1.32935 63.1228 1.25814 63.3275 1.17901C63.5322 1.09988 63.7292 1.02075 63.9496 0.957449C64.367 0.822929 64.7922 0.672588 65.2253 0.569722C66.0897 0.341667 66.9684 0.172478 67.8554 0.0633035L68.5248 8.90888e-08H68.8555H69.1941H69.8634L70.5407 0C70.9895 0 71.4462 0.0474785 71.8951 0.0791295C72.1235 0.0791295 72.3518 0.134517 72.5723 0.166168C72.7928 0.197818 73.029 0.229472 73.2495 0.276949L73.9267 0.411465C74.1551 0.458942 74.3756 0.530158 74.596 0.585548C75.0449 0.696326 75.4859 0.862489 75.9269 1.01284C76.8111 1.34433 77.6604 1.76312 78.4625 2.26306C80.065 3.2657 81.4584 4.57179 82.5651 6.10867C83.0963 6.83577 83.5752 7.59996 83.9982 8.39546C84.4009 9.16739 84.7636 9.95979 85.085 10.7693C85.6883 12.3158 86.1856 13.9021 86.5733 15.517C87.3121 18.5499 87.88 21.6223 88.2742 24.7195C88.6364 27.7659 88.8411 30.7807 88.9435 33.7322C89.0459 36.6837 89.0065 39.5797 88.9435 42.4363C88.8805 45.2928 88.6915 47.9752 88.4947 50.6655C88.1245 55.9909 87.6442 60.9522 87.2584 65.6128C86.4709 74.8787 85.9591 82.7836 85.6362 88.7577C84.959 100.698 84.7228 112.061 84.9826 122.371C85.2424 132.681 85.9905 141.939 86.9512 149.687C87.912 157.433 88.9986 163.668 89.7309 168.004L89.7939 168.353L103.913 158.272L96.7707 170.615L89.6208 182.959L80.5965 171.96Z"
                    fill="#EEE8C6"
                  />
                </svg>
              </div>
            </div>
            <div className="relative mt-5 flex justify-center sm:mt-6">
              <div className="w-full">
                <div className="flex w-full max-w-230 items-center gap-3 bg-[#f4f8f0] px-4 py-5 sm:ml-[14%] sm:gap-5 sm:px-6 sm:py-6 lg:ml-[15%] lg:gap-6 lg:px-7 rounded-lg">
                  {/* NUMBER */}
                  <div className="shrink-0 text-[28px] font-light leading-none text-black sm:text-[34px] lg:text-[38px]">
                    02.
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-bold leading-tight text-black sm:text-[17px] lg:text-[18px]">
                      Project Quote/Proposal
                    </h3>
                    <p className="mt-1.5 max-w-90 text-[12px] leading-normal text-gray-700 sm:text-[13px] lg:text-[14px]">
                      Our Analyst will provide detailed project proposal
                      including cost estimate, project plan &amp; timeline.
                      Project starts as soon as Proposal is approved.
                    </p>
                  </div>
                </div>
              </div>

              {/* LEFT ARROW (SVG) */}
              <div className="absolute -left-1 -top-1 hidden h-26.25 w-20 sm:block lg:left-2">
                <svg
                  width="104"
                  height="103"
                  viewBox="0 0 104 183"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3166 171.96L32.3566 160.954L17.1429 168.257C19.2723 162.45 20.9571 156.487 22.1826 150.422C24.0752 141.23 25.2912 131.91 25.8207 122.537C26.4656 111.101 26.4419 99.637 25.7499 88.2038C25.4191 82.1347 24.7734 74.1269 23.7812 64.7978C23.293 60.1293 22.6867 55.1521 22.2063 49.9613C21.9543 47.3581 21.7417 44.7072 21.5606 41.9932C21.3795 39.2791 21.2928 36.5333 21.2928 33.7401C21.2928 30.9469 21.4109 28.122 21.655 25.2813C21.9268 22.4161 22.358 19.5683 22.9465 16.7513C23.2305 15.383 23.604 14.0348 24.0647 12.7159C24.2916 12.0891 24.5546 11.4762 24.8521 10.88C25.1304 10.3068 25.4487 9.75412 25.8049 9.22635C26.4709 8.21725 27.3269 7.34896 28.3248 6.67048C28.8201 6.33347 29.3477 6.04718 29.8998 5.8159C30.1877 5.69394 30.4821 5.58827 30.7817 5.49939C30.9287 5.44623 31.0786 5.40132 31.2305 5.36487L31.6873 5.25409C31.8448 5.20661 32.0022 5.19079 32.1598 5.15914C32.3173 5.12749 32.4747 5.09584 32.6322 5.08001C32.963 5.08001 33.278 4.99297 33.6086 4.98505H34.0969H34.8371H35.0891H35.5852C36.2474 5.04411 36.9051 5.1472 37.5538 5.29365C37.8846 5.35695 38.2074 5.45982 38.5303 5.54687C38.6877 5.58643 38.8531 5.64973 39.0185 5.70512C39.1839 5.76051 39.3413 5.80799 39.4988 5.87129C42.1533 6.91551 44.6072 8.41483 46.7514 10.3024C47.8853 11.252 48.9719 12.2806 50.035 13.3568C50.5705 13.8948 51.0823 14.4487 51.61 14.9947C52.1376 15.5407 52.6415 16.1183 53.1376 16.696C55.122 19.0065 57.0197 21.3804 58.8624 23.8333C62.5399 28.6838 66.0283 33.6768 69.8001 38.29C73.3978 42.857 77.5633 46.9416 82.1948 50.444C83.3214 51.2911 84.5143 52.0452 85.7619 52.6992C86.3919 53.0268 87.0415 53.3148 87.7069 53.5617C87.8723 53.625 88.0456 53.6724 88.211 53.7357C88.3763 53.799 88.5495 53.8465 88.7227 53.8861L89.2346 54.0285L89.7622 54.1314C90.8149 54.3422 91.8946 54.3797 92.959 54.2421C93.1402 54.2421 93.3141 54.1789 93.487 54.1472L93.7546 54.0997L94.0067 54.0285C95.3505 53.67 96.595 53.0069 97.6444 52.0898C98.6176 51.2307 99.4537 50.2274 100.125 49.1147C100.749 48.068 101.276 46.9661 101.7 45.8229C102.1 44.7336 102.434 43.6212 102.701 42.4916C102.827 41.9377 102.92 41.3996 103.023 40.8537L103.181 40.0625L103.298 39.2712C103.48 38.2108 103.582 37.1663 103.692 36.1535L103.802 34.6501C103.842 34.1516 103.85 33.661 103.873 33.1783L103.944 32.4583V31.7461C103.944 31.2714 103.944 30.8124 103.944 30.3534C103.905 29.4435 103.889 28.5572 103.811 27.7106C103.7 26.0014 103.472 24.4188 103.251 22.9629L102.85 20.8977C102.701 20.2409 102.566 19.6158 102.425 19.0302C101.841 16.6564 101.188 14.9156 100.771 13.7128L100.007 11.885L100.645 13.7287C101.214 15.4903 101.69 17.2811 102.07 19.0936C102.188 19.687 102.299 20.3121 102.416 20.961L102.724 23.0262C102.881 24.4743 103.046 26.041 103.086 27.7264C103.125 28.5731 103.086 29.4435 103.086 30.3455C103.086 30.7887 103.046 31.2476 103.031 31.7065V32.4029L102.976 33.115C102.936 33.5819 102.913 34.0646 102.858 34.5472L102.684 36.019C102.535 37.0081 102.393 38.0289 102.173 39.0496L102.023 39.8409L101.841 40.6322C101.715 41.1544 101.606 41.6846 101.456 42.2147C101.167 43.2738 100.809 44.3126 100.385 45.3244C99.9513 46.3595 99.4233 47.3527 98.8098 48.2917C98.1908 49.2361 97.4283 50.0771 96.5499 50.7843C95.6816 51.4899 94.6634 51.9853 93.5735 52.2323H93.3683H93.1641C93.0299 52.2323 92.8882 52.2323 92.7548 52.2956C92.4706 52.2956 92.1873 52.2956 91.9041 52.2956C91.3285 52.2803 90.756 52.2061 90.1953 52.074L89.7622 51.9633L89.337 51.8287C89.1952 51.8287 89.0535 51.7338 88.9118 51.6784C88.77 51.623 88.6283 51.5835 88.4865 51.5201C87.9183 51.2881 87.3636 51.024 86.825 50.7289C85.7039 50.0815 84.6373 49.3431 83.6358 48.5212C79.3197 44.9943 75.4718 40.9256 72.1862 36.4147C68.682 31.7777 65.4219 26.7056 61.8784 21.6336C60.0987 19.0936 58.2482 16.5536 56.2402 14.0848C55.7441 13.4676 55.2244 12.8582 54.7125 12.249C54.2007 11.6397 53.6573 11.0383 53.1376 10.4528C52.0509 9.2659 50.917 8.07895 49.6885 6.99491C49.0822 6.4331 48.4443 5.90294 47.7986 5.41235C47.1529 4.92175 46.46 4.3362 45.7355 3.86935C44.3124 2.89579 42.7923 2.07371 41.1998 1.41639C40.995 1.32935 40.7903 1.25814 40.5855 1.17901C40.3808 1.09988 40.184 1.02075 39.9635 0.957449C39.5461 0.822929 39.1209 0.672588 38.6877 0.569722C37.8234 0.341667 36.9447 0.172478 36.0577 0.0633035L35.3884 8.90888e-08H35.0576H34.719H34.0497L33.3724 0C32.9236 0 32.4668 0.0474785 32.0181 0.0791295C31.7897 0.0791295 31.5613 0.134517 31.3408 0.166168C31.1203 0.197818 30.884 0.229472 30.6636 0.276949L29.9864 0.411465C29.758 0.458942 29.5376 0.530158 29.317 0.585548C28.8682 0.696326 28.4272 0.862489 27.9862 1.01284C27.1019 1.34433 26.2526 1.76312 25.4506 2.26306C23.848 3.2657 22.4546 4.57179 21.348 6.10867C20.8168 6.83577 20.3379 7.59996 19.9148 8.39546C19.5121 9.16739 19.1494 9.95979 18.8281 10.7693C18.2248 12.3158 17.7275 13.9021 17.3398 15.517C16.6011 18.5499 16.0332 21.6223 15.6389 24.7195C15.2766 27.7659 15.0719 30.7807 14.9695 33.7322C14.8672 36.6837 14.9065 39.5797 14.9695 42.4363C15.0325 45.2928 15.2216 47.9752 15.4184 50.6655C15.7885 55.9909 16.2688 60.9522 16.6547 65.6128C17.4422 74.8787 17.954 82.7836 18.2769 88.7577C18.9541 100.698 19.1904 112.061 18.9304 122.371C18.6706 132.681 17.9225 141.939 16.9618 149.687C16.0012 157.433 14.9144 163.668 14.1821 168.004L14.1191 168.353L0 158.272L7.14224 170.615L14.2924 182.959L23.3166 171.96Z"
                    fill="#D1DFC2"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-5 flex sm:mt-6">
              <div className="flex w-full max-w-240 items-center gap-3 bg-[#fff0f1] px-4 py-5 sm:gap-5 sm:px-6 sm:py-6 lg:gap-6 lg:px-7 rounded-lg">
                {/* NUMBER */}
                <div className="shrink-0 text-[28px] font-light leading-none text-black sm:text-[34px] lg:text-[38px]">
                  03.
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold leading-tight text-black sm:text-[17px] lg:text-[18px]">
                    Start a Project
                  </h3>
                  <p className="mt-1.5 max-w-82.5 text-[12px] leading-normal text-gray-700 sm:text-[13px] lg:text-[14px]">
                    Dedicated project manager (single point of contact) +
                    designer + developers will start working on your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h1>
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-4">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`border bg-white transition-all duration-300 ${
                    open === index
                      ? "border-red-50 shadow-md"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-lg font-medium text-black">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        open === index
                          ? "rotate-180 text-black"
                          : "rotate-0 text-black"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      open === index
                        ? "max-h-150 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-4 border-t border-gray-100">
                      <p className="text-[17px] leading-8 text-gray-600">
                        {faq.answer}
                      </p>

                      {faq.points && (
                        <ul className="mt-5 space-y-4">
                          {faq.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-[17px] leading-8 text-gray-700 items-center m-0"
                            >
                              <ChevronRight
                                size={18}
                                className="mt-1 text-black shrink-0"
                              />

                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black text-white font-sans overflow-hidden">
          <div className="relative bg-linear-to-r from-[#cc0000] via-[#990000] to-[#110000] py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Content */}
              <div className="max-w-137.5">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight leading-tight mb-3">
                  Ready to work with us?
                </h2>
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-200 leading-relaxed mb-6">
                  Tell us about your app idea and get a free blueprint, timeline
                  and fixed quote within 24 hours.
                </p>
                <button className="flex items-center gap-2 bg-white text-black font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Start Your Project
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right Contact Info Boxes */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Call Box */}
                <div className="flex items-center gap-4 bg-red-950/80 border border-red-900/50 backdrop-blur-md px-6 py-4 rounded-xl flex-1 sm:w-65">
                  <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-red-600/20 text-red-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                      CALL US ANYTIME
                    </p>
                    <p className="text-[15px] font-bold text-white tracking-wide">
                      (800) 551-2090
                    </p>
                  </div>
                </div>

                {/* Email Box */}
                <div className="flex items-center gap-4 bg-red-950/80 border border-red-900/50 backdrop-blur-md px-6 py-4 rounded-xl flex-1 sm:w-70">
                  <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-red-600/20 text-red-500">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                      TALK TO US NOW
                    </p>
                    <p className="text-[14px] font-bold text-white truncate">
                      hello@appforgestudio.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="font-sans overflow-hidden relative">
          {/* Background split: card ke naye (barhe hue) size ke hisaab se adjust kiya gaya */}
          <div className="absolute top-0 left-0 right-0 h-48 sm:h-56 bg-white pointer-events-none z-0"></div>
          <div className="absolute top-48 sm:top-56 left-0 right-0 bottom-0 bg-black pointer-events-none z-0"></div>

          <div className="relative bg-transparent pt-10 sm:pt-12 pb-20 sm:pb-24 px-4 sm:px-8">
            {/* Form Card Container - white/black boundary ko cross karega */}
            <div className="mx-auto max-w-260 relative z-20 mb-16">
              <div className="absolute -top-4 -left-4 w-40 h-40 border-t-8 border-l-8 border-red-600 pointer-events-none z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-b-8 border-r-8 border-red-600 pointer-events-none z-0"></div>

              <div className="relative z-10 bg-white text-black p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row gap-10 items-center shadow-2xl">
                <div className="w-full lg:w-[45%] h-72 sm:h-85 lg:h-95 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                    alt="Consultant working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-[55%]">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-gray-900 mb-3">
                    Feel Free to Contact Us!
                  </h3>
                  <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-600 leading-relaxed mb-7">
                    Discuss your app idea with our consultants and we'll help
                    you transform them to multi-million dollar reality. It's
                    Free!
                  </p>

                  {/* Form Inputs */}
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 text-[14px] focus:outline-none focus:border-red-600"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 text-[14px] focus:outline-none focus:border-red-600"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 text-[14px] focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter a brief description of your App Project"
                        className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 text-[14px] focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-[#ed1c24] hover:bg-[#d9141c] text-white font-medium text-[14px] px-9 py-3.5 rounded-full transition-colors shadow-md"
                      >
                        Get A Free Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 text-center relative z-10 pt-24 pb-12">
              {/* Logo Section */}
              <div className="flex justify-center items-center gap-1">
                <img
                  src="/images/Dev-App-04.png"
                  alt="Dev App Grid"
                  className="w-44 sm:w-48"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-around py-6 my-6 gap-4">
                <div className="text-left sm:text-left">
                  <span className="text-[14px] text-gray-300 font-medium">
                    Always Connect With Us!
                  </span>
                  <div className="flex items-center gap-3 text-gray-400 mt-3">
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <FaFacebookF size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <FaInstagram size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <FaLinkedinIn size={14} />
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Phone size={17} />
                  </div>
                  <div className="text-left">
                    <p className="text-[15px] sm:text-[16px] font-bold text-white leading-tight">
                      +1 (844) 673 6849
                    </p>
                    <p className="text-[11px] text-red-500 font-semibold tracking-wide uppercase mt-0.5">
                      Call Us Today!
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                  Let's work together!
                </h2>
                <div>
                  <a
                    href="#"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium text-[15px] px-10 py-4 rounded-full shadow-lg transition-colors"
                  >
                    Get A Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
