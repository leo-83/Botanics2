import { useState, useEffect } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestdiseaseProvider';
import { Button, Form } from 'react-bootstrap';

const PestdiseaseForm = ({ addPestdisease, setAdd, pdate, problem, treatment, name,  updatePestdisease, errors, setErrors, id, plantId, setEdit }) => {
  const [pestDisease, setPestdisease] = useState({ name: '', pdate: '', problem: '', treatment: '' })
   
  useEffect( () => {
    if (id) {
      setPestdisease({ name, pdate, problem, treatment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePestdisease(plantId, id, pestDisease)
      setEdit(false)
    } 
    else {
      addPestdisease(plantId, pestDisease)
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
            value={pestDisease.name}
            onChange={(e) => setPestdisease({ ...pestDisease, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date you noticed the problem</Form.Label>
          <Form.Control 
            name='pdate'
            value={pestDisease.pdate}
            onChange={(e) => setPestdisease({ ...pestDisease, pdate: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Problem</Form.Label>
          <Form.Control 
            name='problem'
            value={pestDisease.problem}
            onChange={(e) => setPestdisease({ ...pestDisease, problem: e.target.value })}
            required  
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Treatment</Form.Label>
          <Form.Control 
            name='treatment'
            value={pestDisease.treatment}
            onChange={(e) => setPestdisease({ ...pestDisease, treatment: e.target.value })}
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