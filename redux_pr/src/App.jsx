import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App=()=>{
  const dispatch=useDispatch();
  const count=useSelector(state=>state.controller.count);
  return(
  <>
  <h1>My counter Prograam </h1>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <h1>{count}</h1>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  </>
  )
}
export default App;