"use client";

const awards = [
  {
    org: "XXX",
    title: "XX Award",
    desc: "XX for XXX",
    year: "2026",
  },
  {
    org: "XXX",
    title: "XX Prize",
    desc: "XX for XXX",
    year: "2026",
  },
];

export default function Awards() {
  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={headingStyle}>
          Awards &amp; grants<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
          className="awards-grid"
        >
          {awards.map((a, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                border: "1px solid var(--border)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "180px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {a.org}
              </p>
              <div>
                <p style={{ fontSize: "13px", color: "#fff", fontWeight: 600, marginBottom: "6px" }}>
                  {a.title}
                </p>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5, marginBottom: "8px" }}>
                  {a.desc}
                </p>
                <p style={{ fontSize: "11px", color: "var(--muted)" }}>{a.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .awards-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
  marginBottom: "32px",
};
