const PRINCIPLES = [
  {
    title: "Ethical by structure",
    text: "Built on Musharakah participation and profit-and-loss sharing — not speculative or interest-based exposure",
  },
  {
    title: "Anchored to real assets",
    text: "Every position is linked to an identifiable, income-generating real economic asset with documented rights",
  },
  {
    title: "Digital by infrastructure",
    text: "Built on permissioned, identity-gated token standards (ERC-3643) — AIFC rules require every holder to be identified, keeping ownership transparent within a closed, compliant network",
  },
];

export function About() {
  return (
    <section className="block" id="about">
      <div className="shell">
        <div className="block-head reveal">
          <span className="eyebrow">The platform</span>
          <h2 className="section-title">
            A disciplined structure for real-economy participation
          </h2>
          <p className="section-lead">
            MusharaqaHub connects capital to identifiable, productive assets
            through a Shariah-compliant framework — ethical by structure,
            anchored to real assets, and digital by infrastructure
          </p>
        </div>
        <div className="principles reveal">
          {PRINCIPLES.map((p) => (
            <div className="principle" key={p.title}>
              <div className="mark" />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
