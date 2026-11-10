export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
  accent: string;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cross-Platform",
    description: "Architecting pixel-perfect, responsive mobile experiences across iOS and Android.",
    skills: ["Flutter", "Dart", "Responsive UI", "Custom Widgets", "Figma-to-Code"],
    accent: "from-burgundy-600 to-burgundy-800",
  },
  {
    category: "State Management & Architecture",
    description: "Enterprise application architecture designed for testability, scalability, and clarity.",
    skills: ["BLoC", "Riverpod", "Provider", "MVVM", "Clean Architecture"],
    accent: "from-burgundy-700 to-burgundy-900",
  },
  {
    category: "Backend & APIs",
    description: "Connecting mobile interfaces to reliable backend APIs, data stores, and real-time streams.",
    skills: ["REST APIs", "Firebase", "Node.js (API integration)", "Python"],
    accent: "from-burgundy-800 to-burgundy-950",
  },
  {
    category: "Native Android",
    description: "Direct native Android development leveraging platform capabilities and modern Jetpack patterns.",
    skills: ["Kotlin", "Java", "XML", "Android Studio"],
    accent: "from-burgundy-600 to-rose-soft/40",
  },
  {
    category: "Tools & Workflow",
    description: "Development environment, source control, testing, and continuous deployment workflows.",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    accent: "from-burgundy-900 to-burgundy-950",
  },
];

