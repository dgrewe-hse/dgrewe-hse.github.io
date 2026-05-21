"use client";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/profgrewe/" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=5wKVtcMAAAAJ&hl=en" },
  { label: "GitHub", href: "https://github.com/dgrewe-hse" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 40px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            dgrewe-hse.github.io/
          </p>
          <nav style={{ display: "flex", gap: "24px" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "var(--muted)", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            paddingTop: "20px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ fontSize: "12px", color: "#333" }}>
            Inspired by others &amp; coded by Claude.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <p style={{ fontSize: "12px", color: "#333" }}>v1.2026.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
