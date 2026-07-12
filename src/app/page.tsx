import { DotMark } from "@/components/DotMark";

const pillars = [
  {
    tag: "Long-horizon agents",
    title: "Beyond the single turn",
    body: "Agents that stay coherent across hours, days, and weeks of work — pursuing goals that don't fit in one context window.",
  },
  {
    tag: "Memory systems",
    title: "Systems that remember",
    body: "Persistent memory that accumulates experience, recalls what matters, and turns an agent's history into its advantage.",
  },
  {
    tag: "Autonomous research",
    title: "Machines that investigate",
    body: "Systems that form hypotheses, run experiments, reflect on the results, and refine their own understanding over time.",
  },
  {
    tag: "Behavioral control",
    title: "Reliable by design",
    body: "Long-running autonomy demands predictability — systems that are steerable, auditable, and safe to trust with real work.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1060px] px-6 pb-22 pt-10 sm:pt-16">
        <div className="mb-9 sm:mb-12">
          <DotMark />
        </div>

        <p className="rise rise-1 mb-5 font-mono text-xs uppercase tracking-[0.22em] text-copper">
          Reason&ensp;·&ensp;Remember&ensp;·&ensp;Reflect&ensp;·&ensp;Improve
        </p>
        <h1 className="rise rise-2 max-w-[24ch] text-balance text-[clamp(28px,4.6vw,48px)] font-semibold leading-[1.14] tracking-tight">
          Long-horizon AI systems that reason, remember, reflect, and improve
          over time.
        </h1>
        <p className="rise rise-3 mt-6 max-w-[52ch] text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
          R2M is an independent research and product lab exploring long-horizon
          agents, memory systems, autonomous research, and reliable behavioral
          control.
        </p>
        <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3.5">
          <a
            href="mailto:hello@r2m.ai"
            className="inline-flex items-center gap-2.5 border border-copper bg-copper px-5.5 py-3 font-mono text-sm text-bg no-underline transition-colors hover:bg-transparent hover:text-copper"
          >
            hello@r2m.ai →
          </a>
          <a
            href="https://github.com/r2m-ai"
            rel="noopener"
            className="inline-flex items-center gap-2.5 border border-line px-5.5 py-3 font-mono text-sm text-ink no-underline transition-colors hover:border-copper hover:text-copper"
          >
            follow on github
          </a>
        </div>
      </section>

      <section className="border-t border-line-soft py-18">
        <div className="mx-auto max-w-[1060px] px-6">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            What we&apos;re exploring
          </p>
          <div className="grid grid-cols-1 gap-px border border-line-soft bg-line-soft sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.tag}
                className="bg-bg p-7 pb-9 transition-colors hover:bg-raised"
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-copper">
                  {p.tag}
                </p>
                <h2 className="mb-2.5 mt-3.5 text-xl font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft py-22">
        <div className="mx-auto max-w-[1060px] px-6">
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3.4vw,36px)] font-semibold tracking-tight">
            Working on long-horizon AI?
          </h2>
          <p className="mt-3.5 max-w-[48ch] text-muted">
            We&apos;d like to hear from you — research collaborations, early
            access, or just a good conversation about agents that last.
          </p>
          <div className="mt-9">
            <a
              href="mailto:hello@r2m.ai"
              className="inline-flex items-center gap-2.5 border border-copper bg-copper px-5.5 py-3 font-mono text-sm text-bg no-underline transition-colors hover:bg-transparent hover:text-copper"
            >
              get in touch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
