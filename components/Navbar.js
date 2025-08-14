import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="nav  h-[12vh]  w-screen flex items-center px-10 justify-between border-[1px] border-[#cbcbcb]">
        <div className="brand-cont flex gap-2 items-center">
          <div className="brand-image-cont"><img className='w-[40px]' src="/images/sonicEdgeLogo.png" alt="" /></div>
          <div className="brand-name-cont">Sonic edge</div>
        </div>
        <div className="main-nav-cont flex gap-12 ">
          <li><Link href="/">Home</Link></li>

          <li className='drop-down' ><Link href="/">Categories</Link>
              <div className="content">
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
                <Link className='drop-down-item' href="/">Headphones</Link>
              </div>
          </li>

          <li><Link href="/">Contact</Link></li>
          <li><Link href="/">About Us</Link></li>
        </div>

        <div className="search-cont flex gap-2">
          <div className="input-cont flex h-[37px] px-3 rounded-3xl bg-[#f4f5f7] text-[rgb(37,38,39)]">
            <img className='w-5' src="/images/search.svg" alt="" />
            <input type="text" className='ml-1 w-[15vw] text-[15px] outline-none' placeholder='Searh the product' />
          </div>
          
          <img  src="/images/cart.svg" className='w-7 ml-2 cursor-pointer' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
