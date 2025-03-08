
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

// Media items data for the gallery
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Arc",
    desc: "My primary browser",
    url: "https://images.unsplash.com/photo-1707511863208-e35593a109ea?q=80&w=1264",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Notion",
    desc: "Where I organize everything",
    url: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1528",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Miro",
    desc: "My collaboration canvas",
    url: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1469",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Notion Mail",
    desc: "Email management",
    url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1374",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Figma",
    desc: "Design and prototyping",
    url: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1482",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Notion Calendar",
    desc: "Time management",
    url: "https://images.unsplash.com/photo-1606327054536-e37e655d4f4f?q=80&w=1470",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-4">
      {/* Hero Section with increased line height */}
      <div className="text-left max-w-6xl px-[80px] py-[80px]">
        <p className="text-6xl lg:text-7xl md:text-5xl leading-relaxed tracking-wide">
          Hey, I'm{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-bold"
            isStatic={true}
            imageSrc="/lovable-uploads/c9530685-ae28-4ae4-9edc-b33313b69b24.png"
          >
            Toni
          </LinkPreview>
          . Young product designer based in{" "}
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
          is underway. A{" "}
          <LinkPreview 
            url="https://portfolio.tnad.xyz"
            className="font-bold text-[#BF3F57]"
          >
            &lt;real portfolio&gt;
          </LinkPreview>{" "}
          with all the case studies?
        </p>
        <p className="text-xl mt-6 leading-relaxed tracking-wide">
          This is my{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-bold text-[#0A66C2]"
            isStatic={true}
            imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png"
          >
            LinkedIn
          </LinkPreview>
          , and this is my{" "}
          <LinkPreview 
            url="mailto:hi@tnad.xyz" 
            className="font-bold text-[#34A853]"
            isStatic={true}
            imageSrc="/lovable-uploads/29dea49a-e64b-46af-92f2-6e130e572eca.png"
          >
            Email
          </LinkPreview>
          .
        </p>
      </div>
      
      {/* Gallery Section */}
      <div className="w-full mt-12">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="My Stack"
          description="Drag and explore my tech toolkit and projects"
        />
      </div>
    </div>
  );
};

export default Index;
