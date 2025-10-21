import type { ButtonHTMLAttributes } from "react";

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-lg border border-(--col_border) px-3 py-1 text-sm hover:bg-white/5 focus:ring-2 focus:ring-(--col_accent) ${className}`}
      {...props}
    />
  );
}
