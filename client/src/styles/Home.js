import styled from 'styled-components';
import { container } from 'react-bootstrap';


const Home = styled.h1`
 background: linear-gradient(to bottom right, aliceblue, black);
 font-size: medium;
 text-align: center;
`

const WelcomeBanner = () => (
  <Container>
    <h1 welcome="justify-content-md-center">Welcome back to Boatanics ${user_id}!</h1>
  </Container>
)
const ImageCarousel = () => (
  <Container>
    <h1>images of your plants</h1>
  </Container>
)

const MyPlants = () => (
  <Container>
    <h1>myplants displayed in cards 2 rows 4 columns</h1>
  </Container>
)

const Button = () => (
  <Container>
    <h1>All Plants </h1>
  </Container>
)

const VideoPanel = () => (
  <Container>
    <h1>Video rectangle with quotes rectangle on the inside</h1>
  </Container>
)

const Newsletter = () => (
  <Container>
    <h1>small email input, submit button</h1>
  </Container>
)



export default Home;