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

// import { useState } from "react";
// const App=()=>{
//   const [color,setcolor]= useState("Red");

//   return(
//     <>
// <h1 style={{color:color}}>My favourite Color : {color}</h1>
// <button onClick={()=>{setcolor("Blue")}}>Blue</button>
// <button onClick={()=>{setcolor("Black")}}>Black</button>
// <button onClick={()=>{setcolor("Green")}}>Green</button>
// <button onClick={()=>{setcolor("Orange")}}>Orange</button>
//     </>
//   )
// } 
// export default App;


import { useState } from "react";
const App=()=>{
  const [count,setcount]=useState(0);
  const inc=()=>{
    setcount(count+1);
  }
  const dec=()=>{
    if(count<=0){
      alert("Not Decrement less than 0")
    }
    else{
    setcount(count-1);
    }
  }
  const res=()=>{
    setcount(0);
  }
  

  return(
    <>
    <center>
  <h1> {count}</h1>
<br/>
   <button onClick={inc}>Increment</button>
   <button onClick={dec}>Decrement</button>
   <button onClick={res}>Reset</button>
   </center>
    </>
  )
}

export default App;