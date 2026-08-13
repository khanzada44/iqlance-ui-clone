"use client";

import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import { submitCallRequest } from "@/services/send-call-request"; 
export default function FloatingTalkToExpert() {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      // Sirf phone number API me bhejna
      const payload = { number: phoneNumber };
      const response = await submitCallRequest(payload);
      console.log("Success:", response);

      setStatusMessage({
        type: "success",
        text: "Call request sent successfully!",
      });

      setPhoneNumber(""); // Clear input field

      // 3 seconds baad drawer auto-close
      setTimeout(() => {
        setIsOpen(false);
        setStatusMessage({ type: "", text: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting request:", error);
      setStatusMessage({
        type: "error",
        text: error?.response?.data?.message || "Something went wrong. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        {/* 1. Side Trigger Button */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center bg-red-700 hover:bg-red-600 text-white px-2 py-3 shadow-2xl cursor-pointer z-10 transition-all duration-200"
            style={{ writingMode: "vertical-rl" }}
          >
           <Phone size={15} className="rotate-90 mb-2" />
          <span className="hidden sm:inline font-bold text-sm">Talk to Expert</span>
          </button>
        </div>

        {/* 2. Slide-in Drawer Card */}
        <div
          className={`fixed right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl p-6 w-80 text-gray-800 transition-transform duration-300 ease-in-out rounded-l-xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <h3 className="text-center font-bold text-xl text-[#134479] mb-4 pb-2 border-b border-blue-200">
            Call Us Now
          </h3>

          {/* Contact Numbers */}
          <div className="space-y-3 mb-5 text-base font-semibold text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-lg">🇺🇸</span>
              <a href="tel:+14697939837" className="hover:underline">
                +1 469 793 9837
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🇺🇸</span>
              <a href="tel:+19174778991" className="hover:underline">
                +1 917 477 8991
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🇨🇦</span>
              <a href="tel:+16476379108" className="hover:underline">
                +1 647 637 9108
              </a>
            </div>
          </div>

          {/* OR Divider */}
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-sky-200"></div>
            </div>
            <span className="relative bg-white/95 px-3 text-xs font-semibold text-sky-400 uppercase">
              OR
            </span>
          </div>

          {/* Callback Request Form - Single Field */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="tel"
              placeholder="Phone No *"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134479] text-sm"
            />

            {/* Status Feedback Message */}
            {statusMessage.text && (
              <p
                className={`text-xs text-center font-semibold ${
                  statusMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#134479] hover:bg-[#0d3056] text-white font-semibold py-3 rounded-lg transition-colors text-sm shadow-md disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Request a Call Back"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}