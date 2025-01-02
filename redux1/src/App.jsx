import { useSelector,useDispatch } from "react-redux"
import { changeColor } from "./colorSlice"
import { useState } from "react"
const App=()=>{
  const [colo,setcolo]=useState("");
  const cl=useSelector(state=>state.myclr.cl)
  const dispatch=useDispatch()
  return(
    <>
    <h1>Hello</h1>
    <div style={{width:"300px",height:"200px",backgroundColor:cl}}></div>
    <br />
Type color : <input type="text" value={colo} onChange={(e)=>setcolo(e.target.value)} /> <button onClick={()=>dispatch(changeColor(colo))}>Change</button>
    </>
  )
}

export default App