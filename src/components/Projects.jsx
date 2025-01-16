import { PROJECTS } from "../constants"; 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProjectClick = (id) => {
    if (isMobile) {
      setActiveProject(activeProject === id ? null : id); // Toggle overlay on tap
    }
  };

  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="container mx-auto"></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}} // Hover effect only on desktop
            key={project.id}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => handleProjectClick(project.id)} // Enable tap to show on mobile
          >
            <motion.img
              whileHover={!isMobile ? { scale: 1.1 } : {}} // Scale only on desktop hover
              src={project.image}
              alt={project.name}
              className="h-64 w-full object-cover transition-transform duration-500"
            />

            {/* Overlay: Shows on Hover (Desktop) or Tap (Mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeProject === project.id || !isMobile ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg transition-opacity duration-500 
                ${!isMobile ? "opacity-0 group-hover:opacity-100" : ""}
                ${activeProject === project.id ? "opacity-100" : "opacity-0"}`}
            >
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4">{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
