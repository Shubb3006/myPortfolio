import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const Education = () => {
  const educations = [
    {
      instituteName: "Punjabi University, Patiala",
      courseName: "B.Tech in Computer Science Enginnering (CSE)",
      time: "2020-2024",
      description:
        "Completed a Bachelor's degree in Computer Science Engineering with a focus on software development, data structures, algorithms, database management systems, and web technologies while building multiple full-stack projects.",
    },
  ];
  return (
    <section
      id="education"
      className="flex justify-center items-center min-h-screen bg-base-100 px-4 py-24"
    >
      <div className="max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-orange-400">Education</span>
          </h2>
          <p className="text-base-content/50 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educations.map((e, index) => (
            <div
              key={index}
              className="group bg-base-300 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex p-6 gap-6">
                <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400 shrink-0 h-fit">
                  <GraduationCap size={25} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-1 ">
                    {e.courseName}
                  </h3>

                  <p className="text-orange-400 text-lg mb-1">
                    {e.instituteName}
                  </p>
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

export default Education;
