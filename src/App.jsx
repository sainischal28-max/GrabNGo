import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import FoodMenu from './pages/FoodMenu'
import CartPage from './pages/CartPage'
import QRVerification from './pages/QRVerification'
import PaymentSuccess from './pages/PaymentSuccess'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import MenuManagement from './pages/MenuManagement'
import OrderTracking from './pages/OrderTracking'
import OrderHistory from './pages/OrderHistory'
import './App.css'

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem('isLoggedIn') === 'true'
)

const [userType, setUserType] = useState(
  localStorage.getItem('userType')
)

const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
  localStorage.getItem('isAdminLoggedIn') === 'true'
)

const handleLogin = (type) => {
  setIsLoggedIn(true)
  setUserType(type)

  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userType', type)
  }

  const handleLogout = () => {
  setIsLoggedIn(false)
  setUserType(null)

  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userType')
}

  const handleAdminLogin = () => {
  setIsAdminLoggedIn(true)
  localStorage.setItem('isAdminLoggedIn', 'true')
}

  
  const handleAdminLogout = () => {
  setIsAdminLoggedIn(false)
  localStorage.removeItem('isAdminLoggedIn')
}

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} userType={userType} onLogout={handleLogout} />}>
            <Route index element={<Landing />} />
            <Route path="login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
            
            {/* Student Routes */}
            {isLoggedIn && userType === 'student' && (
              <>
                <Route path="dashboard" element={<StudentDashboard />} />
                <Route path="menu" element={<FoodMenu />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="qr/:orderId" element={<QRVerification />} />
                <Route path="payment-success/:orderId" element={<PaymentSuccess />} />
                <Route path="order-tracking" element={<OrderTracking />} />
                <Route path="order-history" element={<OrderHistory />} />
              </>
            )}
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={!isAdminLoggedIn ? <AdminLogin onLogin={handleAdminLogin} /> : <Navigate to="/admin/dashboard" />} />
          {isAdminLoggedIn && (
            <Route path="/admin" element={<Layout isLoggedIn={isAdminLoggedIn} userType="admin" onLogout={handleAdminLogout} />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="menu" element={<MenuManagement />} />
              <Route path="orders" element={<OrderTracking />} />
            </Route>
          )}

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
