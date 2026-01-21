import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trivon Web App",
  description: "Trivon Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
