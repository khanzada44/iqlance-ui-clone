"use client";
import { useState } from "react";
import { offices, benefitsCol1, benefitsCol2, benefitsCol3,faqs } from "../career/data";
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
import { careerLinks } from "../career/data";
import { stats, partners, faqsData } from "../../../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function career() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div>
          <img
            src="/images/career-header.png"
            alt=""
            className="mt-10"
          />
        </div>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              <span className="text-red-600">Career</span>
            </h2>

            {/* Description */}
            <div className="max-w-6xl mx-auto mt-8 space-y-6 text-center text-gray-700 text-base md:text-xl leading-8">
              <p>
                We at iQlance solution innovate ideas into reality with accurate
                road mapping. We are a leading app and software development
                company in the Canada and USA market.
              </p>

              <p>
                We are full stack developers delivering cutting edge
                technological products across the globe. Innovating ideas to
                reality with the agile process is our motto.
              </p>

              <p>
                We are eager to work with you! Come and join us as a iQlancer to
                clear your path of growth by stepping on the iQlance solutions.
              </p>
            </div>

            {/* Career Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 max-w-5xl mx-auto mt-12">
              {careerLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="flex items-center gap-3 text-xl font-semibold hover:text-[#2F69C9] transition"
                >
                  <ChevronRight size={18} />
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14">
              {/* Contact Us Link */}
              <Link
                href="/contact"
                className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-semibold flex items-center justify-center gap-3 transition"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              {/* See Our Work Link */}
              <Link
                href="/portfolio"
                className="group w-full sm:w-auto border border-gray-300 hover:border-red-500 hover:text-black px-8 py-4 font-semibold flex items-center justify-center gap-3 transition"
              >
                See Our Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>

            {/* Bottom Heading */}
            <div className="mt-20">
              <h3 className="text-3xl md:text-5xl font-bold text-center">
                Offshore Web, Mobile & Software Development Company
              </h3>

              <p className="max-w-5xl mx-auto mt-8 text-center text-gray-700 text-base md:text-lg leading-8">
                iQlance solutions is a leading Software, Web, & Mobile App
                Development Company with a vast area of experience in crafting
                stunning and end-to-end encrypted technology solutions. We offer
                excellent expertise of the industry followed by an exactly
                planned approach to elevate your growth.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <div className="max-w-7xl mx-auto px-4 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
              {stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative min-h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-20 pb-8"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-20 h-20 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt="stat icon"
                        className="w-10 h-10 text-[#4B5563]"
                      />
                    </div>

                    <h3 className="text-[40px] font-bold text-[#3B3F4A] leading-none">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-lg leading-[1.6] text-black">
                      {item.line1}
                      <br />
                      {item.line2}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto px-4 mt-10">
            {/* About */}
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold">About iQlance</h2>

              <div className="mt-8 space-y-7 text-gray-700 text-base md:text-lg leading-8">
                <p>
                  iQlance provides expert and interactive solutions for all our
                  businesses. Over the years our team has evolved from a
                  one-person venture to a multi-resource organization that can
                  provide accurate and technological solutions to diverse
                  businesses.
                </p>

                <p>
                  iQlance employs passionate, dedicated, talented,
                  industry-leading professionals with innovative thinking. When
                  you join our team, you're joining an exceptional culture of
                  creativity, continuous learning, exciting projects and a
                  full-time commitment to results.
                </p>

                <p>
                  iQlance builds strong relations with employees. Our strength
                  is our highly skilled and motivated workforce. We look forward
                  to having employees with talent, dedication, inspiration and
                  sense of adventure for taking themselves and iQlance to
                  greater heights.
                </p>
              </div>
            </div>

            {/* Why Join */}

            <div className="max-w-6xl mx-auto mt-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why Join iQlance ?
              </h2>

              <p className="mt-8 text-gray-700 text-base md:text-lg leading-8 max-w-5xl mx-auto">
                iQlance provides you a global platform to work with. We believe
                in building your career, not just offering a job. We need people
                with creative and innovative thinking and ideal approach who can
                bring refreshing ideas and passion for working within a team. If
                you are looking to grow your career more and want expertise in
                your respective field, iQlance is the right choice for you. So
                don't wait, apply now and grow with us!
              </p>
            </div>
            <div className="mt-2 pt-2">
              <img
                src="/images/why-iq-join-photo.jpg"
                alt="Why Join iQlance"
                className="w-full aspect-16/10 lg:aspect-4/3 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-4">
            {/* Top Header */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Come and Join Us
            </h2>

            {/* Top Description */}
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-12">
              <p>
                iQlance is a place where with a unique combination of technical
                innovation & creative flair clubbing, we work, we enjoy, we learn,
                we innovate and create something new and exciting every day.
              </p>
              <p>
                We are free to think new ideas, share unique ideas and allowed to
                implement new ideas, which make iQlance truly different place from
                others. The joy of delivering the excellent work is reflected in
                the physical environment, we operate in.
              </p>
              <p>
                iQlance has a tradition of facilitating continuous improvement
                through feedback sessions, surveys, and informal groups formed and
                managed by employees themselves.
              </p>
            </div>

            {/* Send Resume Box */}
            <div className="bg-red-50 py-10 px-6 mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-3">
                Send Your Resume Now
              </h3>

              <a
                href="mailto:hr@iqlance.com"
                className="text-red-700 hover:underline text-base md:text-lg font-medium inline-block mb-6"
              >
                hr@iqlance.com
              </a>

              <div>
                <Link className="group bg-red-700 hover:bg-red-600 text-white font-semibold text-sm px-6 py-3 inline-flex items-center gap-2 transition-colors" href="mailto:hr@iqlance.com">
                  <span className="flex items-center gap-2 justify-center">
                    Send Resume
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>

                </Link>
              </div>
            </div>

            {/* Life at iQlance Section */}
            <div className="max-w-5xl mx-auto text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black text-center mb-10">
                Life at iQlance
              </h3>

              {/* 3-Column List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-gray-800 text-sm md:text-base font-medium">
                <ul className="space-y-4">
                  {benefitsCol1.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold"><ChevronRight
                        size={14}
                        className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                      /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-4">
                  {benefitsCol2.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">
                        <ChevronRight
                          size={14}
                          className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-4">
                  {benefitsCol3.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">
                        <ChevronRight
                          size={14}
                          className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
                <section className="bg-red-50 py-10 sm:py-12 px-4 sm:px-6 md:px-12 mt-5 pt-2">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/images/letdiscuss-icon.png.webp"
              alt="Hire Team"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 object-contain"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Ready to Get Started?
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-700 text-base sm:text-lg">
             Call us Today for a Free Consultation:
            </p>

            <div className="mt-6 sm:mt-8 border border-red-400 px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row justify-center items-center gap-3 text-sm sm:text-base md:text-lg">
              <span className="font-semibold flex gap-1 items-center">
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

              <span className="hidden md:block">or</span>

              <span className="flex flex-wrap gap-1 items-center justify-center">
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
                US :<strong> +1 469 793 9837</strong>, CA :
                <strong> +1 647 637 9108</strong>
              </span>
            </div>

            <div className="flex justify-center">
              <Link
                href="/lets-talk"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                Let's Discuss
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
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
                      Find answers to common questions about our app and software
                      development services and learn how we can help turn your idea into
                      a successful digital product.
                    </p>
        
                    <div className="mt-12 space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => setOpen(open === index ? -1 : index)}
                            className="w-full flex justify-between items-center px-5 py-5 text-left"
                          >
                            <span className="font-semibold text-lg">
                              {faq.question}
                            </span>
        
                            {open === index ? (
                              <ChevronUp size={22} />
                            ) : (
                              <ChevronDown size={22} />
                            )}
                          </button>
        
                          {open === index && (
                            <div className="px-5 pb-5 text-[16px] leading-8 text-gray-600">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
        
                    <div className="mt-20 text-center">
                      <h3 className="text-4xl font-bold">
                        Have Something in Mind? Let's Talk
                      </h3>
        
                      <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600">
                        Have a look at the services and development process of the
                        iQlance solution. See what process we follow for mobile app and
                        software development. Have a look at how we are praised by our
                        clients. Start a conversation to innovate your next great idea
                        into reality with us.
                      </p>
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
