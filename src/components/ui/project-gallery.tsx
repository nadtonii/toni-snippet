
"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"

// Define the structure of a project
interface Project {
  name: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Stack",
    image: "/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png",
    link: "https://www.behance.net",
  },
  {
    name: "Healthcare Croatia",
    image: "/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png",
    link: "https://www.behance.net",
  },
  {
    name: "Kakimasu",
    image: "/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png", 
    link: "https://www.behance.net",
  },
  {
    name: "Telemach",
    image: "/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png",
    link: "https://www.behance.net",
  },
  {
    name: "Pantone",
    image: "/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png", 
    link: "https://www.behance.net",
  },
]

function ProjectItem({
  index,
  project,
  onInView,
}: {
  index: number
  project: Project
  onInView: (index: number, inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  })

  useEffect(() => {
    onInView(index, isInView)
  }, [isInView, onInView, index])

  return (
    <div
      ref={ref}
      className="h-[300px] w-full snap-center flex justify-center items-center"
    >
      <a 
        href={project.link} 
        target="_blank" 
        rel="noreferrer"
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] block transition-all hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </a>
    </div>
  )
}

export function ProjectGallery() {
  const textRotateRef = useRef<TextRotateRef>(null)

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index)
    }
  }

  return (
    <div className="w-full min-h-[500px] md:min-h-[600px] flex flex-col mt-16">
      <div className="w-full relative">
        <div className="sticky top-0 w-full flex justify-center py-4 bg-white z-10">
          <TextRotate
            ref={textRotateRef}
            texts={projects.map((project) => project.name)}
            mainClassName="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 w-full justify-center"
            splitLevelClassName="overflow-hidden"
            staggerFrom="first"
            animatePresenceMode="wait"
            loop={false}
            auto={false}
            staggerDuration={0.01}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        </div>
        <div className="w-full overflow-auto snap-y snap-mandatory h-[400px] md:h-[500px] scrollbar-none">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              index={index}
              project={project}
              onInView={handleInView}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
