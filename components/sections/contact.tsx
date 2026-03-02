"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { Check, Copy, Figma, Mail } from "lucide-react";

const EMAIL = "hellofarhandy@gmail.com";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.37 1.73 1.35 3.92 2.165 6.29 2.165 1.42 0 2.77-.29 4.006-.785zm-11.62-2.073c.232-.378 3.018-4.99 8.74-6.669.15-.045.306-.088.465-.127-.3-.676-.614-1.35-.938-2.005-5.69 1.7-11.218 1.63-11.74 1.62l-.002.24c0 2.8 1.063 5.36 2.804 7.286l.67-.345zm-2.97-8.946c.533.01 5.228.01 10.5-1.395a47.418 47.418 0 00-4.778-6.89 9.99 9.99 0 00-5.722 8.285zm6.813-9.055c.085.112 3.67 4.645 4.74 6.8a29.592 29.592 0 006.43-2.715A10.045 10.045 0 0012 2.01c-1.12 0-2.2.17-3.22.482zm11.53 5.41a30.87 30.87 0 01-6.842 2.9c.19.41.375.825.543 1.244 1.757-.247 3.508-.12 5.2.187a9.992 9.992 0 001.1-4.33z" />
    </svg>
  );
}

const socials = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "Farhandy Akbar",
    href: "https://www.linkedin.com/in/farhandyakbar/",
  },
  {
    icon: Figma,
    label: "Figma / Design Works",
    handle: "is.gd/FarhandysDesignWork",
    href: "https://is.gd/FarhandysDesignWork",
  },
  {
    icon: DribbbleIcon,
    label: "Dribbble",
    handle: "@farhandy",
    href: "https://dribbble.com/farhandy",
  },
  {
    icon: XIcon,
    label: "X (Twitter)",
    handle: "@uifarhandy",
    href: "https://x.com/uifarhandy",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="py-20 pb-32">
      <ScrollReveal direction="up">
        <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-green)" }}>
          Get in touch
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mb-10 max-w-lg text-muted-foreground">
          Open to new opportunities, collaborations, or a friendly hello. Drop me a message
          and I&apos;ll get back to you promptly.
        </p>
      </ScrollReveal>

      {/* Email row */}
      <ScrollReveal delay={0.1} direction="up">
        <div
          className="mb-8 flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ backgroundColor: "var(--surface-alt)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(14,79,246,0.15)" }}
            >
              <Mail className="h-4 w-4" style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium hover:underline"
                style={{ color: "var(--accent-blue)" }}
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={copyEmail} className="gap-2 rounded-full">
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy email address</TooltipContent>
          </Tooltip>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="none" delay={0.15}>
        <Separator className="mb-8" />
      </ScrollReveal>

      {/* Social links */}
      <StaggerReveal className="flex flex-col gap-3" staggerDelay={0.08}>
        {socials.map(({ icon: Icon, label, handle, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted"
          >
            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
            <div>
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{handle}</p>
            </div>
          </a>
        ))}
      </StaggerReveal>
    </section>
  );
}
