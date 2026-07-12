const ASSETS = [
  {
    num: "01",
    title: "Intellectual property",
    text: "Patents and licensable know-how with revenue potential",
  },
  {
    num: "02",
    title: "Real estate",
    text: "Income-producing property and development",
  },
  {
    num: "03",
    title: "Commodities",
    text: "Tangible, deliverable goods within compliant structures",
  },
  {
    num: "04",
    title: "Productive enterprises",
    text: "Operating assets that generate real economic output",
  },
];

export function ProjectFocus() {
  return (
    <section className="block" id="rea">
      <div className="shell">
        <div className="rea-wrap">
          <div className="block-head reveal">
            <span className="eyebrow">Real Economic Assets</span>
            <h2 className="section-title">
              Beyond RWA — assets that actually produce
            </h2>
            <p className="section-lead">
              Real Economic Assets (REA) is our term for purely productive,
              real-economy assets, distinct from the broader universe of
              financial instruments often grouped under &ldquo;RWA.&rdquo; We
              focus on value that is created, not merely traded
            </p>
            <div className="rea-callout">
              <p>
                <strong>The distinction matters.</strong> Participation is tied
                to output and ownership of real assets, keeping structures
                transparent, asset-linked, and aligned with Shariah principles
              </p>
            </div>
          </div>
          <div className="rea-assets reveal d1">
            {ASSETS.map((a) => (
              <div className="asset" key={a.num}>
                <div className="num">{a.num}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
