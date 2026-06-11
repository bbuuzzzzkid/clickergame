'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import shopicon from "../public/helloworldimageorotherimages/images/images@images@img/shopclickericon.png"
import useMyContext from "./forcontext";


type shopProps = { 
    ACPS: number
    cost:number
    name:string
    quantity:number

}

const ShopIcon: React.FC<shopProps> = ({ACPS,cost,name,quantity}) => {
const [counter, setCounter] = useState(0)
  const [cps,setCps] = useState(0)
  const {cookieCounter,setCookieCounter,acps,setAcps} = useMyContext()
  

  const router = useRouter()

  

// ------------------------------------------------------------------ \\
  
    
    return (

         <div>
            <p>Item below gives you 5 cps/sec. Cost: 50 cookies</p>
          <Image src = {shopicon}
         width = {100} height = {100} alt = "GET A LIFE"
         onClick = {() => alert("hi")} 
         />
        </div>


    )
}
export default ShopIcon

















/**
 * 
 * 
 * Home => a very big page
 *    inside home, we have a funny button
 *    useeffect, usestate, use router, button
 * 
 * Clicker => smaller page
 *      also has a funny button
 * 
 * 
 * Reusable component weird button
 * 
 * 
 * 
 * 
 * Home and Clicker
 *    Weird Button
 * 
 * 
 * Hoome - werid button(1000, "./clicker")
 * Clicker - weird button(100, "./home")
 */
