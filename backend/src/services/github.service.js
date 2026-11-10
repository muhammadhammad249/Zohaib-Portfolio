import { env } from "../config/env.js";

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
let cache = {
  timestamp: 0,
  data: null
};

// Static fallback data in case GitHub rate limits or is offline
const fallbackRepos = [
  {
    name: "flutter-fintech-wallet",
    description: "Fintech mobile wallet implementation with BLoC state management and REST API integration.",
    language: "Dart",
    stars: 3,
    url: `https://github.com/${env.GITHUB_USERNAME}`,
    updatedAt: new Date().toISOString()
  },
  {
    name: "qr-vertex-android",
    description: "Native Android application for QR code generation and barcode scanning with Kotlin and XML.",
    language: "Kotlin",
    stars: 2,
    url: `https://github.com/${env.GITHUB_USERNAME}`,
    updatedAt: new Date().toISOString()
  },
  {
    name: "still-blink-mobile",
    description: "Cross-platform mobile application built with Flutter, Dart and BLoC architecture.",
    language: "Dart",
    stars: 1,
    url: `https://github.com/${env.GITHUB_USERNAME}`,
    updatedAt: new Date().toISOString()
  },
  {
    name: "nectar-ui-flutter",
    description: "Grocery e-commerce responsive UI case study featuring custom animated Flutter widgets.",
    language: "Dart",
    stars: 2,
    url: `https://github.com/${env.GITHUB_USERNAME}`,
    updatedAt: new Date().toISOString()
  }
];

export async function fetchGithubRepos() {
  const now = Date.now();
  if (cache.data && now - cache.timestamp < CACHE_TTL_MS) {
    return { repos: cache.data, cached: true };
  }

  const username = env.GITHUB_USERNAME || "zohaib-malik6";
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`;

  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Zohaib-Portfolio-Backend"
  };

  if (env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      console.warn(`[GitHub Service] GitHub API returned status ${response.status}: ${response.statusText}`);
      if (cache.data) {
        return { repos: cache.data, cached: true, warning: "GitHub rate limit exceeded, using cached data" };
      }
      return { repos: fallbackRepos, cached: false, fallback: true };
    }

    const reposJson = await response.json();

    if (!Array.isArray(reposJson)) {
      if (cache.data) return { repos: cache.data, cached: true };
      return { repos: fallbackRepos, cached: false, fallback: true };
    }

    const filtered = reposJson
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description || "Mobile development project repository.",
        language: repo.language || "Dart",
        stars: repo.stargazers_count || 0,
        url: repo.html_url,
        updatedAt: repo.updated_at
      }));

    cache = {
      timestamp: now,
      data: filtered
    };

    return { repos: filtered, cached: false };
  } catch (error) {
    console.error("[GitHub Service] Error fetching repos:", error.message);
    if (cache.data) {
      return { repos: cache.data, cached: true, fallback: false };
    }
    return { repos: fallbackRepos, cached: false, fallback: true };
  }
}

