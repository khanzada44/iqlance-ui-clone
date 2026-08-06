"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../contactForm/ContactForm";
import { getBlogs } from "@/services/blog";
import { useRouter } from "next/navigation";
import { partners } from "../blog/data";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        // API response me se array nikalna
        const blogList = data?.response?.data || [];
        setBlogs(blogList);
      } catch (error) {
        console.log("Message:", error.message);
        console.log("Code:", error.code);
        console.log("Response:", error.response);
        console.log("Request:", error.request);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <section className="py-10 bg-white mt-2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div>
                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-[#1F4E99]">Blog</span>
                  </h1>

                  <p className="mt-6 text-black leading-8 text-lg">
                    iQlance - A Reliable and Professional Mobile App & Software
                    Development Company
                  </p>
                  <p className="mt-6 text-black leading-8 text-lg">
                    iQlance offers robust software development services that
                    really make a difference to businesses and brands worldwide.
                    We are a leading mobile app development company in Canada.
                    Right from the time we started till today, we have
                    successfully completed several projects - mobile app
                    development, web development, and e-commerce development for
                    businesses from diverse industry verticals.
                  </p>
                  <p className="mt-6 text-black leading-8 text-lg">
                    With iQlance, a brand will always get something that is
                    tailored to suit their business requirements. At iQlance, we
                    understand that every business is unique and has
                    requirements different from others. Hire dedicated
                    developers from iQlance and see a visible change in your
                    business.
                  </p>

                  <ul className="mt-8 space-y-5 text-lg text-black ">
                    <li className="flex items-center gap-1 mb-2 font-semibold">
                      <ChevronRight size={14} />
                      Software Development News
                    </li>
                    <li className="flex items-center gap-1 mb-2 text-black font-semibold">
                      <ChevronRight size={14} />
                      Mobile App Development News
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <button className="group w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                      Contact Us
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

          <section>
            <div>
              <h1 className="md:text-5xl text-center leading-tight text-3xl font-bold text-[29px] ">
                Our Blog
              </h1>
              <p className="mt-2 space-y-6 text-center md:text-lg leading-7">
                {" "}
                Have a software and mobile app development project in mind? Here
                are some of the blogs that will offer valuable insights when you
                are planning to hire a software and mobile app development
                company for your dream project.
              </p>
            </div>
          </section>

          {/* Dynamic Blogs Rendering */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div
                  key={`${blog.slug}-${index}`}
                  className="p-px bg-transparent hover:bg-linear-to-r hover:from-blue-300 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Link
                    href={`/single-blog?slug=${blog.slug}`}
                    className="group block overflow-hidden bg-white h-full"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      {blog.image_url ? (
                        <Image
                          src={blog.image_url}
                          alt={blog.title}
                          fill
                          unoptimized
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      {blog.category?.name && (
                        <span className="text-sm text-[#1F4E99] font-medium">
                          {blog.category.name}
                        </span>
                      )}

                      <h3 className="mt-3 text-xl font-semibold leading-7 text-black line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No blogs available.
              </div>
            )}
          </section>
        </div>
        <ContactForm/>
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