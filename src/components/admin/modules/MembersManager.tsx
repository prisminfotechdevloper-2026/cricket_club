"use client";

import React, { useState } from "react";
import {
  Users,
  Plus,
  Search,
  Edit2,
  Trash2,
} from "lucide-react";
import { useAdmin } from "@/lib/admin/adminStore";
import { Player } from "@/lib/types/cricket";
import { MemberEditModal } from "../modals/MemberEditModal";

export function MembersManager() {
  const { players, createPlayer, updatePlayer, deletePlayer } = useAdmin();

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);

  const filteredPlayers = players.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(p.jerseyNumber).includes(searchTerm);
    const matchesRole = roleFilter === "all" || p.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const handleEdit = (p: Player) => {
    setEditingPlayer(p);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingPlayer(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            50+ CLUB SQUAD &amp; MEMBERS
          </h2>
          <p className="text-xs font-mono text-stone-400">
            Devpur Cricket Club member registry, discipline roles, and individual career performance records.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-orange-light text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-brand-orange/20"
        >
          <Plus className="w-4 h-4" />
          <span>Enroll New Member</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="p-4 rounded-2xl bg-[#14161B] border border-white/10 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by member name, role, or jersey #..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:border-brand-orange outline-hidden"
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-stone-300 text-xs font-mono focus:border-brand-orange outline-hidden w-full sm:w-auto"
        >
          <option value="all">All Playing Roles</option>
          <option value="Opening Batter">Opening Batter</option>
          <option value="Middle Order Batter">Middle Order Batter</option>
          <option value="All-Rounder">All-Rounder</option>
          <option value="Fast Bowler">Fast Bowler</option>
          <option value="Spin Bowler">Spin Bowler</option>
          <option value="Wicketkeeper Batter">Wicketkeeper Batter</option>
        </select>
      </div>

      {/* Grid of Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-3xl bg-[#14161B] border border-white/10">
            <Users className="w-8 h-8 text-stone-600 mx-auto mb-3" />
            <h3 className="text-white font-semibold text-sm">No members found</h3>
            <p className="text-xs text-stone-500 font-mono mt-1">Try another search or reset filter</p>
          </div>
        ) : (
          filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="p-5 rounded-2xl bg-[#14161B] border border-white/10 hover:border-brand-orange/40 transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-black/60 border border-brand-orange/30 flex items-center justify-center font-headline text-xl font-bold text-brand-orange shrink-0">
                      #{player.jerseyNumber}
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-white group-hover:text-brand-orange-light transition-colors leading-tight">
                        {player.name}
                      </h3>
                      <span className="text-xs font-mono text-stone-400 block mt-0.5">
                        {player.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEdit(player)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Edit player"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove ${player.name} from active squad roster?`)) {
                          deletePlayer(player.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                      aria-label="Delete player"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase">Matches</span>
                    <span className="text-white font-bold">{player.careerStats?.matches || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase">Runs</span>
                    <span className="text-brand-orange font-bold">{player.careerStats?.runs || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase">Wkts</span>
                    <span className="text-brand-gold font-bold">{player.careerStats?.wickets || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase">HS</span>
                    <span className="text-white font-bold">{player.careerStats?.highestScore || "—"}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {player.bio || "Dedicated member actively participating in weekly training."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Joined DCC {player.joiningYear || 2021}</span>
                <span className="text-stone-400">{player.battingStyle || "Right-hand"}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <MemberEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPlayer={editingPlayer}
        onSave={(data) => {
          if (editingPlayer) {
            updatePlayer(editingPlayer.id, data);
          } else {
            createPlayer(data as Omit<Player, "id">);
          }
        }}
      />
    </div>
  );
}
