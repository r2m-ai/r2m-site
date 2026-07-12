import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="max-w-[24ch] text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="mt-12 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mt-4 max-w-[62ch] text-muted" {...props} />,
  ul: (props) => (
    <ul
      className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-muted"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="border-b border-copper-dim text-copper no-underline transition-colors hover:border-copper"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
