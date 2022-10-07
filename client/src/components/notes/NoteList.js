import { ListGroup, Container } from 'react-bootstrap';
import NoteShow from './NoteShow';

const NoteList = ({ notes, plant_id }) => (
  <Container>
    <h1>All Notes</h1>
    <ListGroup variant="flush">
      { notes.map( n => 
        <NoteShow 
          key={n.id}
          {...n}
          plant_id={plant_id}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default NoteList;