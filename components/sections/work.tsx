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
    accent: "#3dc8ff",
    thumbGlow: "rgba(61,200,255,0.12)",
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
    accent: "#faa200",
    thumbGlow: "rgba(250,162,0,0.12)",
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
    accent: "#16bf5e",
    thumbGlow: "rgba(22,191,94,0.12)",
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
    accent: "#3dc8ff",
    thumbGlow: "rgba(61,200,255,0.12)",
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
    accent: "#faa200",
    thumbGlow: "rgba(250,162,0,0.12)",
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
    accent: "#16bf5e",
    thumbGlow: "rgba(22,191,94,0.12)",
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
        <div className="mb-1 text-xs font-medium tracking-widest uppercase" style={{ color: "#3dc8ff" }}>
          Selected work
        </div>
        <h2
          className="mb-3 text-3xl font-semibold"
          style={{ color: "#f7f7f7", letterSpacing: "-0.02em" }}
        >
          Projects
        </h2>
        <p className="mb-10 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(247,247,247,0.45)" }}>
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
                  ? { backgroundColor: "#3dc8ff", color: "#121212" }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "rgba(247,247,247,0.45)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project grid */}
      <StaggerReveal className="grid gap-4 sm:grid-cols-2" staggerDelay={0.07}>
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Thumbnail */}
            <div
              className="relative h-44 w-full overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at 70% 30%, ${project.thumbGlow} 0%, transparent 70%), #1a1a1a`,
              }}
            >
              {/* Abstract UI mockup lines */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 pb-4">
                <div
                  className="mb-2 h-1 w-8 rounded-full opacity-30"
                  style={{ backgroundColor: project.accent }}
                />
                <div
                  className="mb-1.5 h-3 w-40 rounded opacity-15"
                  style={{ backgroundColor: project.accent }}
                />
                <div
                  className="h-2 w-24 rounded opacity-10"
                  style={{ backgroundColor: project.accent }}
                />
              </div>
              {/* Year badge */}
              <span
                className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(247,247,247,0.4)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {project.year}
              </span>
              {/* Arrow */}
              <div className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-60">
                <ArrowUpRight size={16} weight="regular" style={{ color: "#f7f7f7" }} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3
                className="mb-1.5 text-sm font-medium transition-colors group-hover:text-white"
                style={{ color: "#f7f7f7" }}
              >
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-xs leading-relaxed" style={{ color: "rgba(247,247,247,0.45)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[10px]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "rgba(247,247,247,0.4)",
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
      </StaggerReveal>
    </section>
  );
}
