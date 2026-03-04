"use client";

import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const skills = {
  Design: ["Figma", "Framer", "Miro", "Prototyping", "Design Systems", "UI Design"],
  Research: ["UX Research", "User Testing", "Wireframing", "Information Architecture", "Heuristic Evaluation"],
  Collaboration: ["Agile / Scrum", "Cross-functional Teams", "Design Reviews", "Stakeholder Alignment"],
};

const timeline = [
  {
    year: "May 2025 – Now",
    role: "Lead Product Designer",
    company: "Synapsis",
    location: "Jakarta, INA",
    desc: "Leading product design direction at one of Indonesia's leading SaaS companies, driving consistency and scalability across product lines.",
    accent: "var(--accent-blue)",
  },
  {
    year: "Feb 2025 – May 2025",
    role: "Senior Product Designer",
    company: "Synapsis",
    location: "Jakarta, INA",
    desc: "Elevated design standards and mentored junior designers while shipping high-impact features across the product suite.",
    accent: "var(--accent-blue)",
  },
  {
    year: "Apr 2024 – Feb 2025",
    role: "Product Designer",
    company: "Synapsis",
    location: "Jakarta, INA",
    desc: "Designed end-to-end product experiences for complex B2B healthcare SaaS workflows.",
    accent: "var(--accent-orange)",
  },
  {
    year: "Feb 2024 – Apr 2024",
    role: "Lead Product Designer",
    company: "Fullstack Agency",
    location: "Jakarta, INA",
    desc: "Led design within a fast-paced agency environment, overseeing multiple client projects simultaneously.",
    accent: "var(--accent-orange)",
  },
  {
    year: "Jul 2021 – Feb 2024",
    role: "Product Designer",
    company: "Fullstack Agency",
    location: "Jakarta, INA",
    desc: "Delivered bespoke digital experiences across fintech, e-commerce, healthcare, and more.",
    accent: "var(--accent-green)",
  },
  {
    year: "Jan 2021 – Jul 2021",
    role: "UI Designer",
    company: "Upwork / Freelance",
    location: "Remote",
    desc: "Worked with international clients to deliver polished UI designs for web and mobile products.",
    accent: "var(--accent-green)",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <ScrollReveal direction="up">
        <div className="mb-1 text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent-orange)" }}>
          Background
        </div>
        <h2
          className="mb-3 text-3xl font-semibold"
          style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
        >
          About me
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} direction="up">
        <p className="mb-4 max-w-xl text-sm leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
          Product Designer with 4 years of experience balancing bold visuals with user-focused
          thinking. Always ahead of UX/UI trends — shaped by agency excellence,
          sharpened at one of Indonesia&apos;s leading SaaS companies.
        </p>
        <p className="mb-14 max-w-xl text-sm leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
          I care deeply about systematizing complexity into clear, scalable components and
          creating human-centered experiences that feel intuitive and delightful.
        </p>
      </ScrollReveal>

      {/* Skills */}
      <StaggerReveal className="mb-16 grid gap-8 sm:grid-cols-3" staggerDelay={0.1}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--fg-faint)" }}
            >
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-2.5 py-0.5 text-xs"
                  style={{
                    backgroundColor: "var(--layer-1)",
                    color: "var(--fg-muted)",
                    border: "1px solid var(--border-faint)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </StaggerReveal>

      {/* Timeline header */}
      <ScrollReveal direction="up">
        <p
          className="mb-0 text-[10px] font-medium uppercase tracking-[0.12em]"
          style={{ color: "var(--fg-faint)" }}
        >
          Experience
        </p>
      </ScrollReveal>

      {/* Timeline list */}
      <StaggerReveal className="flex flex-col" staggerDelay={0.08}>
        {timeline.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 border-t py-6 sm:flex-row sm:gap-8"
            style={{ borderColor: "var(--border-faint)" }}
          >
            {/* Year */}
            <span
              className="w-44 shrink-0 text-xs pt-0.5"
              style={{
                color: "var(--fg-ultralight)",
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              }}
            >
              {item.year}
            </span>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.accent }}
                />
                <div>
                  <p className="font-medium text-sm" style={{ color: "var(--fg)" }}>
                    {item.role}
                  </p>
                  <p className="text-xs mb-1.5" style={{ color: item.accent }}>
                    {item.company} · {item.location}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-subtle)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-px" style={{ backgroundColor: "var(--border-faint)" }} />
      </StaggerReveal>
    </section>
  );
}
