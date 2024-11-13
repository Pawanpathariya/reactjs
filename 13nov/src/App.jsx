import Container from 'react-bootstrap/Container';
import Topmenu from './component/Topmenu';
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
const App=()=>{
  return(
    <>
   <Container fluid>
  <Topmenu/>
   </Container>
 
 <Home/>
 <Contact/>
    </>
  )
}
export default App;