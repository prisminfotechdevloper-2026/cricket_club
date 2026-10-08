"use client";

import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { AdminInquiry } from "@/lib/admin/apiAdapter";

export function InquiriesManager() {
  const { inquiries, updateInquiryStatus } = useAdmin();

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            PUBLIC INQUIRIES &amp; CORRESPONDENCE
          </h2>
          <p className="text-xs font-mono text-stone-400">
            Messages received via club contact form: prospective members, sponsor inquiries, and match invitations.
          </p>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {inquiries.map((inq) => {
          const isNew = inq.status === "new";

          return (
            <div
              key={inq.id}
              className={`p-6 rounded-2xl bg-[#14161B] border transition-colors space-y-4 ${
                isNew
                  ? "border-brand-orange/40 bg-gradient-to-r from-[#171920] to-[#14161B]"
                  : "border-white/10"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center font-headline text-lg font-bold text-brand-orange shrink-0">
                    {inq.senderName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-white leading-tight">
                      {inq.senderName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-stone-500" />
                        {inq.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-stone-500" />
                        {inq.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                      inq.type === "sponsorship_interest"
                        ? "bg-brand-orange/15 text-brand-orange border border-brand-orange/30"
                        : inq.type === "practice_match_request"
                        ? "bg-purple-500/15 text-purple-300 border border-purple-500/30"
                        : "bg-blue-500/15 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {inq.type.replace(/_/g, " ")}
                  </span>

                  <select
                    value={inq.status}
                    onChange={(e) =>
                      updateInquiryStatus(inq.id, e.target.value as AdminInquiry["status"])
                    }
                    className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-stone-300 outline-hidden"
                  >
                    <option value="new">New</option>
                    <option value="in_review">In Review</option>
                    <option value="contacted">Contacted</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-stone-200 leading-relaxed font-mono">
                &ldquo;{inq.message}&rdquo;
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Received {inq.createdAt}
                </span>
                <span className="text-stone-400">DCC Secretariat Inbox</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
