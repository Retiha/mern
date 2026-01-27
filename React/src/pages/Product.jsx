import React from 'react'
import { Link} from 'react-router-dom'

const Product = () => {
    const products=[
        {id:1,name:"Laptop",price:45000},
        {id:2,name:"Mobile",price:25000},
        {id:3,name:"Tablet",price:15000},
        {id:4,name:"Monitor",price:20000},
    ]
    
  return (
    <div>
      <h1>Product</h1>
      {
        products.map((product)=>(
            <div key={product.id}>
                <h4>{product.name}</h4>
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
