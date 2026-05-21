---
title: "How Do Programming Novices Use AI — and Are We Teaching It the Right Way?"
date: "2026-05-01"
preview: "Students already use AI to code. Our experiment at Esslingen University shows that without structured guidance, they offload tasks instead of learning — and what we changed in our introductory programming course."
tags: ["AI in education", "programming education", "CSEDU2026", "higher education"]
---

How do programming novices use AI to learn to code? And am I teaching programming in the right format?

Those were the questions we set out to answer — and we ran an experiment at [Esslingen University of Applied Sciences](https://www.hs-esslingen.de) to find out. What we observed was not surprising in hindsight, but still worth saying clearly: **students without structured guidance struggled to make productive use of AI** and took the non-sustainable path of offloading tasks rather than learning. The tools were there. The path was not. Structured exploration and guidance made the critical difference.

We have now published our empirical findings at **CSEDU 2026** — the 18th International Conference on Computer Supported Education in Benidorm — in a joint paper with [Raluca-Maria Vedislav](https://www.hs-esslingen.de) (Esslingen University) and [Dr. W. Daniel Scherz](https://www.linkedin.com/in/dr-wilhelm-daniel-scherz-02481563/) (HTWG Konstanz).

## The setup

Generative AI is everywhere in programming education. In our baseline survey of first-semester students, **98.2% had already used AI tools** before their first lecture. ChatGPT, Copilot, Gemini — the tools are not the question anymore.

The question is whether students use them in ways that actually build understanding.

We developed a [best-practice guideline for using GenAI in programming](https://github.com/HSE-DNS/ai-programming-guide) and tested it in a controlled experiment with **36 first-semester students** in our introductory **Programming in C** course. Participants implemented a simplified Snake game in a time-boxed lab session, using [bwGPT](https://www.zml.kit.edu/english/bwGPT.php) — the privacy-compliant AI chatbot rolled out across universities in Baden-Württemberg.

Two groups, randomly assigned:

- **Control group (n=18):** AI access, no additional guidance
- **Guided group (n=18):** Same task, plus a 20-minute introduction to our structured guideline

Both groups started from comparable baselines — no significant differences in prior programming experience, AI usage, or self-assessed competence.

![Pre-test results comparing control and guided groups](/blog/genai-csedu2026/pre-test-results.svg)

*Figure 1: Pre-test results comparing Group A (control) and Group B (experimental) — with error bars for standard deviation.*

## What we found

### Performance looked similar — understanding did not

Both groups finished functionally comparable code. Quantitative performance metrics did not differ significantly.

But Group B students reported **significantly higher understanding of their own solutions** (p = 0.048). They were not just producing code faster — they were engaging with it more deeply.

### Guided students used AI differently

Without guidance, students leaned on AI for code generation and syntax lookup. With the guideline, usage shifted toward **debugging and conceptual understanding** — the areas where AI can genuinely support learning rather than replace it.

![How students used AI during the programming task](/blog/genai-csedu2026/usage-categories.svg)

*Figure 2: AI usage categories during the experiment (Group A vs. Group B).*

### The quality of interaction mattered most

Structured behavioural observations told the clearest story. Group B students:

- **Critically evaluated** AI output more often (66.7% vs. 55.6%)
- **Modified** AI-generated code more often (61.1% vs. 22.2%)
- **Rejected** AI suggestions more often (38.9% vs. 16.7%)

They also produced code that was **less similar to raw AI output** (45.4% vs. 64.9% token similarity), suggesting genuine adaptation rather than copy-and-paste.

![Quality of AI interactions during the experiment](/blog/genai-csedu2026/ai-interaction-quality.svg)

*Figure 3: Behavioural observations — percentage of students showing each interaction pattern.*

This is the difference between **vibe coding** and learning with AI as a partner.

## Validating in the real classroom

We did not stop at the lab experiment. In the following semester, we ran an **AI guidance workshop** with a new cohort of **80 first-semester students** as part of regular laboratory classes.

The patterns held:

![AI chatbot usage among workshop participants](/blog/genai-csedu2026/workshop-ai-usage.svg)

*Figure 4: AI chatbot usage in the follow-up workshop cohort — 76% use AI daily or frequently.*

**76%** of students used AI chatbots daily or frequently. **81%** had used AI for programming tasks before. Adoption is total — the gap is guidance.

And when we asked students where they needed the most support, **debugging emerged as both the weakest skill and the most requested practice topic** — exactly mirroring what we saw in the controlled experiment.

![Debugging confidence vs demand for AI-supported practice](/blog/genai-csedu2026/workshop-debugging-demand.svg)

*Figure 5: Only 30% felt confident debugging — yet 31.8% requested debugging practice with AI, the highest of any topic.*

## What we changed in our course

That insight shaped what we do now.

Since the experiment, we have integrated a **dedicated AI workshop week** into our introductory programming course. The goal is not just to teach students how to use AI to learn a programming language faster. It is to teach them how to **partner with AI effectively** — to treat it as a learning buddy that produces sustainable results, not just quick answers.

Based on our findings, **AI literacy training is now a mandatory component** of first-semester programming education at Esslingen University. Every student learns about the opportunities, risks, and limitations of AI from semester one — with structure, not left to individual trial and error.

The full guideline is open source: **[github.com/HSE-DNS/ai-programming-guide](https://github.com/HSE-DNS/ai-programming-guide)**

## The takeaway for educators

Students and lecturers are using AI. No doubt about that.

The real question for educators is not **whether** to allow it, but **how to provide the structure that keeps learning actually happening**. Our results suggest that intentional instructional design — not just tool access — is what makes the difference.

Structured guidance did not dramatically change how fast students finished. It changed **how they thought** about what they produced. And that, for programming education, is the outcome that matters.

---

**Paper:** Dennis Grewe, Raluca-Maria Vedislav, and W. Daniel Scherz. *Using Generative AI in Higher Programming Education: An Empirical Evaluation.* CSEDU 2026, Benidorm.

**Co-authors:** Raluca-Maria Vedislav (Esslingen University of Applied Sciences), W. Daniel Scherz (HTWG Konstanz)

**Resources:** [AI Programming Guide (GitHub)](https://github.com/HSE-DNS/ai-programming-guide) · [Google Scholar](https://scholar.google.com/citations?user=5wKVtcMAAAAJ&hl=en)
