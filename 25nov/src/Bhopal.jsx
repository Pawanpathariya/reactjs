import { useContext } from "react";
import { mycont } from "./UserContext";

const Bhopal=()=>{
    const {name,setname}=useContext(mycont);
    return(
      <>
      <h1>Bhopal {name}</h1>
      <button onClick={()=>{setname("Sumit")}}>Click here !!</button>
      </> 
    )
  }
  
  export default Bhopal; 