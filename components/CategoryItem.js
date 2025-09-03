import React from 'react'
import './CategoryItem.css'

const CategoryItem = (props) => {
  return (
    <div>
      <div className="category-item w-[130px] cursor-pointer">
        <div className="category-item-image-cont flex justify-center pb-3"><img className='category-item-image h-[80px] w-[80px]' src ={props.image} alt="" /></div>
        <div className="category-item-name-cont text-center text-[14px] font-bold text-[#1f1f1f]">{props.name}</div>
      </div>
    </div>
  )
}

export default CategoryItem
