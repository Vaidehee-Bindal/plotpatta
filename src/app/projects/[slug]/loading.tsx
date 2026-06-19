export default function ProjectLoading() {
  return (
    <div className="bg-white px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="aspect-[16/10] animate-pulse rounded-lg bg-slate-200" />
        <div className="space-y-4">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
          <div className="h-12 w-4/5 animate-pulse rounded bg-slate-200" />
          <div className="h-6 w-52 animate-pulse rounded bg-slate-200" />
          <div className="h-28 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
