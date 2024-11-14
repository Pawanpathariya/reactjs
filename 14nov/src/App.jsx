// without parameter
//const display=()=>{
//   alert("this is event example ")
// }
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//    <button onClick={display}>Click here !!</button>
//     </>
//   )
// }
// export default App;


//with parameter 
// const mynm=(nm)=>{ alert(`My name is ${nm}`)}
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//    <button onClick={()=>{mynm("Pawan")}}>Click here !!</button>
//     </>
//   )
// }
// export default App;

//event with parameter
// const display=(nm,e)=>{ alert(`My name is ${nm} Event : ${e.type}`)}
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//    <button onClick={(e)=>{display("Pawan",e)}}>Click here !!</button>
//     </>
//   )
// }
// export default App;

//target get all the property of that e 
// const display=(e)=>{ 
//   let nm=e.target.name; 
//   let val=e.target.value; 
//   alert("Name : "+nm+" value : "+val)
// }
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//    <button name="btn1" value="mybutton"  onClick={display}>Click here !!</button>
//     </>
//   )
// }
// export default App; 



const display=(e)=>{ 
  let nm=e.target.name; 
  let val=e.target.value; 
  console.log("Name : "+nm+" value : "+val)
}
const App=()=>{
  return(
    <>
   <input type="text" name="city" onChange={display} />
    </>
  )
}
export default App; 