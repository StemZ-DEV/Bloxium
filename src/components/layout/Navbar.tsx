export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--col_border)] bg-[var(--col_base)]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
        <span className="font-semibold">Bloxium</span>
        <input
          placeholder="Search projects…"
          className="ml-auto w-72 rounded-lg border border-[var(--col_border)] bg-[var(--col_base-2)] px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-[var(--col_accent)]"
        />
      </div>
    </header>
  );
}
