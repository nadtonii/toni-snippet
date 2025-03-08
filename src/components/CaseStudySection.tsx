
import React, { ReactNode } from "react";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
};

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ title, children }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default CaseStudySection;
