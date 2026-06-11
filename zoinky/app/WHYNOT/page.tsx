'use client'
import Image from "next/image";
import WeirdButton from "../weird_button";
import GETALIFE from "../../public/helloworldimageorotherimages/images/images@images@img/AAHHHHHHHHHHHHHH.png"
import ShopIcon from "../shopwithshopthatkindaweird"
export default function clicker() {
 return (
   <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <div>
         <h1>Hi! XD</h1>
        <WeirdButton label2 = "Cookies in jar:"destination = "/WHYNOT" clickNumber={1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000} label = "I got armor now 😎" startmessage = "Sup. Got armor now :)" endmessage = "Uh... wth? This isn't meant ot be possible..."></WeirdButton>
        <Image src = {GETALIFE}
        width = {1000} height = {1000} alt = "GET A LIFE"
        />
        <ShopIcon ACPS = {10} name = "random icon" quantity = {1000000000} cost = {50}></ShopIcon>
       </div>
     </main>
   </div>
 );
}