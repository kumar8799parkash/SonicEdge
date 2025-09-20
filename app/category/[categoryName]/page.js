import React from 'react'

const page = (props) => {
    const categoryName = decodeURIComponent(props.params.categoryName);        // this convert  %20 into space( in url spaces are displayed as %20 by default)
  return (
    <div>
      <div className='category-heading w-screen px-10 py-9 flex items-center text-[24px] font-[700]'>{categoryName}</div>
      <div className="main-grid w-screen px-10 flex flex-wrap gap-4 justify-center">


        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>




        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>






        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>







        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>





        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>





        <div className="product-item  pl-1 pt-1 pb-3 pr-2 w-[30vw] h-auto rounded-[9px] flex border-[1px] border-[#cbcbcb] bg-[#f9f9f9]">
          <div className="product-item-image-cont w-[40%] h-auto rounded-[9px] overflow-hidden"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont w-[60%] h-auto pl-2 py-2 ">
            <div className="product-item-name-cont font-[800] text-[#2c2c2c] pb-3">sonic Stone 350 Pro</div>
            <div className="product-item-price-cont font-[700] text-[#2c2c2c]">Price : &#8377;1999</div>
            <div className="line w-[100%] border-b-[1px] border-neutral-300 mb-1.5 mt-0.5"></div>

            <div className="product-item-tags-cont h-[32%] w-[100%] flex flex-wrap gap-x-2 gap-y-1 ">
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Wireless</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Bluetooth</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Virgin</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">Upto 12 hrs</div>
              <div className="tag-item bg-[#e3f1ff] text-[12px] rounded-[7px] flex justify-center items-center px-2 text-[#1d1d1d]">LED Projection</div>
            </div>

            <div className="product-item-cart-button-cont h-[26%] mt-1.5 w-[100%] flex justify-center items-center text-white font-[700] bg-[#222222] rounded-[10px] text-[15px] cursor-pointer">Add To Cart</div>
          </div>
        </div>


        




      </div>
    </div>
  )
}

export default page