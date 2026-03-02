"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[80vh] flex-col justify-center pt-20 pb-16">
      {/* Avatar + status */}
      <ScrollReveal delay={0} direction="up">
        <div className="mb-8 flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-2 ring-[var(--accent-blue)]">
            <AvatarImage src="/avatar.jpg" alt="Farhandy Akbar" />
            <AvatarFallback
              className="text-lg font-semibold"
              style={{ backgroundColor: "var(--surface-alt)", color: "var(--accent-blue)" }}
            >
              FA
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Hello, I&apos;m</p>
            <p className="font-semibold">Farhandy Akbar</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Headline */}
      <ScrollReveal delay={0.1} direction="up">
        <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Balancing bold{" "}
          <span style={{ color: "var(--accent-blue)" }}>visuals</span>{" "}
          with user-focused thinking.
        </h1>
      </ScrollReveal>

      {/* Sub-headline */}
      <ScrollReveal delay={0.2} direction="up">
        <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Product Designer with 4+ years of experience. Brought ideas to life alongside
          top-tier teams — shaped by agency excellence, sharpened at one of Indonesia&apos;s
          leading SaaS companies.
        </p>
      </ScrollReveal>

      {/* Badges */}
      <ScrollReveal delay={0.3} direction="up">
        <div className="mb-10 flex flex-wrap gap-2">
          {["Product Design", "Figma", "Miro", "Framer", "UX Research", "Design Systems"].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA buttons */}
      <ScrollReveal delay={0.4} direction="up">
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full font-medium"
            style={{ backgroundColor: "var(--accent-blue)", color: "#fff" }}
          >
            <a href="#work">
              View my work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full font-medium"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
