import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import { WORLD_NEWS } from "../data/newsData";

export default function WorldNewsSection() {
  return (
    <section className="fade-up fade-up-d1">
      <SectionHeader title="World News" accent="var(--accent-red)" />
      <div className="news-grid">
        {WORLD_NEWS.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
