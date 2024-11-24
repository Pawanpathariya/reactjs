import { useContext } from "react";
import { mycontext } from "./App";
const Comp1=()=>{
    const {name}=useContext(mycontext);
    return(
        <>
        <h1>hello {name}</h1>
        </>
    )
}
export default Comp1;