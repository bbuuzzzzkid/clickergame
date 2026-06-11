'use client'
import Image from "next/image";
import WeirdButton from "../weird_button";
import GETALIFE from "../../public/helloworldimageorotherimages/images/images@images@img/AAHHHHHHHHHHHHHH.png"
export default function clicker() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>Now you can't eat cookies OR hurt the button. MWAHAHAHAHAHA!!!</h1>

         <WeirdButton label2 = "I like to eat this many cookies:"destination = "/WHYNOT" clickNumber={1000} label = "Punishment button (has armor)" startmessage = "YOUR PUNISMENT AWAITS... CLICK THIS BUTTON 1000 TIMES!!!" endmessage = "YOU HAVE COMPLETED THE PUNISMENT. NOW... BEGONE!!!"></WeirdButton>
          <Image src = {GETALIFE}
         width = {1000} height = {1000} alt = "GET A LIFE"
         />
        </div>
      </main>
    </div>
  );
}
