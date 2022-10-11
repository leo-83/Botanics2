import { useState, useEffect } from 'react';
import axios from 'axios';
import PlantList from './PlantList';
import PlantForm from './PlantForm';
import { Modal, Button } from 'react-bootstrap';
import { PlantConsumer } from '../../providers/PlantProvider';

const Plants = ({ addPlant, plants }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantForm
            addPlant={addPlant}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Plants</h1>
      <PlantList 
        plants={plants} 
      />
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    { value => <Plants {...value} {...props} />}
  </PlantConsumer>
)

export default ConnectedPlants;