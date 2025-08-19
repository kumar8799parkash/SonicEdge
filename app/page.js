"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Navbar from "@/components/Navbar";
import MainImage from "@/components/mainImage";
import BigDeals from "@/components/BigDeals";

export default function Home() {

  return (
    <>
      <Navbar />
      <MainImage />
      <BigDeals />
    </>
  );
}
