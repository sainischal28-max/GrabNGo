import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">GrabNGo</h1>
          <p className="hero-tagline">Skip the Queue, Grab and Go</p>
          <p className="hero-description">
            Order food from your college cafeteria and pick it up instantly. No waiting, just delicious food!
          </p>
          <Link to="/login" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="hero-image">
          <div className="food-illustration">🍽️</div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose GrabNGo?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Quick & Easy</h3>
            <p>Order in seconds and skip the queue. Your food is ready when you arrive.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍕</div>
            <h3>Variety of Food</h3>
            <p>From South Indian to North Indian, Chinese to Desserts. Something for everyone!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Prices</h3>
            <p>Budget-friendly prices perfect for college students. Quality food at reasonable rates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Pickup Verification</h3>
            <p>Secure QR code-based pickup system. Only you can collect your order.</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Our Menu Categories</h2>
        <div className="categories-grid">
          <div className="category-badge">🌄 Breakfast</div>
          <div className="category-badge">🥘 South Indian</div>
          <div className="category-badge">🍛 North Indian</div>
          <div className="category-badge">🍲 Rice & Biryani</div>
          <div className="category-badge">🥢 Chinese</div>
          <div className="category-badge">🍿 Snacks</div>
          <div className="category-badge">☕ Beverages</div>
          <div className="category-badge">🍰 Desserts</div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Login</h3>
            <p>Sign in to your account</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Browse & Order</h3>
            <p>Choose your favorite dishes</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Checkout</h3>
            <p>Complete your order</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Pickup</h3>
            <p>Scan QR code and collect food</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Grab Your Favorite Food?</h2>
        <Link to="/login" className="cta-button-large">
          Start Ordering Now
        </Link>
      </section>
    </div>
  )
}
