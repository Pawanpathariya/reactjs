/*
const App=()=>{
  return(
    <>
    <div style={{height:"400px",width:"500px",backgroundColor:"yellow", marginLeft:"20%",border:"5px solid ", borderRadius:"10px"}}>
     <div style={{height:"300px",width:"350px",backgroundColor:"aqua",position:"relative",top:"50px",left:"80px",border:"5px solid ",borderRadius:"10px"}} >
     <div style={{height:"200px",width:"200px",backgroundColor:"yellow",position:"relative",top:"50px",left:"80px",border:"5px solid ",borderRadius:"10px", textAlign:"center"}}>
 <h1 style={{textAlign:"center", marginTop:"70px"}}>Cybrom</h1>
     </div>
     </div>
    </div>
    </>
  )
}
export default App
*/

/*const data={
  color:"red",
  fontFamily:"arial",
  textDecoration:"underline",
  fontSize:"70px"
}
const mydata={
  color:"blue",
  fontFamily:"verdana",
  textDecoration:"overline",
  fontSize:"50px"
}


const App=()=>{
  return(
    <>
   <h1 style={data}>Hello Guys</h1>
   <h2 style={mydata}>We are Developer </h2>
    </>
  )
}
export default App
*/
import Cybrom from "./cybrom"
const App=()=>{
  return(
    <>
   <h1>Hello Guys</h1> 
   <h2>We are Developer </h2>
   <Cybrom/>
    </>
  )
}
export default App