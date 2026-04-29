import SectionHeader from "../components/SectionHeader";
import { MUST_SEE } from "../data/newsData";

const FALLBACK = "https://placehold.co/400x155/0f1117/d4a012?text=Must+See";

export default function MustSeeSection() {
  return (
    <section className="fade-up fade-up-d3">
      <SectionHeader title="Must See" accent="var(--accent-amber)" />
      <div className="must-grid">
        {MUST_SEE.map((item) => (
          <a
            key={item.id}
            className="must-card"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.img}
              alt={item.label}
              onError={(e) => { e.target.src = FALLBACK; }}
            />
            <p className="must-card-label">{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
