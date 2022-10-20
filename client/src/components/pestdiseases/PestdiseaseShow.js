import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { PestdiseaseConsumer } from '../../providers/PestdiseaseProvider';
import { useState } from 'react';
import PestdiseaseForm from './PestdiseaseForm'

const PestdiseaseShow = ({ id, name, pdate, problem, treatment, deletePestdisease, plantId}) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {name}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Pest & Disease Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Name: {name}
                <br />
                pdate: {pdate}
                <br />
                  problem: {problem}
                <br />
                  treatment: {treatment}
                <br />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setEdit(true)}>
                  Edit
                </Button>

                <Modal show={editing} onHide={() => setEdit(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <PestdiseaseForm
                      id={id}
                      plantId={plantId}
                      name={name}
                      pdate={pdate}
                      problem={problem}
                      treatment={treatment}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deletePestdisease(plantId, id)}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}

const ConnectedPestdiseaseShow = (props) => (
  <PestdiseaseConsumer>
    { value => <PestdiseaseShow {...props} {...value} />}
  </PestdiseaseConsumer>
)

export default ConnectedPestdiseaseShow;