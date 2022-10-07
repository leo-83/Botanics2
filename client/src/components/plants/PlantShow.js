import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';

const PlantShow = ({}) => {
  const { id } = useParams()
  const [plant, setPlant] = useState({ name: '', desc: '', img: '' })
  const [plantUsers, setPlantUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/plants/${id}`)
      .then( res => setPlant(res.data))
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/plantUsers`)  
      .then( res => setPlantUsers(res.data))
      .catch( err => console.log(err) )  
  }, [])

  const { name, desc, img } = plant
  return (
<>
      { editing ?
        <>
          <PlantForm
            name={name}
            desc={desc}
            img={img}
            updatePlant={updatePlant}
            setEdit={setEdit}
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        : 
        <>
          <h1>{name}</h1>
          <h3>{desc}</h3>
          <p>{img}</p>
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Link 
            to={`/${id}/wishlists`}
            state={{ plantName: name }}
          > 
            <Button variant="success">
              Wishlists
            </Button>
          </Link>
          <Button 
            variant="danger"
            onClick={() => deletePlant(id)}
          >
            Delete
          </Button>
          <br />
          <h1>Plant Owners</h1>
          <UserList users={plantUsers} />
        </>
      }
    </>
  )
}

const ConnectedPlantShow = (props) => (
  <PlantConsumer>
    { value => <PlantShow {...value} {...props} />}
  </PlantConsumer>
)


export default ConnectedPlantShow;