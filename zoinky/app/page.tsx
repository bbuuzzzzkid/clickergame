'use client'

import { useState, useEffect, useRef} from "react";
import { useRouter } from "next/navigation";

export default function Home() {

const canvasRef = useRef(null)

  return (
      <main>
        <canvas id="c" ref = {canvasRef} className="w-full h-screen bg-blue"></canvas>
      </main>
  );
}
