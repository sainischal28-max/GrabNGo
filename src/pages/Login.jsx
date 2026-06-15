import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 4) newErrors.password = 'Password must be at least 4 characters'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      onLogin('student')
      navigate('/dashboard')
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">GrabNGo</h1>
        <p className="login-subtitle">Skip the Queue, Grab and Go</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@college.edu"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-note">
          <strong>Demo Account:</strong> Use any email and password (min. 4 characters)
        </p>

        <div className="admin-link">
          <p>Are you an admin? <a href="/admin">Admin Login</a></p>
        </div>
      </div>
    </div>
  )
}
