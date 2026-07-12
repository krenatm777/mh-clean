"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "Platform" },
  { href: "#rea", label: "Real Assets" },
  { href: "#governance", label: "Governance" },
  { href: "#team", label: "Leadership" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site${scrolled ? " scrolled" : ""}`} id="top">
      <div className="shell nav">
        <a href="#top" className="brand" aria-label="MusharaqaHub home">
          <img className="brand-mark" src="/logo-mono-black.svg" alt="" />
          <span className="brand-name">
            Musharaqa<b>Hub</b>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#about" className="btn btn-ghost">
            Learn more
          </a>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </div>
    </header>
  );
}
