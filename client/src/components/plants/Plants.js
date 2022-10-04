import { useState, useEffect } from 'react';
import axios from 'axios';
import PlantList from './PlantList';
import PlantForm from './PlantForm';
import { Modal, Button } from 'react-bootstrap';

const Plants = () => {
  const [plants, setPlants] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/plants')
      .then( res => setPlants(res.data))
      .catch( err => console.log(err))
  }, [])

  const addPlant = (plant) => {
    axios.post('/api/plants', { plant })
      .then( res => setPlants([...plants, res.data]))
      .catch( err => console.log(err))
  }

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Plant</Modal.Title>
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