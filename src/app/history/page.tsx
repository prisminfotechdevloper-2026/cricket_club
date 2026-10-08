import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "History of DCC | Devpur Cricket Club",
  description:
    "Explore the journey, origin, and legacy of Devpur Cricket Club (DCC) since its inception in 2013.",
};

export default function HistoryPage() {
  return (
    <div className="flex-1 py-20 min-h-[60vh] flex items-center justify-center bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-headline font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Heritage &amp; Journey
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
            History of DCC
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground font-body">
            hello
          </p>
        </div>
      </Container>
    </div>
  );
}
