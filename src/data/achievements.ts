import type { AchievementItem } from '../types/portfolio.types';

export const achievements: AchievementItem[] = [
  {
    id: "senior-prefect",
    title: "Senior Prefect",
    organization: "Kumbukgete Central College",
    period: "2020 – 2022",
    iconType: "prefect"
  },
  {
    id: "ict-software-competition",
    title: "ICT Software Competition",
    organization: "Ibbagamuwa Education Zone",
    period: "2019",
    iconType: "competition"
  },
  {
    id: "inter-house-sports-meet",
    title: "Inter House Sports Meet",
    organization: "Kumbukgete Central College",
    period: "2019",
    activities: [
      "Under-18 Triple Jump",
      "Volleyball"
    ],
    iconType: "sports"
  }
];
