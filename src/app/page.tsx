import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { HeroField } from "@/components/HeroField";
import { Reveal } from "@/components/Reveal";

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

const companies = [
  { name: "Google", src: "/logos/google.svg", h: "h-[26px]" },
  { name: "Meta", src: "/logos/meta.svg", h: "h-[21px]" },
  { name: "Google DeepMind", src: "/logos/deepmind.svg", h: "h-[19px]" },
  { name: "TikTok", src: "/logos/tiktok.svg", h: "h-[22px]" },
  { name: "Morgan Stanley", src: "/logos/morganstanley.svg", h: "h-[24px]" },
  { name: "Two Sigma", src: "/logos/twosigma.svg", h: "h-[20px]" },
  { name: "Citadel", src: "/logos/citadel.svg", h: "h-[17px]" },
];

const universities = [
  { name: "Harvard University", src: "/logos/harvard.svg", h: "h-[22px]" },
  { name: "Carnegie Mellon University", src: "/logos/cmu.svg", h: "h-[17px]" },
  { name: "Cornell University", src: "/logos/cornell.svg", h: "h-[18px]" },
  { name: "Stanford University", src: "/logos/stanford.svg", h: "h-[21px]" },
  { name: "University of Waterloo", src: "/logos/waterloo.svg", h: "h-[21px]" },
  { name: "Georgia Tech", src: "/logos/gatech.svg", h: "h-[22px]" },
];

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden">
        <HeroField />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-6 pb-28 pt-20 text-center sm:pt-28">
          <div className="rise rise-1 w-full max-w-[640px]">
            <Image
              src={logo}
              alt="r2m.ai — Reason · Memory · Improve"
              priority
              className="h-auto w-full [transform:scaleX(1.12)]"
            />
          </div>
          <h1 className="rise rise-2 mt-14 max-w-[26ch] text-balance text-[clamp(28px,4.4vw,50px)] font-semibold leading-[1.14] tracking-tight">
            Long-horizon AI systems that{" "}
            <span className="grad-text">reason, remember, reflect,</span> and
            improve over time.
          </h1>
          <p className="rise rise-3 mt-7 max-w-[58ch] text-balance text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
            r2m.ai is an independent research and product lab exploring
            long-horizon agents, memory systems, autonomous research, and
            reliable behavioral control.
          </p>
          <div className="rise rise-4 mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@r2m.ai"
              className="btn-grad inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-medium no-underline"
            >
              contact@r2m.ai →
            </a>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2.5 border border-line px-7 py-3.5 text-[15px] font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
            >
              build with us
            </Link>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="border-t border-line-soft py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <p className="mb-12 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              What we&apos;re exploring
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} className={i % 2 ? "sm:[transition-delay:120ms]" : ""}>
                <div className="card h-full p-8 pb-10">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {p.tag}
                  </p>
                  <h2 className="mb-3 mt-4 text-xl font-semibold tracking-tight">
                    {p.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="border-t border-line-soft py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Our team
            </p>
            <h2 className="mx-auto mt-6 max-w-[30ch] text-balance text-[clamp(22px,3vw,32px)] font-semibold tracking-tight">
              Built by researchers and engineers from
            </h2>
          </Reveal>
          <Reveal className="[transition-delay:150ms]">
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {companies.map((c) => (
                <Image
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={32}
                  unoptimized
                  className={`${c.h} logo-dim w-auto`}
                />
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {universities.map((c) => (
                <Image
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={32}
                  unoptimized
                  className={`${c.h} logo-dim w-auto`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* build with us */}
      <section className="border-t border-line-soft py-28">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[24ch] text-balance text-[clamp(26px,3.6vw,40px)] font-semibold tracking-tight">
              The most interesting problems in AI are{" "}
              <span className="grad-text">just beginning.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-balance leading-relaxed text-muted">
              We&apos;re a small team working on agents that last — and
              we&apos;re looking for people who want to build them with us.
            </p>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/careers"
                className="btn-grad inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-medium no-underline"
              >
                build with us →
              </Link>
              <a
                href="https://github.com/r2m-ai"
                rel="noopener"
                className="inline-flex items-center gap-2.5 border border-line px-7 py-3.5 text-[15px] font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
              >
                follow on github
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
