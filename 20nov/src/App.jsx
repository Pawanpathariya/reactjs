import axios from "axios";
import { useEffect,useState } from "react";

const App=()=>{

  const [data,setdata]=useState([])

  const showdata=()=>{
    let api="http://localhost:3000/Student";
    axios.get(api).then((res)=>{
   setdata(res.data);
    })
  }

const ans=data.map((key)=>{
return(
  <>
  <tr>
    <td>{key.rollno}</td>
    <td>{key.name}</td>
    <td>{key.city}</td>
    <td>{key.fees}</td>
  </tr>
  </>
)
})
  return(  
    <>
<h1>Display Data</h1>
<button onClick={showdata}>Show Data</button>
<hr />
<table border={"2px solid "} width="500px">
  <tr>
    <th>Roll no</th>
    <th>Name</th>
    <th>City</th>
    <th>Fees</th>
  </tr>
  {ans}
</table>
    </>
  )
}
export default App;
