---
title: "Two Worlds, One Problem: The Future of Cross-Border Payments"
date: "2026-06-03"
preview: "A four-part exploration of why the same payment infrastructure produces radically different outcomes for a corporate treasurer and a migrant worker — and why the race to build a replacement may not solve the underlying problem."
tags: ["cross-border payments", "fintech", "financial inclusion", "stablecoins", "CBDC", "ECB", "remittances", "emerging markets"]
---

This semester I reviewed a thesis that sparked my interest in cross-border payments and digital finance. I did not expect such a deep and consequential topic, and I want to share what I found in a series of four connected observations — each building on the last.

## Part 1: Two Worlds, One Problem

![Maria sending money across digital infrastructure](/blog/260603-cross-border-payments/maria_stables1.png)

**$195 trillion** moves through cross-border payment rails every year.<sup>[[1]](#ref-1)</sup> That number projects confidence. It suggests a well-functioning global financial plumbing system. What it conceals is more instructive.

Consider two transactions happening right now.

A treasurer in Frankfurt initiates a €5 million transfer to Singapore. SWIFT gpi delivers 90% of such wholesale payments to the destination bank within one hour.<sup>[[2]](#ref-2)</sup> Cost per message: $0.04. Clean, fast, essentially frictionless.

Maria works in Dubai and sends $200 home to her family in Manila. Traditional bank wire: two to five days. A $25 fixed fee. A 4% FX markup on top. Total cost: nearly 15% of what her family ultimately receives.

She is not alone. In 2024, **$656 billion in remittances** flowed to low- and middle-income countries.<sup>[[3]](#ref-3)</sup> The average global cost to send money was 6.4%. In Sub-Saharan Africa it reached 7.9%.<sup>[[4]](#ref-4)</sup> That translates to more than **$40 billion extracted annually** from the world's most economically vulnerable households — more than total global development aid from many donor nations.

Same infrastructure. Radically different outcomes.

The gap is structural, not incidental. Wholesale payments flow between major banks with direct bilateral relationships. Remittances typically traverse three to four intermediary banks, each performing compliance checks, FX conversions, and batch processing across mismatched time zones. Each hop adds latency and fees, while nostro and vostro accounts sit idle as collateral for future settlement flows.

The backbone — SWIFT — was designed in 1973 as an institutional messaging protocol.<sup>[[5]](#ref-5)</sup> It was never built for Maria. That design choice has been accepted, more or less intact, for fifty years.

What makes the current moment different is that multiple actors have, simultaneously, decided to build something else. The ECB is building it. The United States is building it. China is building it. And critically, they are not building the same thing.

---

## Part 2: The De-Risking Crisis

The first instinct when examining SWIFT's limitations is to ask: is SWIFT doomed? Not exactly. But something more insidious than technological obsolescence is happening in parallel: **the banks are leaving**.

Since 2011, active correspondent banking relationships have declined approximately 30% globally.<sup>[[6]](#ref-6)</sup> The contraction has not been uniform. The South Pacific has lost roughly 60% of its correspondent relationships. The Caribbean, around 50%. Sub-Saharan Africa, 35%.<sup>[[7]](#ref-7)</sup>

![The De-Risking Crisis: correspondent banking relationship decline by region, 2011–2023](/blog/260603-cross-border-payments/derisk.png)

*Figure 1: Correspondent banking relationship decline by region, 2011–2023. Darkest regions experienced the sharpest withdrawal of global banking access.*

This is not efficiency. It is abandonment.

The mechanism is a regulatory paradox. After the 2008 financial crisis, regulators imposed stricter anti-money laundering (AML) and know-your-customer (KYC) requirements. Banks responded rationally: they exited corridors that were unprofitable relative to the heightened compliance burden. Caribbean and African institutions lost correspondent access almost overnight in some cases, resulting in more than **$500 million in blocked payments** — export revenues stranded, remittances intercepted, SME payrolls frozen.<sup>[[8]](#ref-8)</sup>

The outcome was the opposite of the stated regulatory intent. "Reducing risk" did not reduce risk. It pushed transactions into informal, unregulated, and genuinely opaque channels — hawala networks, cash couriers, informal value transfer systems that generate no paper trail at all.

The human cost extends beyond statistics. A Samoan exporter now routes payments through Australia, adding days and fees. A Nigerian entrepreneur cannot open a USD account at any price. A family in Haiti pays 9.5% to receive money sent from Miami.<sup>[[4]](#ref-4)</sup> These are not edge cases. They represent the lived financial reality for a significant share of the **1.4 billion adults worldwide who remain unbanked**.<sup>[[9]](#ref-9)</sup>

Meanwhile, infrastructure alternatives have emerged at different scales. Bilateral instant payment links — PayNow to PromptPay between Singapore and Thailand, UPI to PayNow between India and Singapore — demonstrate that near-instant, low-cost cross-border settlement is technically achievable. The BIS Nexus project aims to connect domestic instant payment systems across multiple jurisdictions.<sup>[[10]](#ref-10)</sup> Stablecoin rails operate 24/7, require no correspondent banks, and carry costs well below 1%.

The irony deserves emphasis: the regions most abandoned by traditional finance have become the fastest adopters of alternative payment infrastructure. Financial exclusion, paradoxically, has accelerated the very disruption that threatens the incumbent system.

But the disruption is not converging on a single replacement. It is fracturing into at least three distinct models — and that fracture is the central problem of the coming decade.

---

## Part 3: The Infrastructure War

While Europe deliberates on Digital Euro timelines, the private sector has already moved. A few data points from late 2025 illustrate the velocity of change:

- **December 2025**: Circle, the issuer of the USDC stablecoin, received its license from the Abu Dhabi Global Market.<sup>[[11]](#ref-11)</sup>
- **December 2025**: BNP and nine other European banks announced the Qivalis consortium — a euro-denominated stablecoin projected to launch in the second half of 2026.<sup>[[12]](#ref-12)</sup>
- **July 2025**: The US GENIUS Act provided the first comprehensive regulatory framework for dollar-backed stablecoins, requiring 1:1 reserve backing.<sup>[[13]](#ref-13)</sup>
- **December 2025**: The ECB announced Pontes — a blockchain-based settlement system in central bank money, targeting a Q3 2026 pilot launch.<sup>[[14]](#ref-14)</sup>

The infrastructure war is not coming. It is here. Three geopolitical powers, three strategies, and one prize: control of the global settlement layer.

### The United States: Private Rails, Public Backing

The US approach is to let the private sector build the infrastructure and back it with dollar reserves. Tether, the largest stablecoin by market capitalisation, holds more US Treasury debt than the sovereign balance sheet of Germany.<sup>[[15]](#ref-15)</sup> Circle's USDC has now obtained regulatory licences in the US, EU, Singapore, and Abu Dhabi. The GENIUS Act provided the rules of engagement. Analysts at Citi project stablecoin Treasury holdings could reach **$1.6 trillion by 2028**.<sup>[[16]](#ref-16)</sup>

### China: State Control, Closed Ecosystem

China's strategy inverts the US model. The digital yuan (e-CNY) has accumulated **¥14.2 trillion in cumulative transactions**.<sup>[[17]](#ref-17)</sup> Huaxia Bank issued $600 million in tokenised yuan bonds purchasable exclusively with digital yuan — a deliberate policy instrument to drive adoption through institutional mandates.<sup>[[18]](#ref-18)</sup> The ecosystem is fast, scalable, and closed.

### Europe: Public Infrastructure, Interoperability Play

Europe's strategy is the most complex and the most explicitly motivated by sovereignty concerns. The Digital Euro — a retail CBDC — is not expected before 2029 at the earliest.<sup>[[19]](#ref-19)</sup> But Pontes represents an earlier, more targeted intervention: a system allowing European banks to settle tokenised assets on distributed ledger infrastructure using euro central bank money.

The ECB's strategic rationale was stated plainly by Piero Cipollone, Member of the ECB Executive Board, on 19 December 2025:

> "Without tokenised central bank money, digital asset ecosystems will rely on fragmented private settlement assets, eroding European monetary sovereignty."<sup>[[20]](#ref-20)</sup>

The translation is unambiguous. When settlement happens on dollar stablecoins, economic gravity — liquidity, reserve flows, seigniorage — shifts toward US Treasury reserves. Europe is building state-sponsored infrastructure to contest that outcome before dollar-denominated private rails become the default.

### The Settlement Layer Question

The real competition is not between CBDCs and stablecoins, or between public and private infrastructure. It is a contest for control of the **settlement layer** — the foundational ledger on which value is ultimately resolved.

Private issuers offer speed, global reach, and technological agility, but concentrate economic power in a small number of corporations. Central banks offer sovereignty and systemic stability, but have historically operated on domestic mandates with limited cross-border interoperability. Bank consortiums like Qivalis offer institutional trust and regulatory familiarity, but tend toward exclusivity.

What is already clear is that stablecoins have moved beyond speculative instruments into institutional infrastructure. They are increasingly the settlement medium of choice for tokenised bond markets, international trade settlement, and treasury operations. Emerging markets — the Philippines, Nigeria, Argentina — are not waiting for the formal CBDC architectures to arrive. Alternative rails are absorbing transaction volume in real time.

Europe may be playing catch-up, but Pontes signals that the ECB is finally building rather than only regulating.

---

## Part 4: The Interoperability Question

Return to Maria, sending $200 from Dubai to Manila. By 2029 she may have three new options. Or none at all.

The US has built private stablecoin rails. China has built state-controlled digital yuan networks. Europe is building Pontes and the Digital Euro. All three architectures are faster than SWIFT. All three are cheaper than correspondent banking. All three operate around the clock.

But here is the question that the geopolitical competition tends to crowd out: **will any of them work for Maria?**

### Scenario One: Interoperability Wins

Maria opens a mobile application in Dubai. She initiates a $200 transfer. The funds travel on stablecoin rails — or through a regional instant payment link connecting UAE and Philippine domestic payment systems. They arrive in seconds. Cost: $2, not $30. Her mother in Manila converts to pesos instantly through a local e-wallet.

Scale that scenario upward. A German importer pays a Chinese supplier in digital yuan settled via Pontes. A Nigerian entrepreneur accesses USD liquidity without requiring a correspondent banking relationship. The **$40 billion in annual friction** identified in Part 1 begins to collapse.

### Scenario Two: Fragmentation Wins

Three separate ecosystems operate without bridges. Arbitrage becomes the primary mechanism for moving value across systems. A new correspondent banking layer forms — but for blockchains rather than nostro accounts. The same structural rent extraction reasserts itself in a new technical form.

And Maria? Her corridor — UAE to Philippines — does not fit neatly into US, Chinese, or European infrastructure. None of the three powers are optimising for Dubai to Manila. That corridor is remittance-heavy but geopolitically irrelevant to the actors competing for control of the settlement layer. She remains caught between systems that do not communicate with each other. The **"other 99%"** gets left behind again. The $40 billion in friction does not disappear — it migrates to new seams.

### The Stakes of Settlement

The Cipollone framing quoted above deserves unpacking. Money is not abstract. It represents real purchasing power, embodied labour, and claims on productive capacity. Wherever the settlement layer resides, that is where economic gravity accumulates. Dollar-denominated stablecoin dominance means that global liquidity flows through US Treasury reserves. Central bank money settlement in euros means European monetary sovereignty is preserved. Closed e-CNY ecosystems mean Chinese financial infrastructure extends its reach internationally.

The battle is not between crypto and traditional finance. It is a question of whether three competing institutional frameworks can construct systems capable of coexisting — and if not, who builds for the corridors all three ignore.

History offers a cautious basis for optimism. **Project Nexus**, the BIS Innovation Hub initiative to interlink domestic instant payment systems globally, is an explicit attempt to provide the bridge layer.<sup>[[10]](#ref-10)</sup> Regional monetary blocs — ASEAN, GCC — are constructing corridor-specific solutions outside the three-power competition.<sup>[[21]](#ref-21)</sup> Private stablecoin operators are filling gaps that state actors are either unwilling or too slow to address.

The question is whether Maria's corridor gets a bridge — or falls through the cracks between competing infrastructures that were never designed to serve her.

---

## Conclusion

The technical capacity to give Maria a $2 transfer exists today. The political and institutional architecture to deliver it does not — yet. The coming years of ECB, Federal Reserve, and PBOC statements, legislative developments, and infrastructure deployments will determine which scenario materialises.

If interoperability wins, a $30 fee becomes $2, and the structural extraction of wealth from migrant workers and their families begins to unwind. If fragmentation wins, the same 15% cost persists — paid to a different set of intermediaries operating on more modern infrastructure.

What I find genuinely interesting about this domain is that the technical problems are largely solved. The remaining problems are governance, sovereignty, and the political economy of who gets to control the infrastructure through which the global economy settles its accounts. Those are considerably harder problems — and considerably more consequential ones.

---

## References

1. <a id="ref-1"></a>Bank for International Settlements / Grand View Research. *Cross-border payments market size and forecasts.* [bis.org/cpmi/cross_border.htm](https://www.bis.org/cpmi/cross_border.htm)

2. <a id="ref-2"></a>SWIFT. *SWIFT gpi Tracker Data, Oct 2024.* 90% of gpi payments reach the destination bank within 1 hour. [swift.com/our-solutions/swift-gpi](https://www.swift.com/our-solutions/swift-gpi)

3. <a id="ref-3"></a>Ratha, D. et al. *Migration and Development Brief.* World Bank / KNOMAD, 2024. [worldbank.org/en/topic/migration/brief/remittances-knomad](https://www.worldbank.org/en/topic/migration/brief/remittances-knomad)

4. <a id="ref-4"></a>World Bank. *Remittance Prices Worldwide, Q3 2024.* Global average 6.4%; Sub-Saharan Africa 7.9%; Haiti–US corridor 9.5%. [remittanceprices.worldbank.org](https://remittanceprices.worldbank.org)

5. <a id="ref-5"></a>SWIFT. *About SWIFT.* 11,500+ member institutions across 200+ countries and territories; network founded 1973. [swift.com/about-us](https://www.swift.com/about-us)

6. <a id="ref-6"></a>Bank for International Settlements, CPMI. *Correspondent banking.* ~30% decline in active correspondent banking relationships globally, 2011–2022. [bis.org/cpmi/cross_border.htm](https://www.bis.org/cpmi/cross_border.htm)

7. <a id="ref-7"></a>Reserve Bank of Australia. *Correspondent Banking in the Pacific.* RBA Bulletin, June 2023. South Pacific: approx. −60%; Caribbean: approx. −50%. [rba.gov.au/publications/bulletin](https://www.rba.gov.au/publications/bulletin)

8. <a id="ref-8"></a>Caribbean Financial Action Task Force (CFATF) / IMF Working Papers. *De-risking in the Caribbean.* Estimated $500M+ in blocked payments during the 2015 de-risking wave. [imf.org](https://www.imf.org)

9. <a id="ref-9"></a>World Bank. *Global Findex Database 2021.* 1.4 billion adults worldwide remain unbanked. [globalfindex.worldbank.org](https://globalfindex.worldbank.org)

10. <a id="ref-10"></a>BIS Innovation Hub. *Project Nexus — multilateral instant payment system interlinking.* [bis.org/about/bisih/topics/fmis/nexus.htm](https://www.bis.org/about/bisih/topics/fmis/nexus.htm)

11. <a id="ref-11"></a>Circle. *Circle advances UAE expansion with ADGM license.* Press release, December 2025. [circle.com/pressroom](https://www.circle.com/pressroom/circle-advances-uae-expansion-with-adgm-license-and-appoints-managing-director-for-circle-mea)

12. <a id="ref-12"></a>CaixaBank / Banking Consortium. *Qivalis — European banking consortium euro stablecoin, projected H2 2026.* [caixabank.com/en/headlines/news/qivalis](https://www.caixabank.com/en/headlines/news/qivalis-joint-venture-of-a-european-banking-consortium-to-launch-euro-stablecoin-in-the-second-half-of-2026)

13. <a id="ref-13"></a>US Congress. *GENIUS Act — Guiding and Establishing National Innovation for US Stablecoins Act.* 119th Congress, Senate Bill 1582, signed July 2025. [congress.gov/bill/119th-congress/senate-bill/1582](https://www.congress.gov/bill/119th-congress/senate-bill/1582)

14. <a id="ref-14"></a>European Central Bank. *Pontes — ECB blockchain settlement initiative, pilot Q3 2026.* [ecb.europa.eu/paym/target/pontes](https://www.ecb.europa.eu/paym/target/pontes/html/index.de.html)

15. <a id="ref-15"></a>CoinTelegraph / TradingView. *Tether surpasses Germany's $111B of US Treasury holdings.* Cross-referenced with Tether Attestation Reports. [tether.to/transparency](https://www.tether.to/transparency)

16. <a id="ref-16"></a>Citi Institute. *Digital Dollars — Stablecoins, CBDCs and the Future of Money.* Citigroup Global Perspectives & Solutions, 2025. Projection: $1.6 trillion in stablecoin Treasury holdings by 2028. [citigroup.com/global/insights/stablecoins-2030](https://www.citigroup.com/global/insights/stablecoins-2030)

17. <a id="ref-17"></a>People's Bank of China. *e-CNY Progress Report.* Cumulative transactions: ¥14.2 trillion as of late 2025. [english.www.gov.cn](https://english.www.gov.cn/archive/statistics/202510/29/content_WS6901a9c9c6d00ca5f9a0726a.html)

18. <a id="ref-18"></a>CoinTelegraph / Reuters. *Hua Xia state-linked Chinese bank tokenises $600M in yuan bonds.* December 2025. [tradingview.com/news/cointelegraph](https://www.tradingview.com/news/cointelegraph:544bedc14094b:0-hua-xia-state-linked-chinese-bank-tokenizes-600m-in-yuan-bonds/)

19. <a id="ref-19"></a>European Central Bank. *Digital Euro — Progress Report, October 2025.* Earliest retail launch projected 2029. [ecb.europa.eu/euro/digital_euro/progress](https://www.ecb.europa.eu/euro/digital_euro/progress/html/ecb.deprp202510.en.html)

20. <a id="ref-20"></a>Cipollone, P. *Speech by Piero Cipollone, Member of the ECB Executive Board.* ECB, 19 December 2025. [ecb.europa.eu/press/key/date/2025/html/ecb.sp251219](https://www.ecb.europa.eu/press/key/date/2025/html/ecb.sp251219~fd2fee081a.en.html)

21. <a id="ref-21"></a>BIS Innovation Hub. *Project mBridge — cross-border CBDC platform (China, UAE, Thailand, Hong Kong).* [bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm](https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm) · *Project Dunbar — multi-CBDC settlements (Singapore, Australia, Malaysia, South Africa).* [bis.org/about/bisih/topics/cbdc/dunbar.htm](https://www.bis.org/about/bisih/topics/cbdc/dunbar.htm)
