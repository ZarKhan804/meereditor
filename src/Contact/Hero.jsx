
import React from "react";
import { Mail, MessageCircle, ArrowDown } from "lucide-react";

const Hero = () => {
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

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 sm:w-auto"
            >
              <Mail size={18} />
              Send Us a Message
            </a>

            <a
              href="mailto:info@example.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition duration-300 hover:border-gray-900 sm:w-auto"
            >
              <MessageCircle size={18} />
              Email Us
            </a>
          </div>

          {/* Bottom Note */}
          <a
            href="#contact-form"
            className="mt-14 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
          >
            Scroll down to connect with us
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
