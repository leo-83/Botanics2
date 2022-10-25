import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Headline = () => (

<Container>

  <Row>
    <Col>
      <img src="https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW5ob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      width="600"
      height="500"
      />
    </Col>
    <Col>
    {/* <div style="background-color: #FFFFFF"> */}
    <h3>Composters for healthy planet</h3>
      <h2>PLANTS FOR HEALTHY LIVING</h2>
      {/* </div> */}
      <br />
    </Col>
  </Row>
  <br />
  <Row>
    <Col>
    <h3>Bring freshness to your architecture</h3>
    <h2>PLANTS FOR INTERIOR</h2>
    </Col>
    <Col>
    <img src="https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uc3RlcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      width="600"
      height="500"
      />
    </Col>
  </Row>
</Container>
)

export default Headline;