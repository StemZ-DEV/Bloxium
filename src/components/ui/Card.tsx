import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-(--col_border) bg-(--col_base-2) p-4">
      {children}
    </div>
  );
}
