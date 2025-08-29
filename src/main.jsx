import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home_page from './landingpage/home/Home_page.jsx'
import Navbar from './landingpage/Navbar.jsx'
import Footer from './landingpage/Footer.jsx'
import Signup from './landingpage/signup/Signup.jsx'
import About_page from './landingpage/about/About_page.jsx'
import Products from './landingpage/products/Products.jsx'
import PriceingPage from './landingpage/priceing/PriceingPage.jsx'
import SupportPage from './landingpage/support/SupportPage.jsx'
import Notfound from './landingpage/Notfound.jsx'
import Notforview from './landingpage/notforview.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Notforview/>
  <Navbar/>
  <Notforview/>
    <Routes>
    
      <Route path="/" element={<Home_page/>}/>
       <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About_page/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/priceing" element={<PriceingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<Notfound/>}/>  
    </Routes>
 <Footer/>
  </BrowserRouter>,
)
