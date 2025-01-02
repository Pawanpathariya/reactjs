import { useSelector, useDispatch } from "react-redux"
import { changecolor } from "./colorSlice"
import { useState } from "react"
const App=()=>{
  const dispatch=useDispatch()
  const cl=useSelector(state=>state.mycolor.cl)
  const [cl1, setcl1]=useState("");
  return(
    <>
    <h1>Hello</h1>

    <div style={{width:"300px", height:"300px",backgroundColor:cl}}></div>
    <br />
    <input type="text" value={cl1} onChange={(e)=>setcl1(e.target.value)} />
    <button onClick={()=>dispatch(changecolor({color:cl1}))}>Change</button>
    </>
  )
}

export default App