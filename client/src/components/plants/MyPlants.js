// import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
// import { PlantConsumer } from '../../providers/PlantProvider';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const PlantShow = ({ id, name, img, desc, deletePlant}) => {
//   const [showing, setShow] = useState(false)

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