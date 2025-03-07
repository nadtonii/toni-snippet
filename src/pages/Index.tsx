import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
const Index = () => {
  return <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-3xl">
        <p className="text-neutral-1100 text-2xl md:text-4xl lg:text-7xl">
          Hey, I'm{" "}
          <LinkPreview url="https://www.linkedin.com" className="font-bold">
            Toni
          </LinkPreview>
          . A product designer based in{" "}
          <LinkPreview url="https://en.wikipedia.org/wiki/Zagreb" className="font-bold">
            Zagreb
          </LinkPreview>{" "}
          currently working at{" "}
          <LinkPreview url="https://optimoroute.com" className="font-bold text-[#2E6BE6]">
            OptimoRoute
          </LinkPreview>
          . I'm currently developing{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#99CAFC]">
            Stack
          </LinkPreview>
          . My{" "}
          <LinkPreview url="https://www.behance.net" className="font-bold text-[#F45D5D]">
            Healthcare project
          </LinkPreview>{" "}
          is underway and I have this cool gallery of{" "}
          <LinkPreview url="https://www.pantone.com" className="font-bold text-[#E099F5]">
            Pantone cards
          </LinkPreview>
          .
        </p>
      </div>
    </div>;
};
export default Index;