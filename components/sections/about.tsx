import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  Backend: ["Node.js", "Express", "tRPC", "GraphQL", "PostgreSQL", "Redis"],
  Tooling: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS", "Figma"],
};

const timeline = [
  {
    year: "2023–Now",
    role: "Senior Full-Stack Engineer",
    company: "Acme Corp",
    desc: "Leading frontend architecture and design system efforts for a B2B SaaS platform.",
    accent: "var(--accent-blue)",
  },
  {
    year: "2021–2023",
    role: "Full-Stack Developer",
    company: "Startup XYZ",
    desc: "Built consumer mobile apps from 0 → 1 and scaled them to 50k daily active users.",
    accent: "var(--accent-orange)",
  },
  {
    year: "2019–2021",
    role: "Frontend Engineer",
    company: "Agency Co.",
    desc: "Delivered bespoke web experiences for clients across e-commerce and media.",
    accent: "var(--accent-green)",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-orange)" }}>
        Background
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight">About me</h2>
      <p className="mb-4 max-w-xl leading-relaxed text-muted-foreground">
        I&apos;m a full-stack developer with 6+ years of experience building products
        across web and mobile. I care deeply about developer experience, design details,
        and writing code that&apos;s a joy to maintain.
      </p>
      <p className="mb-12 max-w-xl leading-relaxed text-muted-foreground">
        When I&apos;m not coding, you&apos;ll find me reading about typography, contributing to
        open source, or exploring the outdoors.
      </p>

      {/* Skills */}
      <div className="mb-14 grid gap-8 sm:grid-cols-3">
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
      </div>

      <Separator className="mb-12" />

      {/* Timeline */}
      <div>
        <p className="mb-6 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Experience
        </p>
        <div className="flex flex-col gap-8">
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
        </div>
      </div>
    </section>
  );
}
