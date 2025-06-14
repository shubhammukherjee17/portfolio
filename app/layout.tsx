import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";

export const metadata: Metadata = {
  title: "Shubham Mukherjee - Full Stack Developer",
  description: "Experienced Full Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and TypeScript. View my portfolio featuring responsive web applications, REST APIs, and database-driven projects. Passionate about creating performant and user-friendly solutions.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Shubham Mukherjee" }],
  creator: "Shubham Mukherjee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Shubham Mukherjee - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in modern web technologies",
    siteName: "Shubham Mukherjee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Mukherjee - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in modern web technologies",
    creator: "@your-twitter-handle",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#0f172a",
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${poppins.variable} scroll-smooth`}>
      <body className={`${poppins.className} antialiased min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b]`}>
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
