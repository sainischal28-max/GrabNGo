import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './NavBar.css'

export default function NavBar({ isLoggedIn, userType, onLogout }) {
  const { cart } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">GrabNGo</span>
          <span className="logo-emoji">🍽️</span>
        </Link>

        <div className="nav-menu">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/login" className="nav-link login-link">Login</Link>
            </>
          ) : userType === 'student' ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/menu" className="nav-link">Menu</Link>
              <Link to="/order-tracking" className="nav-link">Orders</Link>
              <Link to="/cart" className="nav-link cart-link">
                Cart ({cart.length})
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : userType === 'admin' ? (
            <>
              <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/admin/menu" className="nav-link">Menu</Link>
              <Link to="/admin/orders" className="nav-link">Orders</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : null}
        </div>

        <div className="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
