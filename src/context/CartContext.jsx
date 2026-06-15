import { createContext, useContext, useState, useEffect } from 'react'
import { sampleMenu } from '../data/dummyData.js'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [menu, setMenu] = useState(sampleMenu)
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState(() => {
  const savedOrders = localStorage.getItem('orders')
  return savedOrders ? JSON.parse(savedOrders) : []
})

useEffect(() => {
  localStorage.setItem('orders', JSON.stringify(orders))
}, [orders])


  function addToCart(item) {
    setCart((c) => {
      const found = c.find((i) => i.id === item.id)
      if (found) return c.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      return [...c, { ...item, qty: 1 }]
    })
  }

  function updateQty(id, qty) {
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  function removeFromCart(id) {
    setCart((c) => c.filter((i) => i.id !== id))
  }

  function checkout(paymentInfo = { method: 'card' }) {
    const id = 'ORD' + Date.now().toString(36).toUpperCase().slice(-6)
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
    const order = { id, items: cart, total, status: 'Preparing', createdAt: new Date().toISOString() }
    setOrders((o) => [order, ...o])
    setCart([])
    return order
  }

  function setOrderStatus(orderId, status) {
    setOrders((o) => o.map((ord) => (ord.id === orderId ? { ...ord, status } : ord)))
  }

  function addMenuItem(item) {
    setMenu((m) => [{ ...item, id: 'I' + Date.now().toString(36).slice(-5) }, ...m])
  }

  function editMenuItem(id, updates) {
    setMenu((m) => m.map((it) => (it.id === id ? { ...it, ...updates } : it)))
  }

  function deleteMenuItem(id) {
    setMenu((m) => m.filter((it) => it.id !== id))
  }

  return (
    <CartContext.Provider
      value={{ menu, cart, orders, addToCart, updateQty, removeFromCart, checkout, setOrderStatus, addMenuItem, editMenuItem, deleteMenuItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export default CartContext
