import { MainHeader } from '../../../styles/SharedStyles.js';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import React from "react";
// import background from "./img/placeholder.png";

// function App() {
//   return (
//     <div style={{ 
//       backgroundImage: `url("https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=600")` 
//     }}>
//       Hello World
//     </div>
//   );
// }
 

const Headline = () => (
  <>
  <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=600")` 
    }}> 
   {/* <Image 
      alt='head'
      width='500px'
      src="https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=600"
    /> */}
    <Container>
      <Row >
        <Col md='2' sm='20' >
          <Slide 
            direction='left'
          >
          <h1>Manic for Botanics
          </h1>
          </Slide>
          <MainHeader size='md'><p>
            Botanics is a plant lovers journal to help keep track of your plants and everything you need to do to make sure your plants remain healthy and happy.
          </p></MainHeader>
        </Col>
          {/* <Link to='/register'>
            <Button>
              Sign-up
            </Button>
          </Link>
          <Link to='/login'>
            <Button>
              Login
            </Button>
          </Link> */}
      </Row>
    </Container>
    </div>
  </>
)


// const styles = {
//   header: {
//     color: 'green',
//   }
// }

export default Headline;
