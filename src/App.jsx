import "./styles/global.css";
import "./styles/components.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import WorldNewsSection from "./pages/WorldNewsSection";
import AsiaNewsSection from "./pages/AsiaNewsSection";
import MustSeeSection from "./pages/MustSeeSection";
import MostWatchedSection from "./pages/MostWatchedSection";
import FullStorySection from "./pages/FullStorySection";
import WorldPicturesSection from "./pages/WorldPicturesSection";

export default function App() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Hero Banner ── */}
      <Hero />

      {/* ── Content ── */}
      <main style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* World News */}
        <WorldNewsSection />

        <div className="section-divider" />

        {/* Asia News */}
        <AsiaNewsSection />

        <div className="section-divider" />

        {/* Must See */}
        <MustSeeSection />

        {/* Most Watched + Full Story side by side */}
        <div className="split-section">
          <MostWatchedSection />
          <FullStorySection />
        </div>

        <div className="section-divider" />

        {/* World In Pictures */}
        <WorldPicturesSection />

      </main>

      {/* ── Footer ── */}
      <Footer />

    </div>
  );
}
