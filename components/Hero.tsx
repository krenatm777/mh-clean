const RAIL = [
  { k: "Jurisdiction", v: "Incorporated in the AIFC" },
  { k: "Standards", v: "Aligned with AAOIFI" },
  { k: "Focus", v: "Real Economic Assets" },
  { k: "Markets", v: "Pathway to AIX listing" },
];

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal">
              Astana International Financial Centre
            </span>
            <h1 className="reveal d1">
              Institutional infrastructure for the tokenization of{" "}
              <em>real economic assets</em>
            </h1>
            <p className="hero-lead reveal d2">
              MusharaqaHub structures Shariah-compliant participation in
              productive, real-economy assets — anchoring digital ownership to
              identifiable value, transparent documentation, and clearly defined
              rights
            </p>
            <div className="hero-actions reveal d2">
              <a href="#contact" className="btn btn-primary">
                Discuss a partnership <span className="arw">&rarr;</span>
              </a>
              <a href="#rea" className="btn btn-ghost">
                Explore the platform
              </a>
            </div>
            <p className="hero-note reveal d3">
              For asset owners, institutional investors, and strategic partners
            </p>
          </div>

          <div className="hero-figure reveal d1" aria-hidden="true">
            <svg
              viewBox="0 0 320 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sig"
            >
              <g stroke="#003D27" strokeWidth="1.4" strokeLinejoin="round">
                <path className="draw" d="M160 20 L288 92 V236 L160 308 L32 236 V92 Z" />
                <path
                  className="draw"
                  d="M160 20 V96 M288 92 L224 128 M32 92 L96 128 M160 308 V232"
                />
                <path
                  className="draw"
                  d="M96 128 L96 272 M224 128 L224 272 M96 272 L160 308 L224 272"
                />
                <path className="draw" d="M96 128 L160 96 L224 128" />
              </g>
              <g>
                <path
                  className="gem"
                  d="M160 130 L206 170 L160 258 L114 170 Z"
                  fill="rgba(239,204,4,0.10)"
                  stroke="#B8901F"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  className="gem"
                  d="M114 170 L160 188 L206 170 M160 130 L160 188 M160 188 L160 258"
                  stroke="#B8901F"
                  strokeWidth="1.2"
                />
                <circle cx="160" cy="188" r="3" fill="#EFCC04" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div className="rail">
        <div className="shell">
          <div className="rail-grid">
            {RAIL.map((r) => (
              <div className="rail-item" key={r.k}>
                <div className="k">{r.k}</div>
                <div className="v">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
