import { useState, useEffect } from 'react';
import { PropogationConsumer } from '../../providers/PropogationProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const PropogationForm = ({ addPropogation, setAdd, updatePropogation, errors, setErrors }) => {
  const [propogation, setPropogation] = useState({ name: '', method: '', pdate: '', results: '', plant_id: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { name, method, pdate, results, plant_id } = location.state 
      setPropogation({ name, method, pdate, results, plant_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePropogation(id, propogation)
    } 
    else {
      addPropogation(propogation)
      setAdd(false)
    }
    setPropogation({ name: '', method: '', pdate: '', results: '', plant_id: '' })
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
            value={propogation.name}
            onChange={(e) => setPropogation({ ...propogation, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Method</Form.Label>
          <Form.Control 
            name='method'
            value={propogation.method}
            onChange={(e) => setPropogation({ ...propogation, method: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            name='pdate'
            value={propogation.pdate}
            onChange={(e) => setPropogation({ ...propogation, pdate: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Results</Form.Label>
          <Form.Control 
            name='results'
            value={propogation.results}
            onChange={(e) => setPropogation({ ...propogation, results: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Plant ID</Form.Label>
          <Form.Control 
            name='plant_id'
            value={propogation.plant_id}
            onChange={(e) => setPropogation({ ...propogation, plant_id: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedPropogationShow = (props) => (
  <PropogationConsumer>
    { value => <PropogationForm {...props} {...value} />}
  </PropogationConsumer>
)

export default ConnectedPlantShow;