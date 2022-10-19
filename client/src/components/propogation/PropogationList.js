import { ListGroup, Container } from 'react-bootstrap';
import PropogationShow from './PropogationShow';

const PropogationList = ({ propgations, plantId }) => (
  <Container>
    <h1>All Propogations For This Plant</h1>
    <ListGroup variant="flush">
      { propogations.map( p => 
        <PropogationShow 
          key={p.id}
          {...p}
          plantId={plantId}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default PropogationList;