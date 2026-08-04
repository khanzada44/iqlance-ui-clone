"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, ChevronRight, Star } from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import {
  healthcareFeatures,
  healthcareBenefits,
  slides,
  caseStudies,
  technologies,
  stats,
  industries,
  services,
  testimonials,
  faqsData,
  partners,
} from "../healthcare/data";
import ContactForm from "../../contactForm/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroQuoteSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(-1);
  useEffect(() => {
    const observer = new IntersectionObserver(() => {});
  }, []);
  return (
    <>
      <div className="w-[90%] mx-auto">
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <p className="text-lg text-gray-700">USA's Top-Notch</p>

                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#1F4E99]">Healthcare App</span>
                  <br />
                  <span className="text-[#1F4E99]">Development</span>
                  <br />
                  <span className="text-[#1F4E99]">Company</span>
                </h1>

                <h3 className="mt-8 text-2xl font-bold leading-snug">
                  Adoption of Healthcare Apps to move forward towards better
                  decision making!
                </h3>

                <p className="mt-6 text-gray-700 leading-8 text-lg">
                  The healthcare industry is experiencing a massive digital
                  shift, with mobile apps that improve patient care,
                  diagnostics, and real-time communication. We are a leading
                  healthcare app development company, offering exceptional
                  mobile app solutions designed especially for the global
                  healthcare industry. We have proven healthcare industry
                  knowledge with advanced technologies to create secure apps as
                  per HIPAA, HL7, FDA, GDPR, and HITECH guidelines that are
                  scalable and user-friendly.
                </p>

                <ul className="mt-8 space-y-5 text-lg">
                  <li className="flex items-center gap-3 mb-2">
                    <ChevronRight size={14} />
                    45 minutes of free consultation
                  </li>
                  <li className="flex items-center gap-1 mb-2">
                    <ChevronRight size={14} />A strict non-disclosure policy
                  </li>
                  <li className="flex items-center gap-1 mb-2">
                    <ChevronRight size={14} />
                    Detailed Feature List Document
                  </li>
                  <li className="flex items-center gap-1 mb-2">
                    <ChevronRight size={14} />
                    Action plan to kick start your project
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button className="group w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                    Request a Quote
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button className="group w-full sm:w-auto border border-gray-300 hover:border-[#184A8B] px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                    See Our Work
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              {/* Right Form */}
              <div className="relative">
                {/* Badge */}
                <img
                  src="https://www.iqlance.com/wp-content/uploads/2025/11/badge-sameday-resposnse.png"
                  alt="Guaranteed"
                  className="absolute -top-12 right-6 w-28 z-10"
                />

                <div className="bg-[#EEF5FF] border border-[#BFD3F6] rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="text-3xl font-bold">Request a Free Quote</h2>

                  <p className="mt-3 text-lg">
                    Guaranteed Response within One Business Day!
                  </p>

                  <form className="mt-8 space-y-6">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Phone*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <textarea
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none resize-none"
                    />

                    <input type="file" className="text-sm" />

                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" />
                      Please Send NDA
                    </label>

                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 rounded-md font-semibold transition"
                    >
                      Schedule a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Top Heading */}
            <h2 className="md:text-5xl text-center leading-tight text-3xl font-bold text-[29px] ">
              Healthcare Mobile App Development Company for Modern Healthcare
              Solutions
            </h2>

            {/* Top Content */}
            <div className="mt-8 space-y-6 text-center md:text-lg leading-8 ">
              <p className="m-0 text-[20px] font-normal  text-black">
                We develop healthcare apps that help overcome the gap between
                the patients and the doctors and establish a seamless
                transition. It lays down a smooth path to get advanced care and
                better outcomes.
              </p>
              <p className="m-0">
                Our healthcare app development services include the end-to-end
                process, including designing and developing mobile applications
                for hospitals, clinics, and medtech companies. We specialize in
                building custom solutions for appointment scheduling,
                telemedicine, patient monitoring, and EHR systems. As a trusted
                healthcare app development company, we develop secure, scalable,
                and high-performing mobile solutions. Our expert team has
                hands-on experience over seamless integration with existing
                systems, including HL7 data exchange, HIPAA guidelines, GDPR
                law, and other global standards.
              </p>
              <br />
              <p className="m-0">
                {" "}
                From lowered operation costs to enhanced patient engagement, we
                have a lot of things to offer. We are a world-changing{" "}
              </p>
              <a href="">healthcare app development company </a>
              that makes use of cutting-edge technology to provide a simplified
              solution. Plus, we are fully equipped to take your healthcare
              projects to the sky with:
            </div>

            {/* Image */}
            <div className="mt-12">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/change/healthcare-full-photo.jpg"
                alt="Healthcare Mobile App Development"
                className="w-full rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Bottom Heading */}
            <h2 className="mt-14 text-2xl md:text-2xl font-bold text-center leading-tight">
              Cloud-based Healthcare Mobile App Development Services for
              Scalable and Secure Operations
            </h2>

            {/* Bottom Content */}
            <div className="mt-8 space-y-6 text-center text-black text-base md:text-lg leading-8">
              <p className="m-0 text-black ">
                A cloud-based healthcare solution is necessary for a digital
                medical environment, as it offers real-time access to patient
                data, seamless collaboration between internal teams, lower
                infrastructure costs, and better scalability. The cloud-based
                solution ensures secure data storage, faster decision-making,
                efficiency & accuracy in each operation, and improved outcomes.
              </p>

              <p className="m-0 text-black ">
                As a leading healthcare app development services provider across
                the globe, we have hands-on experience in building custom
                cloud-based healthcare apps, including EHR, EMR, telemedicine,
                and more. Moreover, we are fully equipped to build a
                high-quality app that improves diagnosis, patient fitness, and
                medical data interoperability within a pre-decided timeframe.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Let's Take A Deep Dive Into The Extraordinary Features Of The
                  Healthcare App Development Done By Us
                </h2>

                <ul className="mt-8 space-y-6">
                  {healthcareBenefits.map((item, index) => (
                    <li key={index} className="flex gap-1 mb-1">
                      <span className="text-[#184A8B] font-bold">
                        <ChevronRight size={14} className="mt-1 shrink-0" />
                      </span>

                      <p className="text-gray-700 leading-normal">
                        <strong>{item.title}: </strong>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right */}
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/apply-change-healthcare.jpg"
                  alt="Healthcare"
                  className="w-full rounded-xl object-cover shadow-md"
                />
              </div>
            </div>

            {/* CTA Box */}

            <div className="mt-12 md:mt-20 bg-[#f5f9fc] rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Looking to Hire a Healthcare App Development Team?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-7">
                Partner with us to hire experienced healthcare app developers to
                build secure, scalable and user-friendly mobile solutions
                tailored to your healthcare business needs.
              </p>

              {/* Contact Box */}
              <div className="mt-8 border border-[#184A8B] bg-white p-5 flex flex-col lg:flex-row justify-center items-center gap-5 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base">
                    info@iqlance.com
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base leading-6">
                    US: +1 469 793 9837 <br className="sm:hidden" />
                    <span className="hidden sm:inline"> | </span>
                    CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 transition rounded-md cursor-pointer">
                Hire Dedicated Developers
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h1 className="text-center leading-tight text-2xl font-bold text-[30px] mb-2.5">
            Our Healthcare App Development Solutions
          </h1>
          <p className="text-[20px] text-center">
            The healthcare system of our country is the most under-served sector
            in technology. Thus, despite how advanced the treatment and recovery
            process has gone, its benefits are not sweeping down to the ultimate
            patients. This is why our medical app development company strive to
            improve the quality of the patients and healthcare leaders through
            different aspects of our app.
          </p>
        </section>
        <section className="py-10">
          <div className="mx-auto max-w-7xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 30000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 items-center">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-125 object-cover rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                        {slide.title}
                      </h2>

                      <p className="text-gray-600 leading-7 lg:leading-8 mb-6 lg:mb-8">
                        {slide.description}
                      </p>

                      <div className="space-y-3 lg:space-y-4">
                        {slide.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex gap-3 items-baseline"
                          >
                            <ChevronRight size={10} />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section>
          <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-center leading-tight font-bold text-[30px] mb-2.5">
              Advantages of adopting healthcare app solutions
            </h1>
            <p className="text-center text-gray-600 text-base max-w-3xl mx-auto mb-8">
              Undoubtedly, the IoT has transformed the way of working in almost
              all the industries! Also, it has redefined how apps, devices and
              people interact and connect with each other for delivering
              healthcare solutions.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 text-gray-700">
              <div className="flex-1 space-y-4">
                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0 " />
                  <span>
                    Advanced treatment and accurate diagnosis in a short term
                    than ever.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Improvised engagement between doctors and patient to make
                    sure the optimized recovery.
                  </span>
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Real-time support within the hospitals to reduce the errors
                    and perfection can be attained.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Constant patient care to have active involvement for
                    real-time monitoring of the disease.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 leading-7 mb-8">
                The healthcare mobility solutions tend to offer new tools and
                efficiencies to make the integrated healthcare system work with
                a view of ensuring better treatment to the patients. These are
                the gateway to multiple opportunities towards wellness,
                automated workflows, and process excellence.
              </p>

              <div className="space-y-4">
                <p className="flex items-start gap-2 text-gray-700">
                  <ChevronRight
                    size={16}
                    className="mt-1 shrink-0 text-[#184A8B]"
                  />
                  Reduced costs of treatment with enhanced perfection.
                </p>

                <p className="flex items-start gap-2 text-gray-700">
                  <ChevronRight
                    size={16}
                    className="mt-1 shrink-0 text-[#184A8B]"
                  />
                  Improved management of disease with continuous monitoring
                  during treatment.
                </p>

                <p className="flex items-start gap-2 text-gray-700">
                  <ChevronRight
                    size={16}
                    className="mt-1 shrink-0 text-[#184A8B]"
                  />
                  Advanced patient experience through connected devices and
                  proactive treatment.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/change/healthcare-right.jpg"
                alt="Healthcare"
                className="w-full max-w-md lg:max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-[#f5f9fc] rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Build Your Healthcare App?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Partner with an experienced healthcare app development company
                in USA to build innovative, compliant, and feature-rich mobile
                applications.
              </p>

              {/* Contact Box */}
              <div className="mt-8 border border-[#184A8B] bg-white rounded-lg p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base">
                    info@iqlance.com
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base leading-6">
                    US: +1 469 793 9837
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> | </span>
                    CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 rounded-md transition cursor-pointer">
                Let&apos;s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-center leading-tight font-bold text-[30px] mb-2.5">
              Advantages of adopting healthcare app solutions
            </h1>
            <p className="text-center text-gray-600 text-base max-w-3xl mx-auto mb-8">
              Undoubtedly, the IoT has transformed the way of working in almost
              all the industries! Also, it has redefined how apps, devices and
              people interact and connect with each other for delivering
              healthcare solutions.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 text-gray-700">
              <div className="flex-1 space-y-4">
                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0 " />
                  <span>
                    Advanced treatment and accurate diagnosis in a short term
                    than ever.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Improvised engagement between doctors and patient to make
                    sure the optimized recovery.
                  </span>
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Real-time support within the hospitals to reduce the errors
                    and perfection can be attained.
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-1 shrink-0" />
                  <span>
                    Constant patient care to have active involvement for
                    real-time monitoring of the disease.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white ">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Features of Healthcare App Development
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-center text-gray-600 text-base md:text-lg leading-8">
              We craft only top-notch applications that not only help in
              achieving every healthcare solution but also act as a gateway to
              new medical opportunities.
            </p>

            {/* Cards */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="border border-gray-200 rounded-md bg-white hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center justify-center text-center min-h-42.5"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />

                  <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-[#f5f9fc] rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Transform Your Healthcare Vision into a Mobile App?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Send your Requirements on
              </p>

              {/* Contact Box */}
              <div className="mt-8 border border-[#184A8B] bg-white rounded-lg p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base">
                    info@iqlance.com
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base leading-6">
                    US: +1 469 793 9837
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> | </span>
                    CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 rounded-md transition cursor-pointer">
                Let&apos;s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/our-developers.jpg" // apni image ka path
                  alt="Healthcare Developers"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-3xl lg:text-[32px] font-bold text-[#111827] leading-tight">
                  Our Healthcare App Developers are Dedicated to Providing a
                  Seamless Experience
                </h2>

                <p className="mt-8 text-[17px] leading-6 text-black">
                  We have a dedicated team of healthcare app developers, Dallas
                  who work day and night to impact the healthcare sector
                  positively through building communication and accessibility.
                  We strive to achieve it by making security and
                  user-friendliness our highest priority. Also, we use only
                  proven and refined process that helps client amplify their
                  result and set them apart from the competition.
                </p>

                <p className="mt-8 text-[17px] leading-6 text-black">
                  Plus, our highly skilled engineers master the area of
                  interface design, troubleshooting, and improving functionality
                  for a flawless experience. Further, we support our app with AI
                  and other integrations to bring an innovative aspect to the
                  health sector.
                </p>

                <p className="mt-8 text-[17px] leading-6 text-black">
                  Our main motto is not letting the patient feel they are alone.
                  They are fully supported by a group of best doctors ready to
                  serve during emergency hours.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-3xl lg:text-[30px] font-bold leading-tight text-[#111827]">
              How Much It will Cost You to Build a Healthcare App Like Other
              Successful Healthcare App Available in the Industry?
            </h2>

            <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
              Getting proper healthcare services nowadays has become the most
              expensive task in the world. Thus, the demand for digitalization
              of healthcare solutions is much on demand. We the best Mobile App
              development company USA with our highly skilled engineers help
              develop robust digital health applications. It enables patients
              maintain a connection with their physicians and get remote
              consultation anytime & anywhere.
            </p>

            <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
              However, to provide the patients with a comprehensive solution,
              the app must contain all the areas they might need help. These
              include medication management, doctor consultation, telehealth
              service, remote monitoring, system check-up, and whatnot.
            </p>

            <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
              So, the cost of developing a medical app compatible with iOS and
              Android will depend on the services you choose. Also, the added
              features and functionality will determine the price.
            </p>
            <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
              Get a Quotation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </button>
          </div>
        </section>
        <section>
          <div>
            <img
              src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/healthcare-app-built.jpg"
              alt=""
            />
            <h1 className="mt-5 flex justify-center font-bold text-3xl">
              Endeavors That Make Us Proud
            </h1>
            <p className="text-center text-black text-lg max-w-1xl mx-auto p-4">
              iQlance solutions has always been honored with valuable words for
              the efforts given on mobile app development that are efficiently
              unique and user centric. Here are some of the best examples for
              this.
            </p>
          </div>
        </section>

        <section className="mb-2">
          <Swiper
            className="w-[90%]"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 30000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
          >
            <Swiper>
              {caseStudies.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="rounded-lg min-h-162.5 lg:min-h-140 px-6 py-10 flex items-center"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                      {/* Left */}
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                          {item.title}
                        </h3>

                        <p className="text-black leading-4 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                          {item.description}
                        </p>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 m-0">
                              <ChevronRight size={18} />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                          {item.technologies.map((tech, i) => (
                            <div key={i} className="text-center">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                              />
                              <p className="text-xs sm:text-sm mt-2">
                                {tech.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
                          {item.buttonText}
                          <ArrowRight
                            size={18}
                            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                          />
                        </button>
                      </div>

                      {/* Right */}
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full max-w-xs sm:max-w-sm"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Swiper>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#F3F7FC] rounded-lg px-8 md:px-16 py-10 md:py-14">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111] leading-tight">
                    Check How We turn Your Idea into
                    <br />
                    Innovative Product
                  </h2>

                  <p className="mt-6 text-lg text-gray-700 leading-8">
                    Our rich portfolio justifies that, we are one of the best
                    app development company in USA.
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0">
                  <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
                    See Our Work
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-4">
            <h3 className="flex justify-center font-bold text-3xl">
              Technology Stack
            </h3>
            <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
              We only adopt the latest and cutting-edge technology that ensure
              redefining the process of healthcare for the better. So, if you
              want a glimpse of what these state-of-the-art technologies are,
              here they are:
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 ">
            {/* Tabs */}
            <div className="flex justify-center mb-10 ">
              <div className="flex flex-wrap gap-8 border-b border-gray-300">
                {technologies.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${
                      activeTab === index
                        ? "text-black font-semibold"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab.category}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 bg-black transition-all duration-300 ${
                        activeTab === index ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
              {technologies[activeTab].items.map((item, index) => (
                <div
                  key={index}
                  className="w-[49%] sm:w-[31%] md:w-[23%] lg:w-37.5 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />

                  <h3 className="mt-3 text-sm sm:text-base font-medium text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f5f9fc] py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f5f9fc] rounded-xl text-center px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
                We are Team of Talented, Experienced, and Certified Designers
                and Developers.
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-7">
                Let us Build Something Extraordinary.
              </p>

              <button className="group mt-8 w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 rounded-md transition cursor-pointer">
                Hire Dedicated Developer
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-10 mt-5">
            <h2 className="flex justify-center font-bold text-3xl">
              Offshore Web, Mobile & Software Development Company
            </h2>
            <div className="flex flex-wrap justify-center gap-7 mt-24">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full sm:w-70 lg:w-55 h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-24 pb-8"
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-8 right-0 w-25.5 h-25.5 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-11 h-11 object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-black leading-none">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-lg leading-none text-black">
                    {item.line1}
                    <br />
                    {item.line2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="flex justify-center font-bold text-3xl mb-10">
              Industries We Serve
            </h2>
            <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
              We, as a medical app development company, has grabbed some of the
              greatest milestones by serving leading industries like:
            </p>
          </div>
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

        </section>
        <section>
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-10 mt-5">
              Why Choose iQlance?
            </h1>
            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              As the world’s leading Healthcare app development company, we can
              help start your journey to become the next generation of the
              healthcare service sector.
            </p>
          </div>
          <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:border-[#184A8B] hover:shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-4 sm:mb-6"
                  />

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
        <section>
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-10 mt-5">
              Client Testimonials
            </h1>
            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              The hardwork of our certified healthcare app developers is really
              appreciated by our clients in the face of positive and motivating
              words. However, it is our diligence that has made them stick to
              us.
            </p>
          </div>
        </section>
<section className="w-full max-w-6xl mx-auto px-4 py-12">
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-gray-300 p-8 md:p-10  shadow-sm hover:border-[#1e40af] transition-all duration-300">
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
                      <div className="w-16 h-16 rounded-full border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-full"
                          onError={(e) => {
                            e.currentTarget.src =
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
                          e.currentTarget.src =
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
                className="custom-prev bg-[#1B4B82] hover:bg-[#133761] text-white p-3 rounded-none transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="custom-next bg-[#1B4B82] hover:bg-[#133761] text-white p-3 rounded-none transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
        <section>
          {/* Heading */}
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Frequently Asked Questions
            </h1>

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              Here you will find the answers you are looking for because we know
              what’s in our client’s mind.
            </p>
          </div>

          {/* FAQ */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="space-y-4">
                {faqsData.map((faq, index) => (
                  <div
                    key={index}
                    className={`border bg-white transition-all duration-300 ${
                      open === index
                        ? "border-gray-200 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
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
        </section>
        <section>
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Have Something in Mind? Let's Talk
            </h1>
            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              Have a look at the services and development process of the iQlance
              solution. See What process we follow for mobile app and software
              development. Have a look at how we are praised by our clients
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>
        <div className="mb-2.5 pb-2">
          <ContactForm />
        </div>
      </div>
      <div>
        <section className="mb-5">
          <div className="">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
              {partners.map((item) => (
                <div
                  key={item.id}
                  className="w-35 h-17.5 sm:w-42.5 sm:h-20 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-3"
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
      </div>
    </>
  );
}
