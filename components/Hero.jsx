"use client";
import Link from "next/link";
import React from "react";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/Shubb3006",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github sm:w-5 sm:h-5"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
    },

    {
      href: "https://www.linkedin.com/in/shubham-bansal-537ab2216/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin sm:w-5 sm:h-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Leetcode",
      href: "https://leetcode.com/u/sm325642/",
      icon: <SiLeetcode className="w-5 h-5" />,
    },
  ];
  return (
    <section className="top-0 min-h-screen flex flex-col items-center justify-center bg-base-100 gap-4 text-center px-4">
      <h1 className="font-momo text-5xl md:text-7xl lg:text-8xl">
        Hello, I am
      </h1>

      <h1 className="font-momo text-5xl md:text-7xl lg:text-8xl text-orange-400">
        Shubham Bansal
      </h1>

      <p className="text-gray-400 max-w-xl text-sm md:text-lg">
        Full Stack Developer focused on building modern and responsive web
        applications using React.js, Next.js, Tailwind CSS, Node.js, MongoDB.
      </p>
      <div className="mt-10 flex sm:flex-row flex-col gap-4">
        <Link href="#projects">
          <button className="px-10 py-3 bg-orange-400 border-oramge rounded-full text-black cursor-pointer hover:scale-[1.1] transition-all duration-300">
            View My Work
          </button>
        </Link>

        <button className="px-10 py-3 border-base-300 bg-base-200 border rounded-2xl cursor-pointer hover:border-orange-400 hover:text-orange-400 duration-300">
          <Link
            href="/Shubham_Resume.pdf"
            target="_blank"
            className="flex gap-2"
          >
            Get Resume
          </Link>
        </button>
      </div>

      <div className="flex gap-5 mt-10">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="p-2.5 sm:p-3 rounded-lg bg-base-200 hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
