export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft py-8 pb-10">
      <div className="mx-auto flex max-w-[1060px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 font-mono text-[12.5px] text-muted">
        <span>© 2026 r2m.ai</span>
        <span>
          <a
            href="https://github.com/r2m-ai"
            rel="noopener"
            className="no-underline transition-colors hover:text-copper"
          >
            github
          </a>
          {" · "}
          <a
            href="mailto:hello@r2m.ai"
            className="no-underline transition-colors hover:text-copper"
          >
            hello@r2m.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
