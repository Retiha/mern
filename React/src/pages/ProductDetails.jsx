import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products=[
        {id:1,name:"Laptop",price:45000,description:'Acer, Dell, HP, Lenovo, Apple'},
        {id:2,name:"Mobile",price:25000,description:'Samsung, Apple, OnePlus, Xiaomi'},
        {id:3,name:"Tablet",price:15000,description:'iPad, Samsung Galaxy Tab, Amazon Fire'},
        {id:4,name:"Monitor",price:20000,description:'Dell, LG, Samsung, Acer'},
    ]
    const {id}=useParams();
    const product=products.find((p)=>p.id===Number(id));
  return (
    <div>
      <h1>Product Details</h1>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
    </div>
  )
}

export default ProductDetails
