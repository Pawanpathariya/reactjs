import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Aboutus from "./Aboutus"
import Aboutser from "./Aboutser"
const App=()=>{
  return(
    <>
<BrowserRouter>
<Routes>

<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="Home" element={<Home/>}/>
<Route path="About" element={<About/>}>
<Route path="Aboutus" element={<Aboutus/>}></Route>
<Route path="Aboutser" element={<Aboutser/>}></Route>

</Route>
<Route path="Contact" element={<Contact/>}/>

</Route>


</Routes>



</BrowserRouter>

    </>
  )
}
export default App