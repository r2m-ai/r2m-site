import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1100px] flex-col items-center px-6 pb-40 pt-32 text-center sm:pt-44">
      <p className="rise rise-1 text-xs font-medium uppercase tracking-[0.3em] text-muted">
        404
      </p>
      <h1 className="rise rise-2 mt-6 text-balance text-[clamp(34px,6vw,64px)] font-semibold leading-[1.08] tracking-tight">
        This page <span className="grad-text">doesn&apos;t remember</span>{" "}
        being here.
      </h1>
      <p className="rise rise-3 mt-7 max-w-[48ch] text-balance leading-relaxed text-muted">
        The address may have changed, or it never existed. Our memory systems
        are usually better than this.
      </p>
      <div className="rise rise-4 mt-10">
        <Link
          href="/"
          className="btn-grad inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-medium no-underline"
        >
          back home →
        </Link>
      </div>
    </section>
  );
}
