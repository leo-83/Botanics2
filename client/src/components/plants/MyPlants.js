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

//   return (
//     <>
//     <h1>Coming Soon: My Plants</h1>
//       <Card style={{ width: '12rem' }}>
//         <Card.Img variant="top" src={img} width='200px' height='200px' />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Button 
//             variant="primary" 
//             onClick={() => setShow(true)}
//           >
//             Show Plant
//           </Button>

//           <Modal show={showing} onHide={() => setShow(false)}>
//             <Modal.Header closeButton>
//               <Modal.Title>{name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Container>
//                 <Row>
//                   <Col>
//                     Name: {name}
//                     <br />
//                     Description: {desc}
//                     <br />
//                     <Link 
//                       to={`/${id}/updatePlant`}
//                       state={{ name, desc, img }}
//                     >
//                       <Button>Edit</Button>
//                     </Link>
//                     <p></p>
//                     <Button
//                       onClick={() => deletePlant(id)}
//                     >
//                       Delete
//                     </Button>
//                     <p></p>
//                     <Link to={`/${id}/notes`}>
//                     <br></br>
//                       <Button>Add Note</Button>
//                       <br></br>
//                     </Link>
//                     <br></br>
//                     <Link to={`/${id}/pestdiseases`}>
//                       <Button>Add Pest/Diseases</Button>
//                       <br></br>
//                     </Link>
//                     <br></br>
//                     <Link to={`/${id}/propogations`}>
//                       <Button>Propogation</Button>
//                       <br></br>
//                     </Link>
//                   </Col>
//                   <Col>
//                     <Image src={img} width='200px' height='200px' />
//                   </Col>
//                 </Row>
//               </Container>
//             </Modal.Body>
//           </Modal>
//         </Card.Body>
//       </Card>
//     </>
//   )
// }

// const ConnectedPlantShow = (props) => (
//   <PlantConsumer>
//     { value => <PlantShow {...props} {...value} />}
//   </PlantConsumer>
// )

// export default ConnectedPlantShow;
