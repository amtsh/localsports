export interface Sport {
  sportId: string;
  sportName: string;
  icon?: string;
}

export const sports: Sport[] = [
  { sportId: "badminton", sportName: "Badminton" },
  { sportId: "baseball", sportName: "Baseball" },
  { sportId: "basketball", sportName: "Basketball" },
  { sportId: "cricket", sportName: "Cricket" },
  { sportId: "football", sportName: "Football" },
  { sportId: "golf", sportName: "Golf" },
  { sportId: "hockey", sportName: "Hockey" },
  { sportId: "rugby", sportName: "Rugby" },
  { sportId: "soccer", sportName: "Soccer" },
  { sportId: "tennis", sportName: "Tennis" },
  { sportId: "volleyball", sportName: "Volleyball" },
];

export interface Session {
  venue: string;
  sport: Sport;
  time: string;
  spots: number;
  cost: string;
  level: string;
}

export type SessionList = Record<string, Session[]>;

export interface SessionSearchFilters {
  levelFilter: string;
  onlyFree: boolean;
  sportFilter: string;
}

export enum Path {
  search = "/",
  create = "create",
}
