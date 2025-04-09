export interface Session {
  venue: string;
  sport: string;
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
