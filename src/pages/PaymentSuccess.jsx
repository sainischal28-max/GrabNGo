import { useParams, Link } from 'react-router-dom'
import './PaymentSuccess.css'

export default function PaymentSuccess() {
  const { orderId } = useParams()

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-animation">
          <div className="checkmark">✓</div>
        </div>

        <h1>Payment Successful! 🎉</h1>
        <p className="order-id">Order ID: {orderId}</p>

        <div className="success-message">
          <p>Your order has been placed successfully!</p>
          <p>Our staff will start preparing your delicious food right away.</p>
        </div>

        <div className="next-steps">
          <h2>What's Next?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <p>Your order is being prepared</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <p>You'll receive a notification when it's ready</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <p>Come to the counter and scan your QR code</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <Link to={`/qr/${orderId}`} className="btn-view-qr">
            View QR Code
          </Link>
          <Link to="/order-tracking" className="btn-track">
            Track Order
          </Link>
          <Link to="/menu" className="btn-order-more">
            Order More Food
          </Link>
        </div>

        <p className="estimated-time">
          ⏱️ Estimated Pickup Time: 15-20 minutes
        </p>

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
