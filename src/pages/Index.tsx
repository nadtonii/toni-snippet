
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 p-4 relative">
      {/* Dark mode toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>
      </div>
      
      <div className="flex-grow flex justify-center items-center">
        <div className="text-left max-w-6xl px-[80px]">
          <p className="text-neutral-1100 dark:text-white text-6xl lg:text-7xl md:text-5xl">
            Hey, I'm{" "}
            <LinkPreview 
              url="https://www.linkedin.com/in/tnad/" 
              className="font-bold"
              isStatic={true}
              imageSrc="/lovable-uploads/426e1573-57a5-46d6-84d7-aab3af2470c3.png"
            >
              Toni
            </LinkPreview>
            . A young product designer based in{" "}
            <LinkPreview 
              url="https://en.wikipedia.org/wiki/Zagreb" 
              className="font-bold"
              isStatic={true}
              imageSrc="/lovable-uploads/99a30649-91fe-49b8-948b-1a15ddad7299.png"
            >
              Zagreb
            </LinkPreview>{" "}
            currently working at{" "}
            <LinkPreview url="https://optimoroute.com" className="font-bold text-[#2E6BE6]">
              OptimoRoute
            </LinkPreview>
            . I created{" "}
            <LinkPreview 
              url="https://www.behance.net" 
              className="font-bold text-[#99CAFC]"
              isStatic={true}
              imageSrc="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png"
            >
              Stack
            </LinkPreview>{" "}
            and my{" "}
            <LinkPreview 
              url="https://www.behance.net" 
              className="font-bold text-[#F45D5D]"
              isStatic={true}
              imageSrc="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png"
            >
              healthcare project
            </LinkPreview>{" "}
            is underway. Also, I have this cool gallery of{" "}
            <LinkPreview 
              url="https://www.pantone.com" 
              className="font-bold text-[#E099F5]"
              isStatic={true}
              imageSrc="/lovable-uploads/07a29366-12e3-457e-acb5-290c9bdb640c.png"
            >
              pantone cards
            </LinkPreview>
            .
          </p>
          <div className="mt-6 flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/tnad/" 
              className="group flex items-center space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0A66C2]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a 
              href="mailto:hi@tnad.xyz" 
              className="group flex items-center space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-[#34A853]"
              aria-label="Email"
            >
              <Mail size={24} />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
