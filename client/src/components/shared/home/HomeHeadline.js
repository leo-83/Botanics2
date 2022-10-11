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
        </Col>
        <Col md='6' sm='12'>
          <p>
          Cashew butternut mix green papaya salad banana bread lemon red lentil soup balsamic vinaigrette cherry bomb cool off bite sized plums artichoke hearts arugula salad spicy falafel bites red pepper summer Thai basil curry appetizer asian pear pesto.          </p>
          <Row>
            <Col>
              <Link to='/register'>
                <Button>
                  Signup
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to='/login'>
                <Button>
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
)

export default Headline;