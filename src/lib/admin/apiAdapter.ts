/**
 * Admin API Adapter Contract
 * 
 * Future Architecture Contract:
 * Next.js Admin Frontend  -->  Hono Backend API (/api/admin/...)  -->  PostgreSQL
 * 
 * This adapter provides the exact interface that the UI consumes today with dummy/local state,
 * and will seamlessly map to Hono REST/RPC endpoints without changing component UI code.
 */

import { Match, Player } from "@/lib/types/cricket";
import { Sponsor } from "@/lib/types/content";

export interface AdminInquiry {
  id: string;
  senderName: string;
  email: string;
  phone: string;
  type: "member_inquiry" | "sponsorship_interest" | "practice_match_request" | "general";
  message: string;
  createdAt: string;
  status: "new" | "in_review" | "contacted" | "archived";
}

export interface DashboardOverviewMetrics {
  totalMembers: number;
  activeMatches: number;
  totalTournaments: number;
  totalSponsors: number;
  totalSponsorshipValue: string; // "₹1,80,000 (3-Yr MOU)"
  currentSeason: string; // "2026–27"
  kvoRank: number; // 10
  trophiesCount: number; // 2
  weeklyPracticeNets: string; // "3 Days / Wk @ Matunga"
}

export interface IAdminApiAdapter {
  // Overview
  getOverviewMetrics(): Promise<DashboardOverviewMetrics>;

  // Matches
  getMatches(): Promise<Match[]>;
  createMatch(match: Omit<Match, "id">): Promise<Match>;
  updateMatch(id: string, match: Partial<Match>): Promise<Match>;
  deleteMatch(id: string): Promise<boolean>;
  updateLiveScore(
    matchId: string,
    dccScore: string,
    dccOvers: string,
    opponentScore?: string,
    opponentOvers?: string,
    result?: string
  ): Promise<Match>;

  // Players
  getPlayers(): Promise<Player[]>;
  createPlayer(player: Omit<Player, "id">): Promise<Player>;
  updatePlayer(id: string, player: Partial<Player>): Promise<Player>;
  deletePlayer(id: string): Promise<boolean>;

  // Sponsors
  getSponsors(): Promise<Sponsor[]>;
  createSponsor(sponsor: Omit<Sponsor, "id">): Promise<Sponsor>;
  updateSponsor(id: string, sponsor: Partial<Sponsor>): Promise<Sponsor>;
  deleteSponsor(id: string): Promise<boolean>;

  // Inquiries
  getInquiries(): Promise<AdminInquiry[]>;
  updateInquiryStatus(id: string, status: AdminInquiry["status"]): Promise<boolean>;
}

export const INITIAL_MOCK_INQUIRIES: AdminInquiry[] = [
  {
    id: "inq-101",
    senderName: "Bhavin Shah",
    email: "bhavin.shah@gmail.com",
    phone: "+91 98201 44521",
    type: "sponsorship_interest",
    message: "Interested in supporting DCC for the 2026-27 season as a jersey partner. Please share MOU details.",
    createdAt: "2026-10-06 11:30 AM",
    status: "new",
  },
  {
    id: "inq-102",
    senderName: "Ketan Gala",
    email: "ketan.gala@yahoo.co.in",
    phone: "+91 98199 12345",
    type: "member_inquiry",
    message: "Looking to join the weekend leather-ball practice sessions at Matunga Ground. What is the selection process?",
    createdAt: "2026-10-05 04:15 PM",
    status: "in_review",
  },
  {
    id: "inq-103",
    senderName: "KVO Premier League Committee",
    email: "coord@kvocricket.org",
    phone: "+91 98700 88210",
    type: "practice_match_request",
    message: "Inviting Devpur Cricket Club for pre-tournament practice match at Cross Maidan this Sunday morning.",
    createdAt: "2026-10-04 02:00 PM",
    status: "contacted",
  },
];
