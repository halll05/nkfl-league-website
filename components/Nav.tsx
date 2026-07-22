const links = [
  ["Standings", "#standings"],
  ["Matchups", "#matchups"],
  ["Power", "#power"],
  ["Awards", "#awards"],
  ["Rivalries", "#rivalries"],
  ["Rules", "#rules"]
];

export function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="NKFL home">
        <span className="brand-mark">N</span>
        <span>
          <strong>{process.env.NEXT_PUBLIC_LEAGUE_ABBREVIATION || "NKFL"}</strong>
          <small>KEEPERS. CHAOS. GLORY.</small>
        </span>
      </a>
      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
