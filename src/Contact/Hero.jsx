import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "923704846782";
  const whatsappMessage = encodeURIComponent(
    "Hello Meer Editor, I would like to get in touch with you."
  );
  const email = "meertechinfo@gmail.com";

  const pages = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Disclaimer", path: "/disclaimer" },
    { title: "Earn", path: "/earn" },
    { title: "Promotions", path: "/promotion" },
  ];

  return (
    <section
      className="w-full overflow-hidden py-16 sm:py-20 lg:py-10"
      style={{ backgroundColor: "#FAF7EF" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-700">
              CONTACT US
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            Let's Start a{" "}
            <span className="text-[#8B7355]">Conversation</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a question, an idea, or a project in mind? We'd love to hear
            from you. Get in touch with our team and let's create something
            meaningful together.
          </p>

          {/* Contact Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#contact-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 sm:w-auto"
            >
              <Mail size={18} />
              Send Us a Message
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#1DA851] sm:w-auto"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition duration-300 hover:border-gray-900 sm:w-auto"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>

          {/* Scroll Note */}
          <a
            href="#contact-form"
            className="mt-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
          >
            Scroll down to connect with us
            <ArrowDown size={16} />
          </a>

          {/* SEO-Friendly Internal Page Links */}
          <div className="mt-10 border-t border-[#E7DECF] pt-7">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#7B674D]">
              Explore Meer Editor
            </h2>

            <nav
              aria-label="Explore website pages"
              className="flex flex-wrap items-center justify-center gap-2.5"
            >
              {pages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#E4D8C5] bg-white/70 px-4 py-2 text-sm font-medium text-[#6F5434] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#947044] hover:bg-[#947044] hover:text-white"
                >
                  {page.title}
                  <ArrowRight
                    size={13}
                    className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;