import { ArrowUpRight, Github } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Facebook Post Page",
      description: "A beautiful landing page app using React and Tailwind.",
      tags: ["facebook", "dost", "story"],
      image:
        "https://images.unsplash.com/photo-1746014600750-795bb1f0c586?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      github: "#",
      live: "#",
    },
    {
      title: "Instagram Profile Dashboard",
      description:
        "Interactive analytics dashboard with data visualization and filtering capabilities.",
      tags: ["instagram", "gandiReels", "sponsers"],
      image:
        "https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      github: "#",
      live: "#",
    },
    {
      title: "Youtube Sabka baap",
      description:
        "Full-featured e-commerce platform with user authentication and payment processing.",
      tags: ["youtube", "paisa", "monitization"],
      image:
        "https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
    >
      {/* ✨ Title */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Featured <span className="text-[#38bdf8]">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>
      </div>

      {/* 🧩 Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d2224] border-1 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-[#334155] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  className="text-[#38bdf8] hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href={project.github}
                  className="text-[#38bdf8] hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 Button */}
      <div className="mt-12 z-10">
        <a
          href="https://github.com/dashboard"
          className="inline-flex items-center gap-2 bg-[#38bdf8] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#0ea5e9] transition-all duration-300"
        >
          Check My Github
          <ArrowUpRight size={18} />
        </a>
      </div>
</section>
  );
};

export default FeaturedProjects;
