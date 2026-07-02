'use client'
import WeirdButton from "./weird_button";
// import SchoolIsBad  from "./school_sucks"
import Image from "next/image";
import GETALIFE from "../public/helloworldimageorotherimages/images/images@images@img/AAHHHHHHHHHHHHHH.png"
import Link from "next/link"
import { useState, useEffect, useRef} from "react";
import { useRouter } from "next/navigation";
import Safari from "@/animalInSafariYay";
import { Area } from "@/animalInSafariYay";
import doggypark from "../public/helloworldimageorotherimages/doggypark.png"
import farm from  "../public/helloworldimageorotherimages/farm.png"
import idk from  "../public/helloworldimageorotherimages/idk.png"

export default function Home() {
  const ASafari = useRef(new Safari())
  const [startGame, setStartgame] = useState(false)
  useEffect(()=>{
    console.log("YES IT'S WORKING!!! ITS ACTUALLY WORKING... cool")
  }, [ASafari.current.thisArea])
  /* Put and fill in this sudocode in l8r... (rohan at jul 2, 2026, and 4:31PM)
  if !startgame{show start button} else {show thse arrows to navigate zones}*/
const another_example_of_me_making_bad_variable_names = (bool:boolean)=>{
if (bool){
return <h1>YOU HAVE STARTED THE GAME. Bro, you are just wasting your time like what the actual hell man</h1>
}
else{
  return  <button className="size-100 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick = {()=> setStartgame(true)}>START GAME</button>
}
}
const operationGetTheBackground = (currentArea:Area)=>{
  switch(currentArea){
    //test imgs next time
        case "IDK":
          return <Image src = {idk}
         width = {1000} height = {1000} alt = ""
         />
        case "Farm":
          return <Image src = {farm}
         width = {1000} height = {1000} alt = ""
         />
        case "Dog park (mysteriously off somehow)":
          return <Image src = {doggypark}
         width = {1000} height = {1000} alt = ""
         />
        default:
          console.log("AAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH WHY IS THIS HAPPENING WTH AAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
      }

}

  return (




    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
           <h1>WEEEEE SAFARI THAT HAS WEIRD STUFF IN IT ANYWAY WHy ARE YOU HERE do you have a LIFE if you dont I am very sorry for your loss, unless you are a robot in which case whoever programmed you is high.</h1>
          </div>
          {another_example_of_me_making_bad_variable_names(startGame)}
         <Image src = {GETALIFE}
         width = {1000} height = {1000} alt = "GET A LIFE"
         />
{operationGetTheBackground(ASafari.current.thisArea)}
      </main>
    </div>
  );
}
