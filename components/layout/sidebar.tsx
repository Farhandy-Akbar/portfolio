"use client";

import {
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

const navLinks: { label: string; href: string; icon: Icon }[] = [
  { label: "Home",    href: "#hero",    icon: House },
  { label: "Work",    href: "#work",    icon: Briefcase },
  { label: "About",   href: "#about",   icon: User },
  { label: "Contact", href: "#contact", icon: ChatCircleDots },
];

const socialLinks: { label: string; href: string; icon: Icon }[] = [
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/in/farhandyakbar/" },
  { icon: FigmaLogo,    label: "Figma",    href: "https://is.gd/FarhandysDesignWork" },
  { icon: XLogo,        label: "X / Twitter", href: "https://x.com/uifarhandy" },
  { icon: Envelope,     label: "Email",    href: "mailto:hellofarhandy@gmail.com" },
];

export function Sidebar() {
  return (
    <aside
      className="hidden md:flex sticky h-[calc(100vh-74px)] w-[250px] shrink-0 flex-col justify-between py-10 pl-10 pr-6"
      style={{ top: "74px", borderRight: "1px solid rgba(255,255,255,0.06)" }}
    >
      <nav className="flex flex-col gap-1">
        <p
          className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em]"
          style={{ color: "rgba(238,239,244,0.35)" }}
        >
          Navigation
        </p>
        {navLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="group flex items-center gap-2.5 py-1.5 text-sm transition-colors"
            style={{ color: "rgba(238,239,244,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#eeeff4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,239,244,0.5)")}
          >
            <Icon size={14} weight="regular" />
            {label}
          </a>
        ))}

        <div className="my-6 h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

        <p
          className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em]"
          style={{ color: "rgba(238,239,244,0.35)" }}
        >
          Connect
        </p>
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-1.5 text-sm transition-colors"
            style={{ color: "rgba(238,239,244,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#eeeff4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,239,244,0.5)")}
          >
            <Icon size={14} weight="regular" />
            {label}
          </a>
        ))}
      </nav>

      <p className="text-[11px]" style={{ color: "rgba(238,239,244,0.25)" }}>
        © {new Date().getFullYear()} Farhandy Akbar
      </p>
    </aside>
  );
}
