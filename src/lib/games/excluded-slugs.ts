/**
 * Game slug indexing / library policy for AdSense quality + sitemap hygiene.
 *
 * - EXCLUDED_GAME_SLUGS: dead / twin URLs — 301 away, never list, never feature
 * - NOINDEX_GAME_SLUGS: live pages kept for bookmarks, but removed from sitemap
 *   and marked noindex (seasonal pack + zero-signal long tail). Re-open seasonal
 *   in November by removing those slugs from NOINDEX_GAME_SLUGS.
 */

/** Dirty / probe / duplicate — never feature, never sitemap (usually 301'd). */
export const EXCLUDED_GAME_SLUGS = new Set([
  "security-audit-probe-do-not-keep",
  "runners-seerrunnerbuilder",
  "name-game",
  "two-truths-and-one-lie",
  "desert-island",
  "guess-who", // 301 → guess-who-personal-trivia
  "telephone-charades-lines", // 301 → telephone-charades
  "would-you-rather-training", // 301 → would-you-rather (twin)
]);

/**
 * AdSense Phase 1 Cut: seasonal + zero-GSC long tail.
 * Pages remain reachable; robots noindex + omitted from sitemap + hidden from /games grid.
 */
export const NOINDEX_GAME_SLUGS = new Set([
  // Zero-signal / thin-history cuts (2026-09-24 GSC+GA4)
  "bang",
  "if-then",
  "category-mixer",
  "paper-bag-pickup",
  "remote-change-3-things",
  "team-superpower-collage",
  "motion-name-game",
  "virtual-background-story",
  "one-word-at-a-time",
  "news-headline-warm-up",
  // Wave 2 — not on Keep A/B list (2026-09-24 AdSense reduce-volume)
  "skittles-sharing",
  "telephone-charades",
  "guess-who-personal-trivia",
  "skribbl-pictionary-online",
  "take-a-picture-of-your-shoes",
  "the-check-in",
  "the-question-web",
  "topics-tables",
  "what-are-you-bringing-to-the-meeting",
  "desert-island-scenario",
  "passions-tic-tac-toe",
  "show-and-tell",
  "crossword-names",
  "guess-that-team-member",
  "mystery-envelope",
  "invention-pitch",
  "pterodactyl",
  "10-things-in-common",
  "reception-line",
  "sole-mate",
  // story-swap removed 2026-09-26: A-class page (§17.4) — keep indexable + in sitemap
  "two-truths-and-a-dream",
  "appreciation-circle",
  "year-of-the-coin",
  "unique-and-shared",
  "count-up",
  "wheel-of-fortune-introductions",
  "where-do-we-come-from-what-is-famous",
  "fantasy-vacation",
  "speed-dating-icebreaker",
  "near-and-far",
  "crazy-handshake",
  "helium-stick",
  "group-map",
  // Seasonal Christmas / holiday pack — re-enable ~Nov
  "christmas-connection",
  "christmas-pick-a-side",
  "christmas-roll-poll",
  "the-great-christmas-candy-pass",
  "guess-the-gift-by-sound",
  "share-a-favorite-holiday-memory",
  "whats-on-your-phone-christmas-edition",
  "ornament-guess",
  "holiday-bingo",
  "holiday-fortunes",
  "two-truths-and-a-tinsel",
  "message-under-a-plate",
  "photo-booth-prompt-jar",
  "around-the-world-traditions",
  "sing-off",
]);

export function isExcludedGameSlug(slug: string | null | undefined): boolean {
  if (!slug) return false;
  return EXCLUDED_GAME_SLUGS.has(slug);
}

export function isNoindexGameSlug(slug: string | null | undefined): boolean {
  if (!slug) return false;
  return NOINDEX_GAME_SLUGS.has(slug);
}

/** Omit from sitemap (excluded twins + intentional noindex cuts). */
export function isSitemapExcludedGameSlug(slug: string | null | undefined): boolean {
  if (!slug) return false;
  return EXCLUDED_GAME_SLUGS.has(slug) || NOINDEX_GAME_SLUGS.has(slug);
}

/** Hide from /games library grid (same as sitemap policy for Cut set). */
export function isLibraryHiddenGameSlug(slug: string | null | undefined): boolean {
  return isSitemapExcludedGameSlug(slug);
}
