import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { coaches } from "@/lib/data/coaches";

export function CoachesSection() {
  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
      <Container>
        <SectionHeading
          eyebrow="Club Practice & Development"
          title="Guided by Experience"
          description="Led by Head Coach Mr. Aditya Koli (Kanga B Division player), providing structured mentorship and skill refinement during our 3-days-a-week net sessions at Matunga Ground."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="p-6 sm:p-7 rounded-3xl bg-surface border border-border sports-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Coach Avatar & Role */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-stone-100 border border-border shrink-0">
                    <Image
                      src={coach.photo}
                      alt={coach.name}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-brand-black leading-tight">
                      {coach.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-copper mt-0.5">
                      {coach.role}
                    </p>
                    <span className="text-[11px] text-muted block mt-0.5">
                      {coach.experience}
                    </span>
                    {coach.appointmentRef && (
                      <span className="inline-block mt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-copper bg-brand-copper/10 px-2 py-0.5 rounded">
                        {coach.appointmentRef}
                      </span>
                    )}
                  </div>
                </div>

                {/* Schedule Tag */}
                {coach.schedule && (
                  <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80 text-[11px] text-foreground-soft font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span>{coach.schedule}</span>
                  </div>
                )}

                {/* Bio */}
                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  {coach.bio}
                </p>

                {/* Coaching Focus List */}
                <div className="space-y-2 pt-2 border-t border-border/80">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
                    Key Development Domains
                  </span>
                  <div className="space-y-1.5">
                    {coach.coachingFocus.map((focus) => (
                      <div
                        key={focus}
                        className="flex items-start gap-2 text-xs text-foreground-soft"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-copper mt-1 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
