"use client";

import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-11 items-center justify-between px-5"
      style={{ backgroundColor: "#191919", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Left: mobile menu */}
      <div className="flex items-center gap-3 md:hidden">
        <MobileNav />
        <span className="text-sm font-medium tracking-tight" style={{ color: "#eeeff4" }}>
          Farhandy Akbar
        </span>
      </div>

      {/* Left: name on desktop */}
      <span className="hidden text-sm font-medium tracking-tight md:block" style={{ color: "#eeeff4" }}>
        Farhandy Akbar
      </span>

      {/* Right: availability badge */}
      <div className="flex items-center gap-3">
        <span
          className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium sm:flex"
          style={{ backgroundColor: "rgba(197,255,65,0.1)", color: "#c5ff41" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#c5ff41" }}
          />
          Available
        </span>
      </div>
    </header>
  );
}
