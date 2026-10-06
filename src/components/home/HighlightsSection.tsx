import React from "react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { achievements } from "@/lib/data/achievements";
import { Star } from "lucide-react";

export function HighlightsSection() {
  const currentHighlights = achievements.filter((a) => a.season === "2026–27");

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Player Recognition"
          title="Season 2026–27 Highlights & Feats"
          description="Recognizing individual excellence and standout moments on the pitch. Every boundary, maiden over, and courageous fightback matters."
          actionText="View All Club Achievements"
          actionHref="/achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentHighlights.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-surface-soft border border-border flex flex-col justify-between sports-card"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-border text-brand-copper">
                    {item.badgeText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-brand-copper flex items-center justify-center">
                    <Star className="w-4 h-4 fill-current text-brand-copper" />
                  </div>
                </div>

                {/* Recipient & Feat */}
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-muted block mb-1">
                    {item.recipient}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-brand-black leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tournament Tag & Year */}
              <div className="pt-5 mt-4 border-t border-border/80 flex items-center justify-between text-xs text-muted font-medium">
                <span>{item.tournamentName}</span>
                <span className="font-bold text-brand-black">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
