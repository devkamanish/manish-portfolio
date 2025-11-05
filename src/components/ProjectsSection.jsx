import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LETSCHAT",
    description:
      "A real-time chat application with instant messaging and a sleek, responsive UI.",
    image: "/projects/Pro-1.png",
    tags: ["React", "Tailwind CSS", "MongoDB Atlas", "Node.js", "Express.js"],
    demoUrl: "https://streamify-2-dqh1.onrender.com",
    githubUrl: "https://github.com/devkamanish/Let-s-Chat",
  },
  {
    id: 2,
    title: "TRAVEL BUDDY",
    description:
      "A responsive web app built with React, Redux, and Firebase to track expenses, set budgets, and analyze travel spending.",
    image: "/projects/Pro-2.png",
    tags: ["ReactJS", "Firebase", "Redux-Toolkit", "TailwindCSS"],
    demoUrl: "https://travel-buddy-roan-one.vercel.app/",
    githubUrl: "https://github.com/devkamanish/Travel-Buddy",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Icons (Live + GitHub) */}
                <div className="mt-auto flex justify-center md:justify-start gap-5 pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title="GitHub Repo"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devkamanish"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
