"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-11 items-center justify-between px-5"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Left: mobile menu */}
      <div className="flex items-center gap-3 md:hidden">
        <MobileNav />
        <span className="text-sm font-semibold tracking-tight">John Doe</span>
      </div>

      {/* Left: name on desktop */}
      <span className="hidden text-sm font-semibold tracking-tight md:block">
        John Doe
      </span>

      {/* Right: availability badge + theme toggle */}
      <div className="flex items-center gap-3">
        <span
          className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium sm:flex"
          style={{ backgroundColor: "rgba(197,255,65,0.15)", color: "var(--accent-green)" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent-green)" }} />
          Available for work
        </span>

        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </header>
  );
}
