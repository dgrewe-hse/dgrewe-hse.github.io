"use client";

const skillGroups = [
  { label: "childhood", skills: ["Building LEGO models", "Tinkering with electronics", "Building computers and computer game maps"] },
  { label: "studies", skills: ["Distributed Systems", "Computer networks", "Software Engineering and Software Testing"] },
  { label: "research", skills: ["Agentic AI", "Teleoperation", "Connected Vehicles", "Digital Finance", "Information-Centric Networking"] },
  { label: "tools", skills: ["Rust, Python, C++, GoLang", "vue.js, next.js", "Docker, Kubernetes, K3S", "Quarto, LaTeX", "ns-3, vissim"] },
];

export default function Skills() {
  return (
    <section style={{ padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            border: "1px solid var(--border)",
            background: "#0a0a0a",
            borderRadius: "12px",
            padding: "36px 40px",
            overflow: "auto",
          }}
        >
          {/* Window chrome */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c, display: "inline-block" }} />
            ))}
          </div>

          <div
            style={{
              fontFamily: '"SF Mono","Fira Mono","Cascadia Code","Consolas",monospace',
              fontSize: "13px",
              lineHeight: 2,
              color: "#e5e5e5",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              <span style={{ color: "var(--accent)" }}>dennis</span>
              <span style={{ color: "#888" }}>@hse</span>
              <span style={{ color: "#60a5fa" }}>:~</span>
              <span style={{ color: "#fff" }}>$ </span>
              <span style={{ color: "#fff" }}>pnpm dennis@skills init</span>
            </p>

            {skillGroups.map((g, gi) => (
              <div key={gi} style={{ marginBottom: "12px" }}>
                <p style={{ color: "#555", marginBottom: "2px" }}>
                  {"// "}
                  {g.label}
                </p>
                {g.skills.map((s, si) => (
                  <p key={si}>
                    <span style={{ color: "#4ade80" }}>✓ </span>
                    <span style={{ color: "#aaa" }}>{s}</span>
                  </p>
                ))}
              </div>
            ))}

            <p style={{ marginTop: "16px", color: "#fff" }}>
              Success! Skills deployed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
