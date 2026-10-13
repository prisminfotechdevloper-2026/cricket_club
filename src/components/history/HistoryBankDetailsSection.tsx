"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Container } from "../common/Container";

interface BankItemProps {
  label: string;
  value: string;
  copyable?: boolean;
}

const BANK_DETAILS: BankItemProps[] = [
  {
    label: "Account Holder",
    value: "Kaguji Designs",
  },
  {
    label: "Bank",
    value: "HDFC Bank",
  },
  {
    label: "Account Number",
    value: "50200095993238",
    copyable: true,
  },
  {
    label: "IFSC",
    value: "HDFC0001799",
    copyable: true,
  },
  {
    label: "UPI (GPay)",
    value: "9664661169",
    copyable: true,
  },
];

export function HistoryBankDetailsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section
      id="bank-details"
      aria-label="Bank Details for Contribution"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-5 sm:py-6 border-b border-[#EAE3D6]"
    >
      <Container>
        <div className="flex flex-col items-start w-full text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#f39a3b]">
              BANK DETAILS
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-body text-[#525763] text-xs sm:text-[13.5px] leading-relaxed mb-5 sm:mb-6">
            For any contribution or support, you can use the below details:
          </p>

          {/* Bank Details Card (Matching UI Reference) */}
          <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3D6] p-4 sm:p-6 md:p-7 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 sm:gap-y-4 md:divide-x divide-[#EAE3D6]">
              {BANK_DETAILS.map((item, idx) => {
                const isCopied = copiedKey === item.label;

                return (
                  <div
                    key={item.label}
                    className={`py-3 sm:py-2 md:py-0 ${
                      idx === 0
                        ? "md:pl-0 md:pr-4"
                        : idx === BANK_DETAILS.length - 1
                        ? "md:pl-5 md:pr-0"
                        : "md:px-5"
                    } flex flex-col justify-center text-left`}
                  >
                    <span className="font-body text-[#64748B] text-xs sm:text-[12.5px] font-medium block">
                      {item.label}
                    </span>

                    <div className="flex items-center justify-between md:justify-start gap-2 mt-1 sm:mt-1.5">
                      <span className="font-body text-[#0F172A] text-sm sm:text-[15px] lg:text-base font-bold tracking-tight select-all">
                        {item.value}
                      </span>

                      {item.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(item.label, item.value)}
                          title={`Copy ${item.label}`}
                          aria-label={`Copy ${item.label}`}
                          className="inline-flex items-center justify-center p-1 rounded-md text-[#94A3B8] hover:text-[#f39a3b] hover:bg-[#FDF6E9] active:scale-90 transition-[color,background-color,transform] cursor-pointer shrink-0"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 stroke-[2]" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
