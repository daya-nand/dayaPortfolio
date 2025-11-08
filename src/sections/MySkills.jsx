import { useState } from "react";

const MySkills = () => {
  const skillsType = ["All", "Frontend", "Backend", "Tools"];
  const [selected, setSelected] = useState("All");

  const skills = [
    { name: "HTML/CSS", level: 95, type: "Frontend" },
    { name: "JavaScript", level: 90, type: "Frontend" },
    { name: "React", level: 90, type: "Frontend" },
    { name: "TypeScript", level: 85, type: "Frontend" },
    { name: "Tailwind CSS", level: 90, type: "Frontend" },
    { name: "Next.js", level: 80, type: "Frontend" },
    { name: "Node.js", level: 80, type: "Backend" },
    { name: "Express", level: 75, type: "Backend" },
    { name: "MongoDB", level: 70, type: "Backend" },
    { name: "PostgreSQL", level: 65, type: "Backend" },
    { name: "GraphQL", level: 60, type: "Backend" },
    { name: "Git/GitHub", level: 90, type: "Tools" },
    { name: "Docker", level: 80, type: "Tools" },
    { name: "Figma", level: 85, type: "Tools" },
    { name: "VS Code", level: 85, type: "Tools" },
  ];

  const filteredSkills =
    selected === "All" ? skills : skills.filter((x) => x.type === selected);

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Title */}
      <div className="z-10 text-center mb-8">
        <h1 className="text-4xl font-bold">
          My <span className="text-[#a5e1f5]">Skills</span>
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 z-10">
        {skillsType.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selected === item
                ? "bg-[#a5e1f5] text-black"
                : "bg-[#1e293b] text-white hover:bg-[#233449]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10 max-w-[1100px]">
        {filteredSkills.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-5 rounded-2xl shadow-md hover:scale-105 hover:bg-[#233449] transition-all duration-300"
          >
            <div className="flex justify-between mb-2">
              <h2 className="text-base font-semibold">{item.name}</h2>
              <span className="text-[#a5e1f5] font-bold text-sm">
                {item.level}%
              </span>
            </div>
            <div className="w-full bg-[#334155] rounded-full h-2">
              <div
                className="h-2 rounded-full bg-[#a5e1f5] transition-all duration-700"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
