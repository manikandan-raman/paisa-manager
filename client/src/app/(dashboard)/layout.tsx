import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNavigation from "@/components/BottomNavigation";

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
      <body className={inter.className}>
        <main className="w-screen h-svh bg-white ">
          {children}
          <div className="pb-1">
            <BottomNavigation />
          </div>
        </main>
      </body>
    </html>
  );
}
