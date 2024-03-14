import "./styles/global.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future World",
  description: "Dummy project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
