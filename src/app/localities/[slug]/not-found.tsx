import Link from "next/link";

export default function LocalityNotFound() {
  return (
    <section className="bg-white px-4 py-32 text-center">
      <h1 className="font-poppins text-4xl font-semibold text-slate-950">
        Locality not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        This Jaipur locality is not available yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white"
      >
        Back Home
      </Link>
    </section>
  );
}
