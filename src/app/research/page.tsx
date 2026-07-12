import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research from r2m.ai — more to come.",
};

export default function Research() {
  return (
    <section className="mx-auto flex max-w-[1100px] flex-col items-center px-6 pb-40 pt-32 text-center sm:pt-44">
      <p className="rise rise-1 text-xs font-medium uppercase tracking-[0.3em] text-muted">
        Research
      </p>
      <h1 className="rise rise-2 mt-6 text-balance text-[clamp(34px,6vw,64px)] font-semibold leading-[1.08] tracking-tight">
        More <span className="grad-text">to come</span>
        <span className="text-muted">...</span>
      </h1>
      <p className="rise rise-3 mt-7 max-w-[52ch] text-balance leading-relaxed text-muted">
        We&apos;re preparing our first publications and open releases on
        long-horizon agents, memory, and behavioral control. Watch{" "}
        <a
          href="https://github.com/r2m-ai"
          rel="noopener"
          className="text-accent no-underline hover:underline"
        >
          github.com/r2m-ai
        </a>{" "}
        — or ask us directly at{" "}
        <a
          href="mailto:contact@r2m.ai"
          className="text-accent no-underline hover:underline"
        >
          contact@r2m.ai
        </a>
        .
      </p>
    </section>
  );
}
