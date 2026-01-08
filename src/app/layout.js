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
    "Richard Ngasike – Full Stack Developer & Ethical Hacker. Skilled in Next.js, React, Node.js, Flutter, and cybersecurity. View projects, portfolio, and contact information.",
  authors: [{ name: "Richard Ngasike" }],
  creator: "Richard Ngasike",
  publisher: "Richard Ngasike",
  metadataBase: new URL("https://richardngasike.co.ke"),
  alternates: {
    canonical: "https://richardngasike.co.ke",
  },
  openGraph: {
    title: "Richard Ngasike | Full Stack Developer & Ethical Hacker",
    description:
      "Portfolio of Richard Ngasike showcasing web development, software engineering, ethical hacking, and cybersecurity projects.",
    url: "https://richardngasike.co.ke",
    siteName: "Richard Ngasike Portfolio",
    images: [
      {
        url: "https://richardngasike.co.ke/og-image.jpg",
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
      "Portfolio of Richard Ngasike, experienced full stack developer and ethical hacker.",
    images: ["https://richardngasike.co.ke/og-image.jpg"],
    creator: "@sudopacmansyu",
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
              url: "https://richardngasike.co.ke",
              image: "https://richardngasike.co.ke/profile-photo.jpg",
              sameAs: [
                "https://www.linkedin.com/in/richard-ngasike-6247b5232/",
                "https://github.com/richardngasike",
                "https://x.com/sudopacmansyu",
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

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Richard Ngasike Portfolio",
              url: "https://richardngasike.co.ke",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://richardngasike.co.ke/search?q={search_term_string}",
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
