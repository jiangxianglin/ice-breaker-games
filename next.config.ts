import { NextConfig } from "next";
import { NOINDEX_GAME_SLUGS } from "./src/lib/games/excluded-slugs";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  serverExternalPackages: ['enamdict'],
  async redirects() {
    return [
      {
        source: "/games/two-truths-and-one-lie",
        destination: "/games/two-truths-and-a-lie",
        permanent: true,
      },
      {
        source: "/games/name-game",
        destination: "/games/the-name-game",
        permanent: true,
      },
      {
        source: "/games/security-audit-probe-do-not-keep",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/games/runners-seerrunnerbuilder",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/games/desert-island",
        destination: "/games/desert-island-scenario",
        permanent: true,
      },
      {
        source: "/games/guess-who",
        destination: "/games/guess-who-personal-trivia",
        permanent: true,
      },
      {
        // 2026-09-23: merge the "lines" twin into the head-term page.
        // GSC showed /games/telephone-charades-lines indexed while
        // /games/telephone-charades stayed out — consolidate on the keyword owner.
        source: "/games/telephone-charades-lines",
        destination: "/games/telephone-charades",
        permanent: true,
      },
      {
        // 2026-09-24 AdSense Phase 1: twin of would-you-rather
        source: "/games/would-you-rather-training",
        destination: "/games/would-you-rather",
        permanent: true,
      },
      {
        source: "/icebreaker-games-for-adults",
        destination: "/blog/ice-breaker-games-for-adults",
        permanent: true,
      },
      {
        source: "/icebreaker-games-for-students",
        destination: "/blog/icebreaker-games-for-students",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // 为静态资源添加缓存和 noindex 头部
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      // 字体文件
      {
        source: "/:path*.woff",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/:path*.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/:path*.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/:path*.eot",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      // AdSense Cut set — X-Robots-Tag so crawlers/tools see noindex without parsing RSC meta
      ...[...NOINDEX_GAME_SLUGS].map((slug) => ({
        source: `/games/${slug}`,
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      })),
    ];
  },
} satisfies NextConfig;

export default nextConfig;
