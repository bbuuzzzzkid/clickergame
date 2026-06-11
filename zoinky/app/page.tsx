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
           <h1>Hello, welcome to: clicker game</h1>
         


          {/* <SchoolIsBad message = {
  "SCHOOL NEEDS AN UPDATE AND LESS HOMEWORK BECAUSE HOMEWORK SUCKS CLICK THIS BUTTON IF YOU AGREE!!!!!!!!!!!!!"
          }
          onClickHandler={() => alert("YAY! YOU THINK HOMEWORK IS BAD TOO! BECAUSE IS IT SUCKS!!! SPREAD THE WORD!!!")}
          ></SchoolIsBad> */}
          <WeirdButton destination = "/clicker" clickNumber={100} label = "PLEASE DON'T CLICK ME😭" label2 = "I like to eat that many cookies:" startmessage = "PLEAAAAAASSSSSEEEEE DON'T CLICK IT!!! IT HAS FEELINGS TOO!😭" endmessage = "HOW DARE YOU CLICK THE BUTTON YOU MONSTER!!! HERE'S YOUR PUNISHMENT FOR THESE TERRIBLE CRIMES YOU'VE COMMITTED!"></WeirdButton>
        </div>
         <Image src = {GETALIFE}
         width = {1000} height = {1000} alt = "GET A LIFE"
         />
      </main>
    </div>
  );
}