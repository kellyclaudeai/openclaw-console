import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "OpenClaw Console",
    template: "%s | OpenClaw Console",
  },
  description:
    "The control plane for AI agents. Monitor performance, manage policies, enforce budgets, and secure your agent fleet from a single dashboard.",
  keywords: [
    "AI agents",
    "agent management",
    "agent monitoring",
    "MCP",
    "agent security",
    "AI operations",
    "agent dashboard",
    "LLM ops",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "OpenClaw Console",
    title: "OpenClaw Console",
    description: "The control plane for AI agents. Monitor, manage, and secure your agent fleet.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "OpenClaw Console" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Console",
    description: "The control plane for AI agents. Monitor, manage, and secure your agent fleet.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/icon.svg" },
  authors: [{ name: "OpenClaw" }],
  creator: "OpenClaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
