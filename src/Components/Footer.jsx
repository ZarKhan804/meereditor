
import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,

} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "About", path: "/about" },
    { name: "Earn", path: "/earn" },
    { name: "Promotion", path: "/promotion" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1BpDXnaSxf/?mibextid=wwXIfr",
      icon: FaFacebookF,
    },
   
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Meereditor-01",
      icon: FaYoutube,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/meereditor01",
      icon: FaInstagram,
    },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="border-t border-[#e9e5d9] bg-[#faf7ef] text-slate-700">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-6 py-9 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.35fr_0.8fr_0.95fr_1fr] lg:gap-10 lg:px-10 lg:py-8">

        {/* Brand and Social Links */}
        <div>
          <a
            href="/"
            aria-label="MeerTech home"
            className="inline-flex items-center gap-3"
          >
            {/* MeerTech Logo */}
            <svg
              viewBox="0 0 64 64"
              className="h-12 w-12 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 54V10H17L32 25L47 10H59V54H46V30L32 44L18 30V54H5Z"
                fill="#079B8C"
              />
              <path
                d="M32 25L47 10H59L32 38V25Z"
                fill="#173A4D"
              />
              <path
                d="M5 10H17L32 25V38L5 10Z"
                fill="#16B5A2"
              />
            </svg>

            <div>
              <div className="text-[29px] font-extrabold leading-none tracking-tight text-slate-900">
                Meer<span className="text-[#079b8c]"> Tech</span>
              </div>

              <p className="mt-1.5 text-center text-xs font-semibold tracking-wide text-[#079b8c]">
                Learn&nbsp; · &nbsp;Earn&nbsp; · &nbsp;Grow
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-[270px] text-sm leading-5 text-slate-500">
            Your trusted partner in technology and online earning.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14283d] text-white transition duration-200 hover:-translate-y-1 hover:bg-[#079b8c]"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-3 text-base font-bold text-slate-900">
            Quick Links
          </h2>

          <ul className="space-y-1.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm text-slate-500 transition hover:pl-1 hover:text-[#079b8c]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-4 text-base font-bold text-slate-900">
            Contact Us
          </h2>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 fill-slate-800 text-slate-800"
              />

              <span className="text-sm text-slate-500">
                Islamabad, Pakistan
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Mail
                size={16}
                className="mt-0.5 shrink-0 text-slate-800"
              />

              <a
                href="mailto:Meertechinfo@gmail.com"
                className="break-all text-sm text-slate-500 transition hover:text-[#079b8c]"
              >
               Meertechinfo@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Phone
                size={16}
                className="mt-0.5 shrink-0 fill-slate-800 text-slate-800"
              />

              <a
                href="tel:+923001234567"
                className="text-sm text-slate-500 transition hover:text-[#079b8c]"
              >
                +92 3704846782
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="mb-3 text-base font-bold text-slate-900">
            Newsletter
          </h2>

          <p className="max-w-[260px] text-sm leading-5 text-slate-500">
            Get the latest updates and offers straight to your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex flex-col gap-2 min-[420px]:flex-row lg:flex-col xl:flex-row"
          >
            <label
              htmlFor="newsletter-email"
              className="sr-only"
            >
              Enter your email
            </label>

            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="min-w-0 flex-1 rounded-md border border-[#dcded6] bg-white/70 px-3 py-2.5 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#079b8c] focus:ring-2 focus:ring-[#079b8c]/15"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#079b8c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#087f75]"
            >
              <Send size={13} />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#e9e5d9]">
        <div className="mx-auto max-w-7xl px-6 py-3 sm:px-8 lg:px-10">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MeerTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
