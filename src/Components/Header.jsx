
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Gift,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Earn", path: "/earn" },
  { name: "Promotion", path: "/promotion" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-teal-700"
        : "text-slate-700 hover:text-teal-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e1d3] bg-[#faf7ef]/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="MeerTech Home"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-11 w-11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 39V9L16 19L24 7L32 19L44 9V39H34V25L24 36L14 25V39H4Z"
              fill="#079B88"
            />
            <path
              d="M4 9L16 19L24 7L32 19L44 9L24 29L4 9Z"
              fill="#123047"
              fillOpacity=".85"
            />
          </svg>

          <span className="text-[25px] font-extrabold tracking-tight text-slate-950">
            Meer<span className="text-teal-600">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `${linkClass({ isActive })} relative py-3 ${
                  isActive
                    ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-teal-600"
                    : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Enroll Now Button */}
        <Link
          to="/contact#contact-form"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-teal-700/15 transition hover:-translate-y-0.5 hover:shadow-lg sm:flex"
        >
          <Gift size={17} />
          Enroll Now
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 text-slate-800 transition hover:bg-teal-50 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-stone-200 bg-[#faf7ef] px-5 pb-5 pt-3 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Enroll Now Button */}
            <Link
              to="/contact#contact-form"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-bold text-white transition hover:bg-teal-700"
            >
              <Gift size={18} />
              Enroll Now
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
