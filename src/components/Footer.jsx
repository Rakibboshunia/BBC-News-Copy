import { NAV_LINKS } from "../data/newsData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">DAY-NIGHT NEWS</div>
      <p className="footer-tagline">Breaking stories. Global perspectives. Unfiltered truth.</p>

      <ul className="footer-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="footer-copy">
        © 2024 Day-Night News. All rights reserved Boshunia.
      </p>
    </footer>
  );
}
