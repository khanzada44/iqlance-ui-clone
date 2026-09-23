"use client";
import React, { useState, useRef } from "react";
import { X, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { submitContactForm } from "../../../../services/send-call-request";

export default function QuoteModal({ isOpen, onClose }) {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    service_category: "",
    file: null,
    sendNda: false,
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = new FormData();

      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      await submitContactForm(payload);

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        service_category: "",
        file: null,
        sendNda: false,
      });

      setErrors({});

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => {
        onClose();
        router.push("/thank-you");
      }, 1000);
    } catch (error) {
      console.error("API ERROR:", error);

      let errorMessage = "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors?.file) {
        errorMessage = error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col md:flex-row my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/20 p-1.5 text-gray-600 transition hover:bg-black/10 md:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="w-full md:w-5/12 bg-linear-to-br from-red-600 to-red-800 p-6 sm:p-8 text-white flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider font-medium text-red-200">
                  Let's Turn Your Idea Into a Market-Ready Product
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
                  Request a Quote
                </h2>

                <div className="mt-6 space-y-2 text-xs sm:text-sm text-red-100">
                  <p>
                    <span className="font-semibold text-white">Share Details:</span> info@devappgrid.com
                  </p>
                  <p>
                    <span className="font-semibold text-white">Talk To Experts:</span> +1 (866) 978-8570
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-xs sm:text-sm text-red-100">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    45-minute free consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    Strict NDA and IP confidentiality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    Detailed feature & scope document
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    Customized roadmap & budget estimate
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-7/12 bg-red-50/30 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Got a Project in Mind?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                We Guarantee To Get Back To You Within A Business Day.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Write here Brief about the project..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-red-600 focus:outline-none resize-none transition-colors disabled:opacity-50"
                  ></textarea>
                </div>

                {/* File Upload */}
                <div className="flex items-center gap-2 text-xs text-gray-600 pt-2">
                  <label className="flex cursor-pointer items-center gap-1.5 font-medium hover:text-red-600 transition-colors">
                    <Paperclip size={16} />
                    <span>Upload file</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                      disabled={loading}
                      className="hidden"
                    />
                  </label>
                  <span className="text-gray-400 truncate max-w-50">
                    {formData.file ? formData.file.name : "No file chosen."}
                  </span>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="sendNdaModal"
                    name="sendNda"
                    checked={formData.sendNda}
                    onChange={handleChange}
                    disabled={loading}
                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                  />
                  <label htmlFor="sendNdaModal" className="text-xs text-gray-600 select-none cursor-pointer">
                    Please Send NDA
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full rounded-md bg-red-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Request"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}