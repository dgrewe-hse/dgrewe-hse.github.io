"use client";

const projects = [
  {
    title: "itMovES — teleoperation stack",
    desc: "Lab repositories for tele-operated driving on the 1:10 itMovES platform (Gen 4.2): hardware abstraction layer, remote center and validation components in Rust, VSS models, plus overview docs. Maintained under HSE-DNS.",
    tag: "Open source",
    link: "https://github.com/HSE-DNS/teleop-docu",
  },
  {
    title: "Eclipse OpenSOVD",
    desc: "OpenSOVD server, client, and gateway — HSE-DNS fork of the Eclipse OpenSOVD reference implementation for software-defined vehicle diagnostics and services.",
    tag: "Open source",
    link: "https://github.com/HSE-DNS/opensovd-server",
  },
];

// Tag icons as inline SVG paths
const icons: Record<string, React.ReactNode> = {
  "Open source": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 22v-4a4 4 0 00-4-4H6a4 4 0 00-4 4v4M9 11a4 4 0 100-8 4 4 0 000 8z"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4v6M16 7h6"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Projects() {
  return (
    <section style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={headingStyle}>
          Some projects<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                padding: "20px 24px",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                transition: "border-color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(57,255,20,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")
              }
            >
              {/* Icon thumbnail */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  background: "rgba(57,255,20,0.05)",
                  border: "1px solid rgba(57,255,20,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icons[p.tag]}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h4>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </div>

              {/* Tag + Arrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--accent)",
                    border: "1px solid rgba(57,255,20,0.3)",
                    borderRadius: "100px",
                    padding: "3px 10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.tag}
                </span>
                <div style={{ color: "var(--muted)" }}>
                  <ArrowIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
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
