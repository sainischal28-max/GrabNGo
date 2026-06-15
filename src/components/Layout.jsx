import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ isLoggedIn, userType, onLogout }) {
  return (
    <div className="layout">
      <NavBar isLoggedIn={isLoggedIn} userType={userType} onLogout={onLogout} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
