import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <Work />
      <Separator />
      <About />
      <Separator />
      <Contact />
    </>
  );
}
