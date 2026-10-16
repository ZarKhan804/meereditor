
import React from "react";
import { ShieldCheck, ArrowDown, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7EF] px-5 py-12 sm:px-8 sm:py-16 lg:py-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D9CBB5]/50 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#D9CBB5]/40" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E9DDC9]/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DED2BE] bg-white/70 px-4 py-2">
          <ShieldCheck size={16} className="text-[#8B7355]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#806747]">
            Transparency & Trust
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#292820] sm:text-5xl md:text-7xl">
          Website
          <br />
          <span className="font-serif font-normal italic text-[#98794F]">
            Disclaimer
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#777064] sm:text-lg">
          Read the MeerTech website disclaimer to understand how we
          present information, maintain content transparency, link to
          external resources, and explain the limitations of using
          information published on our website.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {[
            "Information Accuracy",
            "External Links",
            "Responsible Use",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-[#625B4F]"
            >
              <CheckCircle2 size={17} className="text-[#8B7355]" />
              {item}
            </div>
          ))}
        </div>

        <a
          href="#disclaimer-content"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#292820] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#514735]"
        >
          Read Disclaimer
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
