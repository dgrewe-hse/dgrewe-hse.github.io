"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const hiThere = [
  { src: "/hero/hero-text-hi.svg", alt: "Hi", width: 211, height: 156 },
  { src: "/hero/hero-text-there.svg", alt: "there,", width: 569, height: 156 },
];

const iAm = [
  { src: "/hero/hero-text-i.svg", alt: "i", width: 51, height: 149 },
  { src: "/hero/hero-text-am.svg", alt: "am", width: 260, height: 149 },
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".hero-anim");
    if (!items) return;
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition =
          "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 130);
    });
  }, []);

  const H = "clamp(44px, 6.5vw, 96px)";

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(24px, 5vh, 48px) 40px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Hero panel */}
        <div
          className="hero-headline-panel"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "min(980px, 100%)",
            height: "clamp(480px, 68vw, 680px)",
            marginBottom: "28px",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxSizing: "border-box",
            background: "#030304",
          }}
        >
          {/* ── Background atmosphere layers ── */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden>
            {/* Stage wash */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 80% 90% at 50% 100%, rgb(30,32,38) 0%, rgb(8,9,12) 55%, rgb(2,2,4) 100%)",
              }}
            />
            {/* Neon accent glow — rises from bottom where figure stands */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 55% 40% at 50% 100%, rgba(57,255,20,0.07) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* ── Isolated figure (behind text) ── */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "90%",
              aspectRatio: "2268 / 4032",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <Image
              src="/hero/dennis-isolated.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 60vw, 40vw"
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
                opacity: 0.82,
                filter: "drop-shadow(0 0 48px rgba(57,255,20,0.18)) drop-shadow(0 -8px 32px rgba(57,255,20,0.10))",
              }}
            />
          </div>

          {/* ── Text-protection gradient (dark at bottom where text lives, transparent toward top) ── */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(3,3,4,0.95) 0%, rgba(3,3,4,0.75) 28%, rgba(3,3,4,0) 54%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* ── Text content ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 clamp(16px, 4vw, 40px) clamp(28px, 5vw, 52px)",
            }}
          >
            {/* Row 1: Hi there, */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "4px",
                justifyContent: "center",
                filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.9))",
              }}
            >
              {hiThere.map((w, i) => (
                <span key={i} className="hero-anim" style={{ display: "inline-block" }}>
                  <Image
                    src={w.src}
                    alt={w.alt}
                    width={w.width}
                    height={w.height}
                    style={{ height: H, width: "auto" }}
                    priority
                  />
                </span>
              ))}
            </div>

            {/* Row 2: i am Dennis. */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
                filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.9))",
              }}
            >
              {iAm.map((w, i) => (
                <span key={i} className="hero-anim" style={{ display: "inline-block" }}>
                  <Image
                    src={w.src}
                    alt={w.alt}
                    width={w.width}
                    height={w.height}
                    style={{ height: H, width: "auto" }}
                    priority
                  />
                </span>
              ))}
              <span
                className="hero-anim"
                style={{
                  display: "inline-block",
                  height: H,
                  lineHeight: H,
                  fontSize: H,
                  fontWeight: 800,
                  letterSpacing: "-0.055em",
                  color: "#E5E5E5",
                  verticalAlign: "bottom",
                  paddingBottom: "0.04em",
                  textShadow: "0 2px 32px rgba(0,0,0,0.9), 0 0 1px rgba(0,0,0,1)",
                }}
              >
                Dennis<span style={{ color: "#39FF14" }}>.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="hero-anim" style={{ textAlign: "center", maxWidth: "min(560px, 100%)" }}>
          <p style={{ fontSize: "clamp(13px, 1.4vw, 17px)", color: "var(--muted)", marginBottom: "4px" }}>
            Dennis Grewe: Researching &amp; teaching since 2016.
          </p>
          <p style={{ fontSize: "clamp(13px, 1.4vw, 17px)", color: "var(--muted)" }}>
            Professor of Computer Science at{" "}
            <a
              href="https://www.hs-esslingen.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Esslingen University of Applied Sciences ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
