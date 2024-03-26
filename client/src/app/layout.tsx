import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paisa Manager",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="../../public/manifest.json" />
      </head>
      <body className={inter.className}>
        <main className="w-screen h-svh bg-white">{children}</main>
      </body>
    </html>
  );
}
