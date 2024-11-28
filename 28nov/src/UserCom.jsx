import { useState,createContext } from "react";
const mycon=createContext();

const UserCom=({children})=>{
    const [cnt,setcnt]=useState(0)
    return(
        <>
        <mycon.Provider value={{cnt,setcnt}}>
     {children}

        </mycon.Provider>

        </>
    )
}
export default UserCom;
export {mycon};