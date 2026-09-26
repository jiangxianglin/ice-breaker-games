import { blogPosts } from "../src/data/blog";

const problems: string[] = [];
const seen = new Set<string>();
blogPosts.forEach((p, i) => {
  for (const f of ["slug", "title", "excerpt", "date", "author", "content"] as const) {
    const v = (p as never as Record<string, unknown>)[f];
    if (typeof v !== "string" || !v.trim()) problems.push(`blogPosts[${i}] 缺 ${f}`);
  }
  if (p.title && p.title.length > 60) problems.push(`blogPosts[${i}] title ${p.title.length} 字 > 60: ${p.title}`);
  if (p.excerpt && p.excerpt.length > 160) problems.push(`blogPosts[${i}] excerpt ${p.excerpt.length} 字 > 160`);
  if (p.slug && seen.has(p.slug)) problems.push(`slug 重复: ${p.slug}`);
  if (p.slug) seen.add(p.slug);
});

console.log("blogPosts 条数:", blogPosts.length);
console.log("slugs:", blogPosts.map((p) => p.slug).join(", "));
console.log(problems.length ? "❌ 问题:\n" + problems.join("\n") : "✅ 全部条目字段齐全、slug 唯一、title/excerpt 在限内");
