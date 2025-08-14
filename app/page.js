import Image from "next/image";
import Navbar from "@/components/Navbar";
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="main h-[500px] w-screen bg-green-950 "></div>
    </>
  );
}
