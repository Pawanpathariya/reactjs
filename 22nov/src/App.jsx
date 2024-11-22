import { useState } from "react";
import Comp1 from "./comp1";
const App=()=>{
  const [name,setname]=useState("Pawan");
  return(
    <>
    <h1>Hello world I am : {name}</h1>
    <Comp1 user={name}/>
    </>
  )
}

export default App;