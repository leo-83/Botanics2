import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlantList = ({ plants }) => (
  <Container>
    <Row md='4' sm='12'>
      { plants.map( p =>
        <Col>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>
                {p.img}
                {p.desc}
              </Card.Text>
              <Link to={`/plants/${p.id}`}>
                <Button>Show</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default PlantList;
