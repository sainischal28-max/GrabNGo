import { useCart } from '../context/CartContext'
import './AdminDashboard.css'

export default function AdminDashboard() {
  const { orders, menu } = useCart()

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = orders.filter((o) => o.status === 'Preparing').length
  const readyOrders = orders.filter((o) => o.status === 'Ready').length
  const completedOrders = orders.filter((o) => o.status === 'Completed').length

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard 👨‍💼</h1>
        <p>GrabNGo Cafeteria Management System</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card total-orders">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Total Orders</h3>
            <p className="stat-number">{orders.length}</p>
            <span className="stat-label">All time</span>
          </div>
        </div>

        <div className="stat-card revenue">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Revenue</h3>
            <p className="stat-number">₹{totalRevenue}</p>
            <span className="stat-label">from orders</span>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Pending Orders</h3>
            <p className="stat-number">{pendingOrders}</p>
            <span className="stat-label">being prepared</span>
          </div>
        </div>

        <div className="stat-card ready">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Ready for Pickup</h3>
            <p className="stat-number">{readyOrders}</p>
            <span className="stat-label">waiting</span>
          </div>
        </div>
      </div>

      <div className="admin-content">
        <div className="section">
          <h2>Quick Stats</h2>
          <div className="quick-stats">
            <div className="quick-stat">
              <span>Menu Items</span>
              <strong>{menu.length}</strong>
            </div>
            <div className="quick-stat">
              <span>Completed Orders</span>
              <strong>{completedOrders}</strong>
            </div>
            <div className="quick-stat">
              <span>Average Order Value</span>
              <strong>₹{orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0}</strong>
            </div>
            <div className="quick-stat">
              <span>Success Rate</span>
              <strong>{orders.length > 0 ? Math.round((completedOrders / orders.length) * 100) : 0}%</strong>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Recent Orders</h2>
          {orders.length === 0 ? (
            <p className="no-data">No orders yet</p>
          ) : (
            <div className="orders-table">
              <div className="table-header">
                <span>Order ID</span>
                <span>Items</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Time</span>
              </div>
              {orders.slice(0, 8).map((order) => (
                <div key={order.id} className="table-row">
                  <span className="order-id">{order.id}</span>
                  <span>{order.items.length} items</span>
                  <span className="amount">₹{order.total}</span>
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                  <span className="time">
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
