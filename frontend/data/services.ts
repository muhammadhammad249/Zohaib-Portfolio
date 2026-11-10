export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "flutter-cross-platform",
    title: "Flutter Cross-Platform Apps",
    tagline: "Single codebase, native performance on iOS & Android",
    description:
      "Crafting performant cross-platform mobile applications using Flutter and Dart, backed by scalable architecture patterns like BLoC and Clean Architecture.",
    deliverables: ["iOS & Android Builds", "BLoC/Riverpod State Management", "Clean Architecture"],
    icon: "Smartphone",
  },
  {
    id: "native-android",
    title: "Native Android Apps",
    tagline: "High-speed Kotlin, Java & XML development",
    description:
      "Building native Android solutions leveraging Kotlin, Java, and XML layouts tailored for devices, hardware integrations, and Play Store standards.",
    deliverables: ["Kotlin/Java Codebase", "XML Responsive Layouts", "Hardware/Sensor Hooks"],
    icon: "Cpu",
  },
  {
    id: "api-firebase",
    title: "REST API & Firebase Integration",
    tagline: "Real-time sync, auth & cloud data streams",
    description:
      "Seamlessly connecting mobile user interfaces with Node.js RESTful APIs, Firebase Authentication, Cloud Firestore, and real-time sockets.",
    deliverables: ["Secure Auth Workflows", "Real-Time Data Streams", "Offline Caching"],
    icon: "Cloud",
  },
  {
    id: "figma-to-code",
    title: "Figma-to-Code UI",
    tagline: "Pixel-perfect widget translation & fluid motion",
    description:
      "Translating complex UI/UX designs into responsive, modular Flutter widgets and native layouts with fluid micro-interactions and strict adherence to design systems.",
    deliverables: ["Pixel-Perfect Widgets", "Micro-Interactions", "Adaptive Screen Sizing"],
    icon: "Layout",
  },
  {
    id: "release-maintenance",
    title: "App Release & Maintenance",
    tagline: "Google Play releases, debugging & optimizations",
    description:
      "Managing end-to-end release builds, Play Console deployments, crash diagnostics, performance tuning, and continuous feature updates.",
    deliverables: ["Google Play Deployment", "Performance Optimization", "Release Bug Fixing"],
    icon: "ShieldCheck",
  },
];

