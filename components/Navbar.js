"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './Navbar.css'
import DropDownItem from './DropDownItem'

const Navbar = () => {

  const [dropDownItems , setDropDownItems] = useState([]);
  
  useEffect(()=>{
    const loadDropDownItems = async()=>{
      try{
        const res = await fetch(`/api/products?category=dropDown`)
        const data = await res.json();

        setDropDownItems(data);
      }catch(err){
        console.log("error while fetching the dropDown items in Navbar.js file")
      }
    }

    loadDropDownItems();
  } , []);

  return (
    <div>
      <div className="nav  h-[12vh]  w-full flex items-center px-[10px] justify-between border-[1px] border-[#cbcbcb]">
        <div className="brand-cont flex gap-3 items-center">
          <div className="brand-image-cont"><img className='w-[40px]' src="/images/sonicEdgeLogo.png" alt="" /></div>
          <div className="brand-name-cont">Sonic edge</div>
          <div className="hamburger-cont"><img src="/images/SVGs/hamburger.svg" className='w-7 mr-2 cursor-pointer' alt="" /></div>
        </div>
        <div className="main-nav-cont flex ">

          <li className='main-nav-item' ><Link href="/">Home</Link></li>
          <li className='main-nav-item drop-down ' ><Link href="/">Categories</Link> <img className='w-4 cursor-pointer' src="/images/SVGs/dropDown.svg" alt="" />

            <div className="content ">

              {
                (dropDownItems.length > 0) ? (
                  dropDownItems.map((dropDownItem)=>{
                    return (
                      <DropDownItem key = {dropDownItem._id} name = {dropDownItem.name} image = {dropDownItem.image}/>
                    )
                  })
                ) : (
                  <p>No product found in dropDown category</p>
                )
              }

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
