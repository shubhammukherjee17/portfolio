import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/mobile-optimizations.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Mukherjee - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, TypeScript, JavaScript, Web Development, Software Engineer",
  authors: [{ name: "Shubham Mukherjee" }],
  creator: "Shubham Mukherjee",
  publisher: "Shubham Mukherjee",
  openGraph: {
    title: "Shubham Mukherjee - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://your-domain.com",
    siteName: "Shubham Mukherjee Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Mukherjee - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="smooth-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mobile-text-optimize mobile-font-smooth safe-area-padding no-horizontal-scroll`}
      >
        <ThemeProvider
        attribute="class"
            defaultTheme="system"
            enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
