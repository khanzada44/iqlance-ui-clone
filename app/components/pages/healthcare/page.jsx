"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {
  healthcareFeatures,
  healthcareBenefits,
  slides,
} from "../healthcare/data";
import ContactForm from "../../contactForm/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroQuoteSection() {
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

            <div className="mt-20 bg-[#f5f9fc] rounded-xl p-8 md:p-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-16 h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl md:text-4xl font-bold">
                Looking to Hire a Healthcare App Development Team?
              </h2>

              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Partner with us to hire experienced healthcare app developers to
                build secure, scalable and user-friendly mobile solutions
                tailored to your healthcare business needs.
              </p>

              {/* Contact Box */}

              <div className="mt-8 border border-[#184A8B] bg-white p-4 flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                  />
                  <span className="font-medium">info@iqlance.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                  />
                  <span className="font-medium">
                    US: +1 469 793 9837, CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
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

            <div className="mt-20 bg-[#f5f9fc] rounded-xl p-8 md:p-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-16 h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl md:text-4xl font-bold">
                Ready to Build Your Healthcare App?
              </h2>

              <p className="mt-4 text-black max-w-3xl mx-auto">
                Partner with an experienced healthcare app development company
                in USA to build innovative, compliant, and feature-rich mobile
                applications.
              </p>

              {/* Contact Box */}

              <div className="mt-8 border border-[#184A8B] bg-white p-4 flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                  />
                  <span className="font-medium">info@iqlance.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                  />
                  <span className="font-medium">
                    US: +1 469 793 9837, CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
                Let’s Talk
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

            <div className="mt-20 bg-[#f5f9fc] rounded-xl p-8 md:p-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-16 h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl md:text-4xl font-bold">
                Ready to Transform Your Healthcare Vision into a Mobile App?
              </h2>

              <p className="mt-4 text-black max-w-3xl mx-auto">
                Send your Requirements on
              </p>

              {/* Contact Box */}

              <div className="mt-8 border border-[#184A8B] bg-white p-4 flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="mail-icon"
                  />
                  <span className="font-medium">info@iqlance.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="phone-icon"
                  />
                  <span className="font-medium">
                    US: +1 469 793 9837, CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="group mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer">
                Let’s Talk
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

          <section className="">
      <Swiper className="w-[90%]"
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
                  <SwiperSlide>
                    <div className="bg-[#ffd2d2] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
        
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                            Fantasy App Development
                          </h3>
        
                          <p className="text-black leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                                DFS-style fantasy app that lets you play fantasy baseball in a whole new way.
                          </p>
        
                          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                            <li>› Engaging User Experience</li>
                            <li>› Real-Time Data Integration</li>
                            <li>› Secure and Scalable Platform</li>
                          </ul>
        
                          <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/themes/iqlance/img/technologies-ios-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">iOS</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/themes/iqlance/img/android-technologies-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">Android</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">SQL</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/08/Flutter.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">Flutter</p>
                            </div>
                          </div>
        
                          <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                            View Case Study <ArrowRight size={22} />
                          </button>
                        </div>
        
                        <div className="flex justify-center">
                          <img
                            src="https://www.iqlance.com/wp-content/uploads/2024/08/chain-supply-management.png.webp"
                            alt=""
                            className="w-full max-w-xs sm:max-w-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
        
                  <SwiperSlide>
                    <div className="bg-[#F2F1FF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
        
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                            Manufacturing App Development
                          </h3>
        
                          <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                                E-commerce management system is a distinguished player in film conversion, extrusion, and manufacturing. Our unwavering commitment to quality and customer 
                                satisfaction has propelled us to the forefront of innovation in the film industry.
                          </p>
        
                          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                            <li>› Innovation-driven Experience</li>
                            <li>› Customer-Centric Approach</li>
                            <li>› Efficiency through Technology</li>
                          </ul>
        
                          <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/themes/iqlance/img/technologies-ios-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">iOS</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/themes/iqlance/img/android-technologies-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">Android</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">SQL</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/themes/iqlance/img/laravel-technologies-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">laravel</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/08/React.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">React Native</p>
                            </div>
                          </div>
        
                          <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                            View Case Study <ArrowRight size={22} />
                          </button>
                        </div>
        
                        <div className="flex justify-center">
                          <img
                            src="https://www.iqlance.com/wp-content/uploads/2024/08/image_2024_08_05T07_26_10_247Z.png.webp"
                            alt=""
                            className="w-full max-w-xs sm:max-w-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
        
                  <SwiperSlide>
                    <div className="bg-[#F2F1FF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
                      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                        Endeavors that Make us Proud
                      </h2>
        
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                            Supply Chain Management App
                          </h3>
        
                          <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                            Embark on a transformative journey with the chain supply
                            management app, an advanced application designed to
                            modernize operations and streamline B2B transactions.
                            Overcoming challenges of data integration and user-friendly
                            design, this app redefines efficiency and security in B2B
                            platforms.
                          </p>
        
                          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                            <li>› Global Chemical Procurement Hub</li>
                            <li>› Diverse Industry Representation</li>
                            <li>› Innovation and Experience</li>
                          </ul>
        
                          <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">SQL</p>
                            </div>
                            <div className="text-center">
                              <img
                                src="https://www.iqlance.com/wp-content/uploads/2024/07/Azure.png.webp"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                                alt=""
                              />
                              <p className="text-xs sm:text-sm mt-2">Azur</p>
                            </div>
                          </div>
        
                          <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                            View Case Study <ArrowRight size={22} />
                          </button>
                        </div>
        
                        <div className="flex justify-center">
                          <img
                            src="https://www.iqlance.com/wp-content/uploads/2024/05/erp1.png.webp"
                            alt=""
                            className="w-full max-w-xs sm:max-w-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
          </section>

        <div className="mb-2.5 pb-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
