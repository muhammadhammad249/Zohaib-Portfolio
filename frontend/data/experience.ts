export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Flutter & Android Developer",
    company: "AVISA DEV",
    location: "Lahore (Onsite)",
    period: "Jan 2025 – Present",
    type: "Full-Time (Onsite)",
    bullets: [
      "Develop and maintain cross-platform mobile applications using Flutter and Dart.",
      "Structure Flutter codebases with BLoC, Provider and Clean Architecture to keep features scalable and maintainable.",
      "Integrate RESTful APIs and Firebase services for real-time data handling and user authentication.",
      "Implement Figma designs as responsive Flutter interfaces, working closely with UI/UX designers.",
      "Optimize application performance to reduce UI lag and improve the experience across devices.",
      "Build native Android applications using Kotlin, Java and XML where projects require them.",
      "Own the release lifecycle: deployment builds, debugging, testing and ongoing app maintenance.",
    ],
    techStack: ["Flutter", "Dart", "BLoC", "Provider", "Clean Architecture", "Kotlin", "Java", "XML", "REST APIs", "Firebase"],
  },
];

