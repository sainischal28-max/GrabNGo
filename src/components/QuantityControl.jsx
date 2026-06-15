import './QuantityControl.css'

export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="quantity-control">
      <button className="qty-btn minus" onClick={onDecrease} disabled={quantity <= 1}>
        −
      </button>
      <span className="qty-display">{quantity}</span>
      <button className="qty-btn plus" onClick={onIncrease}>
        +
      </button>
    </div>
  )
}
