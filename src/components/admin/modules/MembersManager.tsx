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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E3DD]">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#090A0C] tracking-tight">
            50+ CLUB SQUAD &amp; MEMBERS
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Devpur Cricket Club member registry, discipline roles, and individual career performance records.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EA6E18] to-[#D96214] hover:from-[#D96214] text-white font-headline text-sm font-bold uppercase tracking-wider transition-opacity cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-md shadow-[#EA6E18]/20"
        >
          <Plus className="w-4 h-4" />
          <span>Enroll New Member</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="p-4 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by member name, role, or jersey #..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 text-xs font-medium focus:border-[#EA6E18] focus:bg-white outline-hidden transition-colors"
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-semibold focus:border-[#EA6E18] focus:bg-white outline-hidden w-full sm:w-auto cursor-pointer"
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
          <div className="col-span-full p-12 text-center rounded-3xl bg-white border border-[#E8E3DD] shadow-xs">
            <Users className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h3 className="text-stone-900 font-semibold text-sm">No members found</h3>
            <p className="text-xs text-stone-500 mt-1">Try another search or reset filter</p>
          </div>
        ) : (
          filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="p-5 rounded-2xl bg-white border border-[#E8E3DD] shadow-xs hover:border-[#EA6E18]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 border border-[#EA6E18]/25 flex items-center justify-center font-headline text-2xl font-bold text-[#EA6E18] shrink-0">
                      #{player.jerseyNumber}
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-[#090A0C] group-hover:text-[#EA6E18] transition-colors leading-tight">
                        {player.name}
                      </h3>
                      <span className="text-xs text-stone-500 block mt-0.5 font-medium">
                        {player.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEdit(player)}
                      className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
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
                      className="p-1.5 rounded-lg bg-white hover:bg-red-50 border border-stone-200 text-stone-400 hover:text-red-600 transition-colors cursor-pointer shadow-2xs"
                      aria-label="Delete player"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 grid grid-cols-4 gap-2 text-center">
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Matches</span>
                    <span className="text-stone-900 font-headline text-xl font-bold">{player.careerStats?.matches || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Runs</span>
                    <span className="text-[#EA6E18] font-headline text-xl font-bold">{player.careerStats?.runs || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Wkts</span>
                    <span className="text-[#C2520E] font-headline text-xl font-bold">{player.careerStats?.wickets || 0}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">HS</span>
                    <span className="text-stone-900 font-headline text-xl font-bold">{player.careerStats?.highestScore || "—"}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {player.bio || "Dedicated member actively participating in weekly training."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E3DD] flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Joined DCC {player.joiningYear || 2021}</span>
                <span className="text-stone-700 font-semibold">{player.battingStyle || "Right-hand"}</span>
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
