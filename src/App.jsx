import React from 'react'
import {Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Collection from './pages/Collection';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/Collection" element={<Collection/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/PlaceOrder" element={<PlaceOrder/>} />
      <Route path="/Orders" element={<Orders/>} />
      <Route path="/Cart" element={<Cart/>} />
   </Routes>
    </div>
  )
}

export default App