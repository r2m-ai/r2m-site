import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mx-auto max-w-[26ch] text-balance text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mx-auto mt-14 max-w-[62ch] text-balance text-center text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mx-auto mt-4 max-w-[62ch] text-muted" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mx-auto mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-muted"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="border-b border-accent-dim text-accent no-underline transition-colors hover:border-accent"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
