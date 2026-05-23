"use client";

import { useEffect, useState } from "react";

function useTime() {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Berlin",
      });
      const offset = new Intl.DateTimeFormat("en", {
        timeZone: "Europe/Berlin",
        timeZoneName: "short",
      }).formatToParts(now).find((p) => p.type === "timeZoneName")?.value ?? "CET";
      setDisplay(`${time} ${offset}`);
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return display;
}

export default function Header() {
  const time = useTime();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "24px 40px",
        pointerEvents: "none",
      }}
    >
      {/* Logo mark */}
      <a
        href="/"
        style={{ pointerEvents: "auto", display: "block", flexShrink: 0 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.9999 39.9999H17.6465V17.6465H39.9999V39.9999Z"
            fill="white"
            fillOpacity="0.15"
          />
          <path d="M32.9419 32.9418H0V0H32.9419V32.9418Z" fill="#39FF14" />
        </svg>
      </a>

      {/* Location + time */}
      <div
        style={{
          pointerEvents: "auto",
          textAlign: "right",
          lineHeight: 1.4,
        }}
      >
        <p style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>
          Esslingen, Germany
        </p>
        {time && (
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>{time}</p>
        )}
      </div>
    </header>
  );
}
