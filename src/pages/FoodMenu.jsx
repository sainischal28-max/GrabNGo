import { useState } from 'react'
import { useCart } from '../context/CartContext'
import FoodCard from '../components/FoodCard'
import { categories } from '../data/dummyData'
import './FoodMenu.css'

export default function FoodMenu() {
  const { menu } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMenu = menu.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="food-menu">
      <div className="menu-header">
        <h1>Food Menu</h1>
        <p>Order your favorite dishes from the college cafeteria</p>
      </div>

      <div className="menu-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <h3>Categories</h3>
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="menu-items">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => <FoodCard key={item.id} item={item} />)
        ) : (
          <div className="no-items">
            <p>No items found. Try searching or filtering by category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
