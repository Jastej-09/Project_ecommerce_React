import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
// import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import UserHome from './Pages/UserHome'
import Cart from './Pages/Cart'
import UserProduct from './Pages/UserProduct'
import Start from './Pages/Start'
import Login from './Pages/login'
import Register from './Pages/Register'
import Adminlogin from './Pages/Adminlogin'
import About from './Pages/About'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./Pages/CartContext";


const App = () => {
  return (
    <div>
      {/* <CartProvider> */}
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path='/store' element={<UserHome/>}/>
          <Route path="/products/detail/:productId" element={<UserProduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route  path='/admin' element={<Home/>}/>
          <Route  path='/admin/products/add' element={<AddProducts/>}/>
          <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
          <Route  path='/users' element={<Login/>}/>
          <Route  path='/users2' element={<Register/>}/>
          <Route  path='/admin/login' element={<Adminlogin/>}/>
          <Route  path='/about' element={<About/>}/>


          </Routes>
      {/* </Router> */}
    {/* </CartProvider> */}

      {/* <Routes>
        <Route  path='/admin/' element={<Home/>}/>
        <Route  path='/admin/products/add' element={<AddProducts/>}/>
        <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes>  */}

    </div>


  )
}

export default App