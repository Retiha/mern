import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.title}
              </h4>

              <h5 className="text-blue-600 font-bold mb-4">
                ₹ {product.price}
              </h5>

              <Link
                to={`/products/${product.id}`}
                className="inline-block text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Product
