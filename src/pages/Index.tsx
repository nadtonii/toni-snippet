
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-3xl">
        <p className="text-neutral-800 text-xl md:text-3xl">
          Hey, I'm{" "}
          <LinkPreview
            url="https://www.linkedin.com"
            className="font-bold"
          >
            Toni
          </LinkPreview>
          . A product designer based in{" "}
          <LinkPreview
            url="https://en.wikipedia.org/wiki/Zagreb"
            className="font-bold"
          >
            Zagreb
          </LinkPreview>{" "}
          currently working at{" "}
          <LinkPreview
            url="https://optimoroute.com"
            className="font-bold"
          >
            OptimoRoute
          </LinkPreview>
          . I'm currently developing{" "}
          <LinkPreview
            url="https://www.behance.net"
            className="font-bold"
          >
            Stack
          </LinkPreview>
          . My{" "}
          <LinkPreview
            url="https://www.behance.net"
            className="font-bold"
          >
            Healthcare project
          </LinkPreview>{" "}
          is underway and I have this cool gallery of{" "}
          <LinkPreview
            url="https://www.pantone.com"
            className="font-bold"
          >
            Pantone cards
          </LinkPreview>
          .
        </p>
      </div>
    </div>
  );
};

export default Index;
