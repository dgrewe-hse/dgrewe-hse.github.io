---
title: "Why Embedded AI Matters More Than You Think"
date: "2025-08-15"
preview: "Most engineers only think about cloud inference. But the next wave of AI runs on hardware you can hold in your hand — and the constraints make it interesting."
tags: ["embedded-ai", "edge", "tinyml"]
---

Most engineers only think about cloud inference. Send the data up, get a prediction back, done. But that model breaks down the moment your device loses connectivity, has strict latency requirements, or simply can't afford the energy budget of a network round-trip.

## The case for the edge

Consider a hearing aid running a noise-suppression model. It needs to process audio in under 10 ms, continuously, on a battery that lasts a week. There is no cloud option here. The model *has* to run on the device — a tiny ARM Cortex-M4 with 256 KB of RAM.

That constraint sounds punishing, but it forces a kind of engineering discipline that cloud-first thinking never does:

- **Model size** becomes a first-class metric alongside accuracy.
- **Latency** is measured in microseconds, not milliseconds.
- **Energy per inference** determines whether your product ships or fails.

## What changes when you embrace it

Once you accept the constraints as the design space rather than the obstacle, everything shifts. Neural architecture search stops being about maximizing ImageNet accuracy and becomes about finding Pareto-optimal points on an accuracy–latency–energy surface. Quantization goes from a deployment afterthought to a core training objective.

This is what my research group works on. We build tools that make these tradeoffs explicit and automatable — so engineers can specify *what matters* for their hardware target and let the search find the architecture.

## Where it's going

TinyML is no longer a niche. With frameworks like TensorFlow Lite Micro and the CMSIS-NN kernels, deploying models onto microcontrollers is increasingly accessible. The bottleneck has shifted from *can we run a model here* to *how do we design a model worth running here*.

That's a much more interesting problem. And it's the one I'll keep writing about.
