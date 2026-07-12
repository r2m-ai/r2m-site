# r2m-site

Source for [r2m.ai](https://r2m.ai) — R2M is an independent research and
product lab exploring long-horizon agents, memory systems, autonomous
research, and reliable behavioral control.

## Stack

- **Framework** — Next.js (App Router) + TypeScript + Tailwind CSS
- **Content** — MDX files (see `src/app/about/page.mdx`)
- **Hosting** — Vercel; push / merge to `main` triggers a production deploy

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

## Structure

```
src/
  app/
    page.tsx          # landing page
    about/page.mdx    # MDX content page
    layout.tsx        # shared shell, metadata, fonts
    globals.css       # design tokens (copper-on-charcoal palette)
  components/
    DotMark.tsx       # canvas dot-matrix wordmark
    SiteHeader.tsx
    SiteFooter.tsx
  mdx-components.tsx  # global MDX element styles
```
