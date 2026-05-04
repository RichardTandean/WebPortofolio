import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { RaypContainer } from "@/components/rayp/rayp-container";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Richard Tandean — AI-Driven Software Engineer",
  description: "AI-Driven Software Engineer specializing in AI implementation, automation, and content creation at scale.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Richard Tandean — AI-Driven Software Engineer",
    description: "AI-Driven Software Engineer specializing in AI implementation, automation, and content creation at scale.",
    url: "https://porto.richardtandean.my.id",
    siteName: "Richard Tandean",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Tandean — AI-Driven Software Engineer",
    description: "AI-Driven Software Engineer specializing in AI implementation, automation, and content creation at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${dmSans.className}`}>
        <Nav />
        <RaypContainer>
          {children}
        </RaypContainer>
      </body>
    </html>
  );
}
