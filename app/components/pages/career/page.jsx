import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { careerLinks } from "../career/data";
import ContactForm from "../../contactForm/ContactForm";

export default function career() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/career-header.png"
            alt=""
          />
        </div>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              <span className="text-[#2F69C9]">Career</span>
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14">
              <button className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-3 transition">
                Contact Us
                <ArrowRight size={18} />
              </button>

              <button className="w-full sm:w-auto border border-gray-300 hover:border-[#184A8B] hover:text-[#184A8B] px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-3 transition">
                See Our Work
                <ArrowRight size={18} />
              </button>
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
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
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
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/why-iq-join-photo.jpg"
                alt="Why Join iQlance"
                className="w-full aspect-16/10 lg:aspect-4/3 rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <div className="mb-2.5 pb-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
