
import { Gallery4, type Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  title: "Projects",
  description:
    "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items: [
    {
      id: "healthcare",
      title: "Healthcare App: Patient-centered medical experience",
      description:
        "A comprehensive healthcare app that helps patients manage appointments, access medical records, track vitals, and receive medication reminders.",
      href: "https://example.com/healthcare",
      image: "/lovable-uploads/a38496ee-1816-497b-990e-60b679975c22.png",
    },
    {
      id: "language-learning",
      title: "Language Learning Platform: Master Japanese",
      description:
        "An interactive language learning platform that helps users master Hiragana, Katakana, basic Kanji, and build vocabulary through structured courses.",
      href: "https://example.com/language",
      image: "/lovable-uploads/928c9bff-2989-4a8f-a3c7-0f16934f8c7d.png",
    },
    {
      id: "productivity",
      title: "Stack: Productivity Task Manager",
      description:
        "A clean, intuitive task management app that helps users organize their work, set reminders, and track progress on daily activities and long-term goals.",
      href: "https://example.com/stack",
      image: "/lovable-uploads/4da77f9e-fdfc-4e0b-9442-4b719b207a69.png",
    },
    {
      id: "telemach",
      title: "Telemach: All-in-One Service Portal",
      description:
        "A unified portal that consolidates multiple services into one easy-to-use interface, providing a seamless experience for users accessing different functionalities.",
      href: "https://example.com/telemach",
      image: "/lovable-uploads/bb910271-086f-426d-93bd-d103e0f8bb57.png",
    },
    {
      id: "dashboard",
      title: "Analytics Dashboard: Data Visualization",
      description:
        "A comprehensive dashboard that transforms complex data into actionable insights through intuitive visualizations and interactive reports.",
      href: "https://example.com/dashboard",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
