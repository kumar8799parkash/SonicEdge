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
            <div className="bestSeller-item">
                <div className="bestSeller-item-video-cont w-[22vw] h-[47vh] overflow-hidden flex justify-center items-center rounded-[25px] cursor-pointer" >  <video className='bestSeller-item-video' src={props.video} loop ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} muted preload="metadata"></video>  </div>
                <div className="bestSeller-item-name-cont text-center py-1 font-bold ">{props.name}</div>
            </div>
        </div>
    )
}

export default BestSellerItem
