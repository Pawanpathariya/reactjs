import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Cybrom = () => {
    const myval = useSelector((state) => state.mycounter.count);
const dispatch = useDispatch();
  return (
  <>

  <button onClick={() => dispatch(increment())}>increment</button>
  <h1>{myval}</h1>
  <button onClick={() => dispatch(decrement())} >decrement</button>
  </>
)
}

export default Cybrom 