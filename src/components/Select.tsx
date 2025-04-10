import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = ({
  label,
  error,
  options,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div className="">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-stone-200 mb-1.5"
        >
          {label}
        </label>
      )}
      <select
        className={`px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
