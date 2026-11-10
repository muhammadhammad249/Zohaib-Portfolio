import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

function getApiBase(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  // In the browser, use relative paths — Vercel edge rewrites /api/* to backend service,
  // and locally Next.js rewrites /api/* to localhost:5000 (see next.config.mjs).
  if (typeof window !== "undefined") {
    return "";
  }
  // On the server side (SSR / RSC), use the binding URL injected by Vercel services,
  // falling back to localhost for local development.
  return process.env.BACKEND_URL || "http://localhost:5000";
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  fallback?: boolean;
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  updatedAt?: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<ApiResponse> {
  const base = getApiBase();
  try {
    const res = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Server responded with status ${res.status}`);
    }

    return {
      success: true,
      message: data.message || "Message sent successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to reach server. Please use direct email.",
    };
  }
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const base = getApiBase();
  try {
    const res = await fetch(`${base}/api/github/repos`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) throw new Error("Failed to fetch GitHub repositories");
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    return [
      {
        name: "flutter-fintech-wallet",
        description: "Fintech mobile wallet implementation with BLoC state management and REST API integration.",
        language: "Dart",
        stars: 3,
        url: "https://github.com/zohaib-malik6",
      },
      {
        name: "qr-vertex-android",
        description: "Native Android application for QR code generation and barcode scanning with Kotlin and XML.",
        language: "Kotlin",
        stars: 2,
        url: "https://github.com/zohaib-malik6",
      },
      {
        name: "still-blink-mobile",
        description: "Cross-platform mobile application built with Flutter, Dart and BLoC architecture.",
        language: "Dart",
        stars: 1,
        url: "https://github.com/zohaib-malik6",
      },
      {
        name: "nectar-ui-flutter",
        description: "Grocery e-commerce responsive UI case study featuring custom animated Flutter widgets.",
        language: "Dart",
        stars: 2,
        url: "https://github.com/zohaib-malik6",
      },
    ];
  }
}

export async function getProfile() {
  const base = getApiBase();
  try {
    const res = await fetch(`${base}/api/profile`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch remote profile");
    const json = await res.json();
    return json.data || profileData;
  } catch {
    return profileData;
  }
}

export async function getProjects() {
  const base = getApiBase();
  try {
    const res = await fetch(`${base}/api/projects`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch remote projects");
    const json = await res.json();
    return json.data || projectsData;
  } catch {
    return projectsData;
  }
}
