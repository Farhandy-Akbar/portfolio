import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe — Full-Stack Developer",
  description:
    "Portfolio of John Doe, a full-stack developer crafting fast, accessible, and beautiful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {/* Fixed top header */}
          <Header />

          {/* Page shell: sidebar + main */}
          <div className="flex pt-11" style={{ minHeight: "100vh" }}>
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 px-6 sm:px-10 lg:px-20 xl:px-24">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
