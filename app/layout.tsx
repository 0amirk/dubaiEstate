import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/chat/FloatingChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RealtyPro - Your Real Estate Investment Partner",
  description:
    "Professional real estate consultation services to help you make informed investment decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
