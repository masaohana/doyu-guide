import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = "";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath,
      assetPrefix: basePath,
      images: {
        unoptimized: true,
      },
      typescript: {
        tsconfigPath: "./tsconfig.pages.json",
      },
    }
  : {};

export default nextConfig;
