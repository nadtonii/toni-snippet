import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Link } from "react-router-dom";

const StackCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link to="/" className="text-neutral-1100 text-xl font-bold hover:text-[#99CAFC] transition-colors">
          ← Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-1100">
            <span className="text-[#99CAFC]">Stack</span> Case Study
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl">
            A comprehensive design system and component library for modern web applications.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png" 
            alt="Stack Design System" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">Overview</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Stack is a comprehensive design system I created to streamline the development process
                for web applications. It provides a consistent set of components, patterns, and guidelines
                that help teams build cohesive user experiences efficiently.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">The Challenge</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Modern web applications often suffer from inconsistent UI elements, redundant code,
                and disjointed user experiences when multiple designers and developers work on the same project.
                Stack was created to solve these problems by providing a single source of truth for design decisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">The Solution</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Stack includes a library of reusable components, comprehensive documentation, and design tokens
                that can be easily implemented across various platforms. The system is built with accessibility
                and performance in mind, ensuring that applications are usable by everyone.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-lg text-neutral-800 space-y-2">
                <li>Responsive components that work across all device sizes</li>
                <li>Accessible design patterns that follow WCAG guidelines</li>
                <li>Customizable design tokens for easy theming</li>
                <li>Comprehensive documentation with usage examples</li>
                <li>Integration with popular frameworks like React and Vue</li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-1100 mb-3">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">ROLE</h4>
                  <p className="text-neutral-800">Lead Designer</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">TIMELINE</h4>
                  <p className="text-neutral-800">6 months</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">TOOLS</h4>
                  <p className="text-neutral-800">Figma, React, Storybook</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-1100 mb-3">Outcomes</h3>
              <div className="space-y-2">
                <p className="text-neutral-800">50% faster development time</p>
                <p className="text-neutral-800">90% reduction in design inconsistencies</p>
                <p className="text-neutral-800">Improved accessibility scores</p>
              </div>
            </section>

            <LinkPreview 
              url="https://www.behance.net" 
              className="block mt-6 font-bold text-[#99CAFC]"
              isStatic={true}
              imageSrc="/lovable-uploads/47e209c1-e5e9-44b4-91db-7df8b644da07.png"
            >
              View on Behance
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCaseStudy; 