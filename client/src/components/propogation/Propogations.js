import { PropogationConsumer } from "../../providers/PropogationProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropogationList from './PropogationList';
import { Button, Modal } from 'react-bootstrap';
import PropogationForm from './PropogationForm';

const Propogations = ({ propogations, getAllPropogations }) => {
  const { plantId } = useParams();
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllPropogations(plantId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Propogation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropogationForm 
            setAdd={setAdd}
            plantId={plantId}
          />
        </Modal.Body>
      </Modal>
      <PropogationList 
        propogations={propogations}
        plantId={plantId}
      />
    </>
  )
}

const ConnectedPropogations = (props) => (
  <PropogationConsumer>
    { value => <Propogations {...props} {...value} /> }
  </PropogationConsumer>
)

export default ConnectedPropogations;