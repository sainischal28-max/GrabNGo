import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import QuantityControl from '../components/QuantityControl'
import './CartPage.css'

export default function CartPage() {
  const { cart, removeFromCart, updateQty, checkout } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    const order = checkout()
    window.location.href = `/payment-success/${order.id}`
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🍽️</div>
          <h2>Your cart is empty</h2>
          <p>Browse our menu and add delicious items to your cart!</p>
          <Link to="/menu" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            <div className="items-header">
              <span>Item</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-name">
                  <div className="item-icon">🍽️</div>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <div className="item-price">₹{item.price}</div>
                <div className="item-quantity">
                  <QuantityControl
                    quantity={item.qty}
                    onIncrease={() => updateQty(item.id, item.qty + 1)}
                    onDecrease={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                  />
                </div>
                <div className="item-total">₹{item.price * item.qty}</div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{total}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>Free</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>

              <Link to="/menu" className="continue-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
