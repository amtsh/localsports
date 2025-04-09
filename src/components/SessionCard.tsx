import { Session } from "../types";

interface SessionCardProps {
  session: Session;
  selected: Session | null;
  onRequest: (session: Session) => void;
  messengerId: string;
  setMessengerId: (value: string) => void;
  customMessage: string;
  setCustomMessage: (value: string) => void;
  closeForm: () => void;
  sendRequest: () => void;
}

export default function SessionCard({
  session,
  selected,
  onRequest,
  messengerId,
  setMessengerId,
  customMessage,
  setCustomMessage,
  closeForm,
  sendRequest,
}: SessionCardProps) {
  const isSelected =
    selected?.venue === session.venue && selected?.time === session.time;

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
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
              {session.sport}
            </h4>
            <span className="text-sm font-medium bg-neutral-800 border border-neutral-700 rounded-full px-3 py-0.5 text-neutral-300">
              {session.level}
            </span>
          </div>
          <p className="text-neutral-300 font-medium text-sm">
            Cost: {session.cost}
          </p>
        </div>
        {!isSelected && (
          <div className="flex flex-col items-end gap-2">
            <button
              className="text-green-400 hover:text-white border border-green-400 px-5 py-2 rounded-full font-semibold text-sm transition-colors"
              onClick={() => onRequest(session)}
            >
              Request to Join
            </button>
          </div>
        )}
      </div>

      {isSelected && (
        <div className="mt-6 border-t border-neutral-800 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-white text-base">
              Request to Join
            </h4>
            <button
              onClick={closeForm}
              className="text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full p-1 cursor-pointer text-2xl leading-none"
            >
              &times;
            </button>
          </div>
          <input
            type="text"
            placeholder="Your Messenger ID"
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-500 text-white text-sm"
            value={messengerId}
            onChange={(e) => setMessengerId(e.target.value)}
          />
          <textarea
            placeholder="Message to Host (optional)"
            className="w-full p-3 mt-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-500 text-white text-sm"
            rows={3}
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-green-500 hover:bg-green-400 transition text-black font-bold px-5 py-3 rounded-lg shadow text-sm"
            onClick={sendRequest}
          >
            Send Request
          </button>
        </div>
      )}
    </div>
  );
}
