"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Navbar from "@/components/Navbar";
import MainImage from "@/components/MainImage";
import ViewAll from "@/components/ViewAll";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";

export default function Home() {

  return (
    <>
      <Navbar />
      <MainImage />
      <ViewAll category = 'saleIsLive' heading = 'Sale is live'/>
      <ViewAll category = 'bigDeals' heading = 'Big deals'/>
      <Categories category = 'dropDown' heading = 'Shop by Categories'/>
      <ViewAll category = 'topPicks' heading = 'Top Picks For You'/>
      <BestSellers category = 'bestSellers' heading = 'Explore Bestsellers'/>
    </>
  );
}
