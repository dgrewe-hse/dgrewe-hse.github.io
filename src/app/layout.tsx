import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennis Grewe — Researcher & Lecturer",
  description:
    "Personal website of Dennis Grewe — research, lectures, thoughts and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#000", color: "#fff" }}>
      <body style={{ background: "#000", minHeight: "100vh" }}>{children}</body>
    </html>
  );
}
