import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Projects from r2m.ai — autonomous research loops, signal pipelines, and market agents.",
};

const posts = [
  {
    slug: "scholar-loop",
    tag: "Autonomous research",
    title: "ScholarLoop",
    dek: "An autonomous research loop that can't grade its own homework — literature-grounded hypotheses, real experiments, frozen scoring, and papers that cite only verified numbers.",
    date: "July 2026",
  },
  {
    slug: "alpha-agent",
    tag: "Agents in markets",
    title: "AlphaAgent",
    dek: "A multi-agent platform for markets — ML price models, academic alpha factors, options strategies, and guarded live execution, fused into one auditable decision loop.",
    date: "July 2026",
  },
  {
    slug: "latent-feed",
    tag: "Signal & memory",
    title: "LatentFeed",
    dek: "A daily research briefing distilled from the AI firehose — six sources, deduplicated, summarized, and delivered to your notes before you wake up.",
    date: "July 2026",
  },
];

export default function Research() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-32 pt-20 sm:pt-24">
      <p className="rise rise-1 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
        Research
      </p>
      <h1 className="rise rise-2 mx-auto mt-6 max-w-[22ch] text-balance text-center text-[clamp(30px,5vw,52px)] font-semibold leading-[1.1] tracking-tight">
        What we&apos;re <span className="grad-text">building</span>
      </h1>
      <p className="rise rise-3 mx-auto mt-6 max-w-[54ch] text-balance text-center leading-relaxed text-muted">
        Systems we&apos;ve built while exploring long-horizon agents, memory,
        and autonomous research — each one a working loop, not a demo.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-4">
        {posts.map((p, i) => (
          <Reveal key={p.slug} className={i ? `[transition-delay:${i * 100}ms]` : ""}>
            <Link href={`/research/${p.slug}`} className="block no-underline">
              <article className="card flex flex-col gap-3 p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {p.tag}
                  </p>
                  <p className="text-xs text-muted">{p.date}</p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h2>
                <p className="max-w-[75ch] text-[15px] leading-relaxed text-muted">
                  {p.dek}
                </p>
                <p className="mt-1 text-sm font-medium text-accent">
                  Read more →
                </p>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="mt-20 text-center text-sm text-muted">
        More to come — publications and open releases are on the way.
      </p>
    </section>
  );
}
