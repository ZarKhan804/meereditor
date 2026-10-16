import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", path: "/" },
  { title: "Contact", path: "/contact" },
  { title: "Disclaimer", path: "/disclaimer" },
  { title: "Earn", path: "/earn" },
  { title: "Promotions", path: "/promotion" },
];

const Internallinks = () => {
  return (
    <section className="bg-[#FAF7EF] px-5 py-12">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#29251F] md:text-3xl">
          Discover More at Meer Editor
        </h2>

        <p className="mx-auto max-w-3xl text-sm leading-8 text-[#62594D] md:text-base">
          Meer Editor brings together creative resources, editing
          inspiration, and useful information for visitors who want to
          explore digital creativity. Discover our website to learn about
          our purpose, explore available opportunities, and find helpful
          information in one place. Whether you are visiting for the first
          time or returning to explore more, our website provides a simple
          way to navigate between important sections. If you have questions
          or would like to share feedback, you can find our contact
          information on the relevant page. We also encourage visitors to
          review our website disclaimer for additional information about
          the content and its use. Explore the different sections below
          to learn more about Meer Editor, discover promotional updates,
          and access the information that matters to you. Our goal is to
          keep navigation straightforward, provide a pleasant browsing
          experience, and make important website resources easy to find.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="inline-flex items-center justify-center rounded-full border border-[#E4D8C5] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#6F5434] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#947044] hover:bg-[#947044] hover:text-white hover:shadow-md"
            >
              {page.title}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internallinks;