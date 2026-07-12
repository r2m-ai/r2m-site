import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line-soft bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6 text-[14px]"
      >
        <Link href="/" className="font-semibold tracking-tight text-ink no-underline">
          r2m<span className="grad-text">.ai</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            About
          </Link>
          <a
            href="https://github.com/r2m-ai"
            rel="noopener"
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <Link
            href="/careers"
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            Careers
          </Link>
          <a
            href="mailto:contact@r2m.ai"
            className="hidden border border-line px-4 py-2 text-[13px] font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
