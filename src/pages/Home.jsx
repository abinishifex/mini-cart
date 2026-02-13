import products from "../data/products"
import { Link } from "react-router-dom"

function Home({ addToCart }) {

  return (
    <div className="p-10">

      <Link to="/cart" className="bg-black text-white px-4 py-2">
        Go To Cart
      </Link>

      <div className="grid grid-cols-3 gap-6 mt-6">

        {products.map(product => (

          <div key={product.id} className="border p-4 text-center">

            <img src={product.image} alt={product.name} />

            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p>${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>
    </div>
  )
}

export default Home
