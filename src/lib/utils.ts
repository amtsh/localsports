import { Session, SessionSearchFilters } from "../types";

export const groupByVenue = (
  sessions: Session[]
): Record<string, Session[]> => {
  return sessions.reduce((groups, session) => {
    if (!groups[session.venue]) {
      groups[session.venue] = [];
    }
    groups[session.venue].push(session);
    return groups;
  }, {} as Record<string, Session[]>);
};

export const applyFilters = (
  session: Session,
  filters: SessionSearchFilters
): boolean => {
  const { levelFilter, onlyFree, sportFilter } = filters;
  const matchLevel = levelFilter === "All" || session.level === levelFilter;
  const matchCost = !onlyFree || session.cost === "Free";
  const matchSport = sportFilter === "All" || session.sport === sportFilter;
  return matchLevel && matchCost && matchSport;
};

export const getSportOptions = (sessions: Session[]): string[] => {
  return Array.from(new Set(sessions.map((s) => s.sport)));
};
