import { useState, useEffect } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const PestdiseaseForm = ({ addPestdisease, setAdd, updatePestdisease, errors, setErrors }) => {
  const [pestdiesease, setPestdisease] = useState({ name: '', pdate: '', problem: '', treatment: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { name, pdate, problem, treatment } = location.state 
      setPestdisease({ name, pdate, problem, treatment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePestdiesease(id, pestdiesease)
    } 
    else {
      addPestdisease(pestdiesease)
      setAdd(false)
    }
    setPestdisease({ name: '', pdate: '', problem: '', treatment: '' })
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
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Treatment</Form.Label>
          <Form.Control 
            name='treatment'
            value={pestdiesease.treatment}
            onChange={(e) => setPestdisease({ ...pestdiesease, treatment: e.target.value })}
            required  
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