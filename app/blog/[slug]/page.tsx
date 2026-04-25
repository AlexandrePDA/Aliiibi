import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticle,
  getAllArticles,
  type Block,
  type InlineContent,
} from "@/lib/articles";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `https://aliiibi.app/blog/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      url: `https://aliiibi.app/blog/${slug}`,
    },
  };
}

function renderInline(segments: InlineContent[]) {
  return segments.map((seg, j) => {
    if (typeof seg === "string") return <span key={j}>{seg}</span>;
    if (seg.external) {
      return (
        <a
          key={j}
          href={seg.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-opacity hover:opacity-70"
          style={{ color: "#9D9FE5" }}
        >
          {seg.text}
        </a>
      );
    }
    return (
      <Link
        key={j}
        href={seg.href}
        className="underline underline-offset-2 transition-opacity hover:opacity-70"
        style={{ color: "#9D9FE5" }}
      >
        {seg.text}
      </Link>
    );
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="text-xl sm:text-2xl font-black mt-10 mb-4"
          style={{ color: "#9D9FE5" }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={i}
          className="text-sm sm:text-base leading-relaxed text-justify mb-4"
          style={{ color: "#C4C4C9" }}
        >
          {block.text}
        </p>
      );
    case "p-rich":
      return (
        <p
          key={i}
          className="text-sm sm:text-base leading-relaxed text-justify mb-4"
          style={{ color: "#C4C4C9" }}
        >
          {renderInline(block.segments)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="flex flex-col gap-3 mb-6">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="flex gap-3 text-sm sm:text-base leading-relaxed text-justify"
              style={{ color: "#C4C4C9" }}
            >
              <span style={{ color: "#9D9FE5", flexShrink: 0, marginTop: 2 }}>
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse" style={{ color: "#C4C4C9" }}>
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th
                    key={j}
                    className="text-left py-2 px-3 text-xs font-bold uppercase tracking-widest"
                    style={{
                      borderBottom: "1px solid rgba(157,159,229,.3)",
                      color: "#9D9FE5",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                  {row.map((cell, k) => (
                    <td
                      key={k}
                      className="py-2.5 px-3 text-sm leading-snug"
                      style={{
                        fontWeight: k === 0 ? 600 : 400,
                        color: k === 0 ? "#fff" : "#C4C4C9",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div key={i} className="flex flex-col gap-4 mb-6">
          {block.items.map((card, j) => (
            <div
              key={j}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,.03)",
                border: `1px solid ${card.color}30`,
                borderLeft: `3px solid ${card.color}`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{card.emoji}</span>
                  <span
                    className="text-sm font-black tracking-widest"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </span>
                </div>
                {card.points && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${card.color}20`,
                      color: card.color,
                    }}
                  >
                    {card.points}
                  </span>
                )}
              </div>
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: "#C4C4C9" }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      );
  }
}

const TAG_COLORS: Record<string, string> = {
  Guide: "#72DDD4",
  Stratégie: "#9D9FE5",
  Comparatif: "#FFAB76",
  Référence: "#FF9CC0",
  Présentation: "#7BC47B",
  "Mode Infiltré": "#A89EFF",
  Culture: "#FFD700",
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedArticles = article.related
    .map((s) => getArticle(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getArticle>>[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "ALIIIBI",
      url: "https://aliiibi.app",
    },
    publisher: {
      "@type": "Organization",
      name: "ALIIIBI",
      url: "https://aliiibi.app",
    },
    url: `https://aliiibi.app/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sm transition-colors hover:text-white mb-10 inline-block"
            style={{ color: "#8E8E93" }}
          >
            ← Blog
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
                style={{
                  background: "rgba(157,159,229,.12)",
                  color: "#9D9FE5",
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
                · {article.readTime} de lecture
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              {article.title}
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-justify font-medium"
              style={{
                color: "#C4C4C9",
                borderLeft: "3px solid rgba(157,159,229,.4)",
                paddingLeft: "1rem",
              }}
            >
              {article.intro}
            </p>
          </header>

          {/* Separator */}
          <div
            aria-hidden="true"
            style={{
              height: 1,
              background:
                "linear-gradient(to right, rgba(157,159,229,.2), transparent)",
              marginBottom: "2.5rem",
            }}
          />

          {/* Article body */}
          <div className="article-body">
            {article.blocks.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Voir aussi */}
          {relatedArticles.length > 0 && (
            <div
              className="mt-12 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "#8E8E93" }}
              >
                Voir aussi
              </p>
              <div className="flex flex-col gap-3">
                {relatedArticles.map((rel) => {
                  const tagColor = TAG_COLORS[rel.tag] ?? "#9D9FE5";
                  return (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex items-center justify-between gap-4 py-3 transition-opacity hover:opacity-80"
                      style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0"
                          style={{
                            background: `${tagColor}18`,
                            color: tagColor,
                          }}
                        >
                          {rel.tag}
                        </span>
                        <span className="text-sm font-medium text-white truncate">
                          {rel.title}
                        </span>
                      </div>
                      <span
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                        style={{ color: "#9D9FE5" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div
            className="mt-12 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
          >
            <h2
              className="text-lg font-black mb-6 uppercase tracking-widest"
              style={{ color: "#9D9FE5" }}
            >
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-6">
              {article.faq.map((item, i) => (
                <div key={i}>
                  <p className="font-bold text-white mb-1.5">{item.q}</p>
                  <p
                    className="text-sm leading-relaxed text-justify"
                    style={{ color: "#C4C4C9" }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-12 pt-8 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
          >
            <p className="text-sm mb-4" style={{ color: "#8E8E93" }}>
              Prêt à jouer ?
            </p>
            <a
              href="https://apps.apple.com/fr/app/aliiibi-jeu-dambiance/id6761992576?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-black text-sm transition-opacity hover:opacity-80"
              style={{ background: "#9D9FE5", color: "#111" }}
            >
              Télécharger Aliiibi — Gratuit
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
