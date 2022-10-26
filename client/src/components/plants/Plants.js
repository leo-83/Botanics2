import PlantList from './PlantList';
import { useEffect, useState } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainTitle, CarouselImg, MyPlantsTitle, MyPlantsLinks } from '../../styles/HomeStyles';

const Plants = ({ plants, getAllPlants }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPlants()
  }, [])

  return (
    <>
      <MainTitle>Welcome back to Botonics!</MainTitle>
      
      <Carousel variant="dark">
          { plants.map( p =>
            <Carousel.Item>
                <CarouselImg
                  className="Carousel"
                  src={p.img} 
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>{p.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            
          ) }
        </Carousel>

      <Button onClick={() => setAdd(true)}
      >
        Add Plant
      </Button>

      <Link to='/randoplant'>
        <Button>
          Rando Plant
        </Button>
      </Link>
      

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantForm addPlant={adding} setAdd={setAdd}/>
        </Modal.Body>
      </Modal>

      <MyPlantsTitle>My Plants</MyPlantsTitle>
      <MyPlantsLinks>All Plants  Leaves  Indoor Plants  Vegetables  Growing Accessories</MyPlantsLinks>
      <PlantList
        plants={plants}
      />
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    { value => <Plants {...props} {...value} /> }
  </PlantConsumer>
)

export default ConnectedPlants;