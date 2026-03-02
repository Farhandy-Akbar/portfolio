"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const projects = [
  {
    id: 1,
    title: "Retina Design System",
    description:
      "Systematizing complexity into clear, scalable components. A comprehensive design system built to unify product experiences across the platform.",
    tags: ["Design Systems", "Figma", "Component Library"],
    category: "system",
    year: "2024",
    accent: "#0e4ff6",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 2,
    title: "UX Sync — Pull to Refresh",
    description:
      "Enhancing mobile interaction with smooth, intuitive sync. A human-centered micro-interaction pattern that improves perceived performance.",
    tags: ["Mobile UX", "Interaction Design", "Prototyping"],
    category: "mobile",
    year: "2024",
    accent: "#f46c38",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 3,
    title: "Personalized Messaging in Banking",
    description:
      "Turning generic alerts into meaningful, contextual messages that build trust. A human-centered approach to financial notifications.",
    tags: ["Fintech", "UX Writing", "Mobile Design"],
    category: "mobile",
    year: "2023",
    accent: "#c5ff41",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 4,
    title: "PetPal — Pet Care Landing Page",
    description:
      "A warm, inviting landing page focused on emotional connection, clear hierarchy, and conversion-driven layout.",
    tags: ["Landing Page", "Web Design", "UI Design"],
    category: "web",
    year: "2023",
    accent: "#0e4ff6",
    live: "https://dribbble.com/farhandy",
  },
  {
    id: 5,
    title: "Telemedicine — Mayo Clinic Concept",
    description:
      "A concept redesign of a telemedicine platform prioritizing accessibility, clarity, and intuitive patient flows.",
    tags: ["Healthcare", "Telemedicine", "UX Design"],
    category: "mobile",
    year: "2022",
    accent: "#f46c38",
    live: "https://dribbble.com/farhandy",
  },
  {
    id: 6,
    title: "E-commerce Furniture Store",
    description:
      "A minimal, premium e-commerce UI for a furniture brand. Emphasis on product photography and smooth browsing experience.",
    tags: ["E-commerce", "Web Design", "UI Design"],
    category: "web",
    year: "2022",
    accent: "#c5ff41",
    live: "https://dribbble.com/farhandy",
  },
];

const categories = ["all", "web", "mobile", "system"] as const;

export function Work() {
  const [active, setActive] = useState<"all" | "web" | "mobile" | "system">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-20">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="mb-1 text-xs font-medium tracking-widest uppercase" style={{ color: "#0e4ff6" }}>
          Selected work
        </div>
        <h2
          className="mb-3 text-3xl font-semibold"
          style={{ color: "#eeeff4", letterSpacing: "-0.02em" }}
        >
          Projects
        </h2>
        <p className="mb-10 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(238,239,244,0.45)" }}>
          A collection of things I&apos;ve designed — from design systems to product experiences
          and everything in between.
        </p>
      </ScrollReveal>

      {/* Filter tabs */}
      <ScrollReveal direction="up" delay={0.08}>
        <div className="mb-10 flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium capitalize transition-all"
              style={
                active === cat
                  ? { backgroundColor: "#0e4ff6", color: "#fff" }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "rgba(238,239,244,0.45)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project list */}
      <StaggerReveal className="flex flex-col" staggerDelay={0.07}>
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 border-t py-6 transition-all sm:flex-row sm:items-start sm:gap-8"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            {/* Year */}
            <span
              className="w-16 shrink-0 pt-0.5 text-xs"
              style={{
                color: "rgba(238,239,244,0.28)",
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              }}
            >
              {project.year}
            </span>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between gap-4">
                <h3
                  className="text-base font-medium transition-colors group-hover:text-white"
                  style={{ color: "#eeeff4" }}
                >
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  weight="regular"
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-60"
                  style={{ color: "#eeeff4" }}
                />
              </div>
              <p className="mb-3 text-sm leading-relaxed" style={{ color: "rgba(238,239,244,0.45)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-xs"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "rgba(238,239,244,0.4)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}

        {/* Last border */}
        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
      </StaggerReveal>
    </section>
  );
}
