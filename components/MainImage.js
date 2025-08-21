"use client";
import { useEffect, useState } from "react";
const MainImage = () => {

    /* const [mainImageSrc, setMainImageSrc] = useState("/images/mainImages/mainImage0.webp"); */
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [mainImagesArray, setMainImagesArray] = useState([]);

    useEffect(() => {
        async function fetchMainImages() {
            const res = await fetch("/JSON-data/mainImages.json");
            const data = await res.json();
            setMainImagesArray(data);
        }
        fetchMainImages();
    }, [])


    useEffect(() => {
        let len = mainImagesArray.length;
        if (len == 0) return;

        let interval = setInterval(() => {
            /* let nextIndex = (mainImageIndex+1)%len;
            setMainImageIndex(nextIndex); */

            setMainImageIndex(prevIndex => (prevIndex + 1) % len);
        }, 5000)

        return () => { clearInterval(interval) };

    }, [mainImagesArray])


    return (
        <div className="main-image-cont h-auto w-full bg-amber-400">
            <img className="main-image h-[100%] w-[100%]" src={mainImagesArray.length > 0 ? (mainImagesArray[mainImageIndex].source) : ("/images/mainImages/mainImage0.webp")} alt="" />
        </div>
    )
}

export default MainImage
