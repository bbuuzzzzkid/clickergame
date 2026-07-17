'use client'

import { useState, useEffect, useRef} from "react";
import { useRouter } from "next/navigation";

export default function Home() {

const canvasRef = useRef(null)

  return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <canvas id="c" ref = {canvasRef} className="w-full h-screen bg-red"></canvas>
      </main>
  );
}
