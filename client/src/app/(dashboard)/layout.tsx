import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paisa Manager",
  description: "Home Page",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-svh bg-white ">
      {children}
      <BottomNavigation />
    </section>
  );
}
