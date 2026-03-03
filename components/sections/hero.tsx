"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const tags = ["Product Design", "Figma", "Miro", "Framer", "UX Research", "Design Systems"];

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[85vh] flex-col justify-center py-20">
      {/* Avatar + Status */}
      <ScrollReveal delay={0} direction="up">
        <div className="mb-10 flex items-center gap-3">
          {/* Avatar */}
          <div className="relative">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #1a3550 0%, #1a4a3a 100%)",
                color: "#f7f7f7",
                fontSize: "13px",
                letterSpacing: "0.04em",
              }}
            >
              FA
            </div>
            {/* Status dot */}
            <span
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2"
              style={{ backgroundColor: "#16bf5e", borderColor: "#121212" }}
            />
          </div>

          {/* Status text */}
          <span className="text-xs font-medium" style={{ color: "rgba(247,247,247,0.45)" }}>
            Available for work · Jakarta, Indonesia
          </span>
        </div>
      </ScrollReveal>

      {/* Headline */}
      <ScrollReveal delay={0.08} direction="up">
        <h1
          className="mb-6 max-w-2xl text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
          style={{ color: "#f7f7f7", letterSpacing: "-0.03em" }}
        >
          Balancing bold{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#3dc8ff",
            }}
          >
            visuals
          </span>{" "}
          with user-focused thinking.
        </h1>
      </ScrollReveal>

      {/* Sub-headline */}
      <ScrollReveal delay={0.16} direction="up">
        <p
          className="mb-10 max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(247,247,247,0.5)" }}
        >
          Product Designer with 4+ years of experience. Shaped by agency excellence,
          sharpened at one of Indonesia&apos;s leading SaaS companies.
        </p>
      </ScrollReveal>

      {/* Tags */}
      <ScrollReveal delay={0.22} direction="up">
        <div className="mb-12 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                color: "rgba(247,247,247,0.55)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* CTAs */}
      <ScrollReveal delay={0.3} direction="up">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#3dc8ff", color: "#121212" }}
          >
            View my work
            <ArrowUpRight size={14} weight="bold" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "rgba(247,247,247,0.55)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f7f7")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,247,247,0.55)")}
          >
            Get in touch
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
