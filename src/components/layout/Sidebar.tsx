import { NavLink } from "react-router-dom";

const link =
  "block rounded-lg px-3 py-2 text-sm hover:bg-[var(--col_base-2)] aria-[current=page]:bg-[var(--col_base-2)]";

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-[var(--col_border)] p-3 md:block">
      <nav className="space-y-1">
        <NavLink to="/" end className={link}>
          Home
        </NavLink>
        <NavLink to="/profile/me" className={link}>
          My Profile
        </NavLink>
      </nav>
    </aside>
  );
}
