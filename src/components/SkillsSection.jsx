import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { Palette } from "lucide-react";
import { TbApi } from "react-icons/tb";

import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiVscodium  ,
  SiBabel,
  SiGulp,
  SiGraphql,
  SiWebpack,

} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJsSquare /> },
  { name: "React", level: 85, category: "frontend", icon: <FaReact /> },
  { name: "TypeScript", level: 80, category: "frontend", icon: <SiTypescript /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },
  { name: "Redux Toolkit", level: 90, category: "frontend", icon: <SiRedux /> },
  { name: "UI / UX Principles", level: 75, category: "frontend", icon: <Palette/> },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs /> },
  { name: "Express.js", level: 90, category: "backend", icon: <SiExpress /> },
  { name: "MongoDB", level: 90, category: "backend", icon: <SiMongodb /> },
  { name: "GraphQL APIs", level: 75, category: "backend", icon: <SiGraphql /> },
  { name: "DeveOps", level: 60, category: "backend", icon: <FaDocker /> },
  { name: "Microservices", level: 75, category: "backend", icon: <FaNodeJs /> },
  { name: "RESTful APIs", level: 85, category: "backend", icon: <TbApi /> },

  
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGithub /> },
  { name: "Postman", level: 80, category: "tools", icon: <SiPostman /> },
  { name: "Webpack", level: 75, category: "tools", icon: <SiWebpack /> },
  { name: "Babel", level: 70, category: "tools", icon: <SiBabel /> },
  { name: "Gulp", level: 65, category: "tools", icon: <SiGulp /> },
];
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
   <section
  id="skills"
  className="py-10 px-4 relative bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/hero.jpg')",
    backgroundColor: "#000", // smooths transitions at edges
  }}
>
 
      {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      <div className="relative container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid  relative z-10*/}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">  
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/90 p-3 rounded-xl shadow-md backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl text-primary">{skill.icon}</span>
                <h3 className="font-medium text-sm sm:text-base text-foreground">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/40 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-700"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
