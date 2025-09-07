import { React, useRef, useState } from 'react'
import './BestSellerItem.css'

const BestSellerItem = (props) => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }
    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }

    return (
        <div>
            <div className="bestSeller-item ">
                <div className="bestSeller-item-video-cont w-[22vw] h-auto flex justify-center items-center cursor-pointer " >  <video className='bestSeller-item-video rounded-[20px]' src={props.video} loop ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} muted preload="metadata"></video>  </div>
                
                <div className="bestSeller-item-name-cont text-center py-1 font-bold ">{props.name}</div>
            </div>
        </div>
    )
}

export default BestSellerItem
