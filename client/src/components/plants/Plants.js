import PlantList from './PlantList';
import { useEffect, useState } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import { Button, Modal } from 'react-bootstrap';


const Plants = ({ plants, getAllPlants }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPlants()
  }, [])

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>
      {/* <Link to='/randomcat'>
        <Button>
          Random Cat
        </Button>
      </Link> */}
      

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Plants</h1>
      <PlantList
        plants={plants}
      />
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    { value => <Plants {...props} {...value} /> }
  </PlantConsumer>
)

export default ConnectedPlants;