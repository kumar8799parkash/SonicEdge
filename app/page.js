"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Navbar from "@/components/Navbar";
import MainImage from "@/components/MainImage";
import ViewAll from "@/components/ViewAll";

export default function Home() {

  return (
    <>
      <Navbar />
      <MainImage />
      <ViewAll category = 'saleIsLive' heading = 'Sale is live'/>
      <ViewAll category = 'bigDeals' heading = 'Big deals'/>
      <ViewAll category = 'topPicks' heading = 'Top Picks For You'/>
    </>
  );
}
