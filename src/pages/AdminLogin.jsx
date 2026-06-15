import { useState } from 'react'
import './AdminLogin.css'

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo password
    if (password === 'admin123') {
      onLogin()
      window.location.href = '/admin/dashboard'
    } else {
      setError('Invalid password')
      setTimeout(() => setError(''), 3000)
    }
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h1 className="admin-title">GrabNGo Admin</h1>
        <p className="admin-subtitle">Cafeteria Management System</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
            />
            {error && <span className="error-text">{error}</span>}
          </div>

          <button type="submit" className="admin-login-button">
            Login as Admin
          </button>
        </form>

        <p className="demo-note">
          <strong>Demo:</strong> Password is <code>admin123</code>
        </p>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
