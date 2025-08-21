"use client";
import { useEffect, useState } from "react";
import './globals.css';
import Navbar from "@/components/Navbar";
import MainImage from "@/components/MainImage";
import ViewAll from "@/components/ViewAll";

export default function Home() {
  const SaleIsLive = {
    "heading" : "Sale Is Live",
    "songItemImages" : ['/images/Sale images/songItem1.webp',
                        '/images/Sale images/songItem2.webp',
                        '/images/Sale images/songItem3.webp',
                        '/images/Sale images/songItem4.webp',
                        '/images/Sale images/songItem5.webp',
                        '/images/Sale images/songItem6.webp',
    ],
    "songItemNames" : ['sonic Wave Sigma 3',
                        'sonic Airdopes Prime 701 ANC',
                        'sonic Rockerz 110',
                        'sonic Airdopes 311 PRO',
                        'sonic Storm Call 3 Plus',
                        'sonic Stone 350',
    ],

    "songItemNames" : ['sonic Wave Sigma 3',
                        'sonic Airdopes Prime 701 ANC',
                        'sonic Rockerz 110',
                        'sonic Airdopes 311 PRO',
                        'sonic Storm Call 3 Plus',
                        'sonic Stone 350',
    ],

    "songItemPrices" : ['1,499',
                        '2,199',
                        '899',
                        '999',
                        '1,499',
                        '1,799',
    ],
  }
  return (
    <>
      <Navbar />
      <MainImage />
      <ViewAll heading = {'Sale is Live'}/>
    </>
  );
}
