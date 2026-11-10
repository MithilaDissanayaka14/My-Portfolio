import type { SkillCategoryGroup, SkillItem } from '../types/portfolio.types';

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { id: 'java', name: 'Java', category: 'languages' },
      { id: 'javascript', name: 'JavaScript', category: 'languages' },
      { id: 'python', name: 'Python', category: 'languages' },
      { id: 'c', name: 'C', category: 'languages' },
      { id: 'cpp', name: 'C++', category: 'languages' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { id: 'react', name: 'React', category: 'frontend' },
      { id: 'react-native', name: 'React Native', category: 'frontend' },
      { id: 'html', name: 'HTML', category: 'frontend' },
      { id: 'css', name: 'CSS', category: 'frontend' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { id: 'aspnet', name: 'ASP.NET Core', category: 'backend' },
      { id: 'springboot', name: 'Spring Boot', category: 'backend' },
      { id: 'nodejs', name: 'Node.js', category: 'backend' },
      { id: 'express', name: 'Express.js', category: 'backend' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & ORM',
    skills: [
      { id: 'postgresql', name: 'PostgreSQL', category: 'database' },
      { id: 'mysql', name: 'MySQL', category: 'database' },
      { id: 'mongodb', name: 'MongoDB', category: 'database' },
      { id: 'efcore', name: 'Entity Framework Core', category: 'database' },
      { id: 'hibernate', name: 'Hibernate / JPA', category: 'database' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Emerging Technologies',
    skills: [
      { id: 'agentic-ai', name: 'Agentic AI', category: 'ai-ml' },
      { id: 'langgraph', name: 'LangGraph', category: 'ai-ml' },
      { id: 'fastapi', name: 'FastAPI', category: 'ai-ml' },
      { id: 'aiml-fundamentals', name: 'AI/ML Fundamentals', category: 'ai-ml' }
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    skills: [
      { id: 'arduino', name: 'Arduino', category: 'embedded' },
      { id: 'microcontrollers', name: 'Microcontrollers', category: 'embedded' },
      { id: 'hardware-integration', name: 'Hardware Integration', category: 'embedded' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { id: 'git', name: 'Git', category: 'tools' },
      { id: 'github', name: 'GitHub', category: 'tools' },
      { id: 'postman', name: 'Postman', category: 'tools' },
      { id: 'vscode', name: 'VS Code', category: 'tools' },
      { id: 'intellij', name: 'IntelliJ IDEA', category: 'tools' },
      { id: 'expo', name: 'Expo', category: 'tools' }
    ]
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    skills: [
      { id: 'oop', name: 'Object-Oriented Programming (OOP)', category: 'concepts' },
      { id: 'rest-apis', name: 'RESTful APIs', category: 'concepts' }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Professional & Soft Skills',
    skills: [
      { id: 'problem-solving', name: 'Problem Solving', category: 'soft-skills' },
      { id: 'teamwork', name: 'Teamwork', category: 'soft-skills' },
      { id: 'leadership', name: 'Leadership', category: 'soft-skills' },
      { id: 'analytical-thinking', name: 'Analytical Thinking', category: 'soft-skills' },
      { id: 'communication', name: 'Communication', category: 'soft-skills' },
      { id: 'project-management', name: 'Project Management', category: 'soft-skills' }
    ]
  }
];

// Flat skills list for quick lookup or multi-category displays
export const allSkills: SkillItem[] = skillCategoryGroups.flatMap(group => group.skills);
