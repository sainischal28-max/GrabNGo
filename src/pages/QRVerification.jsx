import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import QRCode from 'react-qr-code'
import './QRVerification.css'

export default function QRVerification() {
  const { orderId } = useParams()
  const { orders, setOrderStatus } = useCart()
  const navigate = useNavigate()
  const order = orders.find((o) => o.id === orderId)

  if (!order) {
    return (
      <div className="qr-page">
        <div className="qr-card error">
          <h1>Order Not Found ❌</h1>
          <p>The order you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/dashboard')} className="btn-back">
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  const handleMarkReady = () => {
    setOrderStatus(orderId, 'Ready')
    alert('Order marked as Ready!')
  }

  return (
    <div className="qr-page">
      <div className="qr-card">
        <h1>Your Order is Confirmed! ✅</h1>
        <p className="order-id">Order ID: {orderId}</p>

        <div className="qr-container">
          <QRCode value={orderId} size={256} level="H" />
        </div>

        <div className="pickup-instructions">
          <h2>Pickup Instructions</h2>
          <ol>
            <li>Show this QR code at the counter</li>
            <li>Wait for your order to be prepared</li>
            <li>Collect your delicious food!</li>
          </ol>
        </div>

        <div className="order-details">
          <h3>Order Details</h3>
          <div className="detail-row">
            <span>Items:</span>
            <span>{order.items.length}</span>
          </div>
          <div className="detail-row">
            <span>Total Amount:</span>
            <span className="amount">₹{order.total}</span>
          </div>
          <div className="detail-row">
            <span>Status:</span>
            <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
          </div>
          <div className="detail-row">
            <span>Estimated Time:</span>
            <span>15-20 minutes</span>
          </div>
        </div>

        <div className="order-items-summary">
          <h3>Items Summary</h3>
          {order.items.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button onClick={handleMarkReady} className="btn-mark-ready">
            Mark as Ready
          </button>
          <button onClick={() => navigate('/dashboard')} className="btn-back">
            Back to Dashboard
          </button>
        </div>

        <p className="note">
          ℹ️ Please keep this code safe. You'll need it to collect your order.
        </p>
      </div>
    </div>
  )
}
