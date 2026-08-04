"use client";

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto bg-[#F7F8FA] my-12 border border-gray-200 shadow-sm ">
      <div className="grid lg:grid-cols-12 overflow-hidden">
        {/* Left Side: Contact Details */}
        <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 relative flex flex-col justify-between">
          <div className="space-y-8">
            {/* Phone & Email Section Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {/* Dallas */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="Phone"
                    className="w-4 h-4 object-contain"
                  />
                  Dallas, USA
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 469 793 9837
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt="Email"
                    className="w-4 h-4 object-contain"
                  />
                  Email
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base break-all">
                  info@iqlance.com
                </p>
              </div>

              {/* New York */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="Phone"
                    className="w-4 h-4 object-contain"
                  />
                  New York, USA
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 917 477 8991
                </p>
              </div>

              {/* Teams */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/teams.svg"
                    alt="Teams"
                    className="w-4 h-4 object-contain"
                  />
                  Teams
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  iQlance Solutions
                </p>
              </div>

              {/* Canada */}
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt="Phone"
                    className="w-4 h-4 object-contain"
                  />
                  Canada
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-base">
                  +1 647 637 9108
                </p>
              </div>
            </div>

            {/* Address List */}
            <div className="space-y-6 pt-2">
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                    alt="Address"
                    className="w-4 h-4 object-contain"
                  />
                  Dallas
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  17250 Dallas Pkwy Dallas, Tx 75248, USA
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                    alt="Address"
                    className="w-4 h-4 object-contain"
                  />
                  New York
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  295 Madison Ave 12th Fl, New York, NY 10017, USA
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-gray-500 text-sm">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                    alt="Address"
                    className="w-4 h-4 object-contain"
                  />
                  Canada
                </h4>
                <p className="mt-1 font-bold text-gray-900 text-sm leading-relaxed">
                  502-10 Markbrook Lane, Etobicoke, M9V5E7, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Button and Hand Image */}
          <div className="mt-8 flex items-end justify-between relative z-10">
            <button className="bg-[#184A8B] hover:bg-[#123b72] text-white px-5 py-3  text-sm font-semibold transition flex items-center gap-2 shrink-0 cursor-pointer">
              <span>Download company profile</span>
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/download-btn-arrow.svg"
                alt=""
                className="w-4 h-4"
              />
            </button>

            <img
              src="https://www.iqlance.com/wp-content/uploads/2024/10/hand-phone-1.webp"
              alt="Hand Phone"
              className="w-28 sm:w-36 -mr-6 -mb-10 object-contain pointer-events-none"
            />
          </div>
        </div>

        {/* Right Side: Form Block */}
        <div className="lg:col-span-7 p-6 md:p-10 relative bg-[#F7F8FA] ">
      {/* Top Right Guaranteed Response Badge */}
      <img
        src="https://www.iqlance.com/wp-content/uploads/2025/11/badge-sameday-resposnse.png"
        className="absolute top-4 right-4 md:right-8 w-24 sm:w-28 md:w-32 z-10 pointer-events-none"
        alt="Same Day Response Guaranteed"
      />

      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-8 pt-2">
        How Can We Help?
      </h2>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Name Fields */}
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-2">
            Name
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184A8B] transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184A8B] transition-colors"
              required
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
            placeholder="Your email address*"
            className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184A8B] transition-colors"
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
            placeholder="Phone*"
            className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184A8B] transition-colors"
            required
          />
        </div>

        {/* Select Service Dropdown */}
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-2">
            Select a Service
          </label>
          <div className="relative">
            <select className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-[#184A8B] appearance-none cursor-pointer pr-10">
              <option value="">Select a Service</option>
              <option value="mobile">Mobile App Development</option>
              <option value="web">Web Development</option>
              <option value="ai">AI Development</option>
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
            rows={4}
            placeholder="Message"
            className="w-full bg-white border border-gray-300  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184A8B] resize-y transition-colors"
          ></textarea>
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="newsletter"
            className="w-4 h-4  border-gray-300 text-[#184A8B] focus:ring-[#184A8B] cursor-pointer"
          />
          <label
            htmlFor="newsletter"
            className="text-xs font-semibold text-gray-800 cursor-pointer select-none"
          >
            Subscribe Our newsletter
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-[#184A8B] hover:bg-[#123b72] text-white px-7 py-3.5 text-sm font-bold transition duration-200 cursor-pointer shadow-sm"
          >
            Schedule a free consultation
          </button>
        </div>
      </form>
    </div>
      </div>
    </section>
  );
}
