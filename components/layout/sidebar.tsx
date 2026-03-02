"use client";

import { Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587-.001h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49h-4.588v-8.98zm4.588 7.51c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117v6.038h3.117zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.49c0 2.476-2.014 4.49-4.588 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019S6.483 22.529 8.148 22.529c1.665 0 3.019-1.355 3.019-3.02v-3.019H8.148z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/farhandyakbar/" },
  { icon: FigmaIcon, label: "Figma", href: "https://is.gd/FarhandysDesignWork" },
  { icon: XIcon, label: "Twitter / X", href: "https://x.com/uifarhandy" },
  { icon: Mail, label: "Email", href: "mailto:hellofarhandy@gmail.com" },
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
        © {new Date().getFullYear()} Farhandy Akbar
      </p>
    </aside>
  );
}
