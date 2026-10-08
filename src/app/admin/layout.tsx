import type { Metadata } from "next";
import React from "react";
import { AdminProvider } from "@/lib/admin/adminStore";

export const metadata: Metadata = {
  title: "Admin Portal | Devpur Cricket Club",
  description: "Devpur Cricket Club Official Administrative and Management Console",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProvider>{children}</AdminProvider>;
}
