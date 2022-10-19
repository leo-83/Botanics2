import { useState, useEffect } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ setAdd, addNote, updateNote, id, plantId, body, setEdit }) => {
  const [note, setNote] = useState({body: '' })

  useEffect( () => {
    if (id) {
      setNote({ body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(plantId, id, note)
      setEdit(false)
    } else {
      addNote(plantId, note)
      setAdd(false)
    }
    setNote({ body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Note</Form.Label>
          <Form.Control 
            name="body"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
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

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;