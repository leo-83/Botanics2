import { useState, useEffect } from 'react';
import { PropogationConsumer } from '../../providers/PropogationProvider';
import { Button, Form } from 'react-bootstrap';

const PropogationForm = ({ addPropogation, setAdd, name, pdate, method, results, updatePropogation, id, plantId, setEdit }) => {
  const [propogation, setPropogation] = useState({ name: '', pdate: '', method: '', results: '' })
   
  useEffect( () => {
    if (id) {
      setPropogation({ name, pdate, method, results })
    }
  }, [id, name, pdate, method, results])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePropogation(plantId, id, propogation)
      setEdit(false)
    } 
    else {
      addPropogation(plantId, propogation)
      setAdd(false)
    }
    setPropogation({ name: '', pdate: '', method: '', results: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Propogation Name</Form.Label>
          <Form.Control 
            name='name'
            value={propogation.name}
            onChange={(e) => setPropogation({ ...propogation, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Propogation</Form.Label>
          <Form.Control 
            name='pdate'
            value={propogation.pdate}
            onChange={(e) => setPropogation({ ...propogation, pdate: e.target.value })}
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
            as="textarea" 
            rows={2}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Results</Form.Label>
          <Form.Control 
            name='results'
            value={propogation.results}
            onChange={(e) => setPropogation({ ...propogation, results: e.target.value })}
            required  
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedPropogationForm = (props) => (
  <PropogationConsumer>
    { value => <PropogationForm {...props} {...value} /> }
  </PropogationConsumer>
)

export default ConnectedPropogationForm;