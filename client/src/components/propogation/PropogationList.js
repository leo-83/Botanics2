import PropogationShow from './PropogationShow';
import { Container, Row, Col } from 'react-bootstrap';

const PropogationList = ({ propogations }) => (
  <Container>
    <Row md='4' sm='12'>
      { propogations.map( p => 
        <Col key={p.id}>
          <PropogationShow
            {...p}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default PropogationList;
