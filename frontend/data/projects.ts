export interface Project {
  id: string;
  title: string;
  category: string;
  platform: "Flutter" | "Android";
  description: string;
  highlights: string[];
  tech: string[];
  featured: boolean;
  isLiveOnPlayStore?: boolean;
  gradient: string;
  phoneMockupPattern: "wallet" | "qr" | "client" | "ecommerce" | "consultant";
  links: {
    github?: string;
    live?: string;
    playStore?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "wallet-app",
    title: "Wallet App (Fintech Project)",
    category: "Fintech Mobile Application",
    platform: "Flutter",
    featured: true,
    description:
      "A scalable fintech mobile application architected with MVVM and BLoC for reliable financial transaction management, card transfers, and real-time wallet balance tracking.",
    highlights: [
      "Implemented MVVM with BLoC state management for a scalable, maintainable codebase.",
      "Integrated Node.js backend APIs for transaction handling and real-time wallet updates.",
      "Engineered secure balance synchronization and transaction logging flows."
    ],
    tech: ["Flutter", "Dart", "BLoC", "MVVM", "Clean Architecture", "Node.js REST APIs"],
    gradient: "from-amber-600/90 via-burgundy-700 to-burgundy-950",
    phoneMockupPattern: "wallet",
    links: {
      github: "https://github.com/zohaib-malik6",
    },
  },
  {
    id: "qr-vertex",
    title: "QR Vertex (Android App)",
    category: "Productivity & Scanner",
    platform: "Android",
    featured: true,
    isLiveOnPlayStore: true,
    description:
      "Native Android application published on the Google Play Store for rapid QR code generation, camera-driven barcode scanning, and real-time backend verification.",
    highlights: [
      "Designed and developed a native Android app, published on Google Play.",
      "Integrated Node.js APIs and built a responsive UI with native XML layouts.",
      "Engineered high-performance barcode & QR parsing routines directly on device."
    ],
    tech: ["Kotlin", "Java", "XML", "Android Studio", "Node.js APIs", "Google Play Console"],
    gradient: "from-rose-700/80 via-burgundy-800 to-burgundy-950",
    phoneMockupPattern: "qr",
    links: {
      playStore: "https://play.google.com/store/apps",
      github: "https://github.com/zohaib-malik6",
    },
  },
  {
    id: "still-blink",
    title: "Still Blink (Client Project)",
    category: "Client Application",
    platform: "Flutter",
    featured: false,
    description:
      "Production cross-platform application delivered for a client, focusing on modular interactive UI prototyping cleanly connected to decoupled BLoC state management.",
    highlights: [
      "Delivered a Flutter app for a client adhering strictly to timeline and requirements.",
      "Built the UI components first, then implemented BLoC for business logic.",
      "Ensured seamless state persistence and reliable navigation patterns."
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "Figma-to-Code"],
    gradient: "from-burgundy-700 via-burgundy-900 to-burgundy-950",
    phoneMockupPattern: "client",
    links: {
      github: "https://github.com/zohaib-malik6",
    },
  },
  {
    id: "nectar-app",
    title: "Nectar App (UI/UX Case Study)",
    category: "Grocery & E-Commerce UI",
    platform: "Flutter",
    featured: false,
    description:
      "A pixel-perfect grocery and e-commerce UI implementation translated directly from UI/UX design into modular Flutter widgets with fluid animations and responsive layouts.",
    highlights: [
      "Grocery / e-commerce UI built from a UI/UX design with custom widgets, animations and responsive layouts.",
      "Engineered interactive cart animations, catalog carousels, and search filters.",
      "Achieved smooth 60fps scrolling and zero layout jank across various display ratios."
    ],
    tech: ["Flutter", "Dart", "Custom Widgets", "UI Animations", "Responsive Design"],
    gradient: "from-emerald-800/70 via-burgundy-800 to-burgundy-950",
    phoneMockupPattern: "ecommerce",
    links: {
      github: "https://github.com/zohaib-malik6",
    },
  },
  {
    id: "crown-well",
    title: "Crown Well (Client Project, Technoblick)",
    category: "Consultant Application",
    platform: "Android",
    featured: false,
    description:
      "Collaborative native Android consultant application developed in partnership with Technoblick, connected directly with Node.js backend infrastructure.",
    highlights: [
      "Collaborated on a consultant application for a client with multidisciplinary teams.",
      "Integrated Node.js APIs to connect the app securely to its backend services.",
      "Constructed modular native layouts adhering to modern Android standards."
    ],
    tech: ["Kotlin", "XML", "Android Studio", "Node.js APIs", "Team Collaboration"],
    gradient: "from-stone-800 via-burgundy-800 to-burgundy-950",
    phoneMockupPattern: "consultant",
    links: {
      github: "https://github.com/zohaib-malik6",
    },
  },
];

