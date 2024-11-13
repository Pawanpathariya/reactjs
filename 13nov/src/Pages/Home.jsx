import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../image/th.jpg";
import ban2 from "../image/ban2.jpg";
import ban3 from "../image/ban3.jpg";
const Home=()=>{
    return(
      <>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={ban1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={ban2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={ban3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    )
  }
  export default Home;