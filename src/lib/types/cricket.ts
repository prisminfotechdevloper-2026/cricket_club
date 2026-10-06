export type PlayerRole =
  | "Opening Batter"
  | "Middle Order Batter"
  | "All-Rounder"
  | "Fast Bowler"
  | "Spin Bowler"
  | "Wicketkeeper Batter";

export interface PlayerStats {
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  highestScore: string;
  fifties: number;
  hundreds: number;
  fours: number;
  sixes: number;
  wickets: number;
  bowlingAverage?: number;
  economy?: number;
  bestBowling?: string;
  catches: number;
  runouts: number;
}

export interface PlayerPerformanceLog {
  id: string;
  matchId: string;
  opponent: string;
  tournament: string;
  date: string;
  runs?: number;
  balls?: number;
  fours?: number;
  sixes?: number;
  wickets?: number;
  overs?: number;
  runsConceded?: number;
  catches?: number;
  highlight?: string;
  playerOfMatch?: boolean;
}

export interface Player {
  id: string;
  slug: string;
  name: string;
  role: PlayerRole;
  jerseyNumber: number;
  photo: string;
  bio: string;
  battingStyle: string;
  bowlingStyle?: string;
  joiningYear: number;
  featured?: boolean;
  careerStats: PlayerStats;
  currentSeasonStats: PlayerStats;
  recentPerformances: PlayerPerformanceLog[];
  seasonHighlight?: string;
}

export interface Coach {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo: string;
  experience: string;
  bio: string;
  coachingFocus: string[];
}

export type MatchStatus = "upcoming" | "live" | "completed";

export interface BatterLiveStats {
  id: string;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isStriker: boolean;
  dismissal?: string;
}

export interface BowlerLiveStats {
  id: string;
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface CommentaryBall {
  overBall: string; // e.g. "17.2"
  bowler: string;
  batter: string;
  runs: number;
  type: "dot" | "run" | "boundary" | "six" | "wicket" | "extra";
  text: string;
  timestamp?: string;
}

export interface OverSummary {
  overNumber: number;
  runs: number;
  wickets: number;
  balls: string[]; // e.g. ["1", "4", "0", "2", "6", "1"]
  bowler: string;
}

export interface InningsScorecard {
  teamName: string;
  totalScore: string; // e.g. "183/8"
  overs: string;      // e.g. "20.0"
  batters: BatterLiveStats[];
  bowlers: BowlerLiveStats[];
  extras: {
    wides: number;
    noBalls: number;
    legByes: number;
    byes: number;
    total: number;
  };
}

export interface MatchLiveDetails {
  currentBatters: BatterLiveStats[];
  currentBowler: BowlerLiveStats;
  recentBalls: string[]; // last 6-12 balls, e.g. ["1", "4", "0", "2", "6", "1"]
  requiredRuns?: number;
  remainingBalls?: number;
  target?: number;
  currentRunRate: number;
  requiredRunRate?: number;
  commentary: CommentaryBall[];
  oversSummary: OverSummary[];
  scorecard: {
    firstInnings: InningsScorecard;
    secondInnings: InningsScorecard;
  };
  playingXI: {
    dcc: string[];
    opponent: string[];
  };
}

export interface Match {
  id: string;
  slug: string;
  tournament: string;
  tournamentSlug: string;
  season: string;
  opponent: string;
  opponentShort: string;
  matchType: string; // "Semi Final", "Group Match", "Final", "Friendly"
  date: string;
  time: string;
  venue: string;
  status: MatchStatus;
  result?: string;
  dccScore?: string;
  dccOvers?: string;
  opponentScore?: string;
  opponentOvers?: string;
  toss?: string;
  featured?: boolean;
  scoreUrl?: string; // external link for future integration
  liveDetails?: MatchLiveDetails;
}

export interface Tournament {
  id: string;
  slug: string;
  name: string;
  organizer: string;
  location: string;
  season: string;
  dates: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  finishStage: string;
  topPerformer: {
    playerName: string;
    playerSlug: string;
    stat: string;
  };
  summary: string;
  coverImage: string;
  featuredMatches: Match[];
}
