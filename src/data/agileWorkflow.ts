import type { AgileWorkflowStep } from '../types/portfolio.types';

export const agileWorkflowSteps: AgileWorkflowStep[] = [
  {
    id: "planning",
    name: "Planning",
    description: "Requirements analysis, user stories, architecture planning",
    icon: "FileText",
    angle: 0
  },
  {
    id: "development",
    name: "Development",
    description: "Clean code, component engineering, API integration",
    icon: "Code",
    angle: 90
  },
  {
    id: "testing",
    name: "Testing",
    description: "Unit testing, manual QA, verification workflows",
    icon: "CheckCircle",
    angle: 180
  },
  {
    id: "deploy",
    name: "Deployment",
    description: "CI/CD deployment, release validation, monitoring",
    icon: "Rocket",
    angle: 270
  }
];
