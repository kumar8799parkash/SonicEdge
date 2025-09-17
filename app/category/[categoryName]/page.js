import React from 'react'

const page = (props) => {
    const categoryName = decodeURIComponent(props.params.categoryName);        // this convert  %20 into space( in url spaces are displayed as %20 by default)
  return (
    <div>
      <div className='category-heading w-screen border-2 border-b-black px-10 py-10 flex items-center text-[24px] font-[700]'>{categoryName}</div>
      <div className="main-grid w-screen border-2 border-b-black px-10 flex flex-wrap">
        <div className="product-item border-2 border-b-orange-700 p-1 w-[30vw] h-auto rounded-[9px] flex">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto border-2 border-b-black pl-2 py-2">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-5">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-[1px] border-b-neutral-400"></div>
            <div className="product-item-tags-cont"></div>
            <div className="product-item-cart-cont"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page