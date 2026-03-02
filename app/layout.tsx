import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { NotificationBar } from "@/components/layout/notification-bar";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Providers>
          {/* Fixed top header */}
          <Header />

          {/* Blue notification bar below header */}
          <NotificationBar />

          {/* Page shell: sidebar + main */}
          {/* pt-[74px] = header (44px) + notification bar (30px) */}
          <div className="flex" style={{ minHeight: "100vh", paddingTop: "74px" }}>
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
