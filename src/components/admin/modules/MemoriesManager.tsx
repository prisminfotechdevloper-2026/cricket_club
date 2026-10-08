"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Plus } from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { GalleryItem, GalleryCategory } from "@/lib/types/content";

export function MemoriesManager() {
  const { galleryItems, addGalleryItem } = useAdmin();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState<GalleryCategory>("celebrations");
  const [url, setUrl] = useState("/images/winning_time_with_group.png");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: GalleryItem = {
      id: `mem-${Date.now()}`,
      url,
      caption,
      category,
      date: "Oct 2026",
    };
    addGalleryItem(newItem);
    setCaption("");
    setIsAddOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            CLUB MEMORIES &amp; PHOTO ARCHIVES
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Preserve matchday moments, community celebrations, and brotherhood archives across seasons.
          </p>
        </div>
        <button
          onClick={() => setIsAddOpen(!isAddOpen)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EA6E18] to-[#D96214] hover:from-[#D96214] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-[#EA6E18]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Memory</span>
        </button>
      </div>

      {/* Upload Simulation Form */}
      {isAddOpen && (
        <form
          onSubmit={handleAdd}
          className="p-6 rounded-3xl bg-white border border-[#E8E3DD] shadow-xl space-y-4 max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs font-headline font-bold text-[#EA6E18] uppercase tracking-wider">
            <Camera className="w-4 h-4 text-[#EA6E18]" />
            <span>ARCHIVE NEW MOMENT</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              Caption / Story *
            </label>
            <input
              type="text"
              required
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Post-match dinner celebration with Devpur Gaam members"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as GalleryCategory)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium cursor-pointer"
              >
                <option value="celebrations">Celebrations &amp; Trophies</option>
                <option value="match-day">Match Day Action</option>
                <option value="training">Net Practice at Matunga</option>
                <option value="team-moments">Brotherhood &amp; Community</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Photo Asset
              </label>
              <select
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:border-[#EA6E18] focus:bg-white outline-hidden font-medium cursor-pointer"
              >
                <option value="/images/winning_time_with_group.png">Silverware Celebration</option>
                <option value="/images/team_group_11.png">Team Squad On Pitch</option>
                <option value="/images/buddies.png">Member Buddies</option>
                <option value="/images/ground_players_group.png">Ground Gathering</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAddOpen(false)}
              className="px-4 py-2 rounded-xl text-stone-600 hover:text-stone-900 border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-headline font-bold uppercase tracking-wider cursor-pointer transition-colors shadow-2xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#EA6E18] to-[#D96214] hover:from-[#D96214] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer shadow-md shadow-[#EA6E18]/20"
            >
              Save to Archives
            </button>
          </div>
        </form>
      )}

      {/* Memories Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-[#E8E3DD] shadow-xs overflow-hidden group hover:border-[#EA6E18]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-stone-100">
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-xs font-headline font-bold uppercase tracking-wider text-[#C2520E] border border-stone-200 shadow-2xs">
                {item.category}
              </div>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-xs text-stone-800 line-clamp-2 leading-relaxed font-semibold">
                {item.caption}
              </p>
              <div className="pt-2 border-t border-[#E8E3DD] flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>{item.date || "Archive"}</span>
                <span className="text-emerald-700 font-semibold">Published</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
