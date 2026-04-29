import { NAV_LINKS, NEWS_TABS } from "../data/newsData";

export default function Navbar() {
  return (
    <>
      {/* ── Top Bar ── */}
      <nav className="navbar-top">
        <div className="inner">
          <div className="brand">
            <span className="brand-main">DAY-NIGHT</span>
            <span className="brand-sub">NEWS</span>
          </div>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Category Bar ── */}
      <nav className="navbar-cat">
        <div className="inner">
          <span className="cat-brand">NEWS</span>
          <ul className="cat-links">
            {NEWS_TABS.map((tab) => (
              <li key={tab.label}>
                <a href={tab.href} target="_blank" rel="noopener noreferrer">
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
