"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from "react";
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
  const persist = useCallback((key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // ignore quota errors
    }
  }, []);

  // Synchronize state changes to localStorage outside of state updaters
  useEffect(() => {
    if (!isLoading) {
      persist(STORAGE_KEYS.MATCHES, matches);
    }
  }, [matches, isLoading, persist]);

  useEffect(() => {
    if (!isLoading) {
      persist(STORAGE_KEYS.PLAYERS, players);
    }
  }, [players, isLoading, persist]);

  useEffect(() => {
    if (!isLoading) {
      persist(STORAGE_KEYS.SPONSORS, sponsors);
    }
  }, [sponsors, isLoading, persist]);

  useEffect(() => {
    if (!isLoading) {
      persist(STORAGE_KEYS.INQUIRIES, inquiries);
    }
  }, [inquiries, isLoading, persist]);

  const login = useCallback((email: string, pass: string) => {
    const verification = verifyDummyCredentials(email, pass);
    if (!verification.valid || !verification.user) {
      return { success: false, error: verification.error || "Authentication failed" };
    }
    const newSession = saveSession(verification.user);
    setSession(newSession);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    removeSession();
    setSession(null);
  }, []);

  // Actions: Matches
  const createMatch = useCallback((data: Omit<Match, "id">): Match => {
    const newMatch: Match = {
      ...data,
      id: `match-${Date.now()}`,
    };
    setMatches((prev) => [newMatch, ...prev]);
    return newMatch;
  }, []);

  const updateMatch = useCallback((id: string, data: Partial<Match>) => {
    setMatches((prev) => prev.map((m) => (m.id === id ? { ...m, ...data } : m)));
  }, []);

  const deleteMatch = useCallback((id: string) => {
    setMatches((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const updateLiveScore = useCallback((
    id: string,
    dccScore: string,
    dccOvers: string,
    opponentScore?: string,
    opponentOvers?: string,
    result?: string
  ) => {
    setMatches((prev) =>
      prev.map((m) => {
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
      })
    );
  }, []);

  // Actions: Players
  const createPlayer = useCallback((data: Omit<Player, "id">): Player => {
    const newPlayer: Player = {
      ...data,
      id: `player-${Date.now()}`,
    };
    setPlayers((prev) => [newPlayer, ...prev]);
    return newPlayer;
  }, []);

  const updatePlayer = useCallback((id: string, data: Partial<Player>) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
  }, []);

  const deletePlayer = useCallback((id: string) => {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }, []);

  // Actions: Sponsors
  const createSponsor = useCallback((data: Omit<Sponsor, "id">): Sponsor => {
    const newSponsor: Sponsor = {
      ...data,
      id: `sponsor-${Date.now()}`,
    };
    setSponsors((prev) => [...prev, newSponsor]);
    return newSponsor;
  }, []);

  const updateSponsor = useCallback((id: string, data: Partial<Sponsor>) => {
    setSponsors((prev) => prev.map((s) => (s.id === id ? { ...s, ...data } : s)));
  }, []);

  const deleteSponsor = useCallback((id: string) => {
    setSponsors((prev) => prev.filter((s) => s.id !== id));
  }, []);

  // Actions: Gallery
  const addGalleryItem = useCallback((item: GalleryItem) => {
    setGalleryItems((prev) => [item, ...prev]);
  }, []);

  // Actions: Inquiries
  const updateInquiryStatus = useCallback((id: string, status: AdminInquiry["status"]) => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
  }, []);

  // Reset to demo defaults
  const resetDemoData = useCallback(() => {
    setMatches(initialMatches);
    setPlayers(initialPlayers);
    setSponsors(initialSponsors);
    setGalleryItems(initialGalleryItems);
    setInquiries(INITIAL_MOCK_INQUIRIES);
    try {
      localStorage.removeItem(STORAGE_KEYS.MATCHES);
      localStorage.removeItem(STORAGE_KEYS.PLAYERS);
      localStorage.removeItem(STORAGE_KEYS.SPONSORS);
      localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    } catch {
      // ignore
    }
  }, []);

  const metrics = useMemo<DashboardOverviewMetrics>(
    () => ({
      totalMembers: players.length,
      activeMatches: matches.length,
      totalTournaments: tournaments.length,
      totalSponsors: sponsors.length,
      totalSponsorshipValue: "₹1,80,000 (3-Yr MOU)",
      currentSeason: "2026–27",
      kvoRank: 10,
      trophiesCount: 2,
      weeklyPracticeNets: "3 Days / Wk @ Matunga",
    }),
    [players.length, matches.length, tournaments.length, sponsors.length]
  );

  const contextValue = useMemo(
    () => ({
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
    }),
    [
      session,
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
    ]
  );

  return (
    <AdminContext.Provider value={contextValue}>
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
