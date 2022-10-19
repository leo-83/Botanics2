import { useState, useEffect } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestProvider'; 
import { Button, Form } from 'react-bootstrap';

const PestdiseaseForm = ({ pestdisease, addPestdisease, setAdd, pdate, problem, treatment, name,  updatePestdisease, errors, setErrors, id, plantId, setEdit }) => {
  const [pestdiesease, setPestdisease] = useState({ name: '', pdate: '', problem: '', treatment: '' })
   
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
      addPestdisease(plantId, pestdiesease)
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
            value={pestdiesease.name}
            onChange={(e) => setPestdisease({ ...pestdiesease, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date you noticed the problem</Form.Label>
          <Form.Control 
            name='pdate'
            value={pestdiesease.pdate}
            onChange={(e) => setPestdisease({ ...pestdiesease, pdate: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Problem</Form.Label>
          <Form.Control 
            name='problem'
            value={pestdiesease.problem}
            onChange={(e) => setPestdisease({ ...pestdiesease, problem: e.target.value })}
            required  
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Treatment</Form.Label>
          <Form.Control 
            name='treatment'
            value={pestdiesease.treatment}
            onChange={(e) => setPestdisease({ ...pestdiesease, treatment: e.target.value })}
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