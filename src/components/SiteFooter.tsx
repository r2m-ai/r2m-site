import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft py-10">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 text-[13px] text-muted">
        <span>© 2026 r2m.ai — reason · memory · improve</span>
        <span className="flex gap-6">
          <Link
            href="/careers"
            className="no-underline transition-colors hover:text-ink"
          >
            Careers
          </Link>
          <a
            href="https://github.com/r2m-ai"
            rel="noopener"
            className="no-underline transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@r2m.ai"
            className="no-underline transition-colors hover:text-ink"
          >
            contact@r2m.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
