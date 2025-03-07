
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
const Index = () => {
  return <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-3xl">
        <p className="text-neutral-1100 text-2xl lg:text-7xl md:text-5xl">
          Hey, I'm{" "}
          <LinkPreview url="https://www.linkedin.com" className="font-bold">
            Toni
          </LinkPreview>
          . A young product designer based in{" "}
          <LinkPreview url="https://en.wikipedia.org/wiki/Zagreb" className="font-bold">
            Zagreb
          </LinkPreview>{" "}
          currently working at{" "}
          <LinkPreview url="https://optimoroute.com" className="font-bold text-[#2E6BE6]">
            OptimoRoute
          </LinkPreview>
          . I created{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#99CAFC]">
            Stack
          </LinkPreview>{" "}
          and my{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#F45D5D]">
            healthcare project
          </LinkPreview>{" "}
          is underway. Also, I have this cool gallery of{" "}
          <LinkPreview url="https://www.pantone.com" className="font-bold text-[#E099F5]">
            pantone cards
          </LinkPreview>
          .
        </p>
        <p className="text-neutral-1100 text-xl mt-6">
          This is my{" "}
          <LinkPreview url="https://www.linkedin.com" className="font-bold text-[#0A66C2]">
            LinkedIn
          </LinkPreview>
          , and this is my{" "}
          <LinkPreview url="mailto:toni@example.com" className="font-bold text-[#34A853]">
            Email
          </LinkPreview>
          .
        </p>
      </div>
    </div>;
};
export default Index;
