import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">📍</span>
          <span>Local<span>Lens</span></span>
        </div>

        <div className="nav-links">
          <Link to="/">Discover</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="badge">✈ Discover authentic local experiences</div>

            <h1>
              Travel Like <br />
              a <span>Local</span>
            </h1>

            <p>
              Uncover hidden gems, savor traditional flavors, and experience
              destinations through the eyes of those who call them home.
            </p>

            <div className="search-box">
              <input placeholder="Search destinations, cities, or experiences..." />
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>

      <div className="category-section">
        {[
          ["🍜", "Food"],
          ["🏃", "Adventure"],
          ["🎭", "Culture"],
          ["🌿", "Nature"],
          ["📸", "Photography"],
          ["🌙", "Nightlife"],
          ["🏛️", "History"],
          ["🧘", "Wellness"],
        ].map((item, index) => (
          <div className="category-card" key={index}>
            <div>{item[0]}</div>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>

      <section className="why-section">
        <h2>Why LocalLens?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>✅ Verified & Trusted</h3>
            <p>All places are verified by admin for authenticity and quality.</p>
          </div>

          <div className="why-card">
            <h3>👥 Local Insights</h3>
            <p>Get insider tips and hidden spot recommendations from guides.</p>
          </div>

          <div className="why-card">
            <h3>🗺️ Personalized Plans</h3>
            <p>Itineraries tailored to your interests, budget, and time.</p>
          </div>

          <div className="why-card">
            <h3>💚 Community Driven</h3>
            <p>Support local communities and discover offbeat experiences.</p>
          </div>
        </div>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>

        <div className="destination-grid">
          {[
            ["Ratnagiri", "Coastal Beauty"],
            ["Mahabaleshwar", "Nature Paradise"],
            ["Goa", "Beach Vibes"],
            ["Munnar", "Green Hills"],
            ["Jaipur", "Royal Culture"],
          ].map((item, index) => (
            <div className="destination-card" key={index}>
              <div className="destination-overlay">
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>📍 LocalLens</h3>
          <p>Discover hidden gems and travel like a true local.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Explore</p>
          <p>About Us</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Newsletter</h4>
          <input placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default Home;