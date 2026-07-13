import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/research/market-loop",
        destination: "/research/alpha-agent",
        permanent: true,
      },
      {
        source: "/research/alpha-loop",
        destination: "/research/alpha-agent",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
