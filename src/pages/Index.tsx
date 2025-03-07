
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-6xl px-[80px]">
        <p className="text-neutral-1100 text-6xl lg:text-7xl md:text-5xl">
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
        <p className="text-neutral-1100 text-xl mt-6">
          This is my{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-bold text-[#0A66C2]"
          >
            LinkedIn
          </LinkPreview>
          , and this is my{" "}
          <LinkPreview 
            url="mailto:hi@tnad.xyz" 
            className="font-bold text-[#34A853]"
          >
            Email
          </LinkPreview>
          .
        </p>
      </div>
    </div>
  );
};

export default Index;
