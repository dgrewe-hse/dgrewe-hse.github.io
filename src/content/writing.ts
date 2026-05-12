export type WritingType = "paper" | "blog" | "talk";

export interface WritingItem {
  type: WritingType;
  title: string;
  venue?: string;       // conference / journal for papers
  preview: string;
  date: string;
  link: string;         // external URL for papers/talks, or "#" for placeholders
  slug?: string;        // set for blog posts — renders as internal /writing/[slug] link
  isPlaceholder?: boolean;
}

// ─── Papers ──────────────────────────────────────────────────────────────────
// Replace link: "#" with the actual DOI / PDF / Google Scholar URL.

// ─── Blog & talks ─────────────────────────────────────────────────────────────
// Add real entries as you write them. isPlaceholder cards render differently.

export const writingItems: WritingItem[] = [
  {
    type: "paper",
    title: "Constraint-Aware Neural Architecture Search for Embedded AI Systems",
    venue: "IEEE COINS 2023",
    preview:
      "A hardware-in-the-loop NAS framework that integrates latency and energy constraints directly into the search objective, yielding models deployable on Cortex-M microcontrollers without post-hoc pruning.",
    date: "Jun 2023",
    link: "#",
  },
  {
    type: "paper",
    title: "Federated Learning on Heterogeneous IoT Networks: A Privacy-First Approach",
    venue: "IEEE IoTJ 2022",
    preview:
      "Addresses non-IID data drift and communication bottlenecks across heterogeneous edge nodes. Proposes an adaptive aggregation scheme with differential privacy guarantees.",
    date: "Sep 2022",
    link: "#",
  },
  {
    type: "paper",
    title: "TinyML Benchmark: Evaluating Inference on ARM Cortex-M Devices",
    venue: "ACM LCTES 2021",
    preview:
      "A reproducible benchmark suite covering classification, detection, and keyword spotting on sub-mW microcontrollers, with open-source tooling for community-driven evaluation.",
    date: "Jun 2021",
    link: "#",
  },
  {
    type: "paper",
    title: "AutoML for Edge: Automated Model Compression via Knowledge Distillation",
    venue: "ECML-PKDD 2020",
    preview:
      "Combines neural architecture search with structured pruning and knowledge distillation into a single pipeline, reducing manual effort for edge model design by over 80%.",
    date: "Sep 2020",
    link: "#",
  },
  {
    type: "blog",
    title: "Why Embedded AI Matters More Than You Think",
    preview:
      "Most engineers only think about cloud inference. But the next wave of AI runs on hardware you can hold in your hand — and the constraints make it interesting.",
    date: "Aug 2025",
    link: "/writing/why-embedded-ai-matters",
    slug: "why-embedded-ai-matters",
  },
  {
    type: "talk",
    title: "Talks & keynotes — coming soon",
    venue: undefined,
    preview:
      "Conference talks, guest lectures, and podcast appearances will be listed here.",
    date: "",
    link: "#",
    isPlaceholder: true,
  },
];
