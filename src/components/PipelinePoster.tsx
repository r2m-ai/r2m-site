type Stage = {
  label: string;
  detail: string;
};

/**
 * Brand-styled pipeline poster: fixed-width stage cards on a horizontal
 * snap-scrolling strip, joined by gradient connectors. Cards never shrink,
 * so long pipelines scroll instead of clipping.
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
    <figure className="card my-10 p-5 sm:p-8">
      <figcaption className="mb-7 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
          How it works
        </p>
        <p className="mt-3 text-lg font-semibold tracking-tight">{title}</p>
        {subtitle ? (
          <p className="mt-2 text-sm text-muted">{subtitle}</p>
        ) : null}
      </figcaption>

      <div className="poster-strip">
        {stages.map((s, i) => (
          <div key={s.label} className="flex shrink-0 snap-start">
            <div className="w-[224px] shrink-0 border border-line-soft bg-white/[0.02] p-4">
              <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-[13px] font-semibold uppercase tracking-[0.1em] text-transparent">
                {String(i + 1).padStart(2, "0")} — {s.label}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {s.detail}
              </p>
            </div>
            {i < stages.length - 1 ? (
              <div
                aria-hidden="true"
                className="mt-8 h-px w-7 shrink-0 bg-gradient-to-r from-accent to-accent-2"
              />
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-muted/60">
        scroll →
      </p>
    </figure>
  );
}
