import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="nav  h-[12vh]  border-2  border-black-500  w-screen flex items-center pl-10">
        <div className="brand-cont">BRAND</div>
        <div className="main-nav-cont flex gap-6">
          <li>Home</li>
          <li>Categories</li>
          <li>Contact</li>
          <li>About Us</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
