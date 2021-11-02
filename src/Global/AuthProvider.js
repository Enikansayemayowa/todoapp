import React, {createContext, useState, useEffect} from "react"
import { app } from "../Base";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState([]);

useEffect(() => {
    app.auth().onAuthStateChanged((user)=>{
        setCurrentUser(user);
    })
}, [])

return(
    <AuthContext.Provider
    value={{message:"this is the global state", currentUser}}>
        {children}
    </AuthContext.Provider>
)
}