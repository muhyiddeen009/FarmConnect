"use client";

import { useMemo, useState } from "react";

type Produce = {
  name: string;
  farm: string;
  location: string;
  price: string;
  unit: string;
  category: string;
  image: string;
  badge?: string;
};

const produce: Produce[] = [
  {
    name: "Heirloom tomatoes",
    farm: "Green Valley Farm",
    location: "Nakuru County",
    price: "KES 80",
    unit: "/ kg",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85",
    badge: "Just harvested",
  },
  {
    name: "Sweet yellow bananas",
    farm: "Maua Family Growers",
    location: "Meru County",
    price: "KES 120",
    unit: "/ bunch",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Organic green kale",
    farm: "Sunrise Acres",
    location: "Kiambu County",
    price: "KES 45",
    unit: "/ bunch",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85",
    badge: "Organic",
  },
  {
    name: "Golden maize",
    farm: "Rift Harvest Co-op",
    location: "Uasin Gishu County",
    price: "KES 65",
    unit: "/ kg",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Red onions",
    farm: "Kijani Fields",
    location: "Nairobi County",
    price: "KES 95",
    unit: "/ kg",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fresh strawberries",
    farm: "Highland Berry Farm",
    location: "Nyandarua County",
    price: "KES 350",
    unit: "/ punnet",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85",
    badge: "Limited harvest",
  },
];

const categories = ["All produce", "Vegetables", "Fruit", "Grains"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All produce");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProduce = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return produce.filter((item) => {
      const matchesCategory = category === "All produce" || item.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${item.name} ${item.farm} ${item.location} ${item.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="FarmConnect home">
          <span className="brand-mark" aria-hidden="true">f</span>
          <span>farm<span className="brand-light">connect</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          <a href="#marketplace" onClick={() => setMenuOpen(false)}>Marketplace</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Our community</a>
        </nav>
        <a className="button button-dark header-cta" href="mailto:hello@farmconnect.ke?subject=Join%20FarmConnect">Join FarmConnect <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A better harvest starts here</div>
          <h1>Good food starts<br />with <span>good connections.</span></h1>
          <p className="hero-description">Meet the people who grow your food. Find fresh, local produce and build a more connected food community.</p>
          <div className="hero-actions">
            <a className="button button-green" href="#marketplace">Explore the market <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#how-it-works">How it works <span aria-hidden="true">→</span></a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true"><span>👩🏽‍🌾</span><span>👨🏿‍🌾</span><span>👩🏾‍🌾</span><span>+</span></div>
            <div><strong>Growing together</strong><small>Farmers, families & local businesses</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-image" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90" alt="Sunlit green fields on a farm" />
          <div className="image-overlay" />
          <div className="harvest-note"><span className="note-icon">✳</span><div><strong>Grown with care</strong><small>Picked fresh, shared locally</small></div></div>
          <div className="floating-card"><span className="floating-icon">🌱</span><div><strong>From farm to table</strong><small>Closer than you think</small></div></div>
          <span className="image-caption">Rooted in community. Growing for tomorrow.</span>
        </div>
        <div className="hero-bottom"><span>01 — LOCAL FOOD, REAL PEOPLE</span><span>Scroll to discover <span aria-hidden="true">↓</span></span></div>
      </section>

      <section className="market-section section-pad" id="marketplace">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Straight from the source</div><h2>A market that <span>feels closer.</span></h2></div>
          <p>Discover what’s fresh, support local farms, and know exactly where your food comes from.</p>
        </div>
        <div className="market-controls">
          <div className="category-tabs" role="group" aria-label="Filter produce by category">
            {categories.map((item) => <button key={item} className={category === item ? "category-tab active" : "category-tab"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <label className="search-box"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search produce or location" aria-label="Search produce or location" /><kbd>⌘ K</kbd></label>
        </div>
        <div className="produce-grid">
          {filteredProduce.map((item) => (
            <article className="produce-card" key={item.name}>
              <div className="produce-image-wrap"><img src={item.image} alt={item.name} className="produce-image" />{item.badge && <span className="produce-badge">{item.badge}</span>}<button className="save-button" aria-label={`Save ${item.name}`} onClick={(event) => { const button = event.currentTarget; button.classList.toggle("saved"); button.textContent = button.classList.contains("saved") ? "♥" : "♡"; }}>♡</button></div>
              <div className="produce-info"><div className="produce-title-row"><h3>{item.name}</h3><span className="price">{item.price}<small>{item.unit}</small></span></div><div className="farm-line"><span className="farm-dot" /> {item.farm}</div><div className="location-line"><span aria-hidden="true">⌖</span> {item.location}<a href={`mailto:hello@farmconnect.ke?subject=${encodeURIComponent(`Enquiry about ${item.name}`)}`} aria-label={`Enquire about ${item.name}`}>Enquire <span aria-hidden="true">↗</span></a></div></div>
            </article>
          ))}
        </div>
        {filteredProduce.length === 0 && <div className="empty-state"><span>🌿</span><h3>No produce found just yet</h3><p>Try a different search or category.</p><button className="button button-dark" onClick={() => { setQuery(""); setCategory("All produce"); }}>Clear filters</button></div>}
        <div className="market-footer"><span>Showing {filteredProduce.length} fresh finds</span><a className="text-link" href="mailto:hello@farmconnect.ke?subject=List%20my%20produce">Have a farm? List your produce <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="community-section" id="how-it-works">
        <div className="community-photo"><img src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a4b70?auto=format&fit=crop&w=1200&q=85" alt="Farmer tending crops in a green field" /><div className="photo-tag">A community that grows together <span>✳</span></div></div>
        <div className="community-copy" id="community"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> More than a marketplace</div><h2>When farmers thrive,<br />we all <em>flourish.</em></h2><p>FarmConnect brings growers and buyers closer. Less distance between the people who grow our food and the people who enjoy it means a stronger, fairer local food system.</p>
          <div className="community-points"><div><span className="point-icon">01</span><div><strong>Know your farmer</strong><small>Real people, real farms, right in your region.</small></div></div><div><span className="point-icon">02</span><div><strong>Buy with confidence</strong><small>Fresh local produce and clear, upfront pricing.</small></div></div><div><span className="point-icon">03</span><div><strong>Grow together</strong><small>Every connection helps local communities thrive.</small></div></div></div>
          <a className="button button-cream" href="mailto:hello@farmconnect.ke?subject=Tell%20me%20about%20FarmConnect">Our story <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="join-section"><div className="join-inner"><div className="join-flower" aria-hidden="true">✳</div><div className="eyebrow"><span className="eyebrow-dot" /> Your next good thing</div><h2>Let’s grow something<br /><span>good together.</span></h2><p>Whether you grow it, cook it, or simply love good food — there’s a place for you here.</p><div className="join-actions"><a className="button button-green" href="mailto:hello@farmconnect.ke?subject=I%20am%20a%20farmer">I’m a farmer <span aria-hidden="true">↗</span></a><a className="button button-outline" href="#marketplace">I’m here to shop <span aria-hidden="true">↗</span></a></div></div></section>

      <footer className="site-footer"><div className="footer-top"><a className="brand brand-footer" href="#home"><span className="brand-mark" aria-hidden="true">f</span><span>farm<span className="brand-light">connect</span></span></a><p>Good food. Good people.<br />A better way to grow.</p><a className="footer-email" href="mailto:hello@farmconnect.ke">Say hello <span aria-hidden="true">↗</span></a></div><div className="footer-bottom"><span>© 2026 FarmConnect. Growing together.</span><span>Made for the people who feed us <span className="heart">♥</span></span></div></footer>
    </main>
  );
}
