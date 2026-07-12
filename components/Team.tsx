const MEMBERS = [
  {
    cls: "m-t1",
    photo: "/team/yerlan.jpg",
    role: "Chairman",
    name: "Prof. Yerlan Baidaulet",
    bio: "Provides leadership across vision, governance, and Islamic-finance strategy",
  },
  {
    cls: "m-t2",
    photo: "/team/baurzhan.jpg",
    role: "Chief Executive Officer",
    name: "Baurzhan Sartbayev",
    bio: "Leads execution, operations, and the company\u2019s path to listing",
  },
  {
    cls: "m-b1",
    photo: "/team/renat.jpg",
    role: "Chief Investment Officer",
    name: "Renat Kudakaev",
    bio: "Directs investment structuring, product architecture, and capital strategy",
  },
  {
    cls: "m-b2",
    photo: "/team/makarov.jpg",
    role: "Chief Technology Officer",
    name: "Vladimir Makarov",
    bio: "Leads platform engineering and the underlying tokenization infrastructure",
  },
  {
    cls: "m-b3",
    photo: "/team/vlad.jpg",
    role: "Chief Marketing Officer",
    name: "Vlad Sapozhnikoff",
    bio: "Leads brand, growth, and market positioning across channels",
  },
];

export function Team() {
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
            <div className={`member ${m.cls}`} key={m.name}>
              <div className="photo">
                <img src={m.photo} alt={m.name} />
              </div>
              <div className="info">
                <div className="role">{m.role}</div>
                <h3>{m.name}</h3>
                <p>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="team-note">
          Full team and advisory details are shared selectively through
          partnership discussions
        </p>
      </div>
    </section>
  );
}
