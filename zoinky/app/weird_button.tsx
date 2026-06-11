'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useMyContext from "./forcontext";

type WeirdButtonProps = { 
    destination: string
    clickNumber: number
    label: string
    label2: string
    startmessage: string
    endmessage: string
}

const WeirdButton: React.FC<WeirdButtonProps> = ({destination,clickNumber,label, label2, startmessage,endmessage}) => {
const {cookieCounter, setCookieCounter} = useMyContext()
  const [cps,setCps] = useState(0)
  const [cheater, setCheater] = useState(false)
  
  

  const router = useRouter()

  // On startup
  useEffect(() => {
    alert(startmessage)
  }, [])
  useEffect(() => {
    const timer = setInterval(() => {
      setCps(0)
    },1000)

    let x = () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (cps>99){
      alert("Hey! You're cheating!")
      alert("Since you are cheating, here's your punishment")
      alert("YOU WILL BE FED COOKIES!!!!!!!!!!!")
      setCookieCounter(1000)
      setCheater(true)

    }
  }, [cps])

// ------------------------------------------------------------------ \\
  useEffect(() => {
    console.log(cookieCounter)
    if (cookieCounter === clickNumber){
      alert(endmessage)
    router.push(destination)
  }
  }, [cookieCounter])
    
    return (

         <div>
          <p>{label2} {cookieCounter} </p>
        
          <button 
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          disabled = {cheater} onClick = {() => {
            setCookieCounter(cookieCounter+1)
              setCps(prev => prev+1)
            
          } } >
               {label}
          </button>
        </div>


    )
}
export default WeirdButton

















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








