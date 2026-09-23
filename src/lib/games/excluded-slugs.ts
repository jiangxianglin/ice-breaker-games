/**
 * Dirty / probe / duplicate game slugs — never feature, never list in sitemap
 * even if a row still exists in Supabase.
 */
export const EXCLUDED_GAME_SLUGS = new Set([
  "security-audit-probe-do-not-keep",
  "runners-seerrunnerbuilder",
  "name-game",
  "two-truths-and-one-lie",
  "desert-island",
  "guess-who", // 301 → guess-who-personal-trivia (canonical screened version)
  "telephone-charades-lines", // 301 → telephone-charades (head-term page owns the keyword; twin was the indexed one)
]);

export function isExcludedGameSlug(slug: string | null | undefined): boolean {
  if (!slug) return false;
  return EXCLUDED_GAME_SLUGS.has(slug);
}
