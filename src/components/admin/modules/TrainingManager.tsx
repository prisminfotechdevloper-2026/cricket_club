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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            PRACTICE NETS &amp; COACHING HUB
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Weekly turf net routines at Matunga Ground under Head Coach Aditya Koli (Kanga B Division).
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-semibold">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Matunga Turf Nets Active</span>
        </div>
      </div>

      {/* Head Coach Profile Banner */}
      {coach && (
        <div className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 border border-[#EA6E18]/30 flex items-center justify-center font-headline text-3xl font-bold text-[#EA6E18] shrink-0">
              AK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EA6E18]/10 text-[#C2520E] border border-[#EA6E18]/25 text-xs font-headline font-bold uppercase tracking-wider">
                  HEAD PROFESSIONAL COACH
                </span>
                <span className="text-xs text-stone-400 font-medium">
                  Ref: DCC/COACH/2026-27
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#090A0C] mt-1">
                {coach.name}
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                {coach.role} • {coach.experience}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1 max-w-sm">
            <div className="text-stone-900 font-semibold">Appointment Scope:</div>
            <p className="text-stone-600 text-xs">
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
            className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs hover:border-[#EA6E18]/30 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EA6E18]/10 text-[#C2520E] border border-[#EA6E18]/25 text-xs font-headline font-bold uppercase tracking-wider">
                  {session.category}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {session.duration}
                </span>
              </div>

              <h3 className="font-headline text-2xl font-bold text-[#090A0C] leading-tight">
                {session.title}
              </h3>

              <div className="space-y-1.5 text-xs text-stone-600 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#EA6E18]" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C2520E]" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{session.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{session.attendeesCount} squad members registered</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8E3DD] space-y-1">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                  Key Technical Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {session.keyFocus?.map((focus, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8E3DD] flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Supervised by {session.coachName}</span>
              <span className="text-emerald-700 font-semibold">Scheduled</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
