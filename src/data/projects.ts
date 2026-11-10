import type { ProjectItem } from '../types/portfolio.types';

export const projects: ProjectItem[] = [
  {
    id: "waypoint-bus-platform",
    title: "WayPoint – Intelligent Bus Transportation & Booking Platform",
    type: "Academic Group Project",
    role: "Full-Stack Developer – Booking & Ticketing Component",
    isFeatured: true,
    technologies: [
      "ASP.NET Core",
      "C#",
      "React",
      "Flutter",
      "PostgreSQL",
      "Entity Framework Core",
      "Python",
      "FastAPI",
      "LangGraph"
    ],
    description: "Developed booking and ticketing features for a full-stack bus transportation platform, contributing to frontend, backend, mobile, and database components.",
    keyFeatures: [
      "Seat reservations",
      "Payment simulation",
      "QR-based tickets",
      "Cancellation workflows",
      "Agentic AI integration using Python, FastAPI, and LangGraph"
    ],
    codeUrl: undefined, // Configurable: to be provided by user
    liveUrl: undefined, // Configurable: to be provided by user
    schematic: "transit"
  },
  {
    id: "boarding-accommodation-system",
    title: "Boarding and Accommodation Management System",
    type: "Individual Project",
    status: "In Progress",
    role: "Individual Full-Stack Developer",
    isFeatured: false,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React Query",
      "Cloudinary"
    ],
    description: "Independently developing a full-stack accommodation management platform with property listings, search, booking requests, and shared-room availability management.",
    keyFeatures: [
      "Property listings and search",
      "Booking requests",
      "Shared-room availability management",
      "Rent invoicing",
      "Payment verification",
      "Maintenance requests",
      "Secure authentication and role-based access control",
      "Image uploads"
    ],
    codeUrl: undefined, // Configurable: to be provided by user
    liveUrl: undefined, // Configurable: to be provided by user
    schematic: "accommodation"
  },
  {
    id: "medication-adherence-tracker",
    title: "Medication and Adherence Tracking System",
    type: "Academic Group Project",
    role: "Full-Stack Developer – Assigned Component",
    isFeatured: false,
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "JavaScript"
    ],
    description: "Developed a healthcare management system with patient, caretaker, and administrator dashboards.",
    keyFeatures: [
      "Medication adherence tracking",
      "Automated missed-dose detection",
      "Analytics",
      "RESTful APIs",
      "MongoDB data models",
      "Authentication",
      "Email notifications",
      "PDF report generation"
    ],
    codeUrl: undefined, // Configurable: to be provided by user
    liveUrl: undefined, // Configurable: to be provided by user
    schematic: "healthcare"
  },
  {
    id: "fitness-workout-tracker",
    title: "Fitness Goal and Workout Tracker",
    type: "Academic Group Project",
    role: "Full-Stack Developer – Assigned Component",
    isFeatured: false,
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "JavaScript"
    ],
    description: "Developed a cross-platform mobile application for fitness tracking, enabling users to set personal fitness goals and record daily workout activities.",
    keyFeatures: [
      "User onboarding",
      "Authentication interfaces",
      "Daily workout activity tracking",
      "Dynamic progress dashboards"
    ],
    codeUrl: undefined, // Configurable: to be provided by user
    liveUrl: undefined, // Configurable: to be provided by user
    schematic: "fitness"
  },
  {
    id: "web-pharmacy-portal",
    title: "Web Pharmacy Portal",
    type: "Academic Group Project",
    role: "Full-Stack Developer – Assigned Component",
    isFeatured: false,
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
      "Hibernate",
      "Spring Security"
    ],
    description: "Developed a web-based pharmacy management system with customer and pharmacist interfaces.",
    keyFeatures: [
      "Medicine catalogue",
      "Inventory management",
      "Prescription management",
      "Shopping cart",
      "Order management",
      "Backend services using Spring Boot and Hibernate"
    ],
    codeUrl: undefined, // Configurable: to be provided by user
    liveUrl: undefined, // Configurable: to be provided by user
    schematic: "pharmacy"
  }
];
