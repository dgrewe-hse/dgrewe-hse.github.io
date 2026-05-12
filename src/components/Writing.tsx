"use client";

import { useState } from "react";
import { writingItems, WritingType } from "@/content/writing";

const TABS: { label: string; value: WritingType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Papers", value: "paper" },
  { label: "Blog", value: "blog" },
  { label: "Talks", value: "talk" },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Writing() {
  const [active, setActive] = useState<WritingType | "all">("all");

  const items = active === "all"
    ? writingItems
    : writingItems.filter((w) => w.type === active);

  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={headingStyle}>
            Writing<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--muted)", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
          >
            Google Scholar ↗
          </a>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              style={{
                padding: "8px 18px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.03em",
                border: "1px solid var(--border)",
                background: active === tab.value ? "var(--accent)" : "var(--bg-card)",
                color: active === tab.value ? "#000" : "var(--muted)",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
          className="writing-grid"
        >
          {items.map((item, i) =>
            item.isPlaceholder ? (
              <div
                key={i}
                style={{
                  border: "1px dashed rgba(255,255,255,0.12)",
                  background: "transparent",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                }}
              >
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    border: "1px solid rgba(57,255,20,0.3)",
                    borderRadius: "100px",
                    padding: "2px 8px",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                  }}>
                    {item.type}
                  </span>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.4)", lineHeight: 1.4, marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", lineHeight: 1.6 }}>
                    {item.preview}
                  </p>
                </div>
              </div>
            ) : (
              <a
                key={i}
                href={item.slug ? `/writing/${item.slug}` : item.link}
                {...(!item.slug && { target: "_blank", rel: "noopener noreferrer" })}

                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")}
              >
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    border: "1px solid rgba(57,255,20,0.3)",
                    borderRadius: "100px",
                    padding: "2px 8px",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                  }}>
                    {item.venue ?? item.type}
                  </span>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", lineHeight: 1.4, letterSpacing: "-0.01em", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>
                    {item.preview}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>{item.date}</span>
                  <div style={{ color: "var(--muted)" }}><ArrowIcon /></div>
                </div>
              </a>
            )
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const headingStyle: React.CSSProperties = {
  fontSize: "clamp(28px, 3.5vw, 48px)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  color: "#fff",
  marginBottom: 0,
};
