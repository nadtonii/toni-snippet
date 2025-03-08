
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type CaseStudyHeaderProps = {
  title: string;
  color: string;
  role: string;
  timeline: string;
  tools: string[];
};

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  color,
  role,
  timeline,
  tools,
}) => {
  return (
    <div className="w-full">
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      
      <h1 className={`text-6xl lg:text-7xl md:text-5xl font-bold ${color} mb-8`}>
        {title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Role</h3>
          <p className="text-lg text-gray-900">{role}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Timeline</h3>
          <p className="text-lg text-gray-900">{timeline}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHeader;
