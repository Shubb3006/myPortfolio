import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const allPRojects = [
    {
      name: "TradeWin",
      description:
        "A Modern Full stack WebApp with multiple roles and mutiple users and My role is Senior Frontend Developer.",
      githubLink: "https://github.com/Shubb3006/stock-trading",
      link: "https://stock-trading-hfug.vercel.app/",
      skills: ["Next.js", "Next.js API", "TailwindCSS", "MongoDB"],
    },
    {
      name: "E-commerce Platform",
      description:
        "Built a modern full-stack e-commerce platform with product listings, authentication, cart management, and responsive UI using Next.js, MongoDB, and Tailwind CSS.",
      githubLink: "https://github.com/Shubb3006/jewellery_store",
      link: "https://jewellery-store-coral.vercel.app/",
      skills: ["Next.js", "Next.js API", "TailwindCSS", "MongoDB"],
    },
    {
      name: "Real Time Chat Application",
      description:
        "A Modern Full stack WebApp with multiple roles and mutiple users and My role is Senior Frontend Developer.",
      githubLink: "https://github.com/Shubb3006/chat-app-2",
      link: "https://full-stack-chat-app-f6fa.onrender.com",
      skills: ["React.js", "Node.js", "Express.js", "Socket.IO", "TailwindCSS"],
    },
    {
      name: "Expense Manager",
      description:
        "A Modern Full stack WebApp with multiple roles and mutiple users and My role is Senior Frontend Developer.",
      githubLink: "https://github.com/Shubb3006/expense-manager",
      link: "https://expensemanager-f4ck.onrender.com/",
      skills: ["React.js", "Node.js", "Express.js", "TailwindCSS", "MongoDB"],
    },
    {
      name: "Fitness App",
      description:
        "A Modern Full stack WebApp with multiple roles and mutiple users and My role is Senior Frontend Developer.",
      githubLink: "https://github.com/Shubb3006/fitness-app",
      link: "https://fitness-app-alpha-flame.vercel.app/",
      skills: ["Next.js", "Next.js API", "TailwindCSS", "MongoDB"],
    },
   
  ];
  return (
    <div
      id="projects"
      className="min-h-screen py-32 flex flex-col items-center justify-center bg-base-100 gap-4 px-4"
    >
      <div className="max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-base-content/50 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {allPRojects.map((p, index) => (
            <div
              key={index}
              className="group bg-base-200 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6 border-b">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {p.name}
                  </h3>
                  <div className="flex gap-1">
                    <button>
                      <Link href={p.githubLink} target="_blank">
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
                      </Link>
                    </button>
                    <button>
                      <Link href={p.link} target="_blank">
                        <ExternalLink />
                      </Link>
                    </button>
                  </div>
                </div>
                <p className="text-sm text-base-content/70 ">{p.description}</p>
              </div>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 px-2 ">
                  {p.skills.map((s, i) => (
                    <span key={i} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
