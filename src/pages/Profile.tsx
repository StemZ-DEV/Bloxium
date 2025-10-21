import { useParams } from "react-router-dom";

export default function Profile() {
  const { handle } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-xl font-semibold">@{handle}</h1>
      <p className="mt-2 opacity-80">Profile page placeholder.</p>
    </div>
  );
}
