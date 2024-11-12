import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "./image/img1.jpg";
import ban2 from "./image/img2.jpg";
import ban3 from "./image/img1.jpg";
// import img1 from "./image/img1.jpg"
// import img2 from "./image/img2.jpg"

const App=()=>{
  return(
    <>
    <Container>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel>
      <Carousel.Item>
        <img src={ban1} width={1300}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2}  width={1300} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban3}  width={1300}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </Container>






{/*  from src
<img src={img1} width="400px" height="300px"/>
<br/>
<img src={img2} width="400px" height="300px"/> 
*/}

{/* 
from link or public

<img src="public/image/img1.jpg"  width="400px" height="300px"/>
<br/>
<img src="public/image/img2.jpg"  width="400px" height="300px"/>
<img src="https://up.yimg.com/ib/th?id=OIP.TJO-CjFrXCs8_G_m2KEk5wHaE8&pid=Api&rs=1&c=1&qlt=95&w=152&h=101"  width="400px" height="300px"/> */}
    </>
  )
}

export default App;