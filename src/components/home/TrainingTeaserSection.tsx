import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { trainingSessions } from "@/lib/data/training";
import { Clock, User, ArrowRight, Play } from "lucide-react";

export function TrainingTeaserSection() {
  const featuredDrills = trainingSessions.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 border-b border-border/80 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Development Process"
          title="Training & Player Development"
          description="Preparation happens long before match day. From high-repetition turf nets to tactical pressure simulations, discover how our players hone their craft."
          actionText="View All Training Sessions"
          actionHref="/training"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredDrills.map((session) => (
            <div
              key={session.id}
              className="group rounded-3xl bg-surface-soft border border-border overflow-hidden sports-card flex flex-col justify-between"
            >
              {/* Thumbnail with duration */}
              <div className="relative aspect-video w-full bg-stone-200 overflow-hidden">
                <Image
                  src={session.thumbnail}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-brand-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-0.5 fill-current text-brand-black" />
                  </div>
                </div>

                {/* Duration Badge */}
                {session.videoDuration && (
                  <div className="absolute bottom-3 right-3 text-[11px] font-bold text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    {session.videoDuration}
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-3 left-3 text-[10px] uppercase font-extrabold tracking-wider bg-white/90 text-brand-black backdrop-blur-md px-2.5 py-1 rounded-md">
                  {session.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-copper" />
                      {session.coachName}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-copper" />
                      {session.date}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-brand-black leading-snug group-hover:text-brand-copper transition-colors">
                    {session.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground-soft line-clamp-2 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* Key Focus Tags */}
                <div className="pt-2 border-t border-border/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {session.keyFocus.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/training"
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-stone-100 text-xs font-bold uppercase tracking-wider text-brand-black transition-colors"
                  >
                    <span>Session Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-copper" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
