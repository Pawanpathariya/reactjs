import { useState } from "react";
const App=()=>{
  const [city,setCity]= useState("Bhopal");

const display=()=>{
  setCity("Indore");
}
  return(
    <>
<h1>I am from {city}</h1>
<button onClick={display}>Click here</button>
    </>
  )
} 
export default App;