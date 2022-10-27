import PlantList from './PlantList';
import { useEffect, useState } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainTitle, CarouselImg, MyPlantsTitle, MyPlantsLinks, AddPlantButton, News, News2, SubscribeButton } from '../../styles/HomeStyles';

const Plants = ({ plants, getAllPlants }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPlants()
  }, [])

  return (
    <>
      <MainTitle>Welcome back to Botonics!</MainTitle>
      <br />
      <br />
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
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>

        <AddPlantButton onClick={() => setAdd(true)}
        >
          Add Plant
        </AddPlantButton>
      </div>
      <br />

      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
        <img src="https://images.unsplash.com/photo-1592178036775-70c41f818c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          width="1000"
          height="550"
        />
      </div>
      <br />
      <br />
      <News>NEWSLETTER</News>
      <News>TO GET IN TOUCH</News>
      <br />
      <br />
      <News2>Enter your e-mail</News2>
      <br />
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>

        <SubscribeButton onClick={() => setAdd(true)}
        >
          SUBSCRIBE
        </SubscribeButton>
      </div>
      <br />
      <br />
    </>
    
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    { value => <Plants {...props} {...value} /> }
  </PlantConsumer>
)

export default ConnectedPlants;