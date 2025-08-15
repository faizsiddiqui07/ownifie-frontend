import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../assets/images/logo3.webp";

const navLinks = [
  { name: "Projects", to: "/projects" },
  { name: "Business Model", to: "/business-model" },
  {
    name: "Expertise & Services",
    dropdown: [
      { label: "Why Choose", to: "/why-choose" },
      { label: "Core Functionality", to: "/core-functionality" },
    ],
  },
  { name: "About us", to: "/about-us" },
  { name: "Contact Us", to: "/contact-us" },
  // {
  //   name: "More",
  //   dropdown: [
  //     // { label: "Property Management", to: "/property-management" },
  //     // { label: "Channel Partner", to: "/channel-partner" },
  //     { label: "Blog", to: "/blog" },
  //     { label: "FAQ", to: "/faq" },
  //   ],
  // },
];

const Header = () => {
  const { pathname } = useLocation();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <ScrollToTop />
      <header className="bg-[#ffffff9a] shadow-md fixed top-0 w-full z-50">
        <div className="mx-auto px-4 sm:px-16 flex justify-between items-center h-[75px]">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-gray-800">
            <img src={logo} className="w-44" loading="lazy" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map(({ name, to, dropdown }, index) =>
              dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="font-medium text-lg text-[#122F6B] hover:text-[#972608] transition">
                    {name}
                  </button>
                  <div
                    className={`w-[220px] absolute right-0 bg-white shadow-lg border p-2 border-gray-200 mt-2 rounded-md z-50 transform transition-all duration-500 ease-in-out ${
                      hoverIndex === index
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.to}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={to}
                  className={`${
                    pathname === to ? "text-[#972608]" : ""
                  } font-medium text-lg text-[#122F6B] hover:text-[#972608] transition`}
                >
                  {name}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger Button (Mobile) */}
          <button
            ref={hamburgerRef}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
 
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white shadow-md border-t border-gray-200"
          >
            <nav className="space-y-2 py-4 px-4">
              {navLinks.map(({ name, to, dropdown }, index) =>
                dropdown ? (
                  <div key={index} className="relative">
                    <button className="w-full text-left font-medium text-[#122F6B]">
                      {name}
                    </button>
                    <div className="pl-4 mt-2 space-y-2">
                      {dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          className="block text-[#972608]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={to}
                    className="block font-medium text-[#122F6B]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
