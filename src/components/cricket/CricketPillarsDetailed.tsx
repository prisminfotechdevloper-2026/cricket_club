"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";
import { CheckCircle2, Clock, Calendar, Shield, Target, Zap, Activity } from "lucide-react";

export function CricketPillarsDetailed() {
  const detailedPillars = [
    {
      step: "01",
      title: "Nets & Training",
      subtitle: "Disciplined Turf Practice",
      image: "/coaching_drill/net_training.png",
      tag: "Turf Drills & Nets @ Matunga Ground",
      icon: Calendar,
      narrativeTitle: "The Unseen Struggle: Where Character is Forged in Silence",
      story: `The true test of a Devpur Cricket Club player never takes place under stadium floodlights or amidst cheering crowds. It begins in the quiet early hours at Matunga Ground inside the green iron net cages. When Mumbai is still asleep, our boys are already lacing up their spikes, feeling the damp morning chill of the turf, and adjusting their pads. Inside the nets, there is nowhere to hide. You face bowler after bowler with genuine leather-ball pace and bite off the wicket. Consistency here is not glamorous; it is the raw discipline of turning up three days every week, nursing sore shoulders and aching legs, and bowling the extra over or taking another forty throwdowns when every instinct says to rest. This relentless net routine is the backbone of our club's competitive strength.`,
      routinePoints: [
        "3 Net Sessions Weekly on dedicated turf & clay wickets",
        "High-volume throwdowns simulating match-length intensity",
        "Focused peer-to-peer feedback under Coach Aditya Koli",
      ],
      coreVirtue: "Consistency &bull; 7:00 AM Discipline &bull; Sweat Over Excuses",
    },
    {
      step: "02",
      title: "Batting Technique",
      subtitle: "Strokeplay, Composure & Mental Grit",
      image: "/coaching_drill/batting.png",
      tag: "Technique, Timing & Pressure Composure",
      icon: Target,
      narrativeTitle: "The Art of Composure: Standing Tall When the Ball is Flying",
      story: `In cricket, a batsman has no second chances — one lapse in concentration, one false stroke against a swinging delivery, and your innings is over. At DCC, batting coaching focuses on deep technical foundation combined with mental composure. We drill the basics: a still head at release, balanced trigger movements, and the courage to get right behind the line of express pace. But beyond technique, we teach the emotional patience required to build an innings. Learning to leave good balls outside off-stump, rotating the strike through tight field placements, and absorbing hostile bowling spells without panicking. When a collapse threatens the team, a DCC batsman is trained to drop anchor, embrace the fight, and value his wicket with his life.`,
      routinePoints: [
        "Front-foot defense & back-foot punch fundamentals",
        "Adapting to uneven bounce & varied pitch conditions",
        "Middle-overs strike rotation & death-overs power hitting",
      ],
      coreVirtue: "Composure &bull; Head Position &bull; Partnership Building",
    },
    {
      step: "03",
      title: "Bowling Mastery",
      subtitle: "Accuracy, Workload & Relentless Rhythm",
      image: "/coaching_drill/balling.png",
      tag: "Pace, Spin, Seam & Spell Management",
      icon: Zap,
      narrativeTitle: "Running in Into the Wind: The Fierce Heart of a Bowler",
      story: `Fast bowling and accurate spin in Mumbai cricket demand immense physical sacrifice. Running in over after over under the harsh midday sun, pounding the bowling crease, flexing the spine, and putting your entire body on the line with every delivery — bowling is the engine room of our team. Our coaching mandate rejects wild speed without discipline. Under Coach Aditya Koli, bowlers are drilled to own the 'fourth-stump corridor' with robotic repeatability. Pace bowlers learn seam presentation, subtle cutters, and the toe-crushing yorker; spin bowlers develop flight deception, drift into the wind, and variations off the surface. Above all, our bowlers learn tactical heart: refusing to lower their heads when hit for a boundary, and coming back harder on the next ball.`,
      routinePoints: [
        "Repeatable run-up rhythm & delivery stride stability",
        "Spells targeted to individual batter technical flaws",
        "Workload management to prevent injuries across the season",
      ],
      coreVirtue: "Accuracy &bull; Workload Resilience &bull; Tactical Heart",
    },
    {
      step: "04",
      title: "Fielding & Agility",
      subtitle: "Bruised Elbows, Reflexes & Team Soul",
      image: "/coaching_drill/fielding.png",
      tag: "Ground Agility, Aerial Drills & Reflexes",
      icon: Shield,
      narrativeTitle: "The Soul of the Club: Putting Your Body on the Line for Your Brother",
      story: `Batting may bring individual centuries and bowling may claim five-wicket hauls, but fielding is the undeniable reflection of Devpur Cricket Club's soul. A great fielding unit is built on pure hunger and selfless dedication. Grazed knees, bruised elbows from diving on hard outfield turf, sprint-saving boundaries in the 48th over, and hitting the stumps directly from the boundary ropes — this is where brotherhood is proven in action. Our fielding sessions demand intense reflex coordination: slip catching off edges, tracking swirling aerial balls against the Mumbai sun, and rapid pick-up-and-throw releases. When our fielders roar together after saving a tight single, the whole team feeds off that collective energy.`,
      routinePoints: [
        "High-catching & close-in slip cordon reaction drills",
        "Boundary sliding cutoffs & precision relay throws",
        "Relentless ring-field pressure to choke opponent scoring",
      ],
      coreVirtue: "Hunger &bull; Bruised Elbows &bull; Collective Team Pride",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-stone-50 dark:bg-stone-200/40 border-b border-border/80 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
             <span>Core Coaching Mandate &bull; Deep Practice Pillars</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
            The Four Pillars: <span className="text-brand-orange">Discipline, Struggle &amp; Mastery.</span>
          </h2>

          <p className="text-foreground-soft text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            Every DCC cricketer&apos;s journey is built upon four non-negotiable foundations.
            Here is the story of our practice, the physical struggle, and the consistency that transforms
            passion into match-winning excellence.
          </p>
        </div>

        {/* 4 Pillars Alternating Editorial Breakdown */}
        <div className="space-y-16 sm:space-y-24">
          {detailedPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={pillar.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Bay */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-border/90 shadow-md group bg-stone-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                   

                    {/* Bottom Tag Over Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-mono font-semibold text-stone-300 block">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Story Bay */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  {/* Step & Heading */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                        Pillar {pillar.step} &bull; {pillar.subtitle}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground">
                      {pillar.title}
                    </h3>

                    <h4 className="font-headline text-base sm:text-lg font-bold text-brand-copper">
                      {pillar.narrativeTitle}
                    </h4>
                  </div>

                  {/* Deep Story Paragraph */}
                  <p className="text-foreground-soft font-body text-sm sm:text-base leading-relaxed">
                    {pillar.story}
                  </p>

                  {/* Routine Key Takeaways */}
                  <div className="pt-2 border-t border-border/70 space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                      Core Routine &amp; Training Focus:
                    </span>
                    <div className="space-y-1.5">
                      {pillar.routinePoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                          <span className="font-body font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Virtue Badge */}
                  <div className="pt-2 inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span>{pillar.coreVirtue}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
