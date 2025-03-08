
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HealthcareCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="w-full">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          
          <h1 className="text-6xl lg:text-7xl md:text-5xl font-bold text-[#F45D5D] mb-8">
            Healthcare Project
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Role</h3>
              <p className="text-lg text-gray-900">Product Designer & Accessibility Specialist</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Timeline</h3>
              <p className="text-lg text-gray-900">Jun 2023 - Present</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Figma</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">Axure</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">JIRA</span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">UserTesting.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              This healthcare project aims to reimagine patient care management by creating 
              a system that connects patients, healthcare providers, and caregivers through 
              a seamless digital experience. The focus is on improving health outcomes while 
              reducing the administrative burden on all parties.
            </p>
            <p className="mt-4">
              Note: As this project is currently in progress, this case study covers the 
              work completed to date and the planned next steps.
            </p>
          </div>
        </div>

        {/* The Challenge Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              The healthcare industry faces multiple interconnected challenges:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Fragmented patient information across different systems</li>
              <li>Poor communication between patients and healthcare providers</li>
              <li>Difficult-to-use interfaces that create barriers for elderly or disabled users</li>
              <li>Compliance with strict regulatory requirements (HIPAA, GDPR)</li>
              <li>Maintaining trust and security with highly sensitive information</li>
            </ul>
            <p className="mt-4">
              The challenge was to create a solution that addresses these issues while 
              being intuitive for diverse user groups with varying levels of technical proficiency.
            </p>
          </div>
        </div>

        {/* Research & Discovery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Research & Discovery</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Given the complexity of the healthcare domain, extensive research was essential:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Shadowed nurses and administrators to understand their daily workflows</li>
              <li>Conducted interviews with 12 patients across different age groups and health conditions</li>
              <li>Analyzed 5 competing healthcare management systems</li>
              <li>Worked with compliance experts to understand regulatory requirements</li>
              <li>Created journey maps highlighting key touchpoints and pain points</li>
            </ul>
            <p className="mt-4">
              Key insight: Most existing solutions were designed primarily for administrative 
              efficiency rather than patient outcomes, creating a significant opportunity for 
              a patient-centered approach.
            </p>
          </div>
        </div>

        {/* Design Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Design Process</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              The design process for this healthcare project has been highly collaborative:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Developed a design system with strict accessibility guidelines (WCAG AA standards)</li>
              <li>Created information architecture that organizes complex medical data intuitively</li>
              <li>Designed adaptive interfaces that adjust based on user needs and capabilities</li>
              <li>Built interactive prototypes for key user journeys</li>
              <li>Conducted usability testing with diverse user groups including elderly patients</li>
              <li>Iterated designs based on feedback from both patients and healthcare providers</li>
            </ol>
          </div>
        </div>

        {/* Current Solution Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Current Solution (In Progress)</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              The healthcare platform currently includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Unified patient dashboard providing a complete health overview</li>
              <li>Secure messaging system between patients and healthcare providers</li>
              <li>Medication management with reminders and adherence tracking</li>
              <li>Appointment scheduling with intelligent prioritization</li>
              <li>Accessible interfaces with support for assistive technologies</li>
            </ul>
            <p className="mt-4">
              The design emphasizes clarity, consistency, and human-centered interaction 
              while maintaining clinical accuracy and regulatory compliance.
            </p>
          </div>
        </div>

        {/* Preliminary Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Preliminary Results</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Early testing with a limited group of users has shown promising results:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>90% of patients were able to complete key tasks without assistance</li>
              <li>Healthcare providers reported estimated time savings of 45 minutes per day</li>
              <li>Improved communication led to fewer missed appointments in pilot group</li>
              <li>Accessibility testing confirmed compatibility with major screen readers and assistive devices</li>
            </ul>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Next Steps</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              As this project continues to develop, the focus will be on:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Expanding functionality to include telehealth integration</li>
              <li>Developing a caregiver portal with appropriate permission levels</li>
              <li>Creating analytics dashboards for healthcare administrators</li>
              <li>Conducting broader field testing with multiple healthcare facilities</li>
              <li>Refining the system based on real-world usage data</li>
            </ul>
            <p className="mt-4">
              The project is scheduled for initial release in Q4 2023, with a phased rollout 
              plan to minimize disruption to existing healthcare processes.
            </p>
          </div>
        </div>

        {/* Interim Learnings Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interim Learnings</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Though the project is still in progress, several valuable insights have emerged:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The critical importance of designing for extreme use cases to ensure true accessibility</li>
              <li>The value of co-design sessions with actual healthcare providers and patients</li>
              <li>The need to balance innovative features with familiar patterns for healthcare workers</li>
              <li>The complexity of designing systems that must handle exceptional cases gracefully</li>
            </ul>
            <p className="mt-4">
              This project continues to evolve, with regular updates and iterations based on 
              ongoing research and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareCaseStudy;
