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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            CLUB MEMORIES &amp; PHOTO ARCHIVES
          </h2>
          <p className="text-xs font-mono text-stone-400">
            Preserve matchday moments, community celebrations, and brotherhood archives across seasons.
          </p>
        </div>
        <button
          onClick={() => setIsAddOpen(!isAddOpen)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-orange-light text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-brand-orange/20"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Memory</span>
        </button>
      </div>

      {/* Upload Simulation Form */}
      {isAddOpen && (
        <form
          onSubmit={handleAdd}
          className="p-6 rounded-3xl bg-[#14161B] border border-brand-orange/30 shadow-xl space-y-4 max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-orange-light uppercase tracking-wider">
            <Camera className="w-4 h-4 text-brand-orange" />
            <span>ARCHIVE NEW MOMENT</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
              Caption / Story *
            </label>
            <input
              type="text"
              required
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Post-match dinner celebration with Devpur Gaam members"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as GalleryCategory)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
              >
                <option value="celebrations">Celebrations &amp; Trophies</option>
                <option value="match-day">Match Day Action</option>
                <option value="training">Net Practice at Matunga</option>
                <option value="team-moments">Brotherhood &amp; Community</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase tracking-wider block">
                Photo Asset
              </label>
              <select
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-brand-orange outline-hidden font-mono"
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
              className="px-4 py-2 rounded-xl text-stone-400 text-xs font-mono uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-headline text-sm font-bold uppercase tracking-wider transition-colors"
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
            className="rounded-2xl bg-[#14161B] border border-white/10 overflow-hidden group hover:border-brand-orange/40 transition-colors flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-black/60">
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-mono font-bold uppercase text-brand-gold-light border border-white/10">
                {item.category}
              </div>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                {item.caption}
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>{item.date || "Archive"}</span>
                <span className="text-emerald-400">Published</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
