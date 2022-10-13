import PestdiseaseShow from './PestdiseaseShow';
import { Container, Row, Col } from 'react-bootstrap';

const PestdiseaseList = ({ pestdiseases }) => (
  <Container>
    <Row md='4' sm='12'>
      { pestdiseases.map( p => 
        <Col key={p.id}>
          <PestdiseaseShow
            {...p}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default PestdiseaseList;
