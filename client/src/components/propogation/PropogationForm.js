import { useState, useEffect } from 'react';
import { PropogationConsumer } from '../../providers/PropogationProvider';
import { Form, Button } from 'react-bootstrap';

const PropogationForm = ({ setAdd, addPropogation, updatePropogation, id, plantId, body, setEdit }) => {
  const [propogation, setPropogation] = useState({body: '' })

  useEffect( () => {
    if (id) {
      setPropogation({ body })
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
          <Form.Label>Propogation</Form.Label>
          <Form.Control 
            name="body"
            value={propogation.body}
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