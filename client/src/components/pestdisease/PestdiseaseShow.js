import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { PestdiseaseConsumer } from '../../providers/PestdiseaseProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PestdiseaseShow = ({ id, name, pdate, problem, treatment, deletePestdisease}) => {
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
                    pdate: {pdate}
                    <br />
                    problem: {problem}
                    <br />
                    treatment: {treatment}
                    <br />
                    <Link 
                      to={`/${id}/updatePestdisease`}
                      state={{ name, pdate, problem, treatment }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deletePestdisease(id)}
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

const ConnectedPestdiseaseShow = (props) => (
  <PestdiseaseConsumer>
    { value => <PestdiseaseShow {...props} {...value} />}
  </PestdiseaseConsumer>
)

export default ConnectedPestdiseaseShow;