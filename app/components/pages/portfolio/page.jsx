"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto max-w-full overflow-hidden">
        <section>
          <img
            src="/images/porfoilo-header-banner.jpg"
            alt=""
            className="mt-10"
          />
          <h1 className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-10">
            See Our Wide Range Of Innovative Apps & Websites Award-Winning App
            Development Agency
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center mt-5">
            Portfolio
          </p>
          <br />
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center">
            As a market leader in providing the best app, web and mobile app
            development services, iQlance team is striving hard to offer you the
            best assistance. satisfaction.
          </p>
          <br />
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center">
            Your dreams are not only a project for us, it's our responsibility
            to fulfill it with full dedication so that you can take your
            business to the new heights.
          </p>
          <div className="text-center">
          <Link
            href="/request-a-quote"
            className="group mt-8 inline-flex w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition rounded-md cursor-pointer"
          >
            Get a Free Quote
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          </div>

        </section>
        <section>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center mt-5">
            The Glimpse of our Creative Works
          </h1>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center">
            We are strategists. We are innovators. We are a team of full-stack
            software and mobile app developers, which doesn’t get settled for
            good but work for great and innovative solutions to take your
            business to the next level. iQlance has developed over 150+ iOS and
            Android mobile applications for many enterprise clients
          </p>
        </section>
      </div>
    </>
  );
}
