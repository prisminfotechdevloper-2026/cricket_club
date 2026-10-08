"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";

export function TrainingManager() {
  const { trainingSessions, coaches } = useAdmin();
  const coach = coaches[0]; // Coach Aditya Koli

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            PRACTICE NETS &amp; COACHING HUB
          </h2>
          <p className="text-xs font-mono text-stone-400">
            Weekly turf net routines at Matunga Ground under Head Coach Aditya Koli (Kanga B Division).
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
          <CheckCircle className="w-4 h-4" />
          <span>Matunga Turf Nets Active</span>
        </div>
      </div>

      {/* Head Coach Profile Banner */}
      {coach && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#17191F] to-[#121418] border border-brand-orange/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-black/60 border border-brand-orange/40 flex items-center justify-center font-headline text-3xl font-bold text-brand-orange shrink-0">
              AK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange-light border border-brand-orange/30 text-[10px] font-mono font-bold uppercase">
                  HEAD PROFESSIONAL COACH
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Ref: DCC/COACH/2026-27
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mt-1">
                {coach.name}
              </h3>
              <p className="text-xs font-mono text-brand-gold-light">
                {coach.role} • {coach.experience}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-xs font-mono space-y-1 max-w-sm">
            <div className="text-stone-300 font-semibold">Appointment Scope:</div>
            <p className="text-stone-400 text-xs">
              Direct technical guidance for 50+ squad members across batting temperament, red-soil line &amp; length, and match situation composure.
            </p>
          </div>
        </div>
      )}

      {/* Practice Sessions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {trainingSessions.map((session) => (
          <div
            key={session.id}
            className="p-6 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/30 transition-colors flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-[10px] font-mono font-bold uppercase">
                  {session.category}
                </span>
                <span className="text-xs font-mono text-stone-500">
                  {session.duration}
                </span>
              </div>

              <h3 className="font-headline text-2xl font-bold text-white leading-tight">
                {session.title}
              </h3>

              <div className="space-y-1.5 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  <span>{session.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{session.attendeesCount} squad members registered</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                  Key Technical Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {session.keyFocus?.map((focus, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-stone-300"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>Supervised by {session.coachName}</span>
              <span className="text-emerald-400 font-semibold">Scheduled</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
