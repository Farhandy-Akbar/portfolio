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
        <div className="mb-1 text-xs font-medium tracking-widest uppercase" style={{ color: "#c5ff41" }}>
          Get in touch
        </div>
        <h2
          className="mb-3 text-3xl font-semibold"
          style={{ color: "#eeeff4", letterSpacing: "-0.02em" }}
        >
          Contact
        </h2>
        <p className="mb-12 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(238,239,244,0.45)" }}>
          Open to new opportunities, collaborations, or a friendly hello. Drop me a message
          and I&apos;ll get back to you promptly.
        </p>
      </ScrollReveal>

      {/* Email block */}
      <ScrollReveal delay={0.1} direction="up">
        <div
          className="mb-10 flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div>
            <p
              className="mb-0.5 text-[10px] font-medium uppercase tracking-widest"
              style={{ color: "rgba(238,239,244,0.3)" }}
            >
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "#0e4ff6" }}
            >
              {EMAIL}
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all hover:opacity-80"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "rgba(238,239,244,0.6)",
              border: "1px solid rgba(255,255,255,0.08)",
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
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                weight="regular"
                style={{ color: "rgba(238,239,244,0.3)" }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: "#eeeff4" }}>
                  {label}
                </p>
                <p className="text-xs" style={{ color: "rgba(238,239,244,0.35)" }}>
                  {handle}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              weight="regular"
              className="opacity-0 transition-opacity group-hover:opacity-40"
              style={{ color: "#eeeff4" }}
            />
          </a>
        ))}
        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
      </StaggerReveal>
    </section>
  );
}
