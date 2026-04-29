import SectionHeader from "../components/SectionHeader";
import { FULL_STORY } from "../data/newsData";

const FALLBACK = "https://placehold.co/400x148/0f1117/0891b2?text=Story";

export default function FullStorySection() {
  return (
    <section className="fade-up fade-up-d4">
      <SectionHeader title="Full Story" accent="var(--accent-cyan)" />
      <div className="story-grid">
        {FULL_STORY.map((item) => (
          <a
            key={item.id}
            className="story-card"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.img}
              alt={item.label}
              onError={(e) => { e.target.src = FALLBACK; }}
            />
            <p className="story-card-label">{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
