import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './StudentDashboard.css'

export default function StudentDashboard() {
  const { orders } = useCart()
  const navigate = useNavigate()

  const recentOrders = orders.slice(0, 5)

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome to GrabNGo! 👋</h1>
        <p>Quick access to your orders and favorites</p>
      </div>

      <div className="dashboard-grid">
        <Link to="/menu" className="dashboard-card order-card">
          <div className="card-icon">🍔</div>
          <h3>Order Food</h3>
          <p>Browse menu and place new order</p>
          <span className="card-arrow">→</span>
        </Link>

        <Link to="/cart" className="dashboard-card cart-card">
          <div className="card-icon">🛒</div>
          <h3>View Cart</h3>
          <p>Check your shopping cart</p>
          <span className="card-arrow">→</span>
        </Link>

        <Link to="/order-tracking" className="dashboard-card tracking-card">
          <div className="card-icon">📍</div>
          <h3>Track Order</h3>
          <p>Track your current order status</p>
          <span className="card-arrow">→</span>
        </Link>

        <Link to="/order-history" className="dashboard-card history-card">
          <div className="card-icon">📋</div>
          <h3>Order History</h3>
          <p>View past orders and reorder</p>
          <span className="card-arrow">→</span>
        </Link>
      </div>

      {recentOrders.length > 0 && (
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <div className="orders-list">
            {recentOrders.map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-info">
                  <h4>{order.id}</h4>
                  <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="order-items-count">
                  {order.items.length} items
                </div>
                <div className="order-total">
                  ₹{order.total}
                </div>
                <div className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {recentOrders.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🥗</div>
          <h2>No Orders Yet</h2>
          <p>Start by ordering your favorite food!</p>
          <Link to="/menu" className="btn-primary">
            Browse Menu
          </Link>
        </div>
      )}
    </div>
  )
}
