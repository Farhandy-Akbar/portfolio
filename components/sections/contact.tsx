"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, LinkedinLogo, FigmaLogo, XLogo, DribbbleLogo } from "@phosphor-icons/react";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const EMAIL = "hellofarhandy@gmail.com";

const socials = [
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    handle: "farhandyakbar",
    href: "https://www.linkedin.com/in/farhandyakbar/",
  },
  {
    icon: FigmaLogo,
    label: "Figma",
    handle: "Design Works",
    href: "https://is.gd/FarhandysDesignWork",
  },
  {
    icon: DribbbleLogo,
    label: "Dribbble",
    handle: "@farhandy",
    href: "https://dribbble.com/farhandy",
  },
  {
    icon: XLogo,
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
        <div className="mb-1 text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent-green)" }}>
          Get in touch
        </div>
        <h2
          className="mb-3 text-3xl font-semibold"
          style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
        >
          Contact
        </h2>
        <p className="mb-12 max-w-lg text-sm leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
          Open to new opportunities, collaborations, or a friendly hello. Drop me a message
          and I&apos;ll get back to you promptly.
        </p>
      </ScrollReveal>

      {/* Email block */}
      <ScrollReveal delay={0.1} direction="up">
        <div
          className="mb-10 flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{
            backgroundColor: "var(--layer-1)",
            border: "1px solid var(--border-faint)",
          }}
        >
          <div>
            <p
              className="mb-0.5 text-[10px] font-medium uppercase tracking-widest"
              style={{ color: "var(--fg-faint)" }}
            >
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--accent-blue)" }}
            >
              {EMAIL}
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all hover:opacity-80"
            style={{
              backgroundColor: "var(--layer-2)",
              color: "var(--fg-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {copied ? (
              <>
                <Check size={12} weight="bold" />
                Copied!
              </>
            ) : (
              <>
                <Copy size={12} weight="regular" />
                Copy
              </>
            )}
          </button>
        </div>
      </ScrollReveal>

      {/* Social links as list */}
      <StaggerReveal className="flex flex-col" staggerDelay={0.07}>
        {socials.map(({ icon: Icon, label, handle, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t py-4 transition-all"
            style={{ borderColor: "var(--border-faint)" }}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                weight="regular"
                style={{ color: "var(--fg-faint)" }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  {label}
                </p>
                <p className="text-xs" style={{ color: "var(--fg-faint)" }}>
                  {handle}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              weight="regular"
              className="opacity-0 transition-opacity group-hover:opacity-40"
              style={{ color: "var(--fg)" }}
            />
          </a>
        ))}
        <div className="h-px" style={{ backgroundColor: "var(--border-faint)" }} />
      </StaggerReveal>
    </section>
  );
}
