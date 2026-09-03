"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js Image Component
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"; // Combined Lucide Icons
import ContactForm from "../../contactForm/ContactForm";
import { missionData } from "../about-us/data";
import { stats, partners,faqsData } from "../../../../utils/data";

export default function About() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="mt-6 pt-2">
          <img
            src="/images/about-header.png"
            alt=""
            className="w-full object-cover"
          />
        </div>

        <section className="bg-white py-20">
          <div className="w-full px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-red-600">
              About Devapp
            </h2>

            {/* Sub Heading */}
            <h3 className="mt-4 text-xl md:text-3xl font-bold text-black">
              Award-Winning App Development Agency
            </h3>

            {/* Paragraph 1 */}
            <p className="mx-auto mt-8 w-full text-lg md:text-[22px] leading-relaxed text-black">
              Devapp Solutions is a leading software and mobile app development
              company serving clients in the USA. Our team of dedicated
              developers is always eager to innovate customized solutions based
              on your business needs.
            </p>

            {/* Paragraph 2 */}
            <p className="mx-auto mt-10 w-full text-lg md:text-[22px] leading-relaxed text-black">
              Our highly experienced dedicated developers make us award-winning
              app development agency in the USA. We design solutions that lend
              high levels of client satisfaction.
            </p>


            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Inquiry Now Link */}
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
              Trusted Custom Software, Web Mobile App Development Services
            </h2>
            <p className="w-full mx-auto mt-4 text-center text-1sxl leading-8 text-black">
              Devapp solutions is a leading Software, Web, & Mobile App
              Development Company with a extensive experience in crafting
              stunning and secure, end-to-end technology solutions. We offer
              excellent expertise of the industry followed by an well-planned
              approach to accelerate your business growth.
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
                      <img
                        src={item.icon}
                        alt=""
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
                  You Need a Technology Partner, Not Just a Developer
                </h2>

                <p className="mt-4 text-[17px] leading-9 text-black]">
                  At Devapp, we believe successful digital products are built
                  through collaboration, strategic planning, and technical
                  expertise. We work closely with our clients to understand
                  their goals and challenges and deliver scalable, user-focused
                  digital solutions.
                </p>

                <p className="mt-1 text-[17px] leading-9 text-black">
                  Our dedicated team of software and app developers in the USA
                  follows a structured approach covering strategy, design,
                  development, testing, and deployment to create customized
                  solutions that drive business growth.
                </p>

                <p className="mt-1 text-[17px] leading-9 ">
                  Since 2014, Devapp Solutions has delivered more than 1,500
                  digital products, including software and mobile applications
                  such as Doggy Dates, Bidda, Stable Hub, and Ukitchen. We are
                  proud to have worked with 250+ satisfied clients worldwide.
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
                <img
                  src="/images/why-choose-us-hb.jpg"
                  alt="Technology Partner"
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

            <p className="w-full mx-auto mt-4 text-center text-[16px] leading-7 text-gray-700">
              Our mission is to help businesses achieve sustainable growth
              through innovative, secure, and customized digital solutions. We
              combine technology expertise, strategic thinking, and user-focused
              design to solve complex business challenges and create measurable
              value for our clients.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-12 mb-10">
              {missionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-8 min-h-90"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-6"
                  />

                  <h3 className="text-[18px] font-semibold text-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Ready to Turn Your Idea Into a Successful Digital Product? Let’s
              Build It Together.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Call us Today for a Free Consultation:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-200 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
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
                  <span>info@DevAppGrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
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
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className=" transition-colors"
                  >
                    +1 866 978 8570
                  </a>
                  <span>,</span>
                  <span> </span>
                  <a
                    href="tel:+16476379108"
                    className="transition-colors"
                  >
                      
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
        <div className="mb-7">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-4">
            Our Vision
          </h2>
          <p className="max-w-8xl mx-auto text-center text-black text-base md:text-lg mb-12">
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
              About Devapp
            </h2>
            <div className="w-full mx-auto mt-8 space-y-8">
              <p className="text-center text-[17px] leading-8 text-black">
                Devapp came into the existence with the aspirations to develop
                customize creative mobile apps that can cater the requirements
                of clients in a cost-effective manner. The company was started
                by two zealous engineers who always wanted to bring the change
                by proving real-world solutions to stand out from the rest of
                competitors. With a hope to reach beyond clouds and big plans
                whirling in the mind, we made our way out and blossomed up with
                many successful business apps. Our excellent industry based
                approach helps to deliver ground breaking mobile apps which
                helped the client to come up with the proficient business.
              </p>

              <p className="text-center text-[17px] leading-8 text-[#333]">
                Today, Devapp is a trusted software and mobile app development
                company serving businesses across the USA, with expertise in
                delivering scalable digital solutions for startups, growing
                businesses, and enterprises. We believe in adopting the latest
                trends as per the user's demand, be it Apple TV, Android wear,
                AR/VR apps, IoT, Beacon, game app and much more; we work with
                every technology. Our mobile-first approach makes us focus on
                your requirements; then we strategize mobile app development
                process to take your business ideas from conceptualization which
                always dominates the position on App store and Play store.
              </p>
            </div>
            <div className="mt-12">
              <img
                src="/images/about-us-iqlance.jpg"
                alt="About Devapp"
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
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Let’s Discuss with our Technical Expert to Bring your Idea into
              Reality.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-200 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
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
                  <span>info@DevAppGrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
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
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                  >
                    +1 866 978 8570
                  </a>
                  <span>,</span>
                  <span> </span>
                  <a
                    href="tel:+16476379108"
                  >
                      
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
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

            <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

            <div className="mt-12 space-y-4">
              {faqsData.map((faq, index) => (
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
                Devapp solution. See what process we follow for mobile app and
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
