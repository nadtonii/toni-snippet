
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const StackCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="w-full">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          
          <h1 className="text-6xl lg:text-7xl md:text-5xl font-bold text-[#99CAFC] mb-8">
            Stack
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Role</h3>
              <p className="text-lg text-gray-900">UX/UI Designer & Researcher</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Timeline</h3>
              <p className="text-lg text-gray-900">Jan 2023 - May 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Figma</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Maze</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Miro</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Notion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Stack is a productivity tool designed to help knowledge workers manage their 
              digital workspaces more efficiently. It addresses the problem of tool 
              fragmentation and context switching that many professionals face in today's 
              work environment.
            </p>
            <p className="mt-4">
              This case study outlines the process from initial research through design 
              iterations to the final product, highlighting key decisions and insights 
              gained along the way.
            </p>
          </div>
        </div>

        {/* The Challenge Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Modern knowledge workers use 8-12 different applications daily, leading to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Excessive time spent switching between tools</li>
              <li>Information fragmentation across multiple platforms</li>
              <li>Reduced focus and productivity due to constant context shifts</li>
              <li>Cognitive overload from managing multiple interfaces and workflows</li>
            </ul>
            <p className="mt-4">
              The challenge was to create a solution that would unify these disparate tools 
              without adding yet another layer of complexity to the user's workflow.
            </p>
          </div>
        </div>

        {/* Research & Discovery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Research & Discovery</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              I began with extensive user research to understand the core pain points and 
              behaviors of knowledge workers:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Conducted 15 in-depth interviews with professionals across different industries</li>
              <li>Analyzed existing tools and solutions in the market</li>
              <li>Created user personas based on research findings</li>
              <li>Mapped typical user journeys to identify key friction points</li>
            </ul>
            <p className="mt-4">
              Key insight: Users didn't need yet another tool, but rather a thoughtful 
              integration layer that could bring existing tools together in a coherent way.
            </p>
          </div>
        </div>

        {/* Design Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Design Process</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              The design process followed an iterative approach with continuous user feedback:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Created initial wireframes exploring different approaches to workspace integration</li>
              <li>Developed a system of modular components that could adapt to different use cases</li>
              <li>Built interactive prototypes for testing core user flows</li>
              <li>Conducted usability testing with 8 participants</li>
              <li>Refined the design based on feedback, focusing on simplicity and clarity</li>
            </ol>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Solution</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Stack provides a unified workspace that:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Integrates content from multiple applications into a single view</li>
              <li>Uses contextual awareness to show relevant information based on the user's current task</li>
              <li>Provides a consistent interface for interacting with different tools</li>
              <li>Enables seamless transitions between different work contexts</li>
            </ul>
            <p className="mt-4">
              The final design uses a card-based interface with customizable workspaces that 
              can be saved and recalled based on different projects or work modes.
            </p>
          </div>
        </div>

        {/* Results & Impact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Early user testing showed promising results:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>85% of test users reported feeling less overwhelmed by their digital workspace</li>
              <li>Average time spent searching for information reduced by 30%</li>
              <li>Users reported being able to maintain focus for longer periods</li>
            </ul>
            <p className="mt-4">
              The project has entered beta testing with a selected group of companies, with 
              plans for a wider release in Q3 2023.
            </p>
          </div>
        </div>

        {/* Reflections & Learnings Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Reflections & Learnings</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              This project reinforced several important principles:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The importance of solving real user problems rather than creating technology for its own sake</li>
              <li>The value of continuous user feedback throughout the design process</li>
              <li>The challenge of balancing simplicity with powerful functionality</li>
              <li>The need to consider the entire ecosystem in which a product exists</li>
            </ul>
            <p className="mt-4">
              If I were to approach this project again, I would place even more emphasis on 
              the onboarding experience, as this proved to be a critical factor in user adoption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCaseStudy;
