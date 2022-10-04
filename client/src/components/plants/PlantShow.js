import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const PlantShow = ({}) => {
  const { id } = useParams()
  const [plant, setPlant] = useState({ name: '', desc: '', img: '' })

  useEffect( () => {
    axios.get(`/api/plants/${id}`)
      .then( res => setPlant(res.data))
      .catch( err => console.log(err) )
  }, [])

  const { name, desc, img } = plant
  return (
    <>
      <h1>{name}</h1>
      <h3>{img}</h3>
      <p>{desc}</p>
      <Button variant="warning">
        Edit
      </Button>
      <Button variant="success">
        Wishlists
      </Button>
      <Button variant="danger">
        Delete
      </Button>
    </>
  )
}

export default PlantShow;