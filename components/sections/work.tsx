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
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard built for scale.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "web",
    accent: "var(--accent-blue)",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Design System",
    description:
      "A comprehensive component library with Storybook documentation, dark mode support, and accessibility-first patterns.",
    tags: ["React", "Tailwind CSS", "Storybook", "Radix UI"],
    category: "design",
    accent: "var(--accent-orange)",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Mobile Finance App",
    description:
      "Cross-platform budgeting app with real-time sync, biometric auth, and personalised spending insights.",
    tags: ["React Native", "Expo", "Supabase", "Reanimated"],
    category: "mobile",
    accent: "var(--accent-green)",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI Content Tool",
    description:
      "LLM-powered writing assistant that generates, edits, and repurposes long-form content with one click.",
    tags: ["Next.js", "OpenAI", "tRPC", "Prisma"],
    category: "web",
    accent: "var(--accent-blue)",
    live: "#",
    github: "#",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
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
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Work() {
  const categories = ["all", "web", "mobile", "design"] as const;

  return (
    <section id="work" className="py-20">
      <div className="mb-2 text-sm font-medium" style={{ color: "var(--accent-blue)" }}>
        Selected work
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight">Projects</h2>
      <p className="mb-10 max-w-lg text-muted-foreground">
        A collection of things I&apos;ve built — from side projects to production apps.
      </p>

      <Tabs defaultValue="all">
        <TabsList className="mb-8 rounded-full">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="rounded-full capitalize">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </TabsContent>

        {(["web", "mobile", "design"] as const).map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects
                .filter((p) => p.category === cat)
                .map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
