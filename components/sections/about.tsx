"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    company: "Synapsis · Jakarta, INA",
    desc: "Leading product design direction at one of Indonesia's leading SaaS companies, driving consistency and scalability across product lines.",
    accent: "var(--accent-blue)",
  },
  {
    year: "Feb 2025 – May 2025",
    role: "Senior Product Designer",
    company: "Synapsis · Jakarta, INA",
    desc: "Elevated design standards and mentored junior designers while shipping high-impact features across the product suite.",
    accent: "var(--accent-blue)",
  },
  {
    year: "Apr 2024 – Feb 2025",
    role: "Product Designer",
    company: "Synapsis · Jakarta, INA",
    desc: "Designed end-to-end product experiences for complex B2B healthcare SaaS workflows.",
    accent: "var(--accent-orange)",
  },
  {
    year: "Feb 2024 – Apr 2024",
    role: "Lead Product Designer",
    company: "Fullstack Agency · Jakarta, INA",
    desc: "Led design within a fast-paced agency environment, overseeing multiple client projects simultaneously.",
    accent: "var(--accent-orange)",
  },
  {
    year: "Jul 2021 – Feb 2024",
    role: "Product Designer",
    company: "Fullstack Agency · Jakarta, INA",
    desc: "Delivered bespoke digital experiences across industries including fintech, e-commerce, healthcare, and more.",
    accent: "var(--accent-green)",
  },
  {
    year: "Jan 2021 – Jul 2021",
    role: "UI Designer",
    company: "Upwork / Freelance · Remote",
    desc: "Worked with international clients to deliver polished UI designs for web and mobile products.",
    accent: "var(--accent-green)",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <ScrollReveal direction="up">
        <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-orange)" }}>
          Background
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">About me</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} direction="up">
        <p className="mb-4 max-w-xl leading-relaxed text-muted-foreground">
          Product Designer with 4 years of experience balancing bold visuals with user-focused
          thinking on every project. Always ahead of UX/UI trends — shaped by agency excellence,
          sharpened at one of Indonesia&apos;s leading SaaS companies.
        </p>
        <p className="mb-12 max-w-xl leading-relaxed text-muted-foreground">
          I care deeply about systematizing complexity into clear, scalable components and
          creating human-centered experiences that feel intuitive and delightful.
        </p>
      </ScrollReveal>

      {/* Skills */}
      <StaggerReveal className="mb-14 grid gap-8 sm:grid-cols-3" staggerDelay={0.12}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-2.5 py-0.5 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </StaggerReveal>

      <ScrollReveal direction="none">
        <Separator className="mb-12" />
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal direction="up">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Experience
        </p>
      </ScrollReveal>

      <StaggerReveal className="flex flex-col gap-8" staggerDelay={0.1}>
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-5">
            <div
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: item.accent }}
            />
            <div>
              <p className="text-xs text-muted-foreground">{item.year}</p>
              <p className="mt-0.5 font-semibold">{item.role}</p>
              <p className="text-sm" style={{ color: item.accent }}>
                {item.company}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </StaggerReveal>
    </section>
  );
}
