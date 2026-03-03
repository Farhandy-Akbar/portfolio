"use client";

import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-11 items-center justify-between px-5"
      style={{ backgroundColor: "#121212", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Left: mobile menu */}
      <div className="flex items-center gap-3 md:hidden">
        <MobileNav />
        <span className="text-sm font-medium tracking-tight" style={{ color: "#f7f7f7" }}>
          Farhandy Akbar
        </span>
      </div>

      {/* Left: name on desktop */}
      <span className="hidden text-sm font-medium tracking-tight md:block" style={{ color: "#f7f7f7" }}>
        Farhandy Akbar
      </span>

      {/* Right: availability badge */}
      <div className="flex items-center gap-3">
        <span
          className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium sm:flex"
          style={{ backgroundColor: "rgba(22,191,94,0.12)", color: "#16bf5e" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#16bf5e" }}
          />
          Available
        </span>
      </div>
    </header>
  );
}
