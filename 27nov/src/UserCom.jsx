import { useState,createContext } from "react";
const mycon=createContext();

const UserCom=({children})=>{
    const [name,setname]=useState("Pawan")
    return(
        <>
        <mycon.Provider value={{name,setname}}>
     {children}

        </mycon.Provider>

        </>
    )
}
export default UserCom;
export {mycon};