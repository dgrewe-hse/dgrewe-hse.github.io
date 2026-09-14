---
title: "AI Is Driving the Knowledge and Intelligent Systems at KES 2026."
date: "2026-09-14"
preview: "A report from Dublin: seven papers in our invited session, two keynotes, and a field that is applying AI everywhere while still refusing to let it operate the system."
tags: ["KES2026", "generative AI", "agentic AI", "AI governance", "software engineering"]
---

Last week I was in Dublin for the 30th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems ([KES 2026](http://kes2026.kesinternational.org/), 9–11 September). I co-chaired the invited session **IS27**, *Interdisciplinary Perspectives on Generative AI within Knowledge-Based and Intelligent Systems*, with [Dr. Wilhelm Daniel Scherz](https://www.linkedin.com/in/dr-wilhelm-daniel-scherz-02481563/) and [Dr. Maksym Gaiduk](https://www.htwg-konstanz.de). From 20 submissions, seven papers ran through that on-site session, from smart mirrors for intrinsic capacity assessment to agentic AI governance. I also sat in on IS33 and IS62. Some highlights where the keynotes by Ralf Seepold (HTWG Konstanz) and Jörg Noennig (HafenCity University Hamburg). This article is my attempt to make sense of what I saw.

The atmosphere in Dublin was great. The location, Maritime Hotel, was a great venue with space for people to move around and chat. People were specific, and often refreshingly honest about what their systems could not yet do. So this is the reason I want to write this down.

![IS27 lineup at KES 2026: seven papers across six disciplines](/blog/260914-kes-dublin/is27-lineup.svg)

*Figure 1: The IS27 lineup — seven papers, six disciplines, Thursday 15:00–18:00. Health appears twice; the rest of the field is one paper each.*

## A Session With No Single Method

IS27 was, first of all, a little bit of a risk. We had assembled a session whose domains barely overlapped: chemistry, oncology, gerontology, SME knowledge transfer, academic writing, software product management, agentic governance. The only honest common denominator was generative AI, and that can be a weak glue.

What the session revealed, once the papers were in the room together, is that the glue was stronger than the risk. Everyone had an opinion. Everyone brought a different angle. The heterogeneity was not a defect in the programme. It was the point. And luckily, it worked. AI showed up as a genuine common language across fields that otherwise would not share a method, a dataset, or a user.

The papers themselves did not share a method. They shared a question about where generative AI lands in practice.

Two papers showed the current sweet spot clearly. Kutzner et al. presented an LLM pipeline that summarizes app reviews of an automotive OEM for product owners, with an "aspect importance" metric and a trust layer that surfaces review counts and timeframes. Batista et al. proposed a smart mirror that uses multimodal sensing and conversational AI to assess intrinsic capacity in older adults. Both are bounded problems: a defined input, a defined user, a measurable output. Both are candid that the evidence is thin, with the app-review study based on three product owners and the smart mirror still a design proposal.

Around that core sat a wider spread. Abdulelah S. Alshehri's (Assistant Professor, King Saud University) generative-reflective agent extracts chemical property data and reports a modest data-efficiency gain, described by its author as single-run and single-corpus. Cardozo Vélez and colleagues studied whether normalized metabolite deviations from MR spectroscopy can estimate CNS tumor grade, with high AUCs on a small sample. Marques Da Silva and colleagues interviewed ten experts on generative AI and knowledge transfer in SMEs in Germany. And Ayadi, Charroux and Sliman put a governance framework for agentic AI on the table — one of the session's major contributions, and the one I return to below.

The recurring thread was trust. Half the session treated oversight, transparency and over-reliance as design problems, which says something about where the field is.

What struck me was the methodological spread. Several studies rested on samples of three to nineteen participants, and two were position papers with no data. That reads as a snapshot of an exploratory phase, testing where AI helps before it can say how reliably.

## Familiar Faces, Diverged Frontiers

Conferences are also a way of meeting people you already know. Two conversations in Dublin stayed with me for that reason.

The first was with [Prof. Dr. Christopher Scherb](https://www.fhnw.ch/en/computer-science/about/portrait-organisation/people/christopher-scherb) from the [University of Applied Sciences and Arts Northwestern Switzerland (FHNW)](https://www.fhnw.ch). We have watched each other's work since our contributions to the Future Internet domain during our PhD years, when the overlap was closer — networked systems, the same cluster of architectural problems. Our focus has since diverged a bit, but we still have a lot to talk about. He now works at the intersection of AI, IT security, and security in networked systems. I have spent more of my time on how generative AI lands in software, education, and practice. Seeing him in Dublin was a reminder that those frontiers still talk to each other. The exchange was specific: what security looks like when the system under attack is no longer a static service, but an AI-mediated, networked one.

The second was with [Prof. Dr. Ansgar Gerlicher](https://www.hdm-stuttgart.de/person/gerlicher/) from the [Media University of Applied Sciences Stuttgart](https://www.hdm-stuttgart.de), whom I have known since my own studies there. He presented in IS27 on the app-review summarizer with Kutzner and Hois. Afterwards we talked about [ARENA2036](https://arena2036.de), industrial automation, and augmented and virtual reality in IIoT and automotive services — and about a problem I keep running into in my own teaching: how to bring AI into the classroom without letting students offload the thinking. The challenges are familiar from our [CSEDU 2026 work](/writing/genai-programming-education-csedu2026). The conversation made them feel less like a local curriculum issue and more like a shared one.

## AI as a Tool Inside Software Engineering

IS33, chaired by Sergey Zykov, turned the lens around. Here AI was the tool applied to software engineering itself. Papers covered industrial IoT and machine learning for smart transportation, code smells in AI-generated source code, LLM-assisted construction of cross-language datasets for software quality, LLM-based bug priority classification, and SentinelOps, a predictive AIOps framework for self-healing Kubernetes systems.

The pattern is the same as in IS27, one level down. LLMs are good at narrow, verifiable tasks: classify a bug, align a dataset, flag a smell. Composing those into a self-healing system is where the engineering begins. Software gives you ground truth, tests and logs, which makes the AI-as-component approach far more defensible than in domains where truth is expensive.

## Governance Arrives Before Autonomy

One insteresting contribution in IS27 regarding regulation came from [Prof. Layth Sliman](https://eng.efrei.fr/allianstic-research-laboratory/research-team/layth-sliman-2/) of [Efrei Paris](https://www.efrei.fr/) (Paris-Panthéon-Assas University), presenting with Y. Ayadi and B. Charroux. His point was simple and hard to unhear. Current European regulation such as the EU AI Act is written around the *output* of an AI system: is the decision acceptable, is the risk classified, does the artefact comply. It has much less to say about *how* that output was generated: which tools were called, which memory was consulted, which plan was formed, which action was taken in which order.

For a bounded classifier, that gap is inconvenient. For agentic AI, it is structural. An agent that plans, remembers and acts can produce an acceptable-looking result through a process nobody can reconstruct. That is the drawback the field now has to address. Sliman and colleagues sketched a first framework for governing that process rather than only scoring the artefact. It is a position paper, not a deployed system. That does not make it a minor one.

The same instinct showed up the next session. IS62, *Sustainable Innovation for the Digital IT era*, chaired by Yoshimasa Masuda and colleagues, was about strategy and oversight. Masuda's group mapped directions for agentic AI platforms in digital transformation. Taylor and colleagues proposed a risk-tiered governance framework for agentic AI in healthcare administration, dealing with human oversight, cybersecurity and responsible deployment. Taylor's tiering is an admission that oversight needs to scale with risk. Both of these papers, like Sliman's, are conceptual. There is no deployment validation yet.

You write a governance framework when the thing it governs is not yet safe to leave alone. That is where we are.

## Two Keynotes, One Integration Problem

The keynotes were optimistic in a useful way. AI is valuable here, and it is promising. The caution sat one layer down. If we want agentic systems we can actually trust, we have to explain where a result came from — not only that a score was produced, but how, from which signals, and whether that path is meaningful. And because intelligent systems are, almost by definition, interconnected, pulling information out of the cyber-physical world, we need standards for how that data is extracted, processed and handed on. Without those two things, explainability and standardisation, "insight" is just another output.

Ralf Seepold's keynote, *From Signals to Decisions: Explainable AI and Ubiquitous Sensing for the Future of Digital Sleep Health*, was about turning heterogeneous physiological signals, including EEG, respiration and body movement, into reliable clinical decisions. His framing is the signal-to-decision gap: sensors are cheap, decisions are hard. The explainable-AI and contactless-sensing work is an attempt to make the middle of that pipeline trustworthy — exactly the "where did this come from" question, applied to sleep health.

Jörg Noennig's keynote, *Tooling for Cities — A Development Agenda for City Tech Solutions*, supplied the sharpest image of the week. He described a "Cambrian explosion" of digital tools for urban management and planning, expanding so fast that cities cannot tell which tool to pick, while researchers reinvent wheels without knowing what already exists. His proposal is a structured development pipeline to bring order to that landscape. That is a standardisation problem dressed as a smart-city problem: without shared ways to extract, process and compose, the tools do not add up.

That is the week in miniature. Not a shortage of AI. A surplus of it, no shared way to explain the pieces, and no standard way to assemble them.


## The Thesis

AI is everywhere, and people are deliberately pushing it into new fields. They apply it, measure how well it works, and start wiring it into larger systems. This is genuine and productive work.

The limits are equally clear. Today's LLMs and AI systems are useful as components and applications, and they are not yet ready to autonomously monitor or operate highly complex systems such as smart cities.

The evidence runs through everything above. A smart mirror and an app-review summarizer are bounded components with defined inputs and users. Sliman's argument is that we currently regulate the artefact, not the process that produced it, and that this will not survive contact with agents. Noennig's tool explosion is an integration and standardisation problem, not a model problem. Seepold's explainability work exists because converting signals into decisions is where reliability is won or lost.

## What We Are Actually Missing

If the bottleneck is integration rather than model capability, the open questions shift.

We need to know how to compose components with different failure modes into a system whose behavior we can reason about. We need evaluation above the component level, where a good individual model does not guarantee a good system. We need explainability that shows where an agentic result came from, not just a confidence score. We need standards for how interconnected systems extract and process data from the cyber-physical world, or the insights will not travel. And we need governance that looks at the generation process, not only the output — because that is the part current regulation, including the EU AI Act, still under-specifies.

None of this is a reason to slow down. It is a reason to be precise about which layer of the stack we are claiming progress on.

## An Honest Word About the Evidence

I should note the tension that ran through IS27. Many of these are small studies and two of the seven papers are conceptual positions. The field is describing patterns before it can establish them.

This is normal for an emerging area and deserves saying plainly. The position papers on smart mirrors and agentic governance are worth reading as agendas, not validated designs. The openness about limitations was the healthiest thing in the room. Several papers spend a full section explaining exactly what their evidence cannot support. That is the right culture for a field this young.

## Outlook

For practitioners, keep the ambition and lower the claims. Use LLMs where the task is bounded and the output is checkable. Invest in the integration layer, since that is where most of your project risk now lives. Treat autonomous monitoring of complex environments as the goal, not the starting point.

For researchers, the gap is system-level evaluation. We have strong methods for benchmarking models and thin methods for benchmarking systems built from them. That gap is the interesting place to work, and the KES community is well placed to close it.

I left Dublin more convinced of the direction than of the destination. The work is spreading because it is useful. The next phase is about making the parts fit together without asking any single one of them to carry more than it can.

For anyone who wants the specifics, the [IS27 programme](http://kes2026.kesinternational.org/cmsISdisplay.php) and the [two keynotes](http://kes2026.kesinternational.org/keynotes.php) are the place to start. The papers are honest about their scope, which is what makes them worth building on.

---

**Conference:** [KES 2026](http://kes2026.kesinternational.org/), Dublin, 9–11 September 2026

**Session:** IS27 — *Interdisciplinary Perspectives on Generative AI within Knowledge-Based and Intelligent Systems*

**Chairs:** Dr. Wilhelm Daniel Scherz (HTWG Konstanz / equensWorldline), Prof. Dr. Dennis Grewe (Esslingen University of Applied Sciences), Dr. Maksym Gaiduk (HTWG Konstanz)
