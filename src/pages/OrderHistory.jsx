import { useCart } from '../context/CartContext'
import './OrderHistory.css'

export default function OrderHistory() {
  const { orders } = useCart()

  const reversedOrders = [...orders].reverse()

  return (
    <div className="order-history">
      <div className="history-header">
        <h1>Order History 📋</h1>
        <p>Your past orders and purchases</p>
      </div>

      {orders.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🍽️</div>
          <h2>No Order History</h2>
          <p>You haven't placed any orders yet</p>
          <a href="/menu" className="btn-start-ordering">Start Ordering</a>
        </div>
      ) : (
        <>
          <div className="history-stats">
            <div className="stat-badge">
              <span className="label">Total Orders</span>
              <span className="value">{orders.length}</span>
            </div>
            <div className="stat-badge">
              <span className="label">Total Spent</span>
              <span className="value">₹{orders.reduce((sum, o) => sum + o.total, 0)}</span>
            </div>
            <div className="stat-badge">
              <span className="label">Average Order</span>
              <span className="value">₹{Math.round(orders.reduce((sum, o) => sum + o.total, 0) / orders.length)}</span>
            </div>
          </div>

          <div className="history-table">
            <div className="table-header">
              <span>Date & Time</span>
              <span>Items</span>
              <span>Amount</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {reversedOrders.map((order) => (
              <div key={order.id} className="table-row">
                <div className="col-datetime">
                  <div className="date">{new Date(order.createdAt).toLocaleDateString()}</div>
                  <div className="time">{new Date(order.createdAt).toLocaleTimeString()}</div>
                </div>
                <div className="col-items">
                  <div className="items-count">{order.items.length} items</div>
                  <div className="items-preview">
                    {order.items.slice(0, 2).map((item, idx) => (
                      <span key={idx}>{item.name}</span>
                    ))}
                    {order.items.length > 2 && <span>+{order.items.length - 2} more</span>}
                  </div>
                </div>
                <div className="col-amount">
                  <strong>₹{order.total}</strong>
                </div>
                <div className={`col-status status ${order.status.toLowerCase()}`}>
                  {order.status}
                </div>
                <div className="col-action">
                  <button className="btn-reorder">Reorder</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
