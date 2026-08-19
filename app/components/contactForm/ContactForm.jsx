"use client";
import React from 'react';
import { useState } from "react";
import { submitContactForm } from "@/services/send-call-request";



export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const bodyFormData = new FormData();

      // First Name aur Last Name ko merge karke 'name' key me bhej rahe hain
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      bodyFormData.append("name", fullName);

      // Baaki fields
      bodyFormData.append("email", formData.email);
      bodyFormData.append("phone", formData.phone);
      bodyFormData.append("message", formData.message || "");
      bodyFormData.append("is_nda", formData.newsletter ? "1" : "0");
      bodyFormData.append("service", formData.service || "");
      bodyFormData.append("service_category", "");

      // Correct API Call
      const response = await submitContactForm(bodyFormData);

      // Axios Call Validation
      if (
        response &&
        (response.status === 200 || response.success || response.status === 201)
      ) {
        setStatus({ type: "success", text: "Form submitted successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          newsletter: false,
        });
      } else {
        setStatus({
          type: "error",
          text: response?.message || "Failed to submit. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        text:
          err?.response?.data?.message ||
          "Something went wrong. Check connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto bg-[#F7F8FA] my-12 border border-gray-200 shadow-sm">
      <div className="grid lg:grid-cols-12 overflow-hidden">
        {/* Left Side: Contact Details */}
        <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 relative flex flex-col justify-between">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
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
                  />
                  Dallas, USA
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 469 793 9837
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/email-icon.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/email-icon.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}
                  />
                  Email
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base break-all">
                  info@DevAppGrid.com
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/phone-icon.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/phone-icon.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}
                  />
                  New York, USA
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 917 477 8991
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                </h4>
                <div
                  className="w-6 h-6 bg-red-600"
                  style={{
                    maskImage: 'url(/icons/teams.svg)',
                    maskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    WebkitMaskImage: 'url(/icons/teams.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain'
                  }}></div>
                Teams
                <p className="mt-1 font-bold text-gray-900 text-base">
                  Devapp Solutions
                </p>
              </div>

              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/phone-icon.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/phone-icon.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}
                  />
                  Canada
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 647 637 9108
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/address-icn.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/address-icn.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}></div>

                  Dallas
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  17250 Dallas Pkwy Dallas, Tx 75248, USA
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/address-icn.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/address-icn.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}></div>
                  New York
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  295 Madison Ave 12th Fl, New York, NY 10017, USA
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: 'url(/icons/address-icn.svg)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskImage: 'url(/icons/address-icn.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain'
                    }}></div>
                  Canada
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  502-10 Markbrook Lane, Etobicoke, M9V5E7, Canada
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-end justify-between relative z-10">
            <a
              href="/documents/iQlance-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#B91C1C] hover:bg-[#991B1B] text-white px-5 py-3 text-sm font-semibold transition flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Download company profile</span>

              <img
                src="/icons/download-btn-arrow.svg"
                alt=""
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

          <img
            src="/images/hand-phone-1.png"
            alt="Hand Phone"
            className="w-28 sm:w-36 -mr-6 -mb-10 object-contain pointer-events-none"
          />
        </div>
      </div>

      {/* Right Side: Form Block */}
      <div className="lg:col-span-7 p-6 md:p-10 relative bg-[#F7F8FA]">
        <div className="bg-transparent">
          <img
            src="/images/contact-form-logo.png"
            className="absolute top-4 bg-transparent right-4 md:right-8 w-24 sm:w-28 md:w-32 z-10 pointer-events-none"
            alt="Same Day Response Guaranteed"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-8 pt-2">
          How Can We Help?
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              Name
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address*"
              className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
              required
            />
          </div>

          {/* Select Service Dropdown */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              Select a Service
            </label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-[#B91C1C] appearance-none cursor-pointer pr-10"
              >
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="iOS App Development">iOS App Development</option>
                <option value="Android App Development">Android App Development</option>
                <option value="Swift App Development">Swift App Development</option>
                <option value="Kotlin App Development">Kotlin App Development</option>
                <option value="IPad App Development">IPad App Development</option>
                <option value="PWA Development">PWA Development</option>
                <option value="React Native Development">React Native Development</option>
                <option value="Flutter App Development">Flutter App Development</option>
                <option value="Cross Platform App Development">Cross Platform App Development</option>
                <option value="MVP App Development">MVP App Development</option>
                <option value="Smart Watch App Development">Smart Watch App Development</option>
                <option value="Hybrid App Development">Hybrid App Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Software Development">Software Development</option>
                <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI Development">AI Development</option>
                <option value="Enterprise Solutions">Enterprise Solutions</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              Brief about the project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] resize-y transition-colors"
            ></textarea>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 text-[#B91C1C] focus:ring-[#B91C1C] cursor-pointer"
            />
            <label
              htmlFor="newsletter"
              className="text-xs font-semibold text-gray-800 cursor-pointer select-none"
            >
              Subscribe Our newsletter
            </label>
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`text-xs font-bold ${status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {status.text}
            </p>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-3.5 text-sm font-bold transition duration-200 cursor-pointer shadow-sm disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Schedule a free consultation"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </section >
  );
}
