import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-stone-200 mb-1.5"
        >
          {label}
        </label>
      )}
      <textarea
        className={`w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 placeholder-neutral-500 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
