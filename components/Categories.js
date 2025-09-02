"use client"
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import './Categories.css'

const Categories = (props) => {

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                
            }catch(err){

            }
        }
    }, [])


    return (
        <div>
            <div className="categories-heading-cont py-3 w-full px-12.5 flex justify-between">
                <div className="categories-heading text-[24px] text-[rgb(26, 32, 36)] font-[600]">{props.heading}</div>
                <div className="view-all-text text-sm text-[#2f5b96] font-[700] flex gap-1 items-center cursor-pointer">View All <img className='w-5 h-5' src="/images/SVGs/viewAll.svg" alt="" /></div>
            </div>

            <div className="categories-items-cont">
                <div className="category-item">
                    <div className="category-item-image-cont"><img className='category-item-image h-[100px] w-[100px]' src="/images/dropDownImages/gamingHeadphones.png" alt="" /></div>
                    <div className="category-item-name-cont">Gaming Headphones</div>
                </div>
            </div>
        </div>
    )
}

export default Categories