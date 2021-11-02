import React,{createContext, useState, useEffect} from "react";

export const UserContext = createContext()


export const UserProvider = ({children})=>{
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    
    return <UserContext.Provider value ={{
        token, 
        setToken,
        isLoggedIn,
        setIsLoggedIn
    }}>{children}</UserContext.Provider>
}



