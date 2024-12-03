import { useState,useMemo } from "react"
const App=()=>{
 const [count, setCount] = useState(0);
 const [name, setName] = useState('');

 const result=useMemo(()=>{

  for(let i=0;i<1000000000;i++){}
  return count*2
 },[count])
  return(
    <>
    <h1>Welcome</h1>
  <h1> the multification of {result}</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} /> <br />
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
    </>
  )
}
export default App