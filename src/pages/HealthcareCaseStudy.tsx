import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Link } from "react-router-dom";

const HealthcareCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link to="/" className="text-neutral-1100 text-xl font-bold hover:text-[#F45D5D] transition-colors">
          ← Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-1100">
            <span className="text-[#F45D5D]">Healthcare</span> Project
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl">
            Reimagining patient care through intuitive digital experiences.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png" 
            alt="Healthcare Project" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">Overview</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                This healthcare project focuses on creating a patient-centered digital platform that simplifies 
                access to medical services, improves communication between patients and healthcare providers, 
                and enhances overall care coordination.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">The Challenge</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Healthcare systems often struggle with fragmented patient experiences, complex interfaces, 
                and inefficient communication channels. Patients frequently face difficulties in scheduling 
                appointments, accessing their medical records, and communicating with their care team.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">The Solution</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Our solution is a comprehensive digital platform that integrates appointment scheduling, 
                secure messaging, telehealth capabilities, and medical record access into a single, 
                intuitive interface. The design prioritizes accessibility, clarity, and emotional reassurance 
                to reduce patient anxiety and improve engagement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-lg text-neutral-800 space-y-2">
                <li>Simplified appointment booking with intelligent scheduling</li>
                <li>Secure messaging system between patients and providers</li>
                <li>Integrated telehealth consultations</li>
                <li>Personalized health dashboards with actionable insights</li>
                <li>Medication management and reminders</li>
                <li>Accessible design for users of all abilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-1100 mb-4">User Research</h2>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Our research involved interviews with patients across different age groups and health conditions, 
                shadowing healthcare providers, and analyzing existing healthcare platforms. Key insights revealed 
                that patients value simplicity, privacy, and personalized care above all else.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-1100 mb-3">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">ROLE</h4>
                  <p className="text-neutral-800">UX/UI Designer</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">TIMELINE</h4>
                  <p className="text-neutral-800">8 months (ongoing)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-500">TOOLS</h4>
                  <p className="text-neutral-800">Figma, Miro, UserTesting</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-1100 mb-3">Outcomes</h3>
              <div className="space-y-2">
                <p className="text-neutral-800">35% increase in appointment attendance</p>
                <p className="text-neutral-800">42% reduction in administrative calls</p>
                <p className="text-neutral-800">91% patient satisfaction rating</p>
              </div>
            </section>

            <LinkPreview 
              url="https://www.behance.net" 
              className="block mt-6 font-bold text-[#F45D5D]"
              isStatic={true}
              imageSrc="/lovable-uploads/68edb6c8-9630-40a1-bd3f-a89e638b3a92.png"
            >
              View on Behance
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareCaseStudy; 