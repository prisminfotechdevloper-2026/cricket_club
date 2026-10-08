"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { Sponsor } from "@/lib/types/content";
import { SponsorEditModal } from "../modals/SponsorEditModal";

export function SponsorsManager() {
  const { sponsors, createSponsor, updateSponsor, deleteSponsor } = useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);

  const handleEdit = (s: Sponsor) => {
    setEditingSponsor(s);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingSponsor(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            SPONSORS &amp; 2026–2029 MOU REGISTRY
          </h2>
          <p className="text-xs font-mono text-stone-400">
            Track club commercial partners, official MOU deliverables, match jersey branding, and multi-season agreements.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-orange-light text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-brand-orange/20"
        >
          <Plus className="w-4 h-4" />
          <span>Onboard New Partner</span>
        </button>
      </div>

      {/* Official MOU Summary Schedule Banner */}
      <div className="p-6 rounded-3xl bg-[#14161B] border border-brand-orange/30 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-brand-orange-light font-mono text-xs font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4 text-brand-orange" />
          <span>OFFICIAL DCC SPONSORSHIP MOU SCHEDULE (SEASONS 2026–27 TO 2028–29)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
            <span className="text-stone-500 block uppercase text-[10px]">Agreement Term</span>
            <span className="text-white font-bold text-sm">3 Seasons (2026–29)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
            <span className="text-stone-500 block uppercase text-[10px]">Annual Sponsorship</span>
            <span className="text-brand-orange font-bold text-sm">₹60,000/- Per Year</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
            <span className="text-stone-500 block uppercase text-[10px]">Total Contract Value</span>
            <span className="text-brand-gold font-bold text-sm">₹1,80,000/- Per Partner</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
            <span className="text-stone-500 block uppercase text-[10px]">Jersey Match Deliverable</span>
            <span className="text-emerald-400 font-bold text-sm">~25 Matches / Season</span>
          </div>
        </div>
      </div>

      {/* Sponsor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="p-6 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Logo & Actions row */}
              <div className="flex items-start justify-between gap-4">
                <div className="relative w-28 h-12 p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEdit(sponsor)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Edit sponsor"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Remove sponsor ${sponsor.name}?`)) {
                        deleteSponsor(sponsor.id);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                    aria-label="Delete sponsor"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange-light border border-brand-orange/30 text-[10px] font-mono font-bold uppercase inline-block mb-1.5">
                  {sponsor.tierLabel}
                </span>
                <h3 className="font-headline text-2xl font-bold text-white group-hover:text-brand-orange-light transition-colors">
                  {sponsor.name}
                </h3>
                {sponsor.jerseyPlacement && (
                  <p className="text-xs font-mono text-brand-gold-light mt-0.5">
                    Placement: {sponsor.jerseyPlacement}
                  </p>
                )}
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-stone-500">Commercials:</span>
                  <span className="text-white font-bold">{sponsor.annualContribution || "₹60,000 / Year"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Tenure:</span>
                  <span className="text-stone-300">{sponsor.tenure || "2026–2029 (3 Seasons)"}</span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                  Deliverable Highlights
                </span>
                {sponsor.visibilityScope?.map((v, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-stone-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>Status: Active Partner</span>
              <span className="text-emerald-400">MOU In Effect</span>
            </div>
          </div>
        ))}
      </div>

      <SponsorEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSponsor={editingSponsor}
        onSave={(data) => {
          if (editingSponsor) {
            updateSponsor(editingSponsor.id, data);
          } else {
            createSponsor(data as Omit<Sponsor, "id">);
          }
        }}
      />
    </div>
  );
}
