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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            SPONSORS &amp; 2026–2029 MOU REGISTRY
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Track club commercial partners, official MOU deliverables, match jersey branding, and multi-season agreements.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D7833D] to-[#C27332] hover:from-[#C27332] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-[#D7833D]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Onboard New Partner</span>
        </button>
      </div>

      {/* Official MOU Summary Schedule Banner */}
      <div className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-md space-y-4">
        <div className="flex items-center gap-2 text-[#D7833D] font-headline text-sm font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4 text-[#D7833D]" />
          <span>OFFICIAL DCC SPONSORSHIP MOU SCHEDULE (SEASONS 2026–27 TO 2028–29)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase text-[10px] tracking-wider block">Agreement Term</span>
            <span className="text-stone-900 font-headline text-2xl font-bold block mt-0.5">3 Seasons (2026–29)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase text-[10px] tracking-wider block">Annual Sponsorship</span>
            <span className="text-[#D7833D] font-headline text-2xl font-bold block mt-0.5">₹60,000 / Year</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase text-[10px] tracking-wider block">Total Contract Value</span>
            <span className="text-[#B96623] font-headline text-2xl font-bold block mt-0.5">₹1,80,000 Total</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase text-[10px] tracking-wider block">Jersey Match Deliverable</span>
            <span className="text-emerald-700 font-headline text-2xl font-bold block mt-0.5">~25 Matches / Season</span>
          </div>
        </div>
      </div>

      {/* Sponsor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs hover:border-[#D7833D]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Logo & Actions row */}
              <div className="flex items-start justify-between gap-4">
                <div className="relative w-28 h-12 p-1.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center">
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
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
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
                    className="p-1.5 rounded-lg bg-white hover:bg-red-50 border border-stone-200 text-stone-400 hover:text-red-600 transition-colors cursor-pointer shadow-2xs"
                    aria-label="Delete sponsor"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D7833D]/10 text-[#B96623] border border-[#D7833D]/25 text-xs font-headline font-bold uppercase tracking-wider inline-block mb-1.5">
                  {sponsor.tierLabel}
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#090A0C] group-hover:text-[#D7833D] transition-colors">
                  {sponsor.name}
                </h3>
                {sponsor.jerseyPlacement && (
                  <p className="text-xs text-stone-600 mt-0.5 font-medium">
                    Placement: <strong className="text-stone-800">{sponsor.jerseyPlacement}</strong>
                  </p>
                )}
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-medium">Commercials:</span>
                  <span className="text-stone-900 font-headline text-base font-bold">{sponsor.annualContribution || "₹60,000 / Year"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-medium">Tenure:</span>
                  <span className="text-stone-700 font-semibold">{sponsor.tenure || "2026–2029 (3 Seasons)"}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                  Deliverable Highlights
                </span>
                {sponsor.visibilityScope?.map((v, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-stone-700 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#E8E3DD] flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Status: Active Partner</span>
              <span className="text-emerald-700 font-semibold">MOU In Effect</span>
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
