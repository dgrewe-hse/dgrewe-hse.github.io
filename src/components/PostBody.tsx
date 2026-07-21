"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    mermaid?: {
      initialize: (cfg: object) => void;
      run: (cfg?: { nodes?: NodeListOf<Element> | Element[] }) => Promise<void>;
    };
  }
}

export default function PostBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const codeBlocks = root.querySelectorAll("pre code.language-mermaid");
    if (!codeBlocks.length) return;

    // Replace <pre><code class="language-mermaid"> with <div class="mermaid">
    codeBlocks.forEach((code) => {
      const pre = code.parentElement;
      if (!pre) return;
      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent ?? "";
      pre.replaceWith(div);
    });

    const run = () => {
      window.mermaid!.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "#0a0a0a",
          primaryColor: "#1a1a1a",
          primaryTextColor: "#fff",
          lineColor: "#444",
          edgeLabelBackground: "#111",
        },
      });
      window.mermaid!.run({
        nodes: root.querySelectorAll(".mermaid"),
      });
    };

    if (window.mermaid) {
      run();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
    script.onload = run;
    document.head.appendChild(script);
  }, [html]);

  return (
    <div
      ref={ref}
      className="post-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
