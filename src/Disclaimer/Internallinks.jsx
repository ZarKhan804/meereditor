import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Mail,
  Gift,
  BriefcaseBusiness,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const internalLinks = [
  {
    title: "MeerTech Home",
    description:
      "Visit our homepage to explore MeerTech and discover the information available on our website.",
    path: "/",
    icon: Home,
  },
  {
    title: "About MeerTech",
    description:
      "Learn more about MeerTech, our website, and the information and resources we share with visitors.",
    path: "/about",
    icon: Users,
  },
  {
    title: "Contact Us",
    description:
      "Contact our team if you have questions about our website, information, or services.",
    path: "/contact",
    icon: Mail,
  },
  {
    title: "Earn",
    description:
      "Explore the information on our Earn page and review any applicable details before proceeding.",
    path: "/earn",
    icon: BriefcaseBusiness,
  },
  {
    title: "Promotions",
    description:
      "Visit our promotions page to review available promotional information and applicable conditions.",
    path: "/promotion",
    icon: Gift,
  },
 {
  title: "Download Apps",
  description:
    "Explore our app downloads, including CapCut Pro and Remini Pro. Access download links and learn about app features, installation, and safe downloading.",
  path: "/download-url",
  icon: ShieldCheck,
},
];

const Internallinks = () => {
  return (
    <section className="bg-[#FAF7EF] px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <header className="mx-auto mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#DED2BE] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#806747]">
            Explore MeerTech
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#292820] sm:text-4xl">
            Explore More Pages
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#777064] sm:text-base">
            Discover MeerTech, explore our website sections, and find useful
            information about our pages and resources.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#947044]" />
        </header>

        {/* Compact Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {internalLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="group flex h-full w-full max-w-[290px] flex-col items-center rounded-2xl border border-[#E5DCCB] bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B9A587] hover:shadow-lg"
              >
                {/* Centered Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E5DCCB] bg-[#F5EFE4] text-[#806747] transition-all duration-300 group-hover:border-[#292820] group-hover:bg-[#292820] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Card Title */}
                <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#292820]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-[#777064]">
                  {item.description}
                </p>

                {/* Explore Button */}
                <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#DED2BE] bg-[#FAF7EF] px-4 py-2 text-xs font-bold text-[#806747] transition-all duration-300 group-hover:border-[#292820] group-hover:bg-[#292820] group-hover:text-white sm:text-sm">
                  Explore Page
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#413A2F] bg-[#292820] px-5 py-8 text-center sm:px-8 sm:py-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#FAF7EF]">
            <Mail size={22} />
          </div>

          <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Need More Information?
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
            Have a question about MeerTech or the information published on our
            website? Get in touch with our team.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF7EF] px-6 py-3 text-sm font-bold text-[#292820] transition duration-300 hover:bg-white hover:shadow-lg"
          >
            Contact Our Team
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Internallinks;