import Image from "next/image";
import Navbar from "@/components/Navbar";
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="main-image-cont h-[88vh] w-screen bg-amber-400">
        <img className="main-image h-[100%] w-[100%]" src="/images/mainImages/mainImage5.webp" alt="" />
      </div>
    </>
  );
}
