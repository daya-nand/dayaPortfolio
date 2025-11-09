import { FaCode, FaPaintBrush, FaProjectDiagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 sm:px-10 md:px-16 lg:px-20 relative overflow-hidden"
    >
      {/* 🌟 Title */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          About <span className="text-[#38bdf8]">Me</span>
        </h1>
      </div>

      {/* 🧱 Layout: Left info + Right cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            A Full-Stack Web Developer
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I’m a passionate and dedicated full-stack web developer, eager to
            begin my professional journey in the tech industry. I enjoy turning
            ideas into interactive, responsive, and user-friendly web
            experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            As a quick learner, I’m constantly exploring new technologies and
            improving my skills to write clean, efficient, and modern code. I’m
            excited to contribute to real-world projects and grow as a developer
            with every challenge I take on.
          </p>

          {/* 🎯 Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
            <button className="px-5 py-2.5 bg-[#38bdf8] text-black font-semibold rounded-full hover:bg-[#0ea5e9] transition-all duration-300">
              Get In Touch
            </button>
            <button className="px-5 py-2.5 border border-[#38bdf8] text-[#38bdf8] rounded-full hover:bg-[#38bdf8]/10 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div className="w-full rounded-xl bg-[#25303b] p-5 flex items-start gap-4 text-start hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="bg-[#38bdf8]/20 text-[#38bdf8] h-12 w-12 rounded-full flex items-center justify-center text-xl">
              <FaCode />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-white">
                Web Development
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Creating responsive websites and web applications using modern
                frameworks and tools.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full rounded-xl bg-[#25303b] p-5 flex items-start gap-4 text-start hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="bg-[#38bdf8]/20 text-[#38bdf8] h-12 w-12 rounded-full flex items-center justify-center text-xl">
              <FaPaintBrush />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-white">UI/UX Design</h1>
              <p className="text-sm text-gray-400 mt-1">
                Designing intuitive and seamless user interfaces for better
                digital experiences.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full rounded-xl bg-[#25303b] p-5 flex items-start gap-4 text-start hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="bg-[#38bdf8]/20 text-[#38bdf8] h-12 w-12 rounded-full flex items-center justify-center text-xl">
              <FaProjectDiagram />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-white">
                Project Management
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Managing projects efficiently from conception to deployment
                using agile principles.
              </p>
            </div>
          </div>
        </div>
      </div>
</section>
  );
};

export default AboutMe;
