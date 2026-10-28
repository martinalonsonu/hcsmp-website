import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container py-20 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay-text">
        Error 404
      </p>
      <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
        No encontramos esta página.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-muted">
        Puede que el enlace haya cambiado. Puedes volver al inicio o explorar la
        memoria de nuestra Hermandad.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          className="inline-flex min-h-12 items-center justify-center bg-forest px-6 text-sm font-semibold text-white hover:bg-forest-deep"
          href="/"
        >
          Volver al inicio
        </Link>
        <Link
          className="inline-flex min-h-12 items-center justify-center border border-line px-6 text-sm font-semibold hover:border-ink"
          href="/archivo"
        >
          Explorar el archivo
        </Link>
      </div>
    </section>
  );
}
