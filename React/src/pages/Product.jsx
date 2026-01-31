import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const Product = () => {
    const [products,setProducts] = useState([]);
    const getProducts =async()=>{
        const res=await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data);
      }
    useEffect(()=>{
      getProducts();
    },[])
  return (
    <div>
      <h1>Product</h1>
      {
        products.map((product)=>(
            <div key={product.id}>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <Link to={`/products/${product.id}`}>
                    View Details
                </Link>
            </div>
        ))
      } 
    </div>
  )
}

export default Product
