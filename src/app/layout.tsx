import type { Metadata } from "next";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Priest Adewale — Full-Stack Developer & AI Engineer",
  description: "Portfolio of Priest Adewale — full-stack developer building modern web, mobile, and AI-powered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
