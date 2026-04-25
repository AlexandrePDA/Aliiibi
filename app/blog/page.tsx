import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Stratégies, guides et culture musicale | ALIIIBI",
  description:
    "Guides pour maîtriser Aliiibi, stratégies de bluff, comparatifs de jeux musicaux et psychologie du blind test. Tout ce qu'il faut savoir pour écraser vos amis.",
  alternates: {
    canonical: "https://aliiibi.app/blog",
  },
};

const TAG_COLORS: Record<string, string> = {
  Guide: "#72DDD4",
  Stratégie: "#9D9FE5",
  Comparatif: "#FFAB76",
  Référence: "#FF9CC0",
  Présentation: "#7BC47B",
  "Mode Infiltré": "#A89EFF",
  Culture: "#FFD700",
};

export default function BlogIndex() {
  const articles = getAllArticles();

  return (
    <>
      <main className="min-h-screen px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="mb-16">
            <Link
              href="/"
              className="text-sm transition-colors hover:text-white mb-8 inline-block"
              style={{ color: "#8E8E93" }}
            >
              ← Accueil
            </Link>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ color: "#9D9FE5" }}
            >
              Blog
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "#C4C4C9" }}
            >
              Stratégies, guides et culture musicale — tout ce qu&apos;il faut
              savoir pour maîtriser Aliiibi et écraser vos amis.
            </p>
          </header>

          {/* Article list */}
          <div className="flex flex-col gap-0">
            {articles.map((article, i) => {
              const tagColor = TAG_COLORS[article.tag] ?? "#9D9FE5";
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block py-8 transition-colors"
                  style={{
                    borderTop:
                      i === 0
                        ? "1px solid rgba(255,255,255,.08)"
                        : "1px solid rgba(255,255,255,.08)",
                    borderBottom:
                      i === articles.length - 1
                        ? "1px solid rgba(255,255,255,.08)"
                        : "none",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Tag + date */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                          style={{
                            background: `${tagColor}18`,
                            color: tagColor,
                            border: `1px solid ${tagColor}30`,
                          }}
                        >
                          {article.tag}
                        </span>
                        <span className="text-xs" style={{ color: "#8E8E93" }}>
                          {new Date(article.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          · {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="text-lg sm:text-xl font-black text-white leading-snug mb-2 group-hover:opacity-80 transition-opacity"
                      >
                        {article.title}
                      </h2>

                      {/* Intro */}
                      <p
                        className="text-sm leading-relaxed line-clamp-2"
                        style={{ color: "#8E8E93" }}
                      >
                        {article.intro}
                      </p>
                    </div>

                    {/* Arrow */}
                    <span
                      className="text-lg shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "#9D9FE5" }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
