export default function SectionHeader({ title, accent = "var(--accent-red)" }) {
  return (
    <div className="section-header">
      <span
        className="section-accent-bar"
        style={{ background: accent }}
      />
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
