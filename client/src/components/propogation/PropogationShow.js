import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { PropogationConsumer } from '../../providers/PropogationProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlantShow = ({ id, name, img, desc, deletePlant}) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>

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
                    Method: {method}
                    <br />
                    <Link 
                      to={`/${id}/updatePropogation`}
                      state={{ name, method, pdate, results, plant_id }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deletePropogation(id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/${id}/notes`}>
                      <Button>Notes</Button>
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

const ConnectedPropogationShow = (props) => (
  <PropogationConsumer>
    { value => <PropogationShow {...props} {...value} />}
  </PropogationConsumer>
)

export default ConnectedPropogationShow;