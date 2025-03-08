import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Gallery4Demo } from "@/components/blocks/gallery4";
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-white">
      <div className="container mx-auto">
        <div className="text-left max-w-4xl mt-20 px-4">
          <p className="text-neutral-1100 text-4xl sm:text-5xl md:text-6xl leading-tight lg:text-6xl">
            Hey, I'm{" "}
            <LinkPreview url="https://www.linkedin.com/in/tnad/" className="font-bold inline" isStatic={true} imageSrc="/lovable-uploads/c9530685-ae28-4ae4-9edc-b33313b69b24.png">
              Toni
            </LinkPreview>
            . Young product designer based in{" "}
            <LinkPreview url="https://en.wikipedia.org/wiki/Zagreb" className="font-bold inline" isStatic={true} imageSrc="/lovable-uploads/99a30649-91fe-49b8-948b-1a15ddad7299.png">
              Zagreb
            </LinkPreview>{" "}
            currently working at{" "}
            <LinkPreview url="https://optimoroute.com" className="font-bold text-[#2E6BE6] inline">
              OptimoRoute
            </LinkPreview>
            . I created{" "}
            <LinkPreview url="https://www.behance.net" className="font-bold text-[#99CAFC] inline" isStatic={true} imageSrc="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png">
              Stack
            </LinkPreview>{" "}
            and my{" "}
            <LinkPreview url="https://www.behance.net" className="font-bold text-[#F45D5D] inline" isStatic={true} imageSrc="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png">
              healthcare project
            </LinkPreview>{" "}
            is underway. A{" "}
            <LinkPreview url="https://portfolio.tnad.xyz" className="font-bold text-[#BF3F57] inline">
              &lt;real portfolio&gt;
            </LinkPreview>{" "}
            with all the case studies?
          </p>
          <p className="text-neutral-1100 text-xl mt-6">
            This is my{" "}
            <LinkPreview url="https://www.linkedin.com/in/tnad/" className="font-bold text-[#0A66C2] inline" isStatic={true} imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png">
              LinkedIn
            </LinkPreview>
            , and this is my{" "}
            <LinkPreview url="mailto:hi@tnad.xyz" className="font-bold text-[#34A853] inline" isStatic={true} imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png">
              Email
            </LinkPreview>
            .
          </p>
        </div>
        
        <div className="mt-20 px-4">
          <Gallery4Demo />
        </div>
      </div>
    </div>;
};
export default Index;