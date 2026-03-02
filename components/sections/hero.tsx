import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[80vh] flex-col justify-center pt-20 pb-16">
      {/* Avatar + status */}
      <div className="mb-8 flex items-center gap-4">
        <Avatar className="h-14 w-14 ring-2 ring-[var(--accent-blue)]">
          <AvatarImage src="/avatar.jpg" alt="John Doe" />
          <AvatarFallback
            className="text-lg font-semibold"
            style={{ backgroundColor: "var(--surface-alt)", color: "var(--accent-blue)" }}
          >
            JD
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground">Hello, I&apos;m</p>
          <p className="font-semibold">John Doe</p>
        </div>
      </div>

      {/* Headline */}
      <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Crafting digital{" "}
        <span style={{ color: "var(--accent-blue)" }}>experiences</span>{" "}
        that matter.
      </h1>

      {/* Sub-headline */}
      <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        I&apos;m a full-stack developer focused on building fast, accessible, and
        beautiful products — from idea to production.
      </p>

      {/* Badges */}
      <div className="mb-10 flex flex-wrap gap-2">
        {["React", "TypeScript", "Next.js", "Node.js", "Design Systems"].map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* CTA buttons */}
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
    </section>
  );
}
