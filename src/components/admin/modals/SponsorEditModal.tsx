"use client";

import React, { useState } from "react";
import { X, Handshake } from "lucide-react";
import { Sponsor, SponsorTier } from "@/lib/types/content";

interface SponsorEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<Sponsor, "id"> | Partial<Sponsor>) => void;
  initialSponsor?: Sponsor | null;
}

function SponsorFormInner({
  initialSponsor,
  onClose,
  onSave,
}: {
  initialSponsor?: Sponsor | null;
  onClose: () => void;
  onSave: (data: Omit<Sponsor, "id"> | Partial<Sponsor>) => void;
}) {
  const [formData, setFormData] = useState(() => ({
    name: initialSponsor?.name || "",
    tier: initialSponsor?.tier || ("official" as SponsorTier),
    tierLabel: initialSponsor?.tierLabel || "Official Club Partner",
    annualContribution: initialSponsor?.annualContribution || "₹60,000 / Year",
    tenure: initialSponsor?.tenure || "3 Seasons (2026–27 to 2028–29)",
    jerseyPlacement: initialSponsor?.jerseyPlacement || "Match Jersey Sleeve",
    logo: initialSponsor?.logo || "/sponsors/gala-diamond.png",
    website: initialSponsor?.website || "https://devpurcc.com",
    tagline: initialSponsor?.tagline || "Proud supporter of Devpur Cricket Club",
    description: initialSponsor?.description || "Official club partner supporting training, professional equipment, and match participation under the 2026-2029 MOU.",
    featured: initialSponsor?.featured ?? true,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    onSave({
      ...formData,
      slug: initialSponsor ? initialSponsor.slug : slug,
      visibilityScope: [
        "Match Jersey Branding (up to 25 matches/season)",
        "Social media branding & acknowledgement (~1K reel views est.)",
        "Matchday and team promotional presence",
      ],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white border border-[#E8E3DD] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DD] mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#EA6E18]/10 border border-[#EA6E18]/25 text-[#EA6E18]">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-[#090A0C] tracking-tight">
                {initialSponsor ? "EDIT SPONSOR & MOU" : "REGISTER CLUB SPONSOR"}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                2026–2029 Official Devpur Cricket Club Partnership Agreement
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Sponsor / Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="e.g. Nilkanth Green / Kutch Kraft"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Partnership Tier *
              </label>
              <select
                value={formData.tier}
                onChange={(e) => {
                  const t = e.target.value as SponsorTier;
                  const labelMap: Record<SponsorTier, string> = {
                    principal: "Principal Title Partner",
                    associate: "Associate Club Partner",
                    official: "Official Club Partner",
                    community: "Community Heritage Partner",
                  };
                  setFormData((prev) => ({ ...prev, tier: t, tierLabel: labelMap[t] }));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-semibold cursor-pointer"
              >
                <option value="principal">Principal Title Partner</option>
                <option value="associate">Associate Club Partner</option>
                <option value="official">Official Club Partner</option>
                <option value="community">Community Heritage Partner</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Jersey Placement
              </label>
              <input
                type="text"
                value={formData.jerseyPlacement}
                onChange={(e) => setFormData((prev) => ({ ...prev, jerseyPlacement: e.target.value }))}
                placeholder="Front Chest / Sleeve / Collar"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Annual Commercial Commitment
              </label>
              <input
                type="text"
                value={formData.annualContribution}
                onChange={(e) => setFormData((prev) => ({ ...prev, annualContribution: e.target.value }))}
                placeholder="₹60,000 / Year"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-headline font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Tenure Period
              </label>
              <input
                type="text"
                value={formData.tenure}
                onChange={(e) => setFormData((prev) => ({ ...prev, tenure: e.target.value }))}
                placeholder="3 Seasons (2026–27 to 2028–29)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-semibold"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Logo Asset Path
            </label>
            <select
              value={formData.logo}
              onChange={(e) => setFormData((prev) => ({ ...prev, logo: e.target.value }))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-semibold cursor-pointer"
            >
              <option value="/sponsors/gala-diamond.png">Gala Diamond (/sponsors/gala-diamond.png)</option>
              <option value="/sponsors/devpur-mahajan.png">Devpur Mahajan (/sponsors/devpur-mahajan.png)</option>
              <option value="/sponsors/nanonine.png">Nanonine (/sponsors/nanonine.png)</option>
              <option value="/sponsors/metro.png">Metro (/sponsors/metro.png)</option>
              <option value="/sponsors/lc-anchor.png">LC Anchor (/sponsors/lc-anchor.png)</option>
              <option value="/sponsors/ratna.png">Ratna (/sponsors/ratna.png)</option>
              <option value="/sponsors/kp-technotrade.png">KP Technotrade (/sponsors/kp-technotrade.png)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Partnership Scope &amp; Note
            </label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium transition-colors"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E8E3DD]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-headline font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#EA6E18] to-[#D96214] text-white font-headline text-base font-bold uppercase tracking-wider hover:from-[#D96214] transition-opacity cursor-pointer shadow-md shadow-[#EA6E18]/20"
            >
              {initialSponsor ? "Save MOU Updates" : "Onboard Sponsor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function SponsorEditModal({
  isOpen,
  onClose,
  onSave,
  initialSponsor,
}: SponsorEditModalProps) {
  if (!isOpen) return null;

  return (
    <SponsorFormInner
      key={initialSponsor ? initialSponsor.id : "new-sponsor"}
      initialSponsor={initialSponsor}
      onClose={onClose}
      onSave={onSave}
    />
  );
}
