import SectionHeader from "../components/SectionHeader";
import { WORLD_PICTURES } from "../data/newsData";

const FALLBACK = "https://placehold.co/400x190/0f1117/059669?text=Picture";

export default function WorldPicturesSection() {
  return (
    <section className="fade-up fade-up-d5">
      <SectionHeader title="World In Pictures" accent="var(--accent-emerald)" />
      <div className="picture-grid">
        {WORLD_PICTURES.map((item) => (
          <a
            key={item.id}
            className="picture-card"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.img}
              alt={item.label}
              onError={(e) => { e.target.src = FALLBACK; }}
            />
            <div className="picture-overlay">{item.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
