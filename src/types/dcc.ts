/**
 * Official Devpur Cricket Club (DCC) Domain Type Contract
 * Production-ready types aligned with OPTIMIZE_V4 specification.
 * Designed for immediate static usage and seamless migration to future
 * Custom Admin -> Hono API -> PostgreSQL backend.
 */

export type PlayerRole =
  | "Opening Batter"
  | "Middle Order Batter"
  | "All-Rounder"
  | "Fast Bowler"
  | "Spin Bowler"
  | "Wicketkeeper Batter";

export interface DCCPlayer {
  id: string;
  slug: string;
  name: string;
  photo?: string;
  jerseyNumber?: number;
  primaryRole?: PlayerRole;
  battingStyle?: string;
  bowlingStyle?: string;
  bio?: string;
  joinedYear?: number;
  active?: boolean;
  featured?: boolean;
  highlight?: string;
}

export interface DCCPlayerSeasonStats {
  playerId: string;
  seasonId: string;
  matches: number;
  runs: number;
  wickets: number;
  catches: number;
  average?: number;
  strikeRate?: number;
  economy?: number;
  bestBowling?: string;
}

export type MatchStatus =
  | "upcoming"
  | "live"
  | "completed"
  | "cancelled"
  | "postponed";

export type MatchType = "practice" | "tournament";

export type BallFormat = "white-ball" | "red-ball";

export interface DCCMatch {
  id: string;
  slug: string;
  seasonId: string;
  competitionName?: string;
  opponentName: string;
  opponentShort?: string;
  matchType: MatchType;
  ballFormat?: BallFormat;
  date: string;
  startTime?: string;
  venue?: string;
  status: MatchStatus;
  liveScoreUrl?: string;
  scoreProvider?: "cricclubs" | "custom";
  scoreSummary?: {
    dcc?: string;
    dccOvers?: string;
    opponent?: string;
    opponentOvers?: string;
  };
  resultText?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface DCCSeason {
  id: string;
  slug: string;
  label: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  coverImage?: string;
  practiceRhythm?: string;
}

export interface DCCSponsor {
  id: string;
  name: string;
  slug: string;
  logo: string;
  website?: string;
  tenure: string;
  tierLabel: string;
  visibilityScope: string[];
  description: string;
  active: boolean;
  featured?: boolean;
}

export interface DCCMemoryAlbum {
  id: string;
  slug: string;
  title: string;
  seasonId: string;
  year: string;
  date: string;
  category: "match-day" | "practice" | "team-moments" | "get-togethers" | "celebrations";
  coverImage: string;
  photoCount: number;
  description: string;
  location?: string;
}

export interface DCCClubLifePillar {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  image: string;
}
