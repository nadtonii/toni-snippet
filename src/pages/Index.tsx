
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Gallery4Demo } from "@/components/blocks/gallery4";
import { EditableText } from "@/components/ui/editable-text";

const Index = () => {
  return <div className="min-h-screen flex flex-col bg-white">
      <div className="container mx-auto">
        <div className="text-left max-w-4xl mt-20 px-4">
          <EditableText 
            defaultValue={`Hey, I'm Toni. Young product designer based in Zagreb currently working at OptimoRoute. I created Stack and my healthcare project is underway. A <real portfolio> with all the case studies?`}
            className="text-neutral-1100 text-4xl sm:text-5xl md:text-6xl leading-tight lg:text-6xl"
            as="p"
          />
          <EditableText 
            defaultValue="This is my LinkedIn, and this is my Email."
            className="text-neutral-1100 text-xl mt-6" 
            as="p"
          />
        </div>
        
        <div className="mt-20 px-4">
          <Gallery4Demo />
        </div>
      </div>
    </div>;
};
export default Index;
