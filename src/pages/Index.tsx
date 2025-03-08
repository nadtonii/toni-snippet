import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { MagneticSocialLinksDemo } from "@/components/MagneticSocialLinksDemo";
const Index = () => {
  return <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="text-left max-w-6xl px-[80px] mb-8">
        <p className="text-neutral-1100 text-6xl lg:text-7xl md:text-5xl leading-relaxed">
          Hey, I'm{" "}
          <LinkPreview url="https://www.linkedin.com/in/tnad/" className="font-bold" isStatic={true} imageSrc="/lovable-uploads/c9530685-ae28-4ae4-9edc-b33313b69b24.png">
            Toni
          </LinkPreview>
          . Young product designer based in{" "}
          <LinkPreview url="https://en.wikipedia.org/wiki/Zagreb" className="font-bold" isStatic={true} imageSrc="/lovable-uploads/99a30649-91fe-49b8-948b-1a15ddad7299.png">
            Zagreb
          </LinkPreview>{" "}
          currently working at{" "}
          <LinkPreview url="https://optimoroute.com" className="font-bold text-[#2E6BE6]">
            OptimoRoute
          </LinkPreview>
          . I created{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#99CAFC]" isStatic={true} imageSrc="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png">
            Stack
          </LinkPreview>{" "}
          and my{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#F45D5D]" isStatic={true} imageSrc="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png">
            healthcare project
          </LinkPreview>{" "}
          is underway. A{" "}
          <LinkPreview url="https://portfolio.tnad.xyz" className="font-bold text-[#BF3F57]">
            &lt;real portfolio&gt;
          </LinkPreview>{" "}
          with all the case studies?
        </p>
        
      </div>
      
      <MagneticSocialLinksDemo />
    </div>;
};
export default Index;