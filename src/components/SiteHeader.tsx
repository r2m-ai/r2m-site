import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line-soft bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-15 max-w-[1060px] items-center justify-between px-6 font-mono text-[13px] tracking-wide"
      >
        <Link href="/" className="text-ink no-underline">
          r2m<b className="font-semibold text-copper">.ai</b>
        </Link>
        <div className="flex gap-7">
          <Link
            href="/about"
            className="text-muted transition-colors hover:text-copper"
          >
            about
          </Link>
          <a
            href="https://github.com/r2m-ai"
            rel="noopener"
            className="text-muted transition-colors hover:text-copper"
          >
            github
          </a>
          <a
            href="mailto:careers@r2m.ai"
            className="text-muted transition-colors hover:text-copper"
          >
            careers
          </a>
          <a
            href="mailto:contact@r2m.ai"
            className="text-muted transition-colors hover:text-copper"
          >
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}
