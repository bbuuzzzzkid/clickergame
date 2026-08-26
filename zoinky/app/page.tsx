'use client'

import { useState, useEffect, useRef} from "react";
import { useRouter } from "next/navigation";
import loop from "./gameYIPPEE";
import {setCanvas} from "./gameYIPPEE";
export default function Home() {
//On startup
const canvasRef = useRef(null)
useEffect(()=>{
const bgm = new Audio("99477_Every_End....mp3")
bgm.loop = true
bgm.volume = 0.4
bgm.currentTime = 0;
bgm.play();
// setCanvas(canvasRef)
//  loop()
},)

  return (
      <main>
        <canvas id="c" ref = {canvasRef} className="w-full h-screen bg-blue"></canvas>
      </main>
  );
}
