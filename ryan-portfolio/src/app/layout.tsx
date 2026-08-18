import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

const siteUrl = "https://ryansharifi.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ryan Sharifi Portfolio",
  title: {
    default: "Ryan Sharifi | Full-Stack & Freelance Web Developer in Houston",
    template: "%s | Ryan Sharifi",
  },
  description:
    "Houston-based full-stack software engineer and freelance web developer building custom websites and web applications with React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, and Supabase.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ryan Sharifi | Full-Stack & Freelance Web Developer in Houston",
    description:
      "Full-stack software engineering and freelance web development for Houston businesses, startups, founders, and product teams.",
    url: siteUrl,
    siteName: "Ryan Sharifi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ryan Sharifi | Full-Stack & Freelance Web Developer in Houston",
    description:
      "Houston-based full-stack software engineer building custom websites, web applications, APIs, and technical SEO improvements.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`} suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
