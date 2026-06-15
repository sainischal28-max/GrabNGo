import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GrabNGo</h3>
          <p>Skip the Queue, Grab and Go</p>
          <p className="description">Order delicious food from your college cafeteria and pick it up instantly. No waiting, just great food!</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Breakfast</a></li>
            <li><a href="#">South Indian</a></li>
            <li><a href="#">North Indian</a></li>
            <li><a href="#">Beverages</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">in</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} GrabNGo. All rights reserved.</p>
        <p>This is a prototype. No actual transactions will be made.</p>
      </div>
    </footer>
  )
}
