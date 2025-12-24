import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Richard Ngasike | Full Stack Developer & Ethical Hacker",
    template: "%s | Richard Ngasike",
  },
  description:
    "Richard Ngasike (Richard Ethuku Ngasike) - Experienced Full Stack Developer and Ethical Hacker. Expert in web development, software engineering, cybersecurity, and penetration testing. Portfolio showcasing projects in Next.js, React, Node.js, and more.",
  keywords: [
  // Core name variations
    "Richard Ngasike",
    "Richard Ethuku Ngasike",
    "Richard E Ngasike",
    "Ngasike",
    "Ngasike Richard",
    "Richard Ng'asike",
    "Richard Ngasike Kenya",
    "Kenyan developer Richard Ngasike",
    "Richard Ngasike developer",
    "Richard Ngasike portfolio",
    "Richard Ngasike website",
    "Richard Ngasike co ke",

    // Location-based
    "Kenyan full stack developer",
    "Kenya web developer",
    "Nairobi developer",
    "Kenyan software engineer",
    "Kenya ethical hacker",
    "Kenyan penetration tester",
    "Kenya cybersecurity expert",
    "Nairobi full stack developer",
    "Kenyan Next.js developer",
    "Kenya React developer",

    // Professions & Skills
    "full stack developer",
    "full stack developer Kenya",
    "full stack web developer",
    "frontend developer",
    "backend developer",
    "ethical hacker",
    "ethical hacker Kenya",
    "penetration tester",
    "penetration tester Kenya",
    "cybersecurity expert",
    "cyber security specialist Kenya",
    "web developer",
    "software engineer",
    "software developer Kenya",
    "mobile app developer Kenya",
    "Flutter developer Kenya",
    "app developer Kenya",

    // Technologies
    "Next.js developer",
    "Next.js developer Kenya",
    "React developer",
    "React.js developer Kenya",
    "Node.js developer",
    "Node.js developer Kenya",
    "JavaScript developer Kenya",
    "TypeScript developer",
    "MongoDB developer",
    "PostgreSQL developer",
    "Supabase developer",
    "Firebase developer",
    "Tailwind CSS developer",
    "UI/UX developer Kenya",

    // Services & Expertise
    "web development services Kenya",
    "website developer Kenya",
    "custom website development Kenya",
    "ecommerce developer Kenya",
    "portfolio website developer",
    "cybersecurity services Kenya",
    "ethical hacking services Kenya",
    "penetration testing services Kenya",
    "bug bounty hunter Kenya",
    "vulnerability assessment Kenya",
    "mobile application development Kenya",
    "Flutter app developer Kenya",
    "cross-platform app developer",

    // Personal branding
    "Richard Ngasike full stack",
    "Richard Ngasike ethical hacker",
    "Richard Ngasike web developer",
    "Richard Ngasike software engineer",
    "Richard Ngasike penetration tester",
    "Richard Ngasike cybersecurity",
    "Richard Ngasike Next.js",
    "Richard Ngasike React",
    "Richard Ngasike Node.js",
    "Richard Ngasike Flutter",
    "Richard Ngasike mobile developer",
    "Richard Ngasike freelancer",
    "hire Richard Ngasike",
    "Richard Ngasike contact",
    "Richard Ngasike projects",

    // Freelance & Professional
    "freelance developer Kenya",
    "freelance web developer Kenya",
    "freelance ethical hacker",
    "Kenyan freelancer developer",
    "Upwork Kenyan developer",
    "Fiverr Kenyan developer",
    "top Kenyan developer",
    "best full stack developer Kenya",

    // Additional long-tail variations
    "Richard Ngasike richardngasike.co.ke",
    "developer from Kenya Ngasike",
    "Kenyan hacker Ngasike",
    "full stack ethical hacker Kenya",
    "Next.js expert Kenya",
    "React expert Kenya",
    "software engineer Richard Ngasike",
    "pen tester Richard Ngasike",
    "cybersecurity consultant Kenya",
    "web application security Kenya",
    "secure web development Kenya",
    "Kenyan tech professional Ngasike",
    "Richard Ngasike GitHub",
    "Richard Ngasike LinkedIn",
    "Richard Ngasike Twitter",
    "Richard Ngasike X handle",
    "@Richardngasike",
    "Ngasike developer Kenya",
    "Ethuku Ngasike developer"
  ],
  authors: [{ name: "Richard Ngasike" }],
  creator: "Richard Ngasike",
  publisher: "Richard Ngasike",
  metadataBase: new URL("https://richardngasike.co.ke"), // ← Replace with your real domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Richard Ngasike | Full Stack Developer & Ethical Hacker",
    description:
      "Portfolio of Richard Ngasike, a skilled full stack developer and ethical hacker specializing in modern web technologies and cybersecurity.",
    url: "/",
    siteName: "Richard Ngasike Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 image in /public folder
        width: 1200,
        height: 630,
        alt: "Richard Ngasike - Full Stack Developer & Ethical Hacker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Ngasike | Full Stack Developer & Ethical Hacker",
    description:
      "Full stack developer and ethical hacker. View my portfolio and projects.",
    images: ["/og-image.jpg"],
    creator: "@sudopacmansyu", // Optional: replace or remove
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Richard Ethuku Ngasike",
              alternateName: ["Richard Ngasike", "Ngasike"],
              jobTitle: "Full Stack Developer & Ethical Hacker",
              description:
                "Richard Ngasike is a full stack developer and ethical hacker with expertise in web development, software engineering, and cybersecurity.",
              url: "https://richardngasike.co.ke", // ← Replace with your domain
              image: "https://richardngasike.co.ke/profile-photo.jpg", // Optional
              sameAs: [
                "https://www.linkedin.com/in/richard-ngasike-6247b5232/",
                "https://github.com/richardngasike",
                "https://x.com/sudopacmansyu",
                // Add more social links here
              ],
              knowsAbout: [
                "Full Stack Development",
                "Ethical Hacking",
                "Web Development",
                "Cybersecurity",
                "Next.js",
                "React",
                "Node.js",
                "Penetration Testing",
              ],
            }),
          }}
        />

        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Richard Ngasike Portfolio",
              url: "https://richardngasike.co.ke", // ← Replace with your domain
              potentialAction: {
                "@type": "SearchAction",
                target: "https://richardngasike.co.ke/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}