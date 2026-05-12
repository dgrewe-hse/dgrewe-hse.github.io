"use client";

const education = [
  { title: "Ph.D. Computer Science", school: "University of Koblenz", year: "2021" },
  { title: "M.Sc. Computer Science", school: "Media University of Applied Sciences Stuttgart", year: "2015" },
  { title: "B.Sc. Computer Science", school: "Media University of Applied Sciences Stuttgart", year: "2013" },
];

export default function About() {
  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={headingStyle}>
          Education<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 40px",
          }}
          className="edu-grid"
        >
          {education.map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "18px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#fff", marginBottom: "3px" }}>
                  {e.title}
                </p>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>{e.school}</p>
              </div>
              <span style={{ fontSize: "13px", color: "var(--muted)", flexShrink: 0, marginLeft: "16px" }}>
                {e.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr !important; }
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
