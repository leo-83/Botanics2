import { useState, useEffect } from 'react';
import { PropogationConsumer } from '../../providers/PropogationProvider';
import { Form, Button } from 'react-bootstrap';

const PropogationForm = ({ setAdd, addPropogation, updatePropogation, id, plantId, name, method, pdate, results, setEdit }) => {
  const [propogation, setPropogation] = useState({name: '', method: '', pdate: '', results: '' })

  useEffect( () => {
    if (id) {
      setPropogation({ name, method, pdate, results })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePropogation(plantId, id, propogation)
      setEdit(false)
    } else {
      addPropogation(plantId, propogation)
      setAdd(false)
    }
    setPropogation({ body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Propogation Name</Form.Label>
          <Form.Control 
            name="name"
            value={propogation.name}
            onChange={(e) => setPropogation({ ...propogation, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Method</Form.Label>
          <Form.Control 
            name="method"
            value={propogation.method}
            onChange={(e) => setPropogation({ ...propogation, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            name="pdate"
            value={propogation.pdate}
            onChange={(e) => setPropogation({ ...propogation, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Results</Form.Label>
          <Form.Control 
            name="results"
            value={propogation.results}
            onChange={(e) => setPropogation({ ...propogation, body: e.target.value })}
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