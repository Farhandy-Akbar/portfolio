"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@johndoe.dev" },
];

export function Sidebar() {
  return (
    <aside
      className="hidden md:flex sticky top-11 h-[calc(100vh-44px)] w-[250px] shrink-0 flex-col justify-between py-10 pl-10 pr-6"
      style={{ borderRight: "1px solid var(--border)" }}
    >
      {/* Nav */}
      <nav className="flex flex-col gap-1">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Navigation
        </p>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-2 rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span
              className="inline-block h-px w-4 transition-all group-hover:w-6"
              style={{ backgroundColor: "var(--accent-blue)" }}
            />
            {link.label}
          </a>
        ))}

        <Separator className="my-6" />

        <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Connect
        </p>
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <p className="text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} John Doe
      </p>
    </aside>
  );
}
