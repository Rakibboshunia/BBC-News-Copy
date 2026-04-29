const FALLBACK = (label) =>
  `https://placehold.co/600x205/0f1117/c8102e?text=${encodeURIComponent(label)}`;

export default function NewsCard({ href, img, title, desc, tag }) {
  return (
    <a
      className="news-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="news-card-img-wrap">
        <img
          src={img}
          alt={title}
          onError={(e) => { e.target.src = FALLBACK(tag); }}
        />
        <span className="news-card-tag">{tag}</span>
      </div>
      <div className="news-card-body">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-desc">{desc}</p>
      </div>
    </a>
  );
}
