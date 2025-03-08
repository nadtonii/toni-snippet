
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProjectItem {
  title: string;
  color: string;
  hoverColor: string;
}

const projects: ProjectItem[] = [
  {
    title: "Stack",
    color: "#99CAFC",
    hoverColor: "#75A9E8",
  },
  {
    title: "Healthcare Croatia",
    color: "#F45D5D",
    hoverColor: "#D84545",
  },
  {
    title: "Kakimasu",
    color: "#4CAF50",
    hoverColor: "#388E3C",
  },
  {
    title: "Telemach",
    color: "#FF9800",
    hoverColor: "#F57C00",
  },
  {
    title: "Pantone",
    color: "#9C27B0",
    hoverColor: "#7B1FA2",
  },
];

export const ProjectGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1000px] mt-16 mb-24">
      <h2 className="text-2xl md:text-3xl text-[#181818] font-medium mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl flex items-center justify-center aspect-square cursor-pointer relative overflow-hidden"
            style={{ backgroundColor: project.color }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: project.hoverColor,
              transition: { duration: 0.3 }
            }}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <motion.span 
              className="text-white font-medium text-xl md:text-2xl lg:text-3xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
