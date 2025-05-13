import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";


export const metadata: Metadata = {
  title: "Shubham Mukherjee - Full Stack Developer ",
  description: "Experienced Full Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and TypeScript. View my portfolio featuring responsive web applications, REST APIs, and database-driven projects. Passionate about creating performant and user-friendly solutions.",
};


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
