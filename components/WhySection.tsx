const POINTS = [
  {
    mark: "— Positioning",
    title: "Institutional mindset",
    text: "Built around clarity, governance, and long-term credibility rather than speculative narratives",
  },
  {
    mark: "— Focus",
    title: "Real-economy value",
    text: "Value tied to productive assets and real economic activity, not speculative cycles",
  },
  {
    mark: "— Foundation",
    title: "Ethical by principle",
    text: "Participation-based finance reflecting fairness, risk sharing, and asset linkage",
  },
  {
    mark: "— Technology",
    title: "Restraint by design",
    text: "Infrastructure that serves transparency and process, used as a tool rather than noise",
  },
];

export function WhySection() {
  return (
    <section className="block" id="why">
      <div className="shell">
        <div className="block-head reveal">
          <span className="eyebrow">Why MusharaqaHub</span>
          <h2 className="section-title">Substance over narrative</h2>
        </div>
        <div className="why-grid reveal">
          {POINTS.map((p) => (
            <div className="why-item" key={p.title}>
              <div className="mark">{p.mark}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
