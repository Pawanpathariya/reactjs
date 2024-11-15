// usestate hook
// import { useState } from "react";
// const App=()=>{
//   const [city,setCity]= useState("Bhopal");

// const display=()=>{
//   setCity("Indore");
// }
//   return(
//     <>
// <h1>I am from {city}</h1>
// <button onClick={display}>Click here</button>
//     </>
//   )
// } 
// export default App;

import { useState } from "react";
const App=()=>{
  const [color,setcolor]= useState("Red");

  return(
    <>
<h1 style={{color:color}}>My favourite Color : {color}</h1>
<button onClick={()=>{setcolor("blue")}}>Blue</button>
<button onClick={()=>{setcolor("black")}}>Black</button>
<button onClick={()=>{setcolor("green")}}>Green</button>
<button onClick={()=>{setcolor("orange")}}>Orange</button>
    </>
  )
} 
export default App;