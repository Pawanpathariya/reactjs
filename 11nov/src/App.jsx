/*import Stu from "./Student";
const ans=Stu.map((key)=>{
return(
  <>
  <tr>
    <td style={{border:"2px solid" }}>{key.rollno}</td>
    <td style={{border:"2px solid"}}>{key.name}</td>
    <td style={{border:"2px solid"}}>{key.city}</td>
  </tr>
  </>
)
})

const App=()=>{
  return(
    <>
<table style={{fontSize:40}} >
  <tr>
    <th style={{border:"2px solid"}}>Rollno</th>
    <th style={{border:"2px solid"}}>Name</th>
    <th style={{border:"2px solid"}}> City</th>
  </tr>
  {ans}
</table>
    </>
  )
}

export default App;
*/

import EmpDesign from "./EmpDesign";
import Empdata from "./Empdata";

const ans=Empdata.map((key)=> <EmpDesign id={key.eno}
 nm={key.name}
  desi={key.designation} 
  sal={key.salary}/>);
const App=()=>{
  return(
 <>
 <div id="wrapper">
 {ans}
 </div>

</>
  )
}

export default App;