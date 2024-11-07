import { Link,Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
        <h1>About Page</h1>
        
        <Link to="Aboutus">About us</Link> <br /> <br />
        <Link to="Aboutser">About service</Link> 
   <hr size="3" color="black"/>
   <Outlet/>
   
        </>
    )
}

export default About;