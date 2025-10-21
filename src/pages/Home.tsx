import { ProjectCard } from "../components/ProjectCard";

const mock = Array.from({ length: 12 }).map((_, i) => ({
  id: `proj-${i + 1}`,
  name: `Project ${i + 1}`,
  author: i % 2 ? "StemZ" : "Bloxium Dev",
  tags: ["utility", i % 3 ? "fabric" : "forge"],
  downloads: 1000 * (i + 1),
  updatedAt: new Date(Date.now() - i * 86400000).toISOString(),
  summary:
    "Short summary of the project. This will be replaced by real data in the data-layer PR.",
}));

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-4 text-xl font-semibold">Discover projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mock.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
