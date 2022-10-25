import { PlantConsumer } from "../../providers/PlantProvider";
import { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';

const RandoPlant = ({ randomPlant, getRandomPlant }) => {

  useEffect( () => {
    getRandomPlant()
  }, [])

  return (
    <>
      <h1>Random Plant</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={randomPlant.img} />
        <Card.Body>
          <Card.Title>{randomPlant.name}</Card.Title>
          <Card.Text>
            Desc: {randomPlant.desc}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick={() => getRandomPlant()}>
        New Plant
      </Button>
    </>
  )
}

// const ConnectedRandoPlant = (props) => (
//   <PlantConsumer>
//     { value => <RandoPlant {...props} {...value} />}
//   </PlantConsumer>
// )

export default ConnectedRandoPlant;