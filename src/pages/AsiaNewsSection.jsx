import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import { ASIA_NEWS } from "../data/newsData";

export default function AsiaNewsSection() {
  return (
    <section className="fade-up fade-up-d2">
      <SectionHeader title="Asia News" accent="var(--accent-orange)" />
      <div className="news-grid">
        {ASIA_NEWS.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
