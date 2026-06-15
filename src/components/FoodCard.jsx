import { useCart } from '../context/CartContext'
import './FoodCard.css'

export default function FoodCard({ item }) {
  const { addToCart } = useCart()

  return (
    <div className="food-card">
      <div className="card-placeholder">
        <span className="food-emoji">🍽️</span>
      </div>
      <div className="card-body">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <div className="card-footer">
          <span className="item-price">₹{item.price}</span>
          <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart(item)}
            title="Add to cart"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
