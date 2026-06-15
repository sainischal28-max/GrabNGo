import { useCart } from '../context/CartContext'
import './MenuManagement.css'

export default function MenuManagement() {
  const { menu } = useCart()

  return (
    <div className="menu-management">
      <div className="section-header">
        <h1>Menu Management</h1>
        <p>View and manage cafeteria menu items</p>
      </div>

      <div className="menu-stats">
        <div className="stat-box">
          <span>Total Items</span>
          <strong>{menu.length}</strong>
        </div>
        <div className="stat-box">
          <span>Categories</span>
          <strong>8</strong>
        </div>
      </div>

      <div className="menu-items-grid">
        <div className="grid-header">Menu Items ({menu.length})</div>
        {menu.map((item) => (
          <div key={item.id} className="menu-item-card">
            <div className="item-image">
              <img src={item.image} alt={item.name} onError={(e) => e.target.src = '🍽️'} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="price">₹{item.price}</p>
              <div className="item-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-item-section">
        <h2>Add New Item</h2>
        <form className="add-form">
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Price" />
          <select>
            <option>Select Category</option>
            <option>Breakfast</option>
            <option>South Indian</option>
            <option>North Indian</option>
            <option>Beverages</option>
          </select>
          <button type="submit" className="btn-add">Add Item</button>
        </form>
      </div>
    </div>
  )
}
