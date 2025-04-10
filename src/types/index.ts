export interface Sport {
  sportId: string;
  sportName: string;
  icon?: string;
}

export const sports: Sport[] = [
  { sportId: "basketball", sportName: "Basketball" },
  { sportId: "football", sportName: "Football" },
  { sportId: "tennis", sportName: "Tennis" },
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
