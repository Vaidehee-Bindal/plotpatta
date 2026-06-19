export default function AgentLoading() {
  return (
    <div className="bg-white px-4 py-28">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[220px_1fr]">
        <div className="aspect-square animate-pulse rounded-lg bg-slate-200" />
        <div className="space-y-4">
          <div className="h-4 w-48 animate-pulse rounded bg-slate-200" />
          <div className="h-12 w-72 animate-pulse rounded bg-slate-200" />
          <div className="h-28 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
