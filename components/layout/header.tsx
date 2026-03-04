"use client";

import { MobileNav } from "./mobile-nav";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-11 items-center justify-between px-5 transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Left: mobile menu */}
      <div className="flex items-center gap-3 md:hidden">
        <MobileNav />
        <span className="text-sm font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Farhandy Akbar
        </span>
      </div>

      {/* Left: name on desktop */}
      <span className="hidden text-sm font-medium tracking-tight md:block" style={{ color: "var(--foreground)" }}>
        Farhandy Akbar
      </span>

      {/* Right: availability badge + theme toggle */}
      <div className="flex items-center gap-3">
        <span
          className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium sm:flex"
          style={{ backgroundColor: "var(--badge-available-bg)", color: "var(--badge-available-text)" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--badge-available-text)" }}
          />
          Available
        </span>

        <DarkModeToggle />
      </div>
    </header>
  );
}
