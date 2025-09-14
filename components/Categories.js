"use client"
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import Link from 'next/link'
import './Categories.css'

const Categories = (props) => {

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await fetch(`/api/products?category=${props.category}`);
                const data = await res.json();
                setCategoryItems(data);
            }catch(err){
                console.log("Error while fetching the data in categories.js component!")
            }
        }
        fetchData();
    }, []);


    return (
        <div className='mb-12'>
            <div className="categories-heading-cont py-3 w-full px-12.5 flex justify-between">
                <div className="categories-heading text-[24px] text-[rgb(26, 32, 36)] font-[600]">{props.heading}</div>
                <div className="view-all-text text-sm text-[#2f5b96] font-[700] flex gap-1 items-center cursor-pointer">View All <img className='w-5 h-5' src="/images/SVGs/viewAll.svg" alt="" /></div>
            </div>

            <div className="categories-items-cont flex justify-center flex-wrap gap-3">

                {categoryItems.length > 0 ? (
                    categoryItems.map((categoryItem)=>{
                        return (
                            <Link href={`/category/${props.category}`} ><CategoryItem  key={categoryItem._id}   name={categoryItem.name}  image={categoryItem.image} /></Link>
                        )
                    })
                ) : (
                    <p>No product found in categories.js component!</p>
                )}

                {/* <div className="category-item w-[140px] cursor-pointer">
                    <div className="category-item-image-cont flex justify-center pb-3"><img className='category-item-image h-[100px] w-[100px]' src="/images/dropDownImages/gamingHeadphones.png" alt="" /></div>
                    <div className="category-item-name-cont text-center text-[14px] font-bold text-[#1f1f1f]">Gaming Headphones</div>
                </div> */}
                
            </div>
        </div>
    )
}

export default Categories