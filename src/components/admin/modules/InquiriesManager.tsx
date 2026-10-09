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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            PUBLIC INQUIRIES &amp; CORRESPONDENCE
          </h2>
          <p className="text-xs text-stone-500 font-medium">
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
              className={`p-6 rounded-2xl bg-white border transition-colors space-y-4 shadow-xs ${
                isNew
                  ? "border-[#D7833D]/40 ring-1 ring-[#D7833D]/20"
                  : "border-[#E8E3DD]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center font-headline text-lg font-bold text-[#D7833D] shrink-0">
                    {inq.senderName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-[#090A0C] leading-tight">
                      {inq.senderName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mt-0.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-stone-400" />
                        {inq.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-stone-400" />
                        {inq.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider ${
                      inq.type === "sponsorship_interest"
                        ? "bg-[#D7833D]/10 text-[#B96623] border border-[#D7833D]/25"
                        : inq.type === "practice_match_request"
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {inq.type.replace(/_/g, " ")}
                  </span>

                  <select
                    value={inq.status}
                    onChange={(e) =>
                      updateInquiryStatus(inq.id, e.target.value as AdminInquiry["status"])
                    }
                    className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 outline-hidden cursor-pointer focus:border-[#D7833D]"
                  >
                    <option value="new">New</option>
                    <option value="in_review">In Review</option>
                    <option value="contacted">Contacted</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 leading-relaxed font-medium">
                &ldquo;{inq.message}&rdquo;
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-[#E8E3DD] font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-400" />
                  Received {inq.createdAt}
                </span>
                <span className="text-stone-600 font-semibold">DCC Secretariat Inbox</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
