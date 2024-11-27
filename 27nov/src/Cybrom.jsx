import { useContext } from "react";
import { mycon } from "./UserCom";
const Cybrom=()=>{
    const {cnt,setcnt}=useContext(mycon)
    return(
        <>
        <button onClick={()=>{setcnt(cnt+1)}}>Increment</button>
        <h1>{cnt}</h1>
        <button onClick={()=>{
            if(cnt>=1){setcnt(cnt-1)} 
        else{alert("Not less then 0 available")}
        }}>Decrement</button>
        <button onClick={()=>{setcnt(0)}}>Reset</button>
        </>
    )
}
export default Cybrom;