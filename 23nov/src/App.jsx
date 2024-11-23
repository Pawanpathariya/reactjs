import { createContext } from "react";
import Comp1 from "./Comp1";
import { useState } from "react";
const myContext=createContext();
const App=()=>{
  const [name,setname]=useState("Pawan");
  return(
    <>
    <h1>Hello world!! {name}</h1>

    <myContext.Provider  value={{name}}>
    <Comp1/>
    </myContext.Provider>
  
    </>
  )
}

export default App; 
export {myContext};