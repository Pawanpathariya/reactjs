import { useContext } from "react";
import { mycon } from "./UserCom";
const Cybrom=()=>{
    const {name,setname}=useContext(mycon)
    return(
        <>
        <h1>{name} from Cybrom</h1>

        <button onClick={()=>{setname("Sumit")}}>Change</button>
        </>
    )
}
export default Cybrom;