import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="Home">Home</Link> |
        <Link to="About">About</Link> | 
        <Link to="Contact">Contact</Link>

        <hr size="5" color="black"/>
        <Outlet/>
        <hr size="5" color="black"/>
        <h1>Pawanpathariya@gmail.com</h1>
        </>
    )
}

export default Layout;