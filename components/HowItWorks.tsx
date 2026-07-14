const STEPS = [
  {
    n: "Step 01",
    title: "Asset onboarding",
    text: "A real economic asset is identified, documented, and structured for compliance",
  },
  {
    n: "Step 02",
    title: "Shariah structuring",
    text: "Ownership and returns are arranged under Musharakah profit-and-loss-sharing principles",
  },
  {
    n: "Step 03",
    title: "Tokenized participation",
    text: "Each token represents a share of participation in a Musharakah structure — an equity interest legally backed by documented title, not a debt claim",
  },
  {
    n: "Step 04",
    title: "Transparent records",
    text: "Rights, obligations, and ownership are recorded with documentation discipline",
  },
];

export function HowItWorks() {
  return (
    <section
      className="block"
      id="how"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="shell">
        <div className="block-head reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">
            From a real asset to disciplined participation
          </h2>
        </div>
        <div className="steps reveal">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
