import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";
import { SITE_METADATA } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A060C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: "Zohaib Rukhsar | Flutter & Android Developer",
    template: "%s | Zohaib Rukhsar",
  },
  description: profileData.summary,
  authors: [{ name: profileData.name, url: profileData.githubUrl }],
  creator: profileData.name,
  keywords: [
    "Zohaib Rukhsar",
    "Flutter Developer",
    "Android Developer",
    "Cross-Platform Mobile Engineer",
    "Dart",
    "BLoC",
    "Kotlin",
    "Java",
    "XML",
    "AVISA DEV",
    "Lahore Pakistan",
    "Fintech Mobile App",
    "Google Play Store",
  ],
  alternates: {
    canonical: SITE_METADATA.siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.siteUrl,
    title: "Zohaib Rukhsar | Flutter & Android Developer",
    description: profileData.summary,
    siteName: "Zohaib Rukhsar Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zohaib Rukhsar - Flutter & Android Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohaib Rukhsar | Flutter & Android Developer",
    description: profileData.summary,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: "Flutter & Android Developer",
    worksFor: {
      "@type": "Organization",
      name: "AVISA DEV",
      location: "Lahore, Pakistan",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.education.institution,
    },
    url: SITE_METADATA.siteUrl,
    image: profileData.avatarUrl,
    sameAs: [profileData.githubUrl],
    email: `mailto:${profileData.email}`,
    telephone: profileData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Android SDK",
      "BLoC Architecture",
      "REST APIs",
      "Firebase",
      "Clean Architecture",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-flash inline script to restore theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased selection:bg-burgundy-600 selection:text-champagne`}>
        {/* Skip to Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-burgundy-600 text-white rounded-full font-medium shadow-lg"
        >
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}

