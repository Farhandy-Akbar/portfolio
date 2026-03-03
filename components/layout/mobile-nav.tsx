"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  List,
  House,
  Briefcase,
  User,
  ChatCircleDots,
  LinkedinLogo,
  FigmaLogo,
  XLogo,
  Envelope,
  type Icon,
} from "@phosphor-icons/react";
import { useState } from "react";

const navLinks: { label: string; href: string; icon: Icon }[] = [
  { label: "Home",    href: "#hero",    icon: House },
  { label: "Work",    href: "#work",    icon: Briefcase },
  { label: "About",   href: "#about",   icon: User },
  { label: "Contact", href: "#contact", icon: ChatCircleDots },
];

const socialLinks: { label: string; href: string; icon: Icon }[] = [
  { icon: LinkedinLogo, label: "LinkedIn",    href: "https://www.linkedin.com/in/farhandyakbar/" },
  { icon: FigmaLogo,    label: "Figma",       href: "https://is.gd/FarhandysDesignWork" },
  { icon: XLogo,        label: "X / Twitter", href: "https://x.com/uifarhandy" },
  { icon: Envelope,     label: "Email",       href: "mailto:hellofarhandy@gmail.com" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Open menu">
          <List size={16} weight="regular" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 pt-8"
        style={{ backgroundColor: "#121212", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        <SheetHeader>
          <SheetTitle className="text-left text-base" style={{ color: "#f7f7f7" }}>
            Farhandy Akbar
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-0.5">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm transition-colors"
              style={{ color: "rgba(247,247,247,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,247,247,0.55)")}
            >
              <Icon size={14} weight="regular" />
              {label}
            </a>
          ))}
        </nav>
        <div className="my-6 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
        <div className="flex flex-col gap-0.5">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm transition-colors"
              style={{ color: "rgba(247,247,247,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,247,247,0.55)")}
            >
              <Icon size={14} weight="regular" />
              {label}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
