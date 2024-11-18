import { useState } from "react";
const App=()=>{

  const [name,setname]=useState("");
  const [city,setcity]=useState("");

  const handle=()=>{
    alert("Name : "+name +" City : "+city );
  }
  return(
    <>
    <h1>Application Form</h1>
   Enter Name <input type="text"  value={name} onChange={(e)=>{
  setname(e.target.value)
    }}/>
    <br />
   Enter City <input type="text"  value={city} onChange={(e)=>{
  setcity(e.target.value)
    }}/>
    <br />
    <button onClick={handle}>Click Here </button>
    </>
  )
}

export default App;