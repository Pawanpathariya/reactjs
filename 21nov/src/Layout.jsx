import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
      <>
    <Link to="home"> home</Link> |
    <Link to="insert"> insert</Link> |
    <Link to="display"> display</Link> 
    <hr />
    <Outlet/>
    <hr />
    pawanpathariys@gmail.com
      </>
    )
  }
  export default Layout; 