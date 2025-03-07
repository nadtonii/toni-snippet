
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-center">
        <p className="text-neutral-500 text-xl md:text-3xl max-w-3xl">
          Hi, I'm{" "}
          <LinkPreview
            url="https://www.behance.net"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500"
          >
            Toni
          </LinkPreview>
          , a product designer crafting delightful digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Index;
