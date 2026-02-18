import products from "../data/products"
import { Link } from "react-router-dom"

function Home({ addToCart }) {

  return (
    <div className="p-10">
      <div className="grid grid-rows-3 gap-4">

        {products.map(product => (

          <div key={product.id} className=" shadow-amber-900 p-4 text-center">

            <img src={product.image} alt={product.name} />

            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p>${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className=" bg-red-600 rounded-2xl font-semibold text-white px-3 py-2 mt-2 hover:bg-red-800"
            >
              Add to Cart
            </button>
          
          </div>

        ))}

      </div>
      <Link to="/cart" className="bg-blue-500  text-center flex  text-white px-2 py-2 rounded-xl">
      Check your Cart
      </Link>
    </div>
  )
}

export default Home
