import nextConfig from "../next.config";
import { GAME_SLUGS } from "../src/data/game-slugs";
import { EXCLUDED_GAME_SLUGS } from "../src/lib/games/excluded-slugs";

async function main() {
  const r = await nextConfig.redirects!();
  const hit = r.find((x) => x.source === "/games/telephone-charades-lines");
  console.log("1) redirect:", hit ? `${hit.source} -> ${hit.destination} (permanent=${hit.permanent})` : "MISSING");
  const slugs = new Set<string>([...GAME_SLUGS, "telephone-charades-lines"]);
  const net = [...slugs].filter((s) => !EXCLUDED_GAME_SLUGS.has(s));
  console.log("2) GAME_SLUGS 仍含 lines:", GAME_SLUGS.includes("telephone-charades-lines"));
  console.log("3) 会进 sitemap 的 slug 仍含 lines:", net.includes("telephone-charades-lines"));
  console.log("   sitemap slug 总数:", net.length, "| 含 telephone-charades:", net.includes("telephone-charades"));
  console.log("4) EXCLUDED:", [...EXCLUDED_GAME_SLUGS].join(", "));
  console.log("5) 全部 redirect:", r.map((x) => `${x.source}→${x.destination}`).join("  |  "));
}
main();
