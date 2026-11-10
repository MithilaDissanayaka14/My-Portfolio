import type { PersonalInfo } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  greeting: "Hi, I'm",
  name: "Mithila Dissanayaka",
  primaryTitle: "Software Engineering Undergraduate",
  animatedTitles: [
    "Software Engineer",
    "Full Stack Developer",
    "Software Developer"
  ],
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  location: "Kurunegala, Sri Lanka",
  email: "mithiladissanayaka1422@gmail.com",
  phone: "077-2847152", // Configurable contact detail
  availability: "Open to Internship Opportunities",
  primaryCTA: "Hire Me",
  secondaryCTA: "Download CV",
  
  // Tagline is pending finalization - kept configurable
  tagline: undefined,

  // Verified summary directly from CV
  aboutParagraphs: [
    "Motivated Software Engineering undergraduate at SLIIT with hands-on experience in developing full-stack web and mobile applications, embedded systems, and hardware-integrated solutions through academic projects.",
    "Interested in exploring modern software technologies, AI-driven applications, and practical problem-solving. Eager to contribute to collaborative development teams while continuously strengthening software engineering skills."
  ],

  // Note: Fake statistics (projects count, clients, years experience) are strictly omitted per architectural specification
  stats: [],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/MithilaDissanayaka14",
      icon: "Github",
      ariaLabel: "Visit Mithila's GitHub profile"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mithila-dissanayaka-0980243aa",
      icon: "Linkedin",
      ariaLabel: "Connect with Mithila on LinkedIn"
    },
    {
      platform: "Email",
      url: "mailto:mithiladissanayaka1422@gmail.com",
      icon: "Mail",
      ariaLabel: "Send an email to Mithila Dissanayaka"
    }
  ],

  // Profile image is pending - will resolve once placed in src/assets or public
  profileImage: undefined,

  // Destination path when CV file is placed in public/resume.pdf
  resumePath: "/resume.pdf"
};
