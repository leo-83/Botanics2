import { ListGroup, Container } from 'react-bootstrap';
import PestdiseaseShow from './PestdiseaseShow';

const PestdiseaseList = ({ pestdiseases, plantId }) => (
  <Container>
    <h1>This Plants Pests & Diseases</h1>
    <ListGroup variant="flush">
      { pestdiseases.map( p => 
        <PestdiseaseShow
          key={p.id}
          {...p}
          plantId={plantId}
        />
      )}
    </ListGroup>
  </Container>
)

export default PestdiseaseList;
