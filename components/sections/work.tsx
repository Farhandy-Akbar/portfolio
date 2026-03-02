"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Retina Design System",
    description:
      "Systematizing complexity into clear, scalable components. A comprehensive design system built to unify product experiences across the platform.",
    tags: ["Design Systems", "Figma", "Component Library", "Documentation"],
    category: "system",
    accent: "var(--accent-blue)",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 2,
    title: "UX Sync — Pull to Refresh",
    description:
      "Enhancing mobile interaction with smooth, intuitive sync. A human-centered micro-interaction pattern that improves perceived performance and delight.",
    tags: ["Mobile UX", "Interaction Design", "Figma", "Prototyping"],
    category: "mobile",
    accent: "var(--accent-orange)",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 3,
    title: "Personalized Messaging in Banking",
    description:
      "A human-centered approach to financial notifications — turning generic alerts into meaningful, contextual messages that build trust.",
    tags: ["Fintech", "UX Writing", "Mobile Design", "User Research"],
    category: "mobile",
    accent: "var(--accent-green)",
    live: "https://is.gd/FarhandysDesignWork",
  },
  {
    id: 4,
    title: "PetPal — Pet Care Landing Page",
    description:
      "A warm, inviting landing page for a pet care service. Focused on emotional connection, clear hierarchy, and conversion-driven layout.",
    tags: ["Landing Page", "Web Design", "Figma", "UI Design"],
    category: "web",
    accent: "var(--accent-blue)",
    live: "https://dribbble.com/farhandy",
  },
  {
    id: 5,
    title: "Telemedicine — Mayo Clinic Concept",
    description:
      "A concept redesign of a telemedicine platform prioritizing accessibility, clarity, and intuitive patient flows.",
    tags: ["Healthcare", "Telemedicine", "UX Design", "Figma"],
    category: "mobile",
    accent: "var(--accent-orange)",
    live: "https://dribbble.com/farhandy",
  },
  {
    id: 6,
    title: "E-commerce Furniture Store",
    description:
      "A minimal, premium e-commerce UI for a furniture brand. Emphasis on product photography, smooth navigation and browsing experience.",
    tags: ["E-commerce", "Web Design", "UI Design", "Figma"],
    category: "web",
    accent: "var(--accent-green)",
    live: "https://dribbble.com/farhandy",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Coloured top bar */}
      <div className="h-1 w-full" style={{ backgroundColor: project.accent }} />

      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">{project.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 border-t pt-4">
        <Button asChild variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            View Work
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProjectGrid({ items }: { items: typeof projects }) {
  return (
    <StaggerReveal className="grid gap-5 sm:grid-cols-2" staggerDelay={0.1}>
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </StaggerReveal>
  );
}

export function Work() {
  const categories = ["all", "web", "mobile", "system"] as const;

  return (
    <section id="work" className="py-20">
      <ScrollReveal direction="up">
        <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-blue)" }}>
          Selected work
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mb-10 max-w-lg text-muted-foreground">
          A collection of things I&apos;ve designed — from design systems to product experiences
          and everything in between.
        </p>
      </ScrollReveal>

      <Tabs defaultValue="all">
        <ScrollReveal direction="up" delay={0.1}>
          <TabsList className="mb-8 rounded-full">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="rounded-full capitalize">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollReveal>

        <TabsContent value="all">
          <ProjectGrid items={projects} />
        </TabsContent>

        {(["web", "mobile", "system"] as const).map((cat) => (
          <TabsContent key={cat} value={cat}>
            <ProjectGrid items={projects.filter((p) => p.category === cat)} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
