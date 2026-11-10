export interface Profile {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  githubUrl: string;
  avatarUrl: string;
  resumePath: string;
  languages: { name: string; proficiency: string }[];
  availability: string;
  currentRole: {
    title: string;
    company: string;
    location: string;
    period: string;
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    graduated: string;
  };
}

export const profileData: Profile = {
  name: "Zohaib Rukhsar",
  initials: "ZR",
  title: "Flutter Developer | Cross-Platform Mobile App Engineer",
  subtitle: "Cross-platform mobile applications in Flutter & Dart, plus native Android in Kotlin, Java & XML",
  location: "Lahore, Pakistan (onsite at AVISA DEV)",
  email: "zohaibmalikzm401@gmail.com",
  phone: "+92 342 0442565",
  whatsappUrl: "https://wa.me/923420442565",
  githubUrl: "https://github.com/zohaib-malik6",
  avatarUrl: "https://github.com/zohaib-malik6.png",
  resumePath: "/Zohaib_Rukhsar_Resume_Flutter_Developer.pdf",
  languages: [
    { name: "Urdu", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" },
  ],
  availability: "Open to full-time and part-time roles",
  currentRole: {
    title: "Flutter & Android Developer",
    company: "AVISA DEV",
    location: "Lahore (Onsite)",
    period: "Jan 2025 – Present",
  },
  summary:
    "Flutter Developer building cross-platform mobile applications with Dart, with hands-on experience in BLoC, Riverpod and Provider state management, MVVM and Clean Architecture, REST API and Firebase integration, and responsive UI implemented from Figma designs. Also develops native Android applications in Kotlin, Java and XML. Currently at AVISA DEV, Lahore, covering development, testing and release builds.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Superior University",
    location: "Lahore, Pakistan",
    graduated: "2026",
  },
};

