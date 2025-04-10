"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Session, SessionList, sports } from "@/types";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";
import { Select } from "@/components/Select";

const dummySessions: SessionList = {
  "11234": [
    {
      venue: "Arena Gym",
      sport: { sportId: "football", sportName: "Football" },
      time: "Today 6PM",
      spots: 3,
      cost: "$5",
      level: "Beginner",
    },
    {
      venue: "Arena Gym",
      sport: { sportId: "basketball", sportName: "Basketball" },
      time: "Today 7PM",
      spots: 2,
      cost: "$3",
      level: "Intermediate",
    },
    {
      venue: "Greenfield Park",
      sport: { sportId: "tennis", sportName: "Tennis" },
      time: "Tomorrow 10AM",
      spots: 1,
      cost: "Free",
      level: "Advanced",
    },
  ],
};

export default function Home() {
  const [area, setArea] = useState("11234");
  const [sessions, setSessions] = useState<Session[] | null>(null);
  const [selected, setSelected] = useState<Session | null>(null);
  const [messengerId, setMessengerId] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");
  const [sportFilter, setSportFilter] = useState("All");
  const [onlyFree, setOnlyFree] = useState(false);

  const handleSearch = () => {
    setSessions(dummySessions[area] || null);
    setSelected(null);
  };

  const handleRequest = (session: Session) => {
    setSelected(session);
  };

  const closeForm = () => {
    setSelected(null);
    setMessengerId("");
    setCustomMessage("");
  };

  const sendRequest = () => {
    alert(
      `Request sent to host with ID: ${messengerId}\nMessage: ${customMessage}`
    );
    closeForm();
  };

  const groupByVenue = (sessions: Session[]): Record<string, Session[]> => {
    return sessions.reduce((groups, session) => {
      if (!groups[session.venue]) {
        groups[session.venue] = [];
      }
      groups[session.venue].push(session);
      return groups;
    }, {} as Record<string, Session[]>);
  };

  const applyFilters = (session: Session) => {
    const matchLevel = levelFilter === "All" || session.level === levelFilter;
    const matchCost = !onlyFree || session.cost === "Free";
    const matchSport =
      sportFilter === "All" || session.sport.sportId === sportFilter;
    return matchLevel && matchCost && matchSport;
  };

  const sportOptions = Array.from(
    new Set((sessions || []).map((s) => s.sport.sportId))
  );

  return (
    <main className="min-h-screen text-white px-6 py-12 max-w-3xl mx-auto font-sans text-sm leading-tight">
      <header className="mb-14">
        <h1 className="text-3xl font-bold text-green-400 tracking-tight">
          GameOn
        </h1>
        <p className="text-neutral-400 mt-2 text-md">
          Discover and join local sports sessions instantly.
        </p>
      </header>

      <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 mb-10 shadow-xl">
        <h2 className="text-3xl font-semibold mb-8">
          Join a sports session near you
        </h2>
        <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-5">
          <Input
            type="text"
            placeholder="Enter area code (e.g. 11234)"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {sessions && (
          <div className="flex flex-wrap gap-4">
            <Select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              options={[
                { value: "All", label: "All Levels" },
                { value: "Beginner", label: "Beginner" },
                { value: "Intermediate", label: "Intermediate" },
                { value: "Advanced", label: "Advanced" },
              ]}
            />
            <Select
              value={sportFilter}
              onChange={(e) => setSportFilter(e.target.value)}
              options={sports.map((sport) => ({
                value: sport.sportId,
                label: sport.sportName,
              }))}
            />

            <label className="flex items-center gap-2 text-white text-sm">
              <input
                type="checkbox"
                className="accent-green-500"
                checked={onlyFree}
                onChange={() => setOnlyFree(!onlyFree)}
              />
              Only Free
            </label>
          </div>
        )}
      </section>

      {sessions && (
        <section className="space-y-10">
          <h2 className="text-lg font-semibold text-neutral-400">
            Sessions near: {area}
          </h2>
          {Object.entries(groupByVenue(sessions || [])).map(
            ([venue, venueSessions]: [string, Session[]], vIdx) => (
              <div key={vIdx}>
                <h3 className="text-base font-bold text-white mb-3">{venue}</h3>
                <div className="space-y-4">
                  {venueSessions
                    .filter(applyFilters)
                    .map((session: Session, index: number) => (
                      <div
                        key={`${venue}-${index}`}
                        className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex-1">
                            <p
                              className={`font-semibold mb-1 text-sm ${
                                session.time.startsWith("Today")
                                  ? "text-red-400"
                                  : "text-green-400"
                              }`}
                            >
                              {session.time}
                            </p>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-xl font-bold tracking-tight text-white">
                                {session.sport.sportName}
                              </h4>
                              <span className="text-sm font-medium bg-neutral-800 border border-neutral-700 rounded-full px-3 py-0.5 text-neutral-300">
                                {session.level}
                              </span>
                            </div>
                            <p className="text-neutral-300 font-medium text-sm mt-2">
                              Cost: {session.cost}
                            </p>
                          </div>
                          {!selected ||
                          selected.venue !== session.venue ||
                          selected.time !== session.time ? (
                            <div className="flex flex-col items-end gap-2">
                              <Button
                                variant="outline"
                                onClick={() => handleRequest(session)}
                              >
                                Request to Join
                              </Button>
                            </div>
                          ) : null}
                        </div>
                        {selected?.venue === session.venue &&
                          selected?.time === session.time && (
                            <div className="mt-6 border-t border-neutral-800 pt-4">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="font-medium text-white text-base">
                                  Request to Join
                                </h4>
                                <button
                                  onClick={closeForm}
                                  className="text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full p-1 cursor-pointer text-2xl leading-none"
                                >
                                  <X />
                                </button>
                              </div>
                              <Input
                                placeholder="Your Messenger ID"
                                value={messengerId}
                                onChange={(e) => setMessengerId(e.target.value)}
                              />
                              <Textarea
                                placeholder="Message to Host (optional)"
                                rows={3}
                                value={customMessage}
                                onChange={(e) =>
                                  setCustomMessage(e.target.value)
                                }
                                className="mt-3"
                              />
                              <Button
                                fullWidth
                                className="mt-4"
                                onClick={sendRequest}
                              >
                                Send Request
                              </Button>
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </section>
      )}
    </main>
  );
}
