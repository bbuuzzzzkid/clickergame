'use client'
import WeirdButton from "./weird_button";
// import SchoolIsBad  from "./school_sucks"
import Image from "next/image";
import GETALIFE from "../public/helloworldimageorotherimages/images/images@images@img/AAHHHHHHHHHHHHHH.png"
import Link from "next/link"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  return (




    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
           <h1>WEEEEE SAFARI HAS WEIRD STUFF IN IT ANYWAY WHy ARE YOU HERE Gh;rth;jdSGHKJ;ADHBKAJRHEG;AD;H ihOUsihg rOSFHG;IRHGjrg;i rHNPOihe fipreghiperghoeqrihorehpuir ihnbhaohoiadhj;adiotgh'</h1>
         


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
      </main>
    </div>
  );
}