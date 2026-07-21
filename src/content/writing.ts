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

const SCHOLAR =
  "https://scholar.google.com/citations?user=5wKVtcMAAAAJ&hl=en";

function scholarCitation(id: string) {
  return `${SCHOLAR.split("?")[0]}?view_op=view_citation&hl=en&user=5wKVtcMAAAAJ&citation_for_view=5wKVtcMAAAAJ:${id}`;
}

// Top publications from Google Scholar (by citation count).
// Full list: https://scholar.google.com/citations?user=5wKVtcMAAAAJ&hl=en

export const writingItems: WritingItem[] = [
  {
    type: "paper",
    title:
      "Using Generative AI in Higher Programming Education: An Empirical Evaluation",
    venue: "CSEDU 2026",
    preview:
      "Controlled experiment (n=36) comparing guided vs. unguided GenAI use in introductory C programming. Structured guidance improved solution understanding and reflective AI interaction — without changing task performance.",
    date: "2026",
    link: "/writing/genai-programming-education-csedu2026",
    slug: "genai-programming-education-csedu2026",
  },
  {
    type: "paper",
    title:
      "A Domain-Specific Comparison of Information-Centric Networking Architectures for Connected Vehicles",
    venue: "IEEE Communications Surveys & Tutorials",
    preview:
      "Survey comparing ICN architectures for vehicular networking — caching, naming, mobility, and deployment trade-offs in connected-vehicle environments.",
    date: "2018",
    link: scholarCitation("O3NaXMp0MMsC"),
  },
  {
    type: "paper",
    title:
      "Information-Centric Mobile Edge Computing for Connected Vehicle Environments: Challenges and Research Directions",
    venue: "Workshop on Mobile Edge Communications",
    preview:
      "Outlines how mobile edge computing and information-centric networking intersect in connected vehicles, with open challenges and research directions.",
    date: "2017",
    link: scholarCitation("2osOgNQ5qMEC"),
  },
  {
    type: "paper",
    title: "PeRCeIVE: Proactive Caching in ICN-Based VANETs",
    venue: "IEEE VNC 2016",
    preview:
      "Proactive caching strategy for information-centric vehicular ad hoc networks to reduce latency and improve content availability at the edge.",
    date: "2016",
    link: scholarCitation("u5HHmVD_uO8C"),
  },
  {
    type: "paper",
    title:
      "Softwarization of Automotive E/E Architectures: A Software-Defined Networking Approach",
    venue: "IEEE VNC 2020",
    preview:
      "Applies software-defined networking to automotive electrical/electronic architectures for more flexible in-vehicle communication.",
    date: "2020",
    link: scholarCitation("ldfaerwXgEUC"),
  },
  {
    type: "paper",
    title:
      "Reimagining Automotive Service-Oriented Communication: A Case Study on Programmable Data Planes",
    venue: "IEEE Vehicular Technology Magazine",
    preview:
      "Case study on programmable data planes for automotive service-oriented communication, bridging SDN concepts with in-vehicle networking.",
    date: "2023",
    link: scholarCitation("u_35RYKgDlwC"),
  },
  {
    type: "paper",
    title:
      "Automotive Container Orchestration: Requirements, Challenges and Open Directions",
    venue: "IEEE VNC 2023",
    preview:
      "Analyzes container orchestration for automotive platforms — requirements, challenges, and open research directions for software-defined vehicles.",
    date: "2023",
    link: scholarCitation("fPk4N6BV_jEC"),
  },
  {
    type: "paper",
    title: "DICer: Distributed Coordination for In-Network Computations",
    venue: "ACM ICN 2022",
    preview:
      "Coordination framework for distributing computations across in-network nodes in information-centric vehicular environments.",
    date: "2022",
    link: scholarCitation("rO6llkc54NcC"),
  },
  {
    type: "paper",
    title:
      "ADePt: Adaptive Distributed Content Prefetching for Information-Centric Connected Vehicles",
    venue: "IEEE VTC Spring 2018",
    preview:
      "Adaptive prefetching for ICN-based connected vehicles — anticipates content demand across distributed caches in VANETs.",
    date: "2018",
    link: scholarCitation("NaGl4SEjCO4C"),
  },
  {
    type: "paper",
    title:
      "Caching-as-a-Service in Virtualized Caches for Information-Centric Connected Vehicle Environments",
    venue: "IEEE VNC 2018",
    preview:
      "Virtualized caching service model for ICN in connected vehicles, enabling flexible cache allocation across the vehicular edge.",
    date: "2018",
    link: scholarCitation("vV6vV6tmYwMC"),
  },
  {
    type: "paper",
    title:
      "On the Design of an Information-Centric Networking Extension for IoT APIs",
    venue: "IEEE VTC 2021",
    preview:
      "Extends ICN principles to IoT API design, enabling more efficient data exchange in connected vehicle and edge IoT systems.",
    date: "2021",
    link: scholarCitation("HoB7MX3m0LUC"),
  },
  {
    type: "paper",
    title:
      "A Real World Information-Centric Connected Vehicle Testbed Supporting ETSI ITS-G5",
    venue: "IEEE EuCNC 2018",
    preview:
      "Describes a real-world ICN testbed for connected vehicles with ETSI ITS-G5 support — bridging research prototypes and road-ready validation.",
    date: "2018",
    link: scholarCitation("J_g5lzvAfSwC"),
  },
  {
    type: "paper",
    title:
      "ICN-Based Open, Distributed Data Marketplace for Connected Vehicles: Challenges and Research Directions",
    venue: "IEEE ICC Workshops 2017",
    preview:
      "Explores an open data marketplace model for connected vehicles built on information-centric networking principles.",
    date: "2017",
    link: scholarCitation("9yKSN-GCB0IC"),
  },
  {
    type: "blog",
    title: "Two Worlds, One Problem: The Future of Cross-Border Payments",
    preview:
      "Why does the same payment infrastructure cost a corporate treasurer $0.04 and a migrant worker 15%? A four-part exploration of SWIFT's design limits, the de-risking crisis, and the geopolitical race to build the next settlement layer.",
    date: "Jun 2026",
    link: "/writing/260603-cross_border_payments",
    slug: "260603-cross_border_payments",
  },
  {
    type: "blog",
    title: "AI Doesn't Just Cost Developer Jobs — It Costs Business Models",
    preview:
      "The debate about AI and software engineering keeps asking whether developers will lose their jobs. That's the wrong question. Walk through six types of software companies and the same pattern repeats: the thing they used to sell no longer has a price.",
    date: "Jul 2026",
    link: "/writing/260702-ai-costs-business-models",
    slug: "260702-ai-costs-business-models",
  },
  {
    type: "blog",
    title: "How Do Programming Novices Use AI — and Are We Teaching It the Right Way?",
    preview:
      "Students already use AI to code. Our experiment at Esslingen University shows that without structured guidance, they offload tasks instead of learning — and what we changed in our introductory programming course.",
    date: "May 2026",
    link: "/writing/genai-programming-education-csedu2026",
    slug: "genai-programming-education-csedu2026",
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

export const googleScholarUrl = SCHOLAR;
