import { Link } from "react-router-dom"

function Cart({
  cart,
  removeFromCart,
  increaseQty,
  decreaseQty
}) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className=" text-center p-10">

        <h1 className="text-4xl">
          Your cart is empty
        </h1>

        <Link to="/" className="text-red-600">
          Go back to home
        </Link>

      </div>
    )
  }

  return (
    <div className="p-10">

      <Link to="/" className="bg-blue-500  text-center flex  text-white px-2 py-2 rounded-xl">
       - Back Home
      </Link>

      {cart.map(item => (

        <div key={item.id} className="flex items-center gap-6  p-4 mt-4"
        >

          <img src={item.image} className="w-20" />

          <div className="flex-1">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>

          <div className="flex gap-2">

            <button
              onClick={() => decreaseQty(item.id)}
              className="bg-gray-300 px-3"
            >-</button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="bg-gray-300 px-3"
            >+</button>

          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-2"
          >
            Remove
          </button>

        </div>

      ))}

      
      <h1 className="text-2xl font-bold mt-6">
        Total: ${total}
      </h1>

    </div>
  )
}

export default Cart
