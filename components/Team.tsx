"use client";

import { useEffect, useState } from "react";

type Member = {
  id: string;
  cls: string;
  photo: string;
  role: string;
  name: string;
  bio: string;
};

const MEMBERS: Member[] = [
  {
    id: "baurzhan",
    cls: "m-t1",
    photo: "/team/baurzhan.jpg",
    role: "Chairman",
    name: "Baurzhan Sartbayev",
    bio: "A public-sector leader whose career spans more than three decades, from head of legal departments to Member of the Mazhilis (Parliament) of Kazakhstan. He has held senior roles across the country\u2019s state institutions \u2014 including the Ministry of Finance and the Presidential Administration \u2014 and chaired the board of KAZAKH INVEST, the national foreign-investment agency. He holds a law degree from Karaganda State University and a Master of Public Administration from KIMEP.",
  },
  {
    id: "renat",
    cls: "m-t2",
    photo: "/team/renat.jpg",
    role: "Chief Executive Officer",
    name: "Renat Kudakaev",
    bio: "An international investment professional with 20+ years of cross-border experience across Latin America, the Gulf, Central Asia, and the CIS. He specializes in Shariah-compliant digital-asset tokenization and Islamic finance, structuring real-world-asset mandates across intellectual property, real estate, and commodities. At MusharaqaHub he leads the company\u2019s overall strategy, product architecture, and investor relations, and holds a formal qualification in Islamic Finance from Plekhanov Russian University of Economics.",
  },
  {
    id: "makarov",
    cls: "m-b1",
    photo: "/team/makarov.jpg",
    role: "Chief Technology Officer",
    name: "Vladimir Makarov",
    bio: "A technologist with a background in law and nearly two decades in software development across Central Asia. Since 2006 he has delivered IT projects, CRM and ERP systems, and is a recognized specialist in blockchain technology and tokenization. At MusharaqaHub he leads platform engineering and the tokenization infrastructure \u2014 its architecture, security, and reliability.",
  },
  {
    id: "temirkhan",
    cls: "m-b2",
    photo: "/team/temir.jpg",
    role: "Chief Business Development Officer",
    name: "Temirkhan Konkashev",
    bio: "An entrepreneur and former KPMG consultant, with expertise in artificial intelligence and venture building. At MusharaqaHub he leads business development, partnerships, and market expansion.",
  },
];

export function Team() {
  const [sheetId, setSheetId] = useState<string | null>(null);
  const active = MEMBERS.find((m) => m.id === sheetId) ?? null;

  // Lock body scroll while the sheet is open
  useEffect(() => {
    if (sheetId) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [sheetId]);

  // Close on Escape
  useEffect(() => {
    if (!sheetId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetId]);


  return (
    <section
      className="block"
      id="team"
      style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)" }}
    >
      <div className="shell">
        <div className="block-head reveal">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title">The people behind the structure</h2>
          <p className="section-lead">
            MusharaqaHub brings together a multidisciplinary team across Islamic
            finance, governance, investment structuring, and technology
          </p>
        </div>

        <div className="team-grid reveal">
          {MEMBERS.map((m) => (
            <div
              key={m.id}
              className={`member ${m.cls}`}
              tabIndex={0}
              role="button"
              aria-label={`${m.name} — view bio`}
              onClick={() => setSheetId(m.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSheetId(m.id);
                }
              }}
            >
              <div className="photo">
                <span className="bio-cue">＋ Bio</span>
                <img src={m.photo} alt={m.name} />
              </div>
              <div className="info">
                <div className="role">{m.role}</div>
                <h3>{m.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="team-note">
          Full team and advisory details are shared selectively through
          partnership discussions
        </p>
      </div>

      {/* Bottom sheet (mobile) / centered card (desktop keyboard) */}
      <div
        className={`bio-sheet-backdrop${active ? " open" : ""}`}
        onClick={() => setSheetId(null)}
      >
        <div
          className={`bio-sheet${active ? " open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={active ? active.name : undefined}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="handle" />
          <button
            className="s-close"
            aria-label="Close"
            onClick={() => setSheetId(null)}
          >
            &times;
          </button>
          {active && (
            <>
              <div className="s-head">
                <img className="s-photo" src={active.photo} alt="" />
                <div>
                  <div className="s-role">{active.role}</div>
                  <h3 className="s-name">{active.name}</h3>
                </div>
              </div>
              <div className="s-rule" />
              <p className="s-bio">{active.bio}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
