import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { PlantConsumer } from '../../providers/PlantProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowPlantButton, EditButton, DeleteButton, NotesButton, PestButton, PropButton, SoonButton } from '../../styles/HomeStyles';

const PlantShow = ({ id, name, img, desc, deletePlant}) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ShowPlantButton 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </ShowPlantButton>

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    Name: {name}
                    <br />
                    Description: {desc}
                    <br />
                    <Link 
                      to={`/${id}/updatePlant`}
                      state={{ name, desc, img }}
                    >
                      <EditButton>Edit</EditButton>
                    </Link>
                    <DeleteButton
                      onClick={() => deletePlant(id)}
                    >
                      Delete
                    </DeleteButton>
                    <Link to={`/${id}/notes`}>
                      <NotesButton>Notes</NotesButton>
                    </Link>
                    <br />
                    <Link to={`/${id}/pestdiseases`}>
                      <PestButton>Pest/Disease</PestButton>
                      <br />
                    </Link>
                    <br />
                    <Link to={`/${id}/propogations`}>
                      <PropButton>Propogation</PropButton>
                      <br />
                    </Link>
                    <p>Coming Soon:</p>
                    <Link to={`/${id}/profile`}>
                      <SoonButton>
                        Add to My Plants
                      </SoonButton>
                    </Link>
                    <br />
                    <Link to={`/${id}/wishlists`}>
                      <SoonButton>
                        Add to WishList
                      </SoonButton>
                    </Link>
                  </Col>
                  <Col>
                    <Image src={img} width='200px' height='200px' />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedPlantShow = (props) => (
  <PlantConsumer>
    { value => <PlantShow {...props} {...value} />}
  </PlantConsumer>
)

export default ConnectedPlantShow;