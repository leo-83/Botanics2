import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Headline = () => (
  <>
    <Image 
      alt='head'
      width='700px'
      src="https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
    <Container>
      <Row >
        <Col md='6' sm='12' >
          <h1>Manic for Botanics
          </h1>
          <p>
            Botanics is a plant lovers journal to help keep track of your plants and everything you need to do to make sure your plants remain healthy and happy.
          </p>
        </Col>

          <Link to='/register'>
            <Button>
              Sign-up
            </Button>
          </Link>
          <Link to='/login'>
            <Button>
              Login
            </Button>
          </Link>
      </Row>
    </Container>
  </>
)

export default Headline;