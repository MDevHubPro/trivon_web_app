import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Path is now relative to this file (layout.tsx)
const ppMori = localFont({
  src: [
    { path: "./fonts/PPMori-Extralight.otf", weight: "200" },
    { path: "./fonts/PPMori-Regular.otf", weight: "400" },
    { path: "./fonts/PPMori-SemiBold.otf", weight: "600" },
  ],
  variable: "--font-pp-mori",
});

export const metadata: Metadata = {
  title: "Trivon Web App",
  description: "Trivon Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // IMPORTANT: You must apply the variable to the <html> or <body>
    <html lang="en" className={ppMori.variable}>
      <body className="antialiased font-mori">
        {children}
      </body>
    </html>
  );
}