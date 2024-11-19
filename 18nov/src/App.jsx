// import { useState } from "react";
// const App=()=>{

//   const [name,setname]=useState("");
//   const [city,setcity]=useState("");

//   const handle=()=>{
//     alert("Name : "+name +" City : "+city );
//   }
//   return(
//     <>
//     <h1>Application Form</h1>
//    Enter Name <input type="text"  value={name} onChange={(e)=>{
//   setname(e.target.value)
//     }}/>
//     <br />
//    Enter City <input type="text"  value={city} onChange={(e)=>{
//   setcity(e.target.value)
//     }}/>
//     <br />
//     <button onClick={handle}>Save it !!!</button>
//     </>
//   )
// }

// export default App;

import { useState } from "react";

const App=()=>{
const[input, setInput]=useState({})
const Handel=(e)=>{
let name=e.target.name;
let value=e.target.value;

setInput(values=>({...values,[name]:value}))
console.log(input);
}

  return(
    <>
    <h1>Applicaion Form</h1>
    Enter Rollno: <input type="text" name="rollno" onChange={Handel} /> <br />
Enter Name: <input type="text" name="name" onChange={Handel} /> <br />
Enter City: <input type="text" name="city" onChange={Handel} /> <br />
Enter Fees: <input type="text" name="fees" onChange={Handel} /> <br />

<button onClick={Handel}>Save !!!</button>

    </>
    


  )
}
export default App;