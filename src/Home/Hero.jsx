
import React from "react";
import {
  ArrowRight,
  Code2,
  BarChart3,
  Cloud,
  Settings,
  ShieldCheck,
  Zap,
  Users,
  Star,
  Menu,
  Gift,
} from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      description: "Your data is always protected.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Built for speed and reliability.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "We're here to help you.",
    },
    {
      icon: Star,
      title: "Trusted Platform",
      description: "Join thousands of happy users.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#faf7ef] text-slate-900">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-5 lg:pt-9">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e8d9] bg-[#eaf3e7] px-3 py-1 text-xs font-medium tracking-wide text-[#079b8c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10a895]" />
              Build · Earn · Grow
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px]">
              Welcome to
              <span className="block text-[#0da893]">MeerTech</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              Your trusted platform for technology, online earning
              and digital growth. Explore, learn and take your
              skills to the next level with MeerTech.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/earn"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0da995] to-[#079b8c] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-teal-900/10 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={16} />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-[#0da995] px-5 py-3 text-sm font-semibold text-[#079b8c] transition hover:bg-[#0da995] hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: Responsive Phone Preview */}
          <div className="relative mx-auto flex min-h-[350px] w-full max-w-[480px] items-center justify-center sm:min-h-[390px] lg:min-h-[370px]">
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6eee0] sm:h-72 sm:w-72" />

            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dce9dd] sm:h-60 sm:w-60" />

            {/* Decorative cards */}
            <div className="absolute left-[5%] top-[19%] z-10 flex h-11 w-10 -rotate-6 items-center justify-center rounded-lg bg-[#245d70] text-white shadow-lg sm:left-[9%]">
              <Code2 size={22} />
            </div>

            <div className="absolute left-[2%] top-[40%] z-10 flex h-10 w-10 -rotate-3 items-center justify-center rounded-lg bg-[#164f62] text-white shadow-lg sm:left-[5%]">
              <BarChart3 size={21} />
            </div>

            <div className="absolute right-[5%] top-[29%] z-10 flex h-10 w-10 rotate-6 items-center justify-center rounded-lg bg-[#245d70] text-white shadow-lg sm:right-[8%]">
              <Cloud size={21} />
            </div>

            <div className="absolute bottom-[15%] right-[9%] z-10 flex h-10 w-10 rotate-6 items-center justify-center rounded-lg bg-[#164f62] text-[#d7fff7] shadow-lg">
              <Settings size={21} />
            </div>

            <span className="absolute right-[21%] top-[14%] h-2 w-2 rounded-full bg-[#16b5a2]" />
            <span className="absolute bottom-[19%] left-[18%] h-2 w-2 rounded-full bg-[#16b5a2]" />

            {/* Phone outer frame */}
            <div className="relative z-20 w-[205px] rounded-[32px] border-[6px] border-[#111820] bg-[#111820] p-[4px] shadow-[0_20px_45px_rgba(15,35,35,0.24)] transition duration-300 hover:-translate-y-1 sm:w-[220px] lg:w-[215px]">
              {/* Top carbon frame */}
              <div className="relative rounded-t-[23px] bg-[#101820] px-3 pb-2 pt-2">
                <div className="flex items-center justify-between text-[8px] font-semibold text-white">
                  <span>9:41</span>
                  <span>●●● ▰</span>
                </div>

                <div className="mx-auto mt-1 h-3 w-16 rounded-full bg-black" />
              </div>

              {/* Phone screen */}
              <div className="overflow-hidden rounded-b-[23px] bg-white">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black italic text-[#0da995]">
                      M
                    </span>

                    <span className="text-xs font-extrabold text-slate-800">
                      Meer<span className="text-[#0da995]">Tech</span>
                    </span>
                  </div>

                  <Menu size={16} className="text-slate-700" />
                </div>

                {/* Phone Content */}
                <div className="px-3 pb-3 pt-3">
                  <span className="inline-block rounded-full bg-[#eaf3e7] px-2 py-1 text-[7px] font-medium text-[#079b8c]">
                    Build · Earn · Grow
                  </span>

                  <h2 className="mt-2.5 text-[21px] font-extrabold leading-[1.04] tracking-tight text-slate-900">
                    Welcome to
                    <span className="block text-[#0da995]">
                      MeerTech
                    </span>
                  </h2>

                  <p className="mt-2 text-[8px] leading-[1.55] text-slate-600">
                    Your trusted platform for technology, online earning
                    and digital growth. Explore, learn and take your
                    skills to the next level with MeerTech.
                  </p>

                  <a
                    href="/earn"
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-[#0da995] py-2 text-[9px] font-semibold text-white"
                  >
                    Get Started
                    <ArrowRight size={11} />
                  </a>

                  <a
                    href="/about"
                    className="mt-1.5 flex items-center justify-center rounded-full border border-[#0da995] py-1.5 text-[9px] font-semibold text-[#079b8c]"
                  >
                    Learn More
                  </a>

                  {/* Mini Features */}
                  <div className="mt-3 grid grid-cols-2 gap-x-1 gap-y-2 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1 text-[7px] font-medium text-slate-600">
                      <ShieldCheck size={11} className="shrink-0 text-[#0da995]" />
                      Safe & Secure
                    </div>

                    <div className="flex items-center gap-1 text-[7px] font-medium text-slate-600">
                      <Zap size={11} className="shrink-0 text-[#0da995]" />
                      Fast Performance
                    </div>
                  </div>

                  <a
                    href="/promotion"
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#0da995] to-[#079b8c] py-2 text-[9px] font-semibold text-white"
                  >
                    <Gift size={11} />
                    Promotion
                  </a>
                </div>
              </div>

              {/* Bottom carbon frame */}
              <div className="flex h-3 items-center justify-center rounded-b-[20px] bg-[#101820]">
                <div className="h-1 w-10 rounded-full bg-[#38444b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="mt-5 grid grid-cols-2 gap-y-5 border-t border-[#e9e5d9] pt-5 sm:grid-cols-4 sm:gap-0 lg:mt-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex items-start gap-3 ${
                  index !== 0
                    ? "sm:border-l sm:border-[#e9e5d9] sm:pl-4 lg:pl-6"
                    : ""
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-[#0da995]"
                />

                <div>
                  <h3 className="text-xs font-bold text-slate-800 sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
