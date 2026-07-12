const NAV = [
  { href: "#about", label: "Platform" },
  { href: "#rea", label: "Real Assets" },
  { href: "#governance", label: "Governance" },
  { href: "#team", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site">
      <div className="shell">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <img className="brand-mark" src="/logo-mono-white.svg" alt="" />
              <span className="brand-name ondark">
                Musharaqa<b>Hub</b>
              </span>
            </div>
            <p>
              Shariah-compliant infrastructure for the tokenization of real
              economic assets.
            </p>
          </div>
          <nav className="foot-nav" aria-label="Footer">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="disclaimer">
          The information on this website is provided for general informational
          purposes only and does not constitute an offer, solicitation,
          investment advice, or legal advice. Forward-looking statements,
          including those regarding regulatory status, Shariah supervision, and
          any prospective listing, are subject to change and completion of the
          relevant processes.
        </p>
        <p className="foot-bottom">
          © 2026 MusharaqaHub Plc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
