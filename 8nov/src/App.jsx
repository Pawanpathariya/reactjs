/*
const name=["Pawan","Danish","Sumit","Aadesh","Raja"];
const data=name.map((key)=>{
 return(
 <>
  <li>{key}</li>
  </>
  )
})


//we can can also use that 
const data=name.map((key)=> <li>{key}</li> )


const App=()=>{
  return(
    <>
    <ol>
    {data}
    </ol>
    </>
  )
}
export default App; 

*/

/*
const name=["Pawan","Danish","Sumit","Aadesh","Raja"];
const data=name.map((key)=> <option>{key}</option> )

const App=()=>{
  return(
    <>
    <select>
    {data}
    </select>
    </>
  )
}
export default App; 
*/

//array object

const student=[
  {
"rollno":101,
"name":"Pawan",
"city":"Bhopal"
},
  {
"rollno":102,
"name":"Aman",
"city":"Indore"
},
  {
"rollno":103,
"name":"Naman",
"city":"Bhopal"
},
  {
"rollno":104,
"name":"Ayush",
"city":"Mumbai"
},
  {
"rollno":105,
"name":"Danish",
"city":"Bhopal"
}
]

const ans=student.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
    </tr>
    </>
  )
})
const App=()=>{
  return(
    <>
   <table>
    <tr>
      <th>Rollno</th>
      <th>Name</th>
      <th>City</th>
    </tr>
    {ans}
   </table>
    </>
  )
}
export default App; 