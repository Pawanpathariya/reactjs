import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="About">About</Link> |
        <Link to="Contact">Contact</Link> |

        <hr size="4" color="red" />

        <Outlet></Outlet>
        <hr size="4" color="red" />
        www.Pawanpathariya.com
        </>
    )
}

export default Layout;