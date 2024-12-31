import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
const App=()=>{
  const dispatch=useDispatch();
  const count=useSelector(state=>state.counter.count);
  return(
  <>
  <center>
  <h1>My counter Prograam </h1>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <h1>{count}</h1>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <button onClick={()=>dispatch(reset())}>Reset</button>
  </center>
  </>
  )
}
export default App;