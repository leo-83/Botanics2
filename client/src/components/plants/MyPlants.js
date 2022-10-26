import { MainHeader } from '../../styles/SharedStyles';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import React from "react";

const MyPlants = () => (
  <>
  <h1>
    My Plants Page Coming Soon!
  </h1>
  <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=600")` 
    }}>
    </div>
    <Container>
      <Row >
        <Col md='2' sm='20' >
          <Slide 
            direction='center'
          >
          
          </Slide>
        </Col>
      </Row>
    </Container>
    {/* </div> */}
  </>
)

export default MyPlants