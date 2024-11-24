import { createContext } from "react";
import Comp1 from "./Comp1";
const mycontext=createContext();
const App=()=>{
  const name="Pawan";
  return(
    <>
    <h1>My name is {name}</h1>
    <mycontext.Provider value={{name}}>

      <Comp1/>
    </mycontext.Provider>
    </>
  )
}
export default App;
export {mycontext};