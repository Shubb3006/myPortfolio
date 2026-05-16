"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-base-300/90 backdrop-blur-md border-b border-base-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* logo */}
        <h1 className="text-xl sm:text-2xl font-bold">Shubham Bansal</h1>

        {/* desktop nav */}
        <div className="hidden md:flex gap-2 border-base-100 rounded-full border p-1 bg-base-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`#${link.href}`}
              className={`relative px-4 py-2 text-sm rounded-full z-10 transition-colors duration-300
              ${
                activeSection === link.href
                  ? "text-black"
                  :"text-base-content/70 hover:text-orange-400"
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-orange-400 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}

              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-base-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="flex flex-col gap-2 bg-base-200 rounded-2xl p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    activeSection === link.href
                      ? "bg-orange-400 text-black"
                      : "text-gray-400 hover:text-white hover:bg-base-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
