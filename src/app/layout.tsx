import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Priest Adewale | Full-Stack Web & Mobile Developer",
  description: "Priest Adewale is a professional Full-Stack Developer specializing in frontend engineering, AI-powered systems, and modern web experiences. Explore projects in AI, E-commerce, and Fintech.",
  keywords: ["Priest Adewale", "Full-Stack Developer", "Frontend Engineer", "AI Developer", "Next.js Portfolio", "React Native Developer"],
  authors: [{ name: "Priest Adewale" }],
  openGraph: {
    title: "Priest Adewale | Full-Stack Web & Mobile Developer",
    description: "Sleek, modern, and AI-driven web experiences.",
    url: "https://priest-dev.vercel.app",
    siteName: "Priest Adewale Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
