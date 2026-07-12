import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Build with us",
  description:
    "Join r2m.ai — we're hiring researchers and engineers to build long-horizon AI systems.",
};

const areas = [
  {
    title: "Research",
    body: "Push on the open problems: long-horizon coherence, persistent memory, self-improvement, and reliable behavioral control.",
  },
  {
    title: "Engineering",
    body: "Turn research into systems that run for days without falling over — infrastructure, evaluation, and the products on top.",
  },
  {
    title: "Product",
    body: "Shape how people work with agents that remember them. Small team, real ownership, direct line from idea to release.",
  },
];

const values = [
  "You've built something real — a system, a paper, a product — and can walk us through every decision in it.",
  "You're drawn to problems that don't resolve in a week, and you know how to make steady progress on them anyway.",
  "You'd rather own a hard problem end-to-end than a small piece of an easy one.",
];

export default function Careers() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-6 pb-20 pt-24 text-center sm:pt-32">
          <p className="rise rise-1 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Careers
          </p>
          <h1 className="rise rise-2 mx-auto mt-6 max-w-[16ch] text-balance text-[clamp(34px,6vw,64px)] font-semibold leading-[1.08] tracking-tight">
            Build <span className="grad-text">with us.</span>
          </h1>
          <p className="rise rise-3 mx-auto mt-7 max-w-[56ch] text-balance text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
            r2m.ai is building AI systems that reason, remember, reflect, and
            improve over time. It&apos;s the most exciting moment there has
            ever been to work on this — and the field is just getting started.
          </p>
        </div>
      </section>

      <section className="border-t border-line-soft py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Where you&apos;d work
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal
                key={a.title}
                className={i === 1 ? "sm:[transition-delay:120ms]" : i === 2 ? "sm:[transition-delay:240ms]" : ""}
              >
                <div className="card h-full p-8">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              What we look for
            </p>
            <ul className="mt-10 space-y-6">
              {values.map((v) => (
                <li
                  key={v}
                  className="border-l-2 border-accent-dim pl-6 leading-relaxed text-muted"
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line-soft py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[26ch] text-balance text-[clamp(24px,3.4vw,36px)] font-semibold tracking-tight">
              If these problems keep you up at night, we should talk.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-balance leading-relaxed text-muted">
              No forms, no pipelines — write to us directly and tell us what
              you&apos;ve built. We read everything.
            </p>
            <div className="mt-10">
              <a
                href="mailto:careers@r2m.ai"
                className="btn-grad inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-medium no-underline"
              >
                careers@r2m.ai →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
