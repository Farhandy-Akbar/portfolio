"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Check, Copy, Github, Linkedin, Twitter, Mail } from "lucide-react";

const EMAIL = "hello@johndoe.dev";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@johndoe",
    href: "https://github.com",
    accent: "var(--accent-blue)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "John Doe",
    href: "https://linkedin.com",
    accent: "var(--accent-blue)",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@johndoe",
    href: "https://twitter.com",
    accent: "var(--accent-blue)",
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
      <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-green)" }}>
        Get in touch
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight">Contact</h2>
      <p className="mb-10 max-w-lg text-muted-foreground">
        I&apos;m open to new opportunities, collaborations, or just a friendly hello.
        Drop me a message — I&apos;ll get back to you promptly.
      </p>

      {/* Email row */}
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

      <Separator className="mb-8" />

      {/* Social links */}
      <div className="flex flex-col gap-3">
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
      </div>
    </section>
  );
}
