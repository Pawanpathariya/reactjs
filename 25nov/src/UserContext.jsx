import { createContext,useState } from "react";
const mycont=createContext();
const UserContext=({children})=>{
    const [name,setname]=useState("Pawan")
    return(
        <>
        <mycont.Provider value={{name,setname}}>
        {children}
        </mycont.Provider>
      
        </>
    )
}

export default UserContext;
export {mycont};