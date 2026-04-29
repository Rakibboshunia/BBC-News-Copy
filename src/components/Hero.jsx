export default function Hero() {
  return (
    <div className="hero fade-up">
      <div className="hero-live-badge">
        <span className="hero-live-dot" />
        LIVE UPDATES
      </div>

      <h1 className="hero-title">
        World News <em style={{ fontStyle: "italic", color: "var(--accent-red)" }}>Today</em>
      </h1>

      <p className="hero-sub">
        Breaking stories. Global perspectives. Unfiltered truth.
      </p>
    </div>
  );
}
