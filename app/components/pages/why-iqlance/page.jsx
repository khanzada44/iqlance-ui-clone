import { ArrowRight, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import ContactForm from "../../contactForm/ContactForm";
import { features } from "../why-iqlance/data";
import { stats } from "../../../../utils/data";
export default function whyIqlance() {
  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div className="mt-2 pt-2">
          <img
            src="/images/why-us-header-banner.png"
            alt="Why Us Banner"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-full text-center mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            Why iQlance
          </h2>
          <p className="text-base font-medium mt-1">
            Converting your iDea into Innovative Product
          </p>
          <p className="mt-6 text-black text-lg leading-8">
            We are developers of Unique concepts in the form of mobile apps that
            help businesses to enhance their digital presence and make it more
            efficient and engaging. Hire dedicated software and mobile app
            developers from iQlance solutions as they are experts for innovating
            excellence in Android, iOS and cross-platform app development
            services.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#1E4D8F] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#163d72]"
            >
              Contact Us
              <ArrowRight size={22} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
            >
              See Our Work
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>

        <div className="w-full text-center mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Offshore Web, Mobile & Software Development Company
          </h2>
          <p className="mt-6 text-black text-sm leading-6">
            iQlance solutions is a leading Software, Web, & Mobile App
            Development Company with a vast area of experience in crafting
            stunning and end to end encrypted technology solutions. We offer
            excellent expertise of the industry followed by an exactly planned
            approach to elevate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mt-24">
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

        <section className="w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We as Trusted Partners
              </h2>

              <p className="text-gray-700 text-lg leading-8 mb-4">
                <span className="font-semibold">
                  iQlance Solution as a leading Mobile App & Software
                  Development Company
                </span>{" "}
                in Canada, USA, has gained expertise in customizing and
                innovating apps.
              </p>

              <p className="text-gray-700 text-lg leading-8 mb-6">
                We carry out thru research to understand exactly what your app
                needs. We always push ourselves to deliver extremely trendy
                products by making use of top-notch technologies. As one of the
                most recommended software and app development partner, we try
                our best to deliver a swift experience of the development
                process.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Security of your App idea.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Fluent communication
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Transparent App Development
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    App Design Verification before Approval
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    On-Time App Delivery
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    App Quality is Assured
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/images/part-b-whyus.jpg"
                alt="Trusted Partners"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-2">
          <p className="text-center text-gray-600 text-lg mb-2">
            Mobile app and web development solution under one roof
          </p>

          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top App Development Company in Canada
          </h2>

          <p className="w-full text-center text-gray-700 text-lg leading-7 mb-4">
            iQlance being the quickest growing Top Toronto mobile app
            development company, possesses the team of developers, designers,
            Testers, Business Developers, Marketers and much more. The
            development of our multiplatform mobile app services can be useful
            for large enterprise to small and medium business. We strive to
            serve our clients with the customized mobile apps, high quality
            product and interactive UI/UX which helps to differentiate ourselves
            with other mobile app development companies in Canada.
          </p>

          <p className="w-full text-center text-gray-700 text-lg leading-7 mb-6">
            If you have an amazing idea for web or mobile app development, you
            can rely upon us to execute your idea. Our Top app developers in
            Canada understands the need of your mobile app and hence, develops
            the solution that is engaging, visually appealing and user-centric.
            Having released 200+ mobile apps on app store and play store, we
            have inculcated hands-on experience in developing the apps for any
            industrial domain.
          </p>

          <p className="text-center text-xl text-gray-800 mb-6 font-medium">
            Latest technology features find a way into our daily business
            practices that helps us stand out.
          </p>

          <div className="flex justify-center">
            <img
              src="/images/top-company-whyus.jpg"
              alt="App Development"
              className="w-full  shadow-lg object-cover"
            />
          </div>
        </section>
        <div className="w-full space-y-16 mt-5">
          {/* Top Banner Box */}
          <div className="bg-[#F4F8FB] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
                Check How We turn Your Idea into{" "}
                <br className="hidden sm:inline" />
                Innovative Product
              </h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg">
                Our rich portfolio justifies that, we are one of the best app
                development company in USA.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-[#1C4670] hover:bg-[#153658] text-white font-semibold px-6 py-3.5 transition duration-200"
              >
                See Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Bottom Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              10 Reasons to Choose “iQlance”
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
              We are on a mission to take enterprises to next level of their
              growth with unique and customized digital solutions.
            </p>
          </div>
        </div>

        <section className="w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 hover:shadow-lg transition duration-300 bg-white"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-[#F4F9FF] py-16 px-6 font-sans mb-10">
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
              Not Sure Which Engagement Model Is Right for Your Project? Talk to
              Our Experts Today.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Call us Today for a Free Consultation:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-[#EBF3FC] border border-[#3B82F6] rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <img
                    src="/icons/email-icon.svg"
                    alt="Email"
                    className="w-5 h-5 object-contain"
                  />
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <img
                    src="/icons/phone-icon.svg"
                    alt="Phone"
                    className="w-5 h-5 object-contain"
                  />
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
                href="/lets-talk"
                className="inline-flex items-center gap-2.5 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Discuss <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white w-full">
          <div className="text-center">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#1F2937]">
              Have Something in Mind? Let's Talk
            </h2>

            <p className="mt-6 text-lg md:text-[20px] leading-8 text-[#4B5563] w-full">
              Have a look at the services and development process of the iQlance
              solution. See what process we follow for mobile app and software
              development. Have a look at how we are praised by our clients.
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>

        <div className="mb-2.5 pb-2 mt-2 w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
