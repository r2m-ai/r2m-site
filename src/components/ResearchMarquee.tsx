import Link from "next/link";

const projects = [
  {
    slug: "scholar-loop",
    tag: "Autonomous research",
    title: "ScholarLoop",
    dek: "An autonomous research loop that can't grade its own homework — frozen scoring, verified numbers, self-rejecting papers.",
  },
  {
    slug: "alpha-agent",
    tag: "Agents in markets",
    title: "AlphaAgent",
    dek: "ML price models, 101-Alphas factors, options strategies, and guarded live execution — up 53.8% in live paper trading vs the S&P's 13.5%.",
  },
  {
    slug: "latent-feed",
    tag: "Signal & memory",
    title: "LatentFeed",
    dek: "Six sources, one briefing — the day's AI research collected, distilled, and delivered before you wake up.",
  },
];

function Card({ p }: { p: (typeof projects)[number] }) {
  return (
    <Link
      href={`/research/${p.slug}`}
      className="mr-4 block w-[360px] shrink-0 no-underline"
    >
      <article className="card h-full p-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {p.tag}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
          {p.title}
        </h3>
        <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
          {p.dek}
        </p>
        <p className="mt-4 text-sm font-medium text-accent">read more →</p>
      </article>
    </Link>
  );
}

/** Auto-scrolling strip of research projects; pauses on hover. */
export function ResearchMarquee() {
  return (
    <div className="marquee" aria-label="Research projects">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {projects.map((p) => (
              <Card key={`${copy}-${p.slug}`} p={p} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
