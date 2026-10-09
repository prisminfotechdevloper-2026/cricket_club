"use client";

import React, { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopBar } from "./AdminTopBar";
import { useAdmin } from "@/lib/admin/adminStore";
import { DashboardOverview } from "./modules/DashboardOverview";
import { MatchesManager } from "./modules/MatchesManager";
import { MembersManager } from "./modules/MembersManager";
import { SponsorsManager } from "./modules/SponsorsManager";
import { TrainingManager } from "./modules/TrainingManager";
import { TournamentsManager } from "./modules/TournamentsManager";
import { MemoriesManager } from "./modules/MemoriesManager";
import { InquiriesManager } from "./modules/InquiriesManager";

export function AdminDashboard() {
  const { activeTab } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderModule = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "matches":
        return <MatchesManager />;
      case "members":
        return <MembersManager />;
      case "sponsors":
        return <SponsorsManager />;
      case "training":
        return <TrainingManager />;
      case "tournaments":
        return <TournamentsManager />;
      case "memories":
        return <MemoriesManager />;
      case "inquiries":
        return <InquiriesManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F3] text-[#0B0B0D] flex selection:bg-[#D7833D]/20 selection:text-[#D7833D]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block shrink-0 sticky top-0 h-screen">
        <AdminSidebar />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 animate-drawer-slide-in h-full shadow-2xl">
            <AdminSidebar onCloseMobile={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopBar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto overflow-y-auto">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}
