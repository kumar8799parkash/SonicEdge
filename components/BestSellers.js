"use client"
import { React, useEffect, useRef, useState } from 'react'
import './BestSellers.css'
import BestSellerItem from './BestSellerItem'

const BestSellers = (props) => {

    const [bestSellerVideos , setBestSellerVideos] = useState([]);

    useEffect(()=>{
        const fetchVideos = async()=>{
            try{
                const res = await fetch(`/api/products?category=${props.category}`)
                const data = await res.json();

                setBestSellerVideos(data);
            }catch(err){
                console.log("Error while fetching videos in BestSellers component!")
            }
        }
        fetchVideos();
    },[])

    return (
        <div>
            <div className="bestSellers-cont pb-12">
                <div className="bestSellers-heading-cont py-3 w-full px-12.5 flex justify-between text-[24px] text-[rgb(26, 32, 36)] font-[600]">{props.heading}</div>
                <div className="bestSellers-items-cont flex gap-[20px] justify-center flex-wrap">

                    {
                        (bestSellerVideos.length > 0) ? (
                            bestSellerVideos.map(video=>{
                                return (
                                    <BestSellerItem
                                        key = {video._id}
                                        name = {video.name}
                                        video = {video.image}
                                    />
                                )
                            })
                        ):(
                            <p>No video found of bestSeller category</p>
                        )
                    }
                    
                </div>



            </div>
        </div>
    )
}

export default BestSellers
