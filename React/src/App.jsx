import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Reducer from './hooks/Reducer'
import State from './hooks/State'
import Form from './hooks/Form'
import { createContext } from "react";
import Profile from "./components/Profile";
export const userContext = createContext(); // ✅ export it


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
      <Route path='/reducer' element={<Reducer/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

  </>
  )
} 
export default App

