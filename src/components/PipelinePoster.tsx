type Stage = {
  label: string;
  detail: string;
};

/**
 * Brand-styled pipeline poster: numbered stages flowing left-to-right on
 * desktop, top-to-bottom on mobile, joined by gradient connectors.
 */
export function PipelinePoster({
  title,
  subtitle,
  stages,
}: {
  title: string;
  subtitle?: string;
  stages: Stage[];
}) {
  return (
    <figure className="card my-12 overflow-hidden p-8 sm:p-10">
      <figcaption className="mb-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
          How it works
        </p>
        <p className="mt-3 text-xl font-semibold tracking-tight">{title}</p>
        {subtitle ? (
          <p className="mt-2 text-sm text-muted">{subtitle}</p>
        ) : null}
      </figcaption>

      <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-start">
        {stages.map((s, i) => (
          <div key={s.label} className="flex flex-col lg:flex-1 lg:flex-row">
            <div className="flex-1 border border-line-soft bg-white/[0.02] p-5">
              <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-[13px] font-semibold uppercase tracking-[0.12em] text-transparent">
                {String(i + 1).padStart(2, "0")} — {s.label}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {s.detail}
              </p>
            </div>
            {i < stages.length - 1 ? (
              <div
                aria-hidden="true"
                className="mx-auto h-6 w-px bg-gradient-to-b from-accent to-accent-2 lg:mx-0 lg:mt-8 lg:h-px lg:w-6 lg:bg-gradient-to-r"
              />
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
