import Comp1 from "./Comp1";
import { useState,createContext } from "react";
const mycon=createContext();
const App=()=>{
  const [name,setname]=useState("Pawan")
  return(
    <>
    <h1>Hello {name}</h1>
    <mycon.Provider value={{name}}>
      <Comp1/>
    </mycon.Provider>
    </>
  )
}
export default App;
export {mycon}