import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-xl font-semibold">Project: {id}</h1>
      <p className="mt-2 opacity-80">Detail view incoming.</p>
    </div>
  );
}
