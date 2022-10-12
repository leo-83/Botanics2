import { useState, useEffect } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const PlantForm = ({ addPlant, setAdd, updatePlant, errors, setErrors }) => {
  const [plant, setPlant] = useState({ name: '', desc: '', img: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { name, desc, img } = location.state 
      setPlant({ name, desc, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePlant(id, plant)
    } 
    else {
      addPlant(plant)
      setAdd(false)
    }
    setPlant({ name: '', desc: '', img: '' })
  }

  return (
    <>
      { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={plant.name}
            onChange={(e) => setPlant({ ...plant, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={plant.desc}
            onChange={(e) => setPlant({ ...plant, desc: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control 
            name='img'
            value={plant.img}
            onChange={(e) => setPlant({ ...plant, img: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedPlantShow = (props) => (
  <PlantConsumer>
    { value => <PlantForm {...props} {...value} />}
  </PlantConsumer>
)

export default ConnectedPlantShow;