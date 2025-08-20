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
      <ViewAll />
    </>
  );
}
