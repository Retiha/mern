import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>

  </>
  )
} 
export default App

