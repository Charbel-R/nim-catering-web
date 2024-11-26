import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nim Catering",
  description: "Nim Catering is a catering service in the heart of Amsterdam.",
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
