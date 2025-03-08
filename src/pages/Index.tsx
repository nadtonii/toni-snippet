
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-6xl px-[80px]">
        <p className="text-[#8E9196] text-6xl lg:text-7xl md:text-5xl font-light">
          Hey, I'm{" "}
          <a 
            href="https://www.linkedin.com/in/tnad/" 
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toni
          </a>
          . Young product designer based in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Zagreb"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zagreb
          </a>{" "}
          currently working at{" "}
          <a
            href="https://optimoroute.com"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            OptimoRoute
          </a>
          . I created{" "}
          <a
            href="https://www.behance.net"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack
          </a>{" "}
          and my{" "}
          <a
            href="https://www.behance.net"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            healthcare project
          </a>{" "}
          is underway. A{" "}
          <a
            href="https://portfolio.tnad.xyz"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </a>{" "}
          with all the case studies?
        </p>
        <p className="text-[#8E9196] text-xl mt-6 font-light">
          This is my{" "}
          <a
            href="https://www.linkedin.com/in/tnad/"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , and this is my{" "}
          <a
            href="mailto:hi@tnad.xyz"
            className="font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Index;
