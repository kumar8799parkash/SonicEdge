import React from 'react'

const page = (props) => {
    const categoryName = decodeURIComponent(props.params.categoryName);        // this convert  %20 into space( in url spaces are displayed as %20 by default)
  return (
    <div>
      <div className='category-heading w-screen border-2 border-b-black px-10 py-10 flex items-center text-[24px] font-[700]'>{categoryName}</div>
      <div className="main-grid w-screen border-2 border-b-black px-10 flex flex-wrap">
        <div className="product-item border-2 border-b-orange-700 p-1 w-[30vw] ">
          <div className="product-item-image-cont h-[100%] w-auto"> <img className='h-[100%] w-[100%]' src="/images/wirelessSpeakersImages/Stone_350_pro_1.webp" alt="" /> </div>
          <div className="product-item-desc-cont"></div>
        </div>
      </div>
    </div>
  )
}

export default page
