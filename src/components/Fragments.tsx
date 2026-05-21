"use client";

const courses = [
  { code: "IT 105 1015", name: "Programming in C", level: "B.Sc.", semester: "Esslingen" },
  {
    code: "IT 105 2004",
    name: "Operating Systems",
    level: "B.Sc.",
    semester: "with Prof. Dr. Rainer Keller",
  },
  { code: "SWB 105 6043", name: "Software Quality and Testing", level: "B.Sc.", semester: "Esslingen" },
  {
    code: "AI W03",
    name: "Mobile Communication",
    level: "M.Sc.",
    semester: "with Prof. Dr. Dominik Schoop",
  },
];

const milestones = [
  { value: "10+ years", label: "researching & teaching" },
  { value: "Software Testing", label: "lecture module (English)" },
  { value: "30+ publications", label: "peer-reviewed research" },
  { value: "4 modules", label: "taught at HSE Esslingen" },
];

export default function Fragments() {
  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={headingStyle}>
          Fragments of me<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        {/* Top row: milestone list + two panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
            marginBottom: "2px",
          }}
          className="fragments-top"
        >
          {/* Milestone list */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {milestones.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom:
                    i < milestones.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: "1px solid var(--muted)",
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "2px",
                    }}
                  >
                    {m.value}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                    {m.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* "I started as a researcher" panel */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "280px",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="var(--muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              I started as an engineer
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)" }}>
              But I&apos;ve built enough software, now it&apos;s time to teach it.
            </p>
          </div>

          {/* Terminal / skills panel */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "#0a0a0a",
              padding: "24px",
              fontFamily:
                '"SF Mono","Fira Mono","Cascadia Code","Consolas",monospace',
              fontSize: "12px",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span
                  key={c}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: c,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
            <p style={{ color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>dennis</span>
              <span style={{ color: "#fff" }}>@hse</span>:~${" "}
              <span style={{ color: "#fff" }}>init skills</span>
            </p>
            <p style={{ color: "#4ade80" }}>
              ✓ Loaded distributed-systems.exe
            </p>
            <p style={{ color: "#4ade80" }}>✓ Cached 10 research years.</p>
            <p style={{ color: "#4ade80" }}>✓ Rendering lecture slides.</p>
            <p style={{ color: "#4ade80" }}>✓ Removing imposter module.</p>
            <p style={{ color: "#fff", marginTop: "8px" }}>
              Success! Skills deployed.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
          }}
          className="fragments-bottom"
        >
          {/* "X years at HSE" card */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              padding: "32px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#fff",
                marginBottom: "8px",
              }}
            >
              Professor since 2024
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
              Teaching distributed systems, software testing, and mobile communication at Esslingen University of Applied Sciences.
            </p>
          </div>

          {/* Identity words */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              {["researcher.", "educator.", "engineer."].map((word, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: i === 0 ? "#fff" : i === 1 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)",
                    lineHeight: 1.2,
                  }}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>

          {/* I used to code card */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
              I used to research in-vehicle networks
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>
              Four years at Bosch Research on connected vehicles — CAN, Automotive Ethernet, and in-network computing.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .fragments-top, .fragments-bottom { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .courses-list > div { flex: 1 1 100% !important; }
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
