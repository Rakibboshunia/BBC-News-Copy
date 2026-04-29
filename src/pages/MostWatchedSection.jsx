import SectionHeader from "../components/SectionHeader";
import { MOST_WATCHED } from "../data/newsData";

export default function MostWatchedSection() {
  return (
    <section className="split-left fade-up fade-up-d4">
      <SectionHeader title="Most Watched" accent="var(--accent-violet)" />
      <div className="most-watched">
        {MOST_WATCHED.map((item) => (
          <a
            key={item.id}
            className="most-watched-item"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="most-watched-num">{item.id}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
