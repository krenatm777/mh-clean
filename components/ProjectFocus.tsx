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
    text: "Operating assets that generate tangible economic output",
  },
];

export function ProjectFocus() {
  return (
    <section className="block" id="rea">
      <div className="shell">
        <div className="rea-wrap">
          <div className="block-head reveal">
            <span className="eyebrow">Real World Assets</span>
            <h2 className="section-title">
              Real-world assets that actually produce
            </h2>
            <p className="section-lead">
              Real World Assets (RWA) are tangible, income-generating assets
              from the productive economy, brought on-chain so that each token
              is backed by a documented share in a specific asset. We focus on
              value that is created, not merely traded
            </p>
            <div className="rea-callout">
              <p>
                <strong>The distinction matters.</strong> Participation is tied to output and ownership of real assets, and each class is structured and independently valued by its own methodology — keeping structures transparent, asset-linked, and aligned with Shariah principles
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
