function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Fresh & Hygienic Mutton & Chicken Delivered 🐔</h1>
        <p>Premium Quality • Same Day Delivery • Best Price Guarantee</p>
        <a href="/products" className="hero-btn">View Products</a>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <h3>🥩 Fresh Daily Cut</h3>
          <p>We provide freshly cut chicken every day with proper hygiene.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick delivery within your area in less than 60 minutes.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Affordable and competitive pricing without compromising quality.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;