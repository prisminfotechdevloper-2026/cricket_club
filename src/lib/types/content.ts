export type TrainingCategory =
  | "all"
  | "net-practice"
  | "batting"
  | "bowling"
  | "fielding"
  | "fitness"
  | "match-prep";

export interface TrainingSession {
  id: string;
  slug: string;
  season: string;
  title: string;
  description: string;
  category: TrainingCategory;
  date: string;
  time: string;
  duration: string;
  coachId: string;
  coachName: string;
  coachRole: string;
  location: string;
  thumbnail: string;
  keyFocus: string[];
  attendeesCount: number;
}

export interface Season {
  id: string;
  slug: string;
  name: string; // e.g. "2026–27"
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  motto: string;
  matchesPlayed: number;
  matchesWon: number;
  trophiesWon: number;
  summary: string;
  highlights: string[];
  captain: string;
  topRunScorer: {
    name: string;
    runs: number;
  };
  topWicketTaker: {
    name: string;
    wickets: number;
  };
  timeline: {
    month: string;
    stage: string;
    description: string;
  }[];
}

export type AchievementCategory =
  | "trophy"
  | "player-award"
  | "milestone"
  | "record";

export interface Achievement {
  id: string;
  title: string;
  year: string;
  season: string;
  category: AchievementCategory;
  recipient: string; // Team or Player Name
  badgeText: string;
  description: string;
  tournamentName?: string;
  featured?: boolean;
}

export type GalleryCategory =
  | "all"
  | "training"
  | "match-day"
  | "tournaments"
  | "team-moments"
  | "celebrations";

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: GalleryCategory;
  aspect?: "landscape" | "portrait" | "square";
  date: string;
}

export interface GalleryAlbum {
  id: string;
  slug: string;
  title: string;
  season: string;
  date: string;
  category: GalleryCategory;
  photoCount: number;
  coverImage: string;
  description: string;
  location: string;
  items: GalleryItem[];
}

export type SponsorTier = "principal" | "associate" | "official" | "community";

export interface Sponsor {
  id: string;
  name: string;
  slug: string;
  tier: SponsorTier;
  tierLabel: string;
  logo: string;
  website?: string;
  tagline?: string;
  description: string;
  tenure: string;
  annualContribution?: string;
  visibilityScope: string[];
  featured?: boolean;
  jerseyPlacement?: string;
  categoryRole?: string;
}

export type BlogCategory =
  | "all"
  | "match-analysis"
  | "coaching-tactics"
  | "squad-spotlight"
  | "club-heritage"
  | "tournament-diaries";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  content: string[];
  keyTakeaways?: string[];
}
