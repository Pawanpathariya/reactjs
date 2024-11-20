/*import { useState,useEffect } from "react";
const App=()=>{
const [count,setCount]=useState(0);
//useEffect for infinite time 
// useEffect(()=>{
//   setTimeout(()=>{
//   setCount(count+1)
//   },2000)
// })

//for only one time 
// useEffect(()=>{
//   setTimeout(()=>{
//   setCount(count+1)
//   },2000)
// },[])

const [multi,setmulti]=useState(0);
const mycoun=()=>{
  setCount(count+1);
}

useEffect(()=>{
  setmulti(count*2);
},[count])
   return(
    <>
   <h1>My count : {count}</h1>
   <h2>Multiplication :{multi}</h2>
   <button onClick={mycoun}>Click here</button>
    </>
  )
}

export default App;
*/


import { useState,useEffect } from "react";
import axios from "axios";

const App=()=>{
  const [mydata,setdata]=useState([])
  const loudData=()=>{
    let api="https://jsonplaceholder.org/comments";
    axios.get(api).then((res)=>{
    setdata(res.data);
    })
  }
  useEffect(()=>{
    loudData();
  },[])
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.id}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <table>
  <tr>
    <th>Id</th>
    <th>Post Id</th>
    <th>User Id</th>
    <th>Comment</th>
  </tr>
  {ans}
  </table>
    </>
  )
}

export default App;