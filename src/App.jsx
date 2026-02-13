import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useState } from "react"

function App() {

  const [cart, setCart] = useState([])

  // ADD TO CART
  const addToCart = (product) => {

    const exist = cart.find(item => item.id === product.id)

    if (exist) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  // REMOVE
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  // QUANTITY +
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  // QUANTITY -
  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.quantity > 1 && item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <Home addToCart={addToCart} />
        } />

        <Route path="/cart" element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
