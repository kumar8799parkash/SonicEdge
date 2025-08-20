import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {


  return (
    <div>
      <div className="nav  h-[12vh]  w-full flex items-center px-[10px] justify-between border-[1px] border-[#cbcbcb]">
        <div className="brand-cont flex gap-2 items-center">
          <div className="brand-image-cont"><img className='w-[40px]' src="/images/sonicEdgeLogo.png" alt="" /></div>
          <div className="brand-name-cont">Sonic edge</div>
          <div className="hamburger-cont"><img src="/images/SVGs/hamburger.svg" className='w-7 mr-2 cursor-pointer' alt="" /></div>
        </div>
        <div className="main-nav-cont flex">

          <li className='main-nav-item' ><Link href="/">Home</Link></li>
          <li className='main-nav-item drop-down' ><Link href="/">Categories</Link> <img className='w-4' src="/images/SVGs/dropDown.svg" alt="" />

            <div className="content">
              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/TruewirelessEarbuds.webp" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">True Wireless Earbuds</div>
              </Link>


              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/wirelessSpeakers.webp" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Wireless Speakers</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/neckbands.png" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Neckbands</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/smartWatches.webp" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Smart Watches</div>
              </Link>


              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/wiredHeadphones.png" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Wired Headphones</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/wirelessHeadphones.webp" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Wireless Headphones</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/wiredEarphones.webp" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Wired Earphones</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/soundbars.png" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Soundbars</div>
              </Link>

              <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src="/images/categoriesImages/gamingHeadphones.png" alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center">Gaming Headphones</div>
              </Link>
            </div>


          </li>

          <li className='main-nav-item'><Link href="/">Contact</Link></li>
          <li className='main-nav-item'><Link href="/">About Us</Link></li>

        </div>

        <div className="search-cont flex gap-2">
          <div className="input-cont flex h-[37px] px-3 rounded-3xl bg-[#f4f5f7] text-[rgb(37,38,39)]">
            <img className='w-5' src="/images/SVGs/search.svg" alt="" />
            <input type="text" className='ml-1 w-[15vw] text-[15px] outline-none' placeholder='Searh the product' />
          </div>
          <img src="/images/SVGs/profile.svg" className=' profile-img w-6 ml-2 cursor-pointer' alt="" />
          <img src="/images/SVGs/cart.svg" className=' cart-img w-7 ml-2 cursor-pointer' alt="" /> 
        </div>
      </div>

    </div>
  )
}

export default Navbar
