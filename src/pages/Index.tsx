
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { ProjectGallery } from "@/components/ui/ProjectGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 lg:px-20">
      <div className="max-w-[1000px] pt-[140px] pb-[100px] text-left">
        <p className="text-[#181818] text-4xl sm:text-5xl md:text-[72px] leading-[1.45] font-normal mb-16">
          Hey, I'm{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-bold inline-block hover:scale-105 transition-transform duration-300"
            isStatic={true}
            imageSrc="/lovable-uploads/c9530685-ae28-4ae4-9edc-b33313b69b24.png"
          >
            Toni
          </LinkPreview>
          . Young product designer based in{" "}
          <LinkPreview 
            url="https://en.wikipedia.org/wiki/Zagreb" 
            className="font-bold inline-block hover:scale-105 transition-transform duration-300"
            isStatic={true}
            imageSrc="/lovable-uploads/99a30649-91fe-49b8-948b-1a15ddad7299.png"
          >
            Zagreb
          </LinkPreview>{" "}
          <span className="text-3xl sm:text-4xl md:text-[48px]">
            currently working at{" "}
            <LinkPreview 
              url="https://optimoroute.com" 
              className="font-medium text-[#2E6BE6] inline-block hover:scale-105 transition-transform duration-300"
            >
              OptimoRoute
            </LinkPreview>
            . I created{" "}
            <LinkPreview 
              url="https://www.behance.net" 
              className="font-medium text-[#99CAFC] inline-block hover:scale-105 transition-transform duration-300"
              isStatic={true}
              imageSrc="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png"
            >
              Stack
            </LinkPreview>{" "}
            and my{" "}
            <LinkPreview 
              url="https://www.behance.net" 
              className="font-medium text-[#F45D5D] inline-block hover:scale-105 transition-transform duration-300"
              isStatic={true}
              imageSrc="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png"
            >
              healthcare project
            </LinkPreview>{" "}
            is underway. 
          </span>
          <span className="text-3xl sm:text-4xl md:text-[48px] block mt-6">
            <LinkPreview 
              url="https://portfolio.tnad.xyz"
              className="font-medium text-[#BF3F57] inline-block hover:scale-105 transition-transform duration-300"
            >
              See full portfolio
            </LinkPreview>
          </span>
        </p>
        <p className="text-[#181818] text-xl leading-relaxed mt-16 mb-10">
          This is my{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-medium text-[#0A66C2] hover:scale-105 transition-transform duration-300 px-2"
            isStatic={true}
            imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png"
          >
            LinkedIn
          </LinkPreview>
          , and this is my{" "}
          <LinkPreview 
            url="mailto:hi@tnad.xyz" 
            className="font-medium text-[#34A853] hover:scale-105 transition-transform duration-300 px-2"
            isStatic={true}
            imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png"
          >
            Email
          </LinkPreview>
          .
        </p>
        
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Index;
