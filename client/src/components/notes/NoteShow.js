import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { NoteConsumer } from "../../providers/NoteProvider";
import NoteForm from './NoteForm';

const NoteShow = ({body, deleteNote, plantId, id }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {body}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Note Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Notes: {body}
                </p>
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
                    <NoteForm
                      id={id}
                      plantId={plantId}
                      body={body}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deleteNote(plantId, id)}
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

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...props} {...value} /> } 
  </NoteConsumer>
)

export default ConnectedNoteShow;