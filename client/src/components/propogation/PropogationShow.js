import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
// import Moment from 'react-moment';
import { PropogationConsumer } from "../../providers/PropogationProvider";
import PropogationForm from './PropogationForm';

const PropogationShow = ({name, method, pdate, results, deletePropogation, plantId, id }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {name, method, pdate, results}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Propogations: {name, method, pdate, results}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setEdit(true)}>
                  Edit
                </Button>

                <Modal show={editing} onHide={() => setEdit(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <PropogationForm
                      id={id}
                      plantId={plantId}
                      name={name}
                      method={method}
                      pdate={pdate}
                      results={results}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deletePropogation(plantId, id)}
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

const ConnectedPropogationShow = (props) => (
  <PropogationConsumer>
    { value => <PropogationShow {...props} {...value} /> } 
  </PropogationConsumer>
)

export default ConnectedPropogationShow;