'use client'

import { createContext, ReactNode, useContext, useState } from "react"

const mycontext = createContext<any>(null)
export function CookieProvider({children}:{children:ReactNode}){
    const [cookieCounter,setCookieCounter] = useState(0)
    const [acps, setAcps] = useState(0)
    return <mycontext.Provider value = {{cookieCounter,setCookieCounter,acps,setAcps}}>{children}</mycontext.Provider>
}
const useMyContext = () => useContext(mycontext)
export default useMyContext