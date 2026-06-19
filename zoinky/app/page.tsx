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
           <h1>WEEEEE SAFARI THAT HAS WEIRD STUFF IN IT ANYWAY WHy ARE YOU HERE'</h1>

          {/* <SchoolIsBad message = {
  "SCHOOL NEEDS AN UPDATE AND LESS HOMEWORK BECAUSE HOMEWORK SUCKS CLICK THIS BUTTON IF YOU AGREE!!!!!!!!!!!!!"
          }
          onClickHandler={() => alert("YAY! YOU THINK HOMEWORK IS BAD TOO! BECAUSE IS IT SUCKS!!! SPREAD THE WORD!!!")}
          ></SchoolIsBad> */}
          <WeirdButton destination = "/clicker" clickNumber={100} label = "OOHHH BUTTON :)" label2 = "YOU HAVE CLICKED THE BUTTON THIS MANY TIMES, WHILE WASTING YOUR SHORT LIFESPAN IN THE PROCESS:" startmessage = "OOHHH BUTTON! :)" endmessage = "OOHHHH FANCY HYPERLINK WEIRD PAGE CHANGE THINGY :)"></WeirdButton>
        </div>
         <Image src = {GETALIFE}
         width = {1000} height = {1000} alt = "GET A LIFE"
         />

        <button onClick = {()=> setStartgame(true)}>START GAME</button>

      </main>
    </div>
  );
}