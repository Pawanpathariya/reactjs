import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";



const App=()=>{
  const dispatch=useDispatch()
  const {count}=useSelector(state=>state.pawan)
  return(
    <>
    <h1 >My Counter App :<button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></h1>
    </>
  )
}
export default App;