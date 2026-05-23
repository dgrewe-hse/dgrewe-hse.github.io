import { getAllSlugs, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dennis Grewe`,
    description: post.preview,
    openGraph: {
      title: post.title,
      description: post.preview,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <style>{`
        .post-body { color: #ccc; font-size: 15px; line-height: 1.8; }
        .post-body h2 { font-size: clamp(18px, 2vw, 24px); font-weight: 700; color: #fff; margin: 2.2em 0 0.6em; letter-spacing: -0.02em; }
        .post-body h3 { font-size: 16px; font-weight: 600; color: #fff; margin: 1.8em 0 0.5em; }
        .post-body p  { margin: 0 0 1.2em; }
        .post-body ul, .post-body ol { margin: 0 0 1.2em 1.4em; }
        .post-body li { margin-bottom: 0.4em; }
        .post-body strong { color: #fff; font-weight: 600; }
        .post-body a  { color: #39FF14; text-decoration: underline; text-underline-offset: 3px; }
        .post-body code { font-family: "SF Mono","Fira Mono","Consolas",monospace; font-size: 13px; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 1px 6px; }
        .post-body pre { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 20px 24px; overflow-x: auto; margin: 0 0 1.4em; }
        .post-body pre code { background: none; border: none; padding: 0; font-size: 13px; line-height: 1.7; }
        .post-body blockquote { border-left: 2px solid #39FF14; padding-left: 16px; margin: 0 0 1.2em; color: #888; }
        .post-body hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 2.5em 0; }
        .post-body img { display: block; max-width: 100%; height: auto; margin: 2em 0 0.6em; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #0a0a0a; }
        .post-body em { display: block; font-size: 13px; color: #666; font-style: normal; margin: 0 0 2em; line-height: 1.5; }
      `}</style>

      <main style={{ background: "#000", minHeight: "100vh", padding: "clamp(80px, 10vh, 120px) 40px 120px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          {/* Back link */}
          <a
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--muted)", marginBottom: "48px", transition: "color 0.15s" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </a>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ fontSize: "11px", color: "var(--accent)", border: "1px solid rgba(57,255,20,0.3)", borderRadius: "100px", padding: "2px 10px", letterSpacing: "0.04em" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>
            {post.title}
          </h1>

          {/* Date */}
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "56px" }}>
            {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "48px" }} />

          {/* Body */}
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </main>
    </>
  );
}
