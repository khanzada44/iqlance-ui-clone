"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { missionData } from "../about-us/data";
import { stats, partners, faqsData } from "../../../../utils/data";

// FAQPage schema — wahi sawal jo page par dikh rahe hain
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((f) => ({
    "@type": "Question",
    name: String(f.question),
    acceptedAnswer: { "@type": "Answer", text: String(f.answer).replace(/<[^>]*>/g, "") },
  })),
};

export default function About() {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mt-6 pt-2">
          <img
            src="/images/about-header.webp"
            alt="DevApp Grid software and mobile app development team"
            fetchPriority="high"
            className="w-full object-cover"
          />
        </div>

        <section className="bg-white py-20">
          <div className="  text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600">
              About DevApp Grid
            </h1>
          </div>

          <div className="w-full px-6 text-center mt-15">
            <h2 className="text-xl md:text-3xl font-bold text-black">
              Award-Winning Software & App Development Company
            </h2>
            <p className="mx-auto mt-8 w-full text-lg md:text-[22px] leading-relaxed text-black">
              DevApp Grid is a trusted software development company USA businesses can rely on to turn
              ideas into powerful digital products. Our team builds custom software, web applications, and
              mobile solutions that improve efficiency, support growth, and create better user experiences.

            </p>
            <p className="mx-auto mt-10 w-full text-lg md:text-[22px] leading-relaxed text-black">
              From product strategy and engineering to QA and post-launch support, we handle every stage
              of development. Businesses looking for a software development company Los Angeles can work
              with our experienced team on custom software, enterprise platforms, mobile products, and
              web solutions. Our digital transformation expertise also includes AI solutions and software
              modernization, helping businesses build secure, scalable technology that evolves with their
              needs.
            </p>


            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Inquiry Now
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              {/* See Our Work Link */}
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-red-100"
              >
                See Our Work
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
              Custom Software Development Services & Mobile App
              Development Services
            </h2>
            <p className="w-full mx-auto mt-4 text-center text-xl leading-8 text-black">
              DevApp Grid provides end-to-end software development, web development, and mobile app
              development services for startups, growing businesses, and established enterprises.
              From initial strategy and UI/UX design to development, quality assurance, deployment, and ongoing
              support, we build technology solutions that are reliable, scalable, and aligned with your business
              objectives.
            </p>

            <section>
              <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full sm:w-70 lg:w-35 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-15.5 h-15.5 rounded-2xl border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.value} ${item.line1 ?? ""} ${item.line2 ?? ""}`.trim()}
                        width={44}
                        height={44}
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

        <section className="py-2 bg-white">
          <div className="w-full px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[15px] md:text-[28px] font-bold leading-tight text-black">
                  We Don't Just Build Apps, We Build Your Competitive Edge
                </h2>

                <p className="mt-4 text-[17px] leading-9 text-black">
                  Here's the truth: most development companies will happily code whatever you ask for and call it a
                  day. That's not how we work at DevApp Grid. Before we write a single line of code, we want to understand
                  your business, your goals, and the problem you're actually trying to solve, because the best digital
                  products come from real collaboration, not a checklist.
                </p>

                <p className="mt-1 text-[17px] leading-9 text-black">
                  Our team works alongside you from day one, turning ideas into digital products people want
                  to use. We bring strategy, design, engineering, and testing together to create solutions that
                  perform when it matters most.
                </p>

                <p className="mt-1 text-[17px] leading-9 ">
                  From custom software development services and mobile apps to web platforms, SaaS
                  products, and enterprise solutions, we provide the expertise to move your project forward.
                  Built with long-term growth in mind, our solutions can evolve as your business does.

                </p>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600 mt-10"
                >
                  Get in touch
                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
              <div>
                <Image
                  src="/images/about/about-us/why-choose-us-hb.webp"
                  alt="DevApp Grid as your technology partner"
                  width={650}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 bg-white mt-4">
          <div className="w-full px-5">
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>

            <p className="w-full mx-auto mt-4 text-center text-[16px] leading-7 text-black ">
              At DevApp Grid, we build technology that earns its keep. Every project starts with one question: will this
              actually move your business forward? That question shapes how we plan, design, and build, so the
              end result is not just functional but genuinely useful, something that helps you serve customers better,
              work faster, or grow revenue. We are not interested in delivering software for the sake of it. We are
              interested in results you can measure.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-12 mb-10">
              {missionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-8 min-h-90"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-6"
                  />

                  <h3 className="text-[18px] font-semibold text-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-black ">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Talk to the DevApp Grid team"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight faq">
              Ready to Turn Your Idea Into a Successful Digital Product? Let’s
              Build It Together.
            </h2>
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed faq">
              Call us Today for a Free Consultation:
            </p>
            <div className="w-full max-w-2xl bg-red-50 border border-red-200 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
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
                  <a
                    href="tel:+18669788570"
                    className=" transition-colors"
                  >
                    +1 (866) 978-8570
                  </a>,
                  <a
                    href="tel:+13237477192"
                    className=" transition-colors"
                  >
                    +1 (323) 747-7192
                  </a>

                </div>
              </div>
            </div>

            {/* Action Button */}
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
        <div className="w-full px-5 mb-7">
          {/* Section Heading */}
          <h2 className="text-center text-4xl font-bold text-black">
            Our Vision
          </h2>
          <p className="max-w-5xl mx-auto text-center text-black text-base md:text-lg mb-12">
            Our vision is to become a trusted technology partner for businesses
            seeking innovative and scalable digital solutions. By combining our
            clients’ industry knowledge with our technology expertise, we aim to
            create solutions that improve efficiency, enhance user experiences,
            and support long-term business growth.
          </p>
        </div>
        <section className="bg-white">
          <div className="w-full px-5">
            <h2 className="text-center text-4xl font-bold text-black">
              Our Story
            </h2>
            <div className="w-full mx-auto mt-8 space-y-8">
              <p className="text-center text-[17px] leading-8 text-black">
                DevApp Grid was founded with one goal: to build custom, creative
                mobile apps that meet our clients’ requirements in a
                cost-effective way. The company was started by two passionate
                engineers who wanted to make a difference by delivering
                real-world solutions that stand out from the competition. With
                big plans and a drive to go further, we grew step by step and
                launched many successful business apps along the way. Our
                industry-focused approach helps us deliver groundbreaking
                mobile apps that help our clients build stronger businesses.
              </p>

              <p className="text-center text-[17px] leading-8 text-[#333]">
                Today, DevApp Grid is a trusted software and mobile app
                development company serving businesses across the USA, with
                expertise in delivering scalable digital solutions for
                startups, growing businesses, and enterprises. We adopt the
                latest technologies as user demand changes, including Apple TV,
                Wear OS, AR/VR, IoT, beacons, and game apps. Our mobile-first
                approach starts with your requirements, then we plan the
                development process that takes your idea from concept to a
                product ready for the App Store and Google Play.
              </p>
            </div>
            <div className="mt-12">
              <img
                src="/images/about/about-us/about-us-devapp.webp"
                alt="DevApp Grid office and team"
                loading="lazy"
                width={1200}
                height={500}
                className="w-full h-65 md:h-105 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10 mt-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Talk to the DevApp Grid team"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight faq">
              Let’s Discuss with our Technical Expert to Bring your Idea into
              Reality
            </h2>

            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed faq">
              Send your Requirements on:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-200 rounded-sm py-4 px-6 mb-8 shadow-xs">
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
                  <a
                    href="tel:+18669788570"
                  >
                    +1 (866) 978-8570
                  </a>
                  <span> </span>
                  <a
                    href="tel:+13237477192"
                  >
                    +1 (323) 747-7192
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/request-a-quote"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Request a Quote
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

            <p className="mt-5 text-center text-[17px] text-black w-full mx-auto">
              Have questions about working with DevApp Grid? Here are some quick answers to help you understand our
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
                        className={`shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <ChevronDown size={22} />
                      </span>
                    </button>

                    {/* Smooth FAQ Content */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-[16px] leading-8 text-black ">
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

              <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-black ">
                Explore DevApp Grid’s services and the development process we
                follow for mobile app and software projects, and see what our
                clients say about working with us. Then start a conversation
                and let’s turn your next great idea into reality together.
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
                  loading="lazy"
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