import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { WishlistConsumer } from "../../providers/WishlistProvider";

const WishlistShow = ({ id, body, deleteWishlist, plantId }) => {
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
                <Modal.Title>Wishlist Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Date: 
                  <Moment format=" MM-DD-YYYY">
                    {ndate}
                  </Moment>
                </p>
                <p>
                  Time: 
                  <Moment format=" hh:MM a">
                    {ntime}
                  </Moment>
                </p>
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
                    <Modal.Title>Edit Wishlist</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <NoteForm
                      id={id}
                      plantId={plantId}
                      ndate={ndate}
                      ntime={ntime}
                      body={body}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deleteWishlist(plantId, id)}
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

const ConnectedWishlistShow = (props) => (
  <WishlistConsumer>
    { value => <WishlistShow {...props} {...value} /> } 
  </WishlistConsumer>
)

export default ConnectedWishlistShow;