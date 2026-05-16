import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-base-100 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          About Me
        </h2>
        <p className="text-gray-400 leading-8 text-lg text-center">
          I am a Full Stack Developer with experience in building modern,
          responsive, and scalable web applications using React.js, Next.js,
          Tailwind CSS, Node.js and MongoDB. I enjoy creating clean user interfaces,
          solving real-world problems, and continuously improving my development
          skills.
          <br />
          <br />
          Currently, I am working as an Assistant System Engineer at TCS while
          actively building personal projects to strengthen my expertise in
          frontend and full-stack development. My focus is on writing clean,
          maintainable code and delivering smooth user experiences.
          <br />
          <br />I am passionate about learning new technologies, building
          impactful products, and growing as a modern web developer.
        </p>
      </div>
    </section>
  );
};

export default About;
