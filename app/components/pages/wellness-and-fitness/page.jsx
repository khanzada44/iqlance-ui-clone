"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  partners,
  bottomFeatures,
  slides,
  ServiceSectionData,
  portfolioSlides,
  technologies,
  stats,
  industries,
  services,
  faqsData,
  testimonials
} from "../wellness-and-fitness/data";
import Image from "next/image";

export default function wellnessFitness() {
  const [activeTab, setActiveTab] = useState("driver");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  // const currentTab = featuresTabsData.find((tab) => tab.id === activeTab) || featuresTabsData[0];
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    sendNda: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className="w-[90%] sm:w-[90%] mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
                Wellness & Fitness
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Recently it is seen that the wellness and fitness industry are
                in need of technology revolution, which is why business leaders
                are inclining towards mobility solutions. iQlance acknowledges
                this requirement, thus providing you with a team of experts
                experienced at crafting the best digital solution for you.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                The fitness app we develop will ensure your business will reach
                heights by offering you many opportunities. It is not only you
                who will benefit but also the target audience by low-stress
                level, high productivity, lower healthcare cost, etc.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Being the best Health and fitness app development company, we
                make sure our comprehensive fitness app contains every feature a
                fitness enthusiast will require to maintain a good shape, like
                forming diet plans, connecting with fitness gurus, scheduling
                workouts, etc.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-gray-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work <ArrowRight className="w-4 h-4 text-gray-600" />
                </Link>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 relative pt-6 pr-4">
              <div className="relative bg-[#EFF6FF] border border-blue-100/60  p-6 md:p-8 w-full shadow-lg">
                {/* Top Right Ribbon Badge */}
                <div className="absolute -top-6 -right-3 z-10 w-24 md:w-28 drop-shadow-md">
                  <img
                    src="/images/badge-sameday-resposnse.png"
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

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-gray-900">
                      <Paperclip className="w-4 h-4 text-gray-600" />
                      <span>Upload file:</span>
                      <input
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
                      className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer select-none"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#1E4B82] hover:bg-[#163a66] text-white font-bold text-xs md:text-sm py-3 px-6  transition-colors shadow flex items-center justify-center cursor-pointer"
                    >
                      Schedule a free consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Fetch Gym Trainers And Nutritionists Easily With Our Wellness
                And Fitness App Development Solutions
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our team at iQlance always strives hard to provide you with the
                best possible fitness solutions. For this, we have delivered a
                variety of innovative wellness and fitness app development
                solutions and allowed fitness enthusiasts to get their
                fitness-related queries resolved within less possible span of
                time.
              </p>
              <br />
              <p>
                We assist gym trainers, dieticians/nutritionists, yoga trainer,
                aerobic/zumba trainers and similar other experts to integrate
                their web and mobile applications, so that athletes or fitness
                freaks easily fetch their services in time. We do this by
                providing:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
              {bottomFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <ChevronRight className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    <strong className="font-bold text-gray-900">
                      {item.title}
                    </strong>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Build a Custom Logistics App for Your Business?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Partner with our logistics app development company to create
              scalable, feature-rich logistics mobile applications tailored to
              your needs.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1B4B82] fill-[#1B4B82]" />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <Phone className="w-4 h-4 text-gray-800 fill-gray-800" />
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 rounded-md transition duration-200 shadow-md"
              >
                Request a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-155 object-cover"
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
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24">
          {ServiceSectionData.map((item, index) => {
            // Checking if index is odd to reverse layout dynamically
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dynamic Feature List */}
                  <ul className="space-y-4 pt-2">
                    {item.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-gray-900 font-semibold text-sm md:text-base"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 min-h-87.5 sm:min-h-112.5 relative overflow-hidden shadow-sm">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <img src="/icons/email-icon.svg" alt="" />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <img src="/icons/phone-icon.svg" alt="" />
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-16 text-center font-sans">
          {/* Heading & Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Features of Wellness and Fitness App Development
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            Our wellness and fitness app successfully grabs the eyeballs of
            health maniacs because of the valuable features we add. Making the
            process of being fit effortless for people.
          </p>

          {/* Main 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/doctor-patient-profile-icn.png"
                alt="Login & Profile Creation"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Login & Profile Creation
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/push-h-icn.png"
                alt="Push Notification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Push Notification
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/sm-icon.png"
                alt="Social Sharing"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Social Sharing
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/content-h-icn.png"
                alt="Geolocation"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Geolocation
              </h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/reminders-h-icn.png"
                alt="Reminders"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Reminders
              </h3>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/200cal.png"
                alt="Food and Calorie Tracker"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Food and Calorie Tracker
              </h3>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/calender-icn-new.png"
                alt="Schedules and Calendar"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Schedules and Calendar
              </h3>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/game-remote.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Gamification
              </h3>
            </div>

            {/* Card 9 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/online-icon-w.png"
                alt="Online Sessions"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Online Sessions
              </h3>
            </div>
          </div>

          {/* Bottom Centered Row (2 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Card 10 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/analytics-h-icn.png"
                alt="Analytics & Reports"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Analytics & Reports
              </h3>
            </div>

            {/* Card 11 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/chat-h-icn.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Chat
              </h3>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Build a Custom Logistics App?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Partner with our logistics app development company to streamline
              fleet management, delivery tracking, and supply chain operations.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1B4B82] fill-[#1B4B82]" />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <Phone className="w-4 h-4 text-gray-800 fill-gray-800" />
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Key Features of Logistics and Transportation App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Our logistics app solutions contain a host of features that shall
              help you manage your activities in a more organized manner.
            </p>
          </div>
        </section>
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Build a Custom Logistics App?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Partner with our logistics app development company to streamline
              fleet management, delivery tracking, and supply chain operations.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1B4B82] fill-[#1B4B82]" />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <Phone className="w-4 h-4 text-gray-800 fill-gray-800" />
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image Side */}
            <div className="w-full h-full min-h-87.5 sm:min-h-112.5 relative overflow-hidden shadow-sm">
              <img
                src="/images/our-developers.jpg"
                alt="Expert Logistics App Developers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content Side */}
            <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Expert Logistics App Developers with Proven Technical Expertise
              </h2>

              <p>
                In our family, we have a group of highly competent developers
                with full-stack development aptitudes. All our experts have
                previously worked in different types of app development
                projects, long before joining our team. With their years of
                service experience, our App Developers have long since upgraded
                their skills; they provide high-grade apps for clients.
              </p>

              <p>
                To us, our clients are the main priority. Whatever features they
                require and the speed at which they want their service, our
                developers focus on delivering well-designed custom mobile apps.
              </p>

              <p>
                We create apps for different types of companies, be it smaller
                ones just starting or enterprise-level corporations with
                big-scale logistics demands. Expect noticeable business growth,
                smoother operations, and maximized profits in the future with
                our ad per design services.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
          {/* Top Text Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              How Much Does It Cost to Build a Custom Logistics App?
            </h2>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                While constructing a customized logistics mobile app integrated
                with multiple features, the question of cost does come into
                play. Our team of{" "}
                <span className="font-bold text-gray-900">
                  app developers USA
                </span>{" "}
                also includes financial specialists. They would carefully
                evaluate your app requirement and devise the most efficient app
                cost structure.
              </p>

              <p>
                There is no standard fee that we offer for our craft though. All
                our clients get personalized costs for development depending on
                multiple factors. These include the technologies we utilized for
                the app&apos;s frontend and backend development, technology
                stack, and platform compatibility.
              </p>

              <p>
                Our team takes the time to understand your business goals,
                operational challenges, and budget to create custom logistic app
                development tailored to your specific requirements. Get in touch
                with us today to explore a cost-effective solution that enhances
                efficiency, optimizes workflows, and supports long-term growth.
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full h-64 sm:h-80 md:h-96  overflow-hidden shadow-sm">
            <img
              src="/images/healthcare-app-built.jpg"
              alt="Cost Calculation & Financial Planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Success Stories Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-3 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Success Stories That Showcase Our Logistics Expertise
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              iQlance solutions has always been honored with valuable words for
              the efforts given on mobile app development that are efficiently
              unique and user centric. Here are some of the best examples for
              this.
            </p>
          </div>
        </section>
        <section>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 300000 }}
            loop={true}
          >
            {portfolioSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F2F1FF] px-4 sm:px-6 md:px-12 py-8 sm:py-10">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                    {slide.heading}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                        {slide.title}
                      </h3>

                      <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                        {slide.description}
                      </p>

                      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                        {slide.features.map((feature, i) => (
                          <li key={i}>› {feature}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                        {slide.technologies.map((tech, i) => (
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
                      <button className="group w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                        View Case Study
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full max-w-xs sm:max-w-sm"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Top CTA Banner Box */}
          <div className="bg-[#F4F8FC] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Check How We turn Your Idea into Innovative Product
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our rich portfolio justifies that we are one of the best
                logistics app development companies in the USA.
              </p>
            </div>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-[#1B4B82] hover:bg-[#143a66] text-white font-semibold text-sm py-3.5 px-6 rounded-md transition-colors shrink-0"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Technology Stack Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Technology Stack for Custom Logistics App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our team of developers leave stones unturned in their quest to
              create usable apps with advanced features for companies, drivers,
              and consumers. We are equipped to handle different types of
              technology, and justly utilize them for our app development
              solutions.
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
                    onClick={() => setActivetechnologies(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${
                      activetechnologies === index
                        ? "text-black font-semibold"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab.category}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 bg-black transition-all duration-300 ${
                        activetechnologies === index ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
              {technologies[activetechnologies].items.map((item, index) => (
                <div
                  key={index}
                  className="w-[49%] sm:w-[31%] md:w-[23%] lg:w-37.5 bg-white shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300"
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
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Transform Your Transportation and Logistics Mobile Apps
              Development
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Partner with our logistics app development company to build custom
              logistics mobile applications that streamline operations and drive
              growth.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1B4B82] fill-[#1B4B82]" />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <Phone className="w-4 h-4 text-gray-800 fill-gray-800" />
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-[#1B4B82] transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Hire Dedicated Developer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Your Trusted Logistics App Development Company in the USA
            </h1>
            <p>
              iQlance solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end to end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>
          </div>
        </section>
        <section>
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
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Industries We Serve with Custom Logistics App Development
            </h1>
            <p>
              Over the years, we have collaborated with multiple companies, both
              large firms with big teams and small-scale businesses, across
              several industries.
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
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Why Businesses Choose Our Logistics App Development Company
            </h1>
            <p>
              iQlance Solutions specializes in developing scalable, feature-rich
              mobile applications for different operating systems, like Android
              and iPhone. Our experts deliver a centralized workflow for every
              client and offer dedicated service at all times.{" "}
            </p>
          </div>
        </section>
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
        <section>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Client Testimonialss
            </h1>
            <p>
              Our purpose as a logistics app development company, has always
              centered around putting customer satisfaction first. Here are some
              of the things our past clients have to say about our services,
              directly from them.
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
          <div className="text-center max-w-1xl mx-auto space-y-4 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              Have Something in Mind? Let's Talk
            </h1>
            <p>
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
    </>
  );
}
