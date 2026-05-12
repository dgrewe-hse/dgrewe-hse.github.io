"use client";

const jobs = [
  {
    role: "Professor — Distributed Systems & Software Testing",
    company: "Esslingen University of Applied Sciences",
    period: "2024–present",
    color: "#39FF14",
    bullets: [
      "Designing and teaching modules on distributed systems, software testing, and AI-assisted software engineering.",
      "Integrating agentic AI and coding agents into teaching, student projects, and prototypes.",
      "Bridging academic research and industry use cases in software architecture, connected systems, and digital finance.",
    ],
  },
  {
    role: "Software Architect — Porsche Connect Platform",
    company: "Porsche AG",
    period: "2023–2024",
    color: "#e30613",
    bullets: [
      "Software architecture for the cloud-connected services and platform capabilities behind Porsche Connect.",
    ],
  },
  {
    role: "Professor (interim) — Operating Systems",
    company: "HTWG Konstanz",
    period: "2023–2024",
    color: "#60a5fa",
    bullets: [
      "Lectures and research in distributed systems and operating systems.",
    ],
  },
  {
    role: "Lecturer — Distributed Systems, Intro to Vehicle-to-X",
    company: "Hochschule Heilbronn",
    period: "2022–2024",
    color: "#94a3b8",
    bullets: [
      "Teaching distributed systems with a focus on vehicle-to-X communication and connected-vehicle contexts.",
    ],
  },
  {
    role: "Research Engineer · Scrum / OKR Coach",
    company: "Bosch Research",
    period: "2019–2023",
    color: "#a3a3a3",
    bullets: [
      "Research on future communication and network technologies; activity lead for in-network computing; German consortium lead for the EU CELTIC-NEXT PICCOLO project (piccolo-project.org).",
      "System and protocol work for efficient data exchange in the vehicle-to-cloud continuum (e.g. tele-operated and automated driving), spanning lightweight virtualization, information-centric networking, software-defined networking, and time-sensitive networking.",
      "Earlier rotation: in-vehicle networking incl. CAN, Automotive Ethernet, and software-defined networking (2019).",
    ],
  },
  {
    role: "Software Developer",
    company: "IBM",
    period: "2015",
    color: "#0530ad",
    bullets: [
      "IBM Business Process Manager; part of the security team.",
      "Level 3 support for customer-facing BPM deployments.",
    ],
  },
  {
    role: "Java Software Developer",
    company: "Bertsch Innovation GmbH",
    period: "2012–2014",
    color: "#64748b",
    bullets: [
      "Built Java applications for customer projects using the Apache Wicket framework.",
    ],
  },
];

export default function Experience() {
  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={headingStyle}>
          Experience<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {jobs.map((job, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "32px",
                padding: "32px",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                alignItems: "start",
              }}
              className="exp-card"
            >
              {/* Left: role + bullets */}
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: "16px",
                  }}
                >
                  {job.role}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--muted)",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: company + period */}
              <div style={{ textAlign: "right", minWidth: "140px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: job.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>
                    {job.company}
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>{job.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-card { grid-template-columns: 1fr !important; }
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
