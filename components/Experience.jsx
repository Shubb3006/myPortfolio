import React from "react";
import { Briefcase, Building2, Code2, Laptop } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      name: "Tata Consultancy Services (TCS)",
      role: "Assistant System Engineer",
      description:
        "Built reusable React.js components, reducing development time by 25% and improving UI consistency across modules, Optimized API data fetching and state handling, improving application responsiveness and reducing redundant requests, Debugged production issues and improved system stability across multiple modules, Collaborated with cross-functional teams to deliver scalable web features",
      time: "Nov 2024 - Present",
      status: "current",
    },
    {
      name: "Novem Controls",
      role: "Full Stack Developer Intern",
      description:
        "Built full-stack applications using MERN stack including authentication and CRUD APIs, Designed responsive UI components using React.js and Tailwind CSS, Implemented JWT-based authentication and handled API integrations",
      time: "Jan 2024 - June 2024",
      status: "null",
    },
  ];
  return (
    <section
      id="experience"
      className="flex justify-center min-h-screen bg-base-300 items-center px-4 py-24"
    >
      <div className="max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-orange-400">Experience</span>
          </h2>
          <p className="text-base-content/50 max-w-2xl mx-auto">
            My Experience Journey
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((e, index) => (
            <div
              key={index}
              className="group bg-base-200 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex p-6 gap-6">
                <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400 shrink-0 h-fit">
                  <Briefcase size={25} />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    {" "}
                    <h3 className="text-xl font-semibold mb-1">{e.name}</h3>
                    {e.status === "current" && (
                      <div className="badge badge-soft badge-success">
                        Current
                      </div>
                    )}
                  </div>

                  <p className="text-orange-400 text-lg mb-1">{e.role}</p>
                  <p className="text-base-content/70 mb-3 text-sm">{e.time}</p>

                  <p className="text-base-content/70 leading-7">
                    {e.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
