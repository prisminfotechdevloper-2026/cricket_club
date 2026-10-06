import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionText,
  actionHref,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 ${
        centered ? "items-center text-center mx-auto max-w-2xl" : ""
      } ${className}`}
    >
      <div className={centered ? "flex flex-col items-center" : "max-w-2xl"}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-copper" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black leading-none">
          {title}
        </h2>
        {description && (
          <p className="mt-2.5 text-base sm:text-lg text-foreground-soft font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <div className="shrink-0 pt-2 md:pt-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-copper hover:text-brand-copper-dark transition-colors group"
          >
            <span>{actionText}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
