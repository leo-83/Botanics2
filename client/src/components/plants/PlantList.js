import PlantShow from './PlantShow';
import { Container, Row, Col } from 'react-bootstrap';

const PlantList = ({ plants }) => (
  <Container>
    <Row md='4' sm='12'>
      { plants.map( p => 
        <Col key={p.id}>
          <PlantShow
            {...p}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default PlantList;
