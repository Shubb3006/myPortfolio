"use client";
import { Code2, Palette, Wrench } from "lucide-react";
import React from "react";
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-32 flex flex-col items-center justify-center bg-base-300 gap-4 text-center px-4"
    >
      <div className="max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-orange-400">Skills</span>
          </h2>
          <p className="text-base-content/50 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* frontend core */}
          <div className="project-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400">
                <Code2 />
              </div>
              <h3 className="font-display text-lg font-semibold">
                Frontend Core
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Context API</span>
              <span className="skill-tag">Zustand</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          {/* ui and styling */}
          <div className="project-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400">
                <Palette />
              </div>
              <h3 className="font-display text-lg font-semibold">
                UI &amp; Styling
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Framer Motion</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Shadecn/ui</span>
            </div>
          </div>
          {/* languages */}
          <div className="project-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400">
                <Code2 />
              </div>
              <h3 className="font-display text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          {/* backend */}
          <div className="project-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400">
                <Code2 />
              </div>
              <h3 className="font-display text-lg font-semibold">
                Backend Core
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">Next.js API Routes</span>
              <span className="skill-tag">JWT Authentication</span>
            </div>
          </div>
          {/* tools */}
          <div className="project-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400">
                <Wrench />
              </div>
              <h3 className="font-display text-lg font-semibold">
                Tools &amp; Integration
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Thunder Client</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Git &amp; GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
