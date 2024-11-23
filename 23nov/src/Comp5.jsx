import { useContext } from "react";
import { myContext } from "./App";
const Comp5=()=>{
    const {name} = useContext(myContext)
    return(
      <>
      <h1>Comp 5 , Name : {name}</h1>
      </> 
    )
  }
  
  export default Comp5; 