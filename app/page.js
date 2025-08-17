"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import './globals.css';

export default function Home() {

  const [mainImageSrc, setMainImageSrc] = useState("/images/mainImages/mainImage0.webp");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [mainImagesArray, setMainImagesArray] = useState([]);

  useEffect(() => {
    async function fetchMainImages() {
      const res = await fetch("/images/mainImages.json");
      const data = await res.json();
      setMainImagesArray(data);
    }

    fetchMainImages();
  }, [])


  useEffect(() => {
    if (mainImagesArray.length === 0) return;

    const interval = setInterval(() => {
      setMainImageIndex((prev) => (prev + 1) % mainImagesArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [mainImagesArray]);


  function changeMainImage() {
    const len = mainImagesArray.length;
    setMainImageIndex((mainImageIndex + 1) % len);
    setMainImageSrc(`${mainImagesArray[mainImageIndex].source}`);
  }

  setInterval(() => {
    changeMainImage();
  }, 1000)

  return (

    <>
      <Navbar />
      <div className="main-image-cont h-[88vh] w-screen bg-amber-400">
        <img className="main-image h-[100%] w-[100%]" src={mainImageSrc} alt="" />
      </div>
    </>
  );
}
