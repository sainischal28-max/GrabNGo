import { useCart } from '../context/CartContext'
import './OrderTracking.css'

export default function OrderTracking() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return (
      <div className="order-tracking">
        <h1>Track Your Order</h1>
        <div className="empty-state">
          <p>No active orders to track</p>
        </div>
      </div>
    )
  }

  return (
    <div className="order-tracking">
      <h1>Order Tracking 📍</h1>

      <div className="tracking-list">
        {orders.map((order) => (
          <div key={order.id} className="tracking-card">
            <div className="order-header">
              <div className="order-info">
                <h3>{order.id}</h3>
                <p>{new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <div className={`order-badge ${order.status.toLowerCase()}`}>
                {order.status}
              </div>
            </div>

            <div className="progress-bar">
              <div className={`progress-step ${['Preparing', 'Ready', 'Completed'].includes(order.status) ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <p>Preparing</p>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${['Ready', 'Completed'].includes(order.status) ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <p>Ready</p>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${order.status === 'Completed' ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <p>Picked Up</p>
              </div>
            </div>

            <div className="order-details">
              <div className="detail-group">
                <span className="label">Items:</span>
                <span className="value">{order.items.length} items</span>
              </div>
              <div className="detail-group">
                <span className="label">Total:</span>
                <span className="value">₹{order.total}</span>
              </div>
              <div className="detail-group">
                <span className="label">Estimated Time:</span>
                <span className="value">15-20 minutes</span>
              </div>
            </div>

            <div className="order-items">
              <p className="items-label">Items in this order:</p>
              {order.items.map((item) => (
                <div key={item.id} className="item-row">
                  <span>{item.name}</span>
                  <span className="qty">x{item.qty}</span>
                  <span className="price">₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
