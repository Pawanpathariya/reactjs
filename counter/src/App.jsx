import { useSelector ,useDispatch} from "react-redux"
import {increment,decrement,reset} from "./counterSlice"
const App=()=>{
  const dis=useDispatch()
const counter=useSelector(state=>state.counter)
  return(
    <>
    <h1 onClick={()=>dis(increment())}>+</h1>
  <h1>{counter} </h1>
  <h1 onClick={()=>dis(decrement())}>-</h1>
  <h1 onClick={()=>dis(reset())}>reset</h1>
    </>
  )
}

export default App