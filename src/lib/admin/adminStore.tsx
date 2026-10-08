"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Match, Player, Tournament, Coach } from "@/lib/types/cricket";
import { Sponsor, TrainingSession, Season, GalleryItem } from "@/lib/types/content";
import {
  matches as initialMatches,
  players as initialPlayers,
  sponsors as initialSponsors,
  coaches as initialCoaches,
  trainingSessions as initialTrainingSessions,
  tournaments as initialTournaments,
  seasons as initialSeasons,
  galleryItems as initialGalleryItems,
} from "@/lib/data";
import {
  AdminSession,
  getStoredSession,
  saveSession,
  removeSession,
  verifyDummyCredentials,
} from "./adminAuth";
import { AdminInquiry, INITIAL_MOCK_INQUIRIES, DashboardOverviewMetrics } from "./apiAdapter";

export type AdminTab =
  | "overview"
  | "matches"
  | "members"
  | "sponsors"
  | "training"
  | "tournaments"
  | "memories"
  | "inquiries"
  | "settings";

interface AdminContextType {
  session: AdminSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  login: (email: string, pass: string) => { success: boolean; error?: string };
  logout: () => void;
  
  // Data entities
  matches: Match[];
  players: Player[];
  sponsors: Sponsor[];
  coaches: Coach[];
  trainingSessions: TrainingSession[];
  tournaments: Tournament[];
  seasons: Season[];
  galleryItems: GalleryItem[];
  inquiries: AdminInquiry[];

  // Metrics
  metrics: DashboardOverviewMetrics;

  // Actions
  createMatch: (data: Omit<Match, "id">) => Match;
  updateMatch: (id: string, data: Partial<Match>) => void;
  deleteMatch: (id: string) => void;
  updateLiveScore: (
    id: string,
    dccScore: string,
    dccOvers: string,
    opponentScore?: string,
    opponentOvers?: string,
    result?: string
  ) => void;

  createPlayer: (data: Omit<Player, "id">) => Player;
  updatePlayer: (id: string, data: Partial<Player>) => void;
  deletePlayer: (id: string) => void;

  createSponsor: (data: Omit<Sponsor, "id">) => Sponsor;
  updateSponsor: (id: string, data: Partial<Sponsor>) => void;
  deleteSponsor: (id: string) => void;

  addGalleryItem: (item: GalleryItem) => void;
  updateInquiryStatus: (id: string, status: AdminInquiry["status"]) => void;
  resetDemoData: () => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

const STORAGE_KEYS = {
  MATCHES: "dcc_admin_matches_v1",
  PLAYERS: "dcc_admin_players_v1",
  SPONSORS: "dcc_admin_sponsors_v1",
  INQUIRIES: "dcc_admin_inquiries_v1",
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [sponsors, setSponsors] = useState<Sponsor[]>(initialSponsors);
  const [coaches] = useState<Coach[]>(initialCoaches);
  const [trainingSessions] = useState<TrainingSession[]>(initialTrainingSessions);
  const [tournaments] = useState<Tournament[]>(initialTournaments);
  const [seasons] = useState<Season[]>(initialSeasons);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems);
  const [inquiries, setInquiries] = useState<AdminInquiry[]>(INITIAL_MOCK_INQUIRIES);

  // Hydrate from localStorage once mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = getStoredSession();
        if (stored) {
          setSession(stored);
        }

        const storedMatches = localStorage.getItem(STORAGE_KEYS.MATCHES);
        if (storedMatches) {
          setMatches(JSON.parse(storedMatches));
        }

        const storedPlayers = localStorage.getItem(STORAGE_KEYS.PLAYERS);
        if (storedPlayers) {
          setPlayers(JSON.parse(storedPlayers));
        }

        const storedSponsors = localStorage.getItem(STORAGE_KEYS.SPONSORS);
        if (storedSponsors) {
          setSponsors(JSON.parse(storedSponsors));
        }

        const storedInquiries = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
        if (storedInquiries) {
          setInquiries(JSON.parse(storedInquiries));
        }
      } catch {
        // ignore JSON parse errors in demo environment
      } finally {
        setIsLoading(false);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Helper to persist state
  const persist = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // ignore quota errors
    }
  };

  const login = (email: string, pass: string) => {
    const verification = verifyDummyCredentials(email, pass);
    if (!verification.valid || !verification.user) {
      return { success: false, error: verification.error || "Authentication failed" };
    }
    const newSession = saveSession(verification.user);
    setSession(newSession);
    return { success: true };
  };

  const logout = () => {
    removeSession();
    setSession(null);
  };

  // Actions: Matches
  const createMatch = (data: Omit<Match, "id">): Match => {
    const newMatch: Match = {
      ...data,
      id: `match-${Date.now()}`,
    };
    const updated = [newMatch, ...matches];
    setMatches(updated);
    persist(STORAGE_KEYS.MATCHES, updated);
    return newMatch;
  };

  const updateMatch = (id: string, data: Partial<Match>) => {
    const updated = matches.map((m) => (m.id === id ? { ...m, ...data } : m));
    setMatches(updated);
    persist(STORAGE_KEYS.MATCHES, updated);
  };

  const deleteMatch = (id: string) => {
    const updated = matches.filter((m) => m.id !== id);
    setMatches(updated);
    persist(STORAGE_KEYS.MATCHES, updated);
  };

  const updateLiveScore = (
    id: string,
    dccScore: string,
    dccOvers: string,
    opponentScore?: string,
    opponentOvers?: string,
    result?: string
  ) => {
    const updated = matches.map((m) => {
      if (m.id !== id) return m;
      return {
        ...m,
        status: (result ? "completed" : "live") as Match["status"],
        dccScore,
        dccOvers,
        ...(opponentScore !== undefined && { opponentScore }),
        ...(opponentOvers !== undefined && { opponentOvers }),
        ...(result !== undefined && { result }),
      };
    });
    setMatches(updated);
    persist(STORAGE_KEYS.MATCHES, updated);
  };

  // Actions: Players
  const createPlayer = (data: Omit<Player, "id">): Player => {
    const newPlayer: Player = {
      ...data,
      id: `player-${Date.now()}`,
    };
    const updated = [newPlayer, ...players];
    setPlayers(updated);
    persist(STORAGE_KEYS.PLAYERS, updated);
    return newPlayer;
  };

  const updatePlayer = (id: string, data: Partial<Player>) => {
    const updated = players.map((p) => (p.id === id ? { ...p, ...data } : p));
    setPlayers(updated);
    persist(STORAGE_KEYS.PLAYERS, updated);
  };

  const deletePlayer = (id: string) => {
    const updated = players.filter((p) => p.id !== id);
    setPlayers(updated);
    persist(STORAGE_KEYS.PLAYERS, updated);
  };

  // Actions: Sponsors
  const createSponsor = (data: Omit<Sponsor, "id">): Sponsor => {
    const newSponsor: Sponsor = {
      ...data,
      id: `sponsor-${Date.now()}`,
    };
    const updated = [...sponsors, newSponsor];
    setSponsors(updated);
    persist(STORAGE_KEYS.SPONSORS, updated);
    return newSponsor;
  };

  const updateSponsor = (id: string, data: Partial<Sponsor>) => {
    const updated = sponsors.map((s) => (s.id === id ? { ...s, ...data } : s));
    setSponsors(updated);
    persist(STORAGE_KEYS.SPONSORS, updated);
  };

  const deleteSponsor = (id: string) => {
    const updated = sponsors.filter((s) => s.id !== id);
    setSponsors(updated);
    persist(STORAGE_KEYS.SPONSORS, updated);
  };

  // Actions: Gallery
  const addGalleryItem = (item: GalleryItem) => {
    setGalleryItems([item, ...galleryItems]);
  };

  // Actions: Inquiries
  const updateInquiryStatus = (id: string, status: AdminInquiry["status"]) => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    setInquiries(updated);
    persist(STORAGE_KEYS.INQUIRIES, updated);
  };

  // Reset to demo defaults
  const resetDemoData = () => {
    setMatches(initialMatches);
    setPlayers(initialPlayers);
    setSponsors(initialSponsors);
    setGalleryItems(initialGalleryItems);
    setInquiries(INITIAL_MOCK_INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.MATCHES);
    localStorage.removeItem(STORAGE_KEYS.PLAYERS);
    localStorage.removeItem(STORAGE_KEYS.SPONSORS);
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
  };

  const metrics: DashboardOverviewMetrics = {
    totalMembers: players.length,
    activeMatches: matches.length,
    totalTournaments: tournaments.length,
    totalSponsors: sponsors.length,
    totalSponsorshipValue: "₹1,80,000 (3-Yr MOU)",
    currentSeason: "2026–27",
    kvoRank: 10,
    trophiesCount: 2,
    weeklyPracticeNets: "3 Days / Wk @ Matunga",
  };

  return (
    <AdminContext.Provider
      value={{
        session,
        isAuthenticated: !!session,
        isLoading,
        activeTab,
        setActiveTab,
        login,
        logout,
        matches,
        players,
        sponsors,
        coaches,
        trainingSessions,
        tournaments,
        seasons,
        galleryItems,
        inquiries,
        metrics,
        createMatch,
        updateMatch,
        deleteMatch,
        updateLiveScore,
        createPlayer,
        updatePlayer,
        deletePlayer,
        createSponsor,
        updateSponsor,
        deleteSponsor,
        addGalleryItem,
        updateInquiryStatus,
        resetDemoData,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
