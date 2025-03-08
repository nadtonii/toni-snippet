
import React from "react";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import CaseStudySection from "@/components/CaseStudySection";

const HealthcareCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <CaseStudyHeader
          title="Healthcare Project"
          color="text-[#F45D5D]"
          role="Product Designer & Accessibility Specialist"
          timeline="Jun 2023 - Present"
          tools={["Figma", "Axure", "JIRA", "UserTesting.com"]}
        />

        <CaseStudySection title="Overview">
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
        </CaseStudySection>

        <CaseStudySection title="The Challenge">
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
        </CaseStudySection>

        <CaseStudySection title="Research & Discovery">
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
        </CaseStudySection>

        <CaseStudySection title="Design Process">
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
        </CaseStudySection>

        <CaseStudySection title="Current Solution (In Progress)">
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
        </CaseStudySection>

        <CaseStudySection title="Preliminary Results">
          <p>
            Early testing with a limited group of users has shown promising results:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>90% of patients were able to complete key tasks without assistance</li>
            <li>Healthcare providers reported estimated time savings of 45 minutes per day</li>
            <li>Improved communication led to fewer missed appointments in pilot group</li>
            <li>Accessibility testing confirmed compatibility with major screen readers and assistive devices</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Next Steps">
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
        </CaseStudySection>

        <CaseStudySection title="Interim Learnings">
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
        </CaseStudySection>
      </div>
    </div>
  );
};

export default HealthcareCaseStudy;
