import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
    </div>
  )
}

export default ProductDetails
