const ITEMS = [
  {
    k: "Jurisdiction",
    title: "AIFC public company",
    text: "Incorporated in the Astana International Financial Centre, operating within the AFSA regulatory framework and English common law",
  },
  {
    k: "Standards",
    title: "AAOIFI alignment",
    text: "Product structures are developed in alignment with AAOIFI standards for Islamic finance",
  },
  {
    k: "Shariah",
    title: "Participation-based structuring",
    text: "Transactions are structured under Shariah supervision, following Musharakah profit-and-loss-sharing principles and AAOIFI standards",
  },
  {
    k: "Markets",
    title: "AIX listing pathway",
    text: "Preparing for a listing on the Astana International Exchange (AIX), with a pre-IPO pathway in progress",
  },
];

export function Governance() {
  return (
    <section className="block governance" id="governance">
      <img
        className="watermark"
        src="/logo-mono-white.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="shell">
        <div className="block-head reveal">
          <span className="eyebrow on-dark">Governance &amp; compliance</span>
          <h2 className="section-title">Built for institutional scrutiny</h2>
          <p className="gov-lead">
            Structure, jurisdiction, and standards are treated as first-class
            design constraints — not afterthoughts
          </p>
        </div>
        <div className="gov-grid reveal">
          {ITEMS.map((it) => (
            <div className="gov-item" key={it.k}>
              <div className="k">{it.k}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
