import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhandy Akbar — Product Designer",
  description:
    "Portfolio of Farhandy Akbar, a Product Designer with 4+ years of experience balancing bold visuals with user-focused thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}>
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
