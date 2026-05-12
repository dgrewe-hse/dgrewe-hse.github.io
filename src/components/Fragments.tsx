"use client";

const courses = [
  { code: "CV-401", name: "Computer Vision", level: "B.Sc.", semester: "Semester 5" },
  { code: "ML-301", name: "Machine Learning", level: "B.Sc.", semester: "Semester 4" },
  { code: "ES-201", name: "Embedded Systems", level: "B.Sc.", semester: "Semester 3" },
  { code: "AML-501", name: "AutoML & Neural Architecture Search", level: "M.Sc.", semester: "Semester 1" },
  { code: "EAI-601", name: "Edge AI Research Seminar", level: "M.Sc.", semester: "Semester 2" },
];

const milestones = [
  { value: "12+ years", label: "researching & teaching" },
  { value: "Computer Vision", label: "lecture series developed" },
  { value: "30+ publications", label: "peer-reviewed research" },
  { value: "200+ students", label: "per year at HSE Hannover" },
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
              ✓ Loaded embedded-ai.exe
            </p>
            <p style={{ color: "#4ade80" }}>✓ Cached 12 research years.</p>
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
              6+ years at HSE
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
              Leading research and teaching in computer science, AI, and embedded systems.
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
              I used to write C++ for cars
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>
              During 3 years at Continental AG as a fullstack embedded engineer.
            </p>
          </div>
        </div>
      </div>

        {/* Courses row */}
        <div
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            padding: "32px",
            marginTop: "2px",
          }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "20px" }}>
            Courses I teach
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }} className="courses-list">
            {courses.map((c) => (
              <div
                key={c.code}
                style={{
                  flex: "1 1 180px",
                  border: "1px solid var(--border)",
                  background: "#0a0a0a",
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.06em", fontFamily: '"SF Mono","Fira Mono","Consolas",monospace' }}>
                  {c.code}
                </span>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                  {c.name}
                </p>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "var(--accent)", border: "1px solid rgba(57,255,20,0.3)", borderRadius: "100px", padding: "1px 7px" }}>
                    {c.level}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>{c.semester}</span>
                </div>
              </div>
            ))}
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
