import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="bg-white px-4 py-32 text-center">
      <h1 className="font-poppins text-4xl font-semibold text-slate-950">
        Project not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        This plot project is not available. Explore verified Jaipur plot listings instead.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white"
      >
        Explore Projects
      </Link>
    </section>
  );
}
