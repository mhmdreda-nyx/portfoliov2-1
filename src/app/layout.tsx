import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Reda | Penetration Tester & Developer",
  description:
    "Portfolio of Mohamed Reda — Engineering Student, Penetration Tester, and Software Tester. Specializing in Cybersecurity, Quality Assurance, and Visual Design.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Mohamed Reda",
    "Cybersecurity",
    "Penetration Testing",
    "Software Testing",
    "QA",
    "Python",
    "ISTQB",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
