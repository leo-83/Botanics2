import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const PlantForm = ({ addPlant, setAdd }) => {
  const [plant, setPlant] = useState({ name: '', img: '', desc: '' })

  useEffect( () => {
    if (id) {
      setPlant({ name, desc, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePlant(id, plant)
      setEdit(false)
    } else {
      addPlant(plant)
      setAdd(false)
    }
    setPlant({ name: '', desc: '', img: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={plant.name}
            onChange={(e) => setPlant({ ...plant, name: e.target.value })}
            required
            placeholder="name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={plant.desc}
            onChange={(e) => setPlant({ ...plant, desc: e.target.value })}
            required
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Course type</Form.Label>
          <Form.Control 
            name='ctype'
            value={plant.ctype}
            onChange={(e) => setPlant({ ...plant, ctype: e.target.value })}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>Plant image</Form.Label>
          <Form.Select
            name='img'
            value={plant.img}
            onChange={(e) => setPlant({ ...plant, img: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Tech">Tech</option>
          </Form.Select>
        </Form.Group> */}
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default PlantForm;