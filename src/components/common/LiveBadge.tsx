import React from "react";

interface LiveBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function LiveBadge({
  className = "",
  size = "md",
  text = "LIVE NOW",
}: LiveBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-bold tracking-wider",
    md: "px-2.5 py-1 text-xs font-extrabold tracking-wider",
    lg: "px-3.5 py-1.5 text-sm font-extrabold tracking-wider",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red ${sizeClasses[size]} ${className}`}
      aria-label="Match is currently live"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
      </span>
      <span>{text}</span>
    </span>
  );
}
