import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nim Catering",
  description: "Nim Catering is a catering service in the heart of Amsterdam."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
