import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-semibold px-5 py-2 shadow-md text-sm cursor-pointer transition-colors";
  const variantStyles = {
    primary: "bg-green-500 hover:bg-green-400 text-black rounded-xl",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl",
    outline:
      "text-green-400 hover:text-white border border-green-400 rounded-full",
  };

  // className="px-5 py-2"

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
