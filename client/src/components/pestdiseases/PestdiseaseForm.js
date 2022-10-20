import { useState, useEffect } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestdiseaseProvider';
import { Button, Form } from 'react-bootstrap';

const PestdiseaseForm = ({ addPestdisease, setAdd, pdate, problem, treatment, name,  updatePestdisease, errors, setErrors, id, plantId, setEdit }) => {
  const [pestdisease, setPestdisease] = useState({ name: '', pdate: '', problem: '', treatment: '' })
   
  useEffect( () => {
    if (id) {
      setPestdisease({ name, pdate, problem, treatment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePestdisease(plantId, id, pestdisease)
      setEdit(false)
    } 
    else {
      addPestdisease(plantId, pestdisease)
      setAdd(false)
    }
    setPestdisease({ name: '', pdate: '', problem: '', treatment: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Pest & Disease</Form.Label>
          <Form.Control 
            name='name'
            value={pestdisease.name}
            onChange={(e) => setPestdisease({ ...pestdisease, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date you noticed the problem</Form.Label>
          <Form.Control 
            name='pdate'
            value={pestdisease.pdate}
            onChange={(e) => setPestdisease({ ...pestdisease, pdate: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Problem</Form.Label>
          <Form.Control 
            name='problem'
            value={pestdisease.problem}
            onChange={(e) => setPestdisease({ ...pestdisease, problem: e.target.value })}
            required  
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Treatment</Form.Label>
          <Form.Control 
            name='treatment'
            value={pestdisease.treatment}
            onChange={(e) => setPestdisease({ ...pestdisease, treatment: e.target.value })}
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

const ConnectedPestdiseaseShow = (props) => (
  <PestdiseaseConsumer>
    { value => <PestdiseaseForm {...props} {...value} />}
  </PestdiseaseConsumer>
)

export default ConnectedPestdiseaseShow;