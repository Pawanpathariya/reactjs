import { useContext } from "react";
import { mycon } from "./App";
const Comp2=()=>{
    const {name}=useContext(mycon)
    return(
        <>
        <h1>Comp 2 My name : {name}</h1></>
    )
}
export default Comp2;