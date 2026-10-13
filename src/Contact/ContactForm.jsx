import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Package,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productName: "",
    description: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    try {
      await emailjs.send(
        "service_qkfiokw",
        "template_rzkxhzg",
        {
          name: formData.name,
          email: formData.email,
          product_name: formData.productName,
          description: formData.description,
          to_email: "meertechinfo@gmail.com",
          reply_to: formData.email,
        },
        {
          publicKey: "t24ySp0NZKxrqx4bo",
        }
      );

      setStatus("success");
      setStatusMessage(
        "Your inquiry has been sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        productName: "",
        description: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
      setStatusMessage(
        "Unable to send your inquiry. Please check your EmailJS settings and try again."
      );
    } finally {
      setStatus((current) =>
        current === "loading" ? "idle" : current
      );
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#E5DED2] bg-white py-4 pl-12 pr-4 text-sm text-[#292820] outline-none transition placeholder:text-[#AAA397] focus:border-[#98794F] focus:ring-4 focus:ring-[#98794F]/10";

  const labelClass =
    "mb-2 block text-left text-sm font-semibold text-[#39372F]";

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16"
      style={{ backgroundColor: "#FAF7EF" }}
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D9CBB5]/40" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#E9DDC9]/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#DED2BE] bg-white/70 px-4 py-2">
            <Sparkles
              size={15}
              className="text-[#98794F]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#806747]">
              Contact MeerTech
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#292820] sm:text-5xl md:text-6xl">
            Let's Talk About
            <br />

            <span className="font-serif italic text-[#98794F]">
              Your Product.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#777064] sm:text-lg">
            Have a product in mind or need more information?
            Send us your details and requirements. Our team
            will receive your inquiry by email.
          </p>

          <a
            href="mailto:meertechinfo@gmail.com"
            className="mt-4 inline-flex items-center justify-center gap-2 break-all text-sm font-semibold text-[#806747] transition hover:text-[#292820] sm:text-base"
          >
            <Mail size={18} className="shrink-0" />
            meertechinfo@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#E8DFD0] bg-white/90 p-5 shadow-[0_25px_80px_rgba(65,50,25,0.07)] sm:p-9 md:p-11">
          <div className="mb-7 text-center">
            <h3 className="text-2xl font-semibold text-[#292820] sm:text-3xl">
              Send an Inquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#898276]">
              Please fill in all four fields below.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="contact-name"
                className={labelClass}
              >
                Full Name{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49A88]"
                />

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className={labelClass}
              >
                Email Address{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49A88]"
                />

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label
                htmlFor="contact-product"
                className={labelClass}
              >
                Product Name{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <Package
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49A88]"
                />

                <input
                  id="contact-product"
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Enter the product name"
                  maxLength={150}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="contact-description"
                className={labelClass}
              >
                Description{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-[#A49A88]"
                />

                <textarea
                  id="contact-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your product or requirements..."
                  rows={5}
                  maxLength={3000}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <p className="mt-2 text-right text-xs text-[#A49A88]">
                {formData.description.length}/3000 characters
              </p>
            </div>

            {/* Success / Error */}
            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-3 rounded-xl p-4 text-sm leading-6 ${
                  status === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                ) : (
                  <AlertCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>{statusMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#292820] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#514735] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle
                    size={19}
                    className="animate-spin"
                  />
                  Sending Your Inquiry...
                </>
              ) : (
                <>
                  Send Your Inquiry

                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-6 text-[#999184]">
              Your inquiry will be sent to our team through EmailJS.
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-[#898276]">
          Thank you for choosing MeerTech.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;