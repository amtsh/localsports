import { useState } from "react";
import { Session, SessionSearchFilters } from "../types";
import { getSportOptions } from "../lib/utils";

interface SearchFormProps {
  onSearch: (areaCode: string) => void;
  area: string;
  setArea: (value: string) => void;
  sessions: Session[] | null;
  filters: SessionSearchFilters;
  setFilters: (filters: SessionSearchFilters) => void;
}

export default function SearchForm({
  onSearch,
  area,
  setArea,
  sessions,
  filters,
  setFilters,
}: SearchFormProps) {
  const { levelFilter, onlyFree, sportFilter } = filters;
  const sportOptions = getSportOptions(sessions || []);

  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 mb-10 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Join a sports session near you
      </h2>
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-5">
        <input
          type="text"
          placeholder="Enter area code (e.g. 11234)"
          className="flex-1 p-3 rounded-xl bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-400 transition text-black font-semibold px-5 py-2 rounded-xl shadow-md text-sm"
          onClick={() => onSearch()}
        >
          Search
        </button>
      </div>
      {sessions && (
        <div className="flex flex-wrap gap-4">
          <select
            className="bg-neutral-800 text-white border border-neutral-700 px-4 py-2 rounded-lg text-sm"
            value={levelFilter}
            onChange={(e) =>
              setFilters({ ...filters, levelFilter: e.target.value })
            }
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select
            className="bg-neutral-800 text-white border border-neutral-700 px-4 py-2 rounded-lg text-sm"
            value={sportFilter}
            onChange={(e) =>
              setFilters({ ...filters, sportFilter: e.target.value })
            }
          >
            <option value="All">All Sports</option>
            {sportOptions.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
          <label className="flex items-center gap-2 text-white text-sm">
            <input
              type="checkbox"
              className="accent-green-500"
              checked={onlyFree}
              onChange={() => setFilters({ ...filters, onlyFree: !onlyFree })}
            />
            Only Free
          </label>
        </div>
      )}
    </section>
  );
}
