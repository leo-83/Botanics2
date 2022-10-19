import { ListGroup, Container } from 'react-bootstrap';
import NoteShow from './NoteShow';

const NoteList = ({ notes, plantId }) => (
  <Container>
    <h1>All Notes For This Plant</h1>
    <ListGroup variant="flush">
      { notes.map( n => 
        <NoteShow 
          key={n.id}
          {...n}
          plantId={plantId}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default NoteList;