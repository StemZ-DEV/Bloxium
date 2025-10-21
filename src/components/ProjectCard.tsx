type Project = {
  id: string;
  name: string;
  author: string;
  tags: string[];
  downloads: number;
  updatedAt: string; // ISO
  summary: string;
};

export function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={`/project/${p.id}`}
      className="block rounded-xl border border-(--col_border) bg-(--col_base-2) p-4 hover:bg-white/5"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">{p.name}</h3>
        <span className="text-xs opacity-70">
          {new Date(p.updatedAt).toLocaleDateString()}
        </span>
      </div>
      <p className="mb-3 line-clamp-2 text-sm opacity-90">{p.summary}</p>
      <div className="flex items-center gap-2 text-xs opacity-80">
        <span>by {p.author}</span>
        <span>•</span>
        <span>{p.downloads.toLocaleString()} downloads</span>
        <span>•</span>
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-(--col_border) px-1 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
