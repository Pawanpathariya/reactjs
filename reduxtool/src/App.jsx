import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { colorChange } from "./colorSlice";



const App=()=>{
  const dispatch=useDispatch()
  const {count}=useSelector(state=>state.pawan)
  const {color}= useSelector(state=>state.color)
  return(
    <>
    <h1 style={{color:color}}>My Counter App :<button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></h1>
    <input type="text" onChange={(e)=>dispatch(colorChange(e.target.value))} />
    </>
  )
}
export default App;