"use client";

import React from "react";
import { useAdmin } from "@/lib/admin/adminStore";
import { AdminLoginView } from "@/components/admin/AdminLoginView";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const { isAuthenticated, isLoading } = useAdmin();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center gap-4 text-stone-700">
        <div className="w-10 h-10 border-3 border-[#C2581A]/20 border-t-[#C2581A] rounded-full animate-spin" />
        <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
          Verifying DCC Committee Authorization...
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginView />;
  }

  return <AdminDashboard />;
}
