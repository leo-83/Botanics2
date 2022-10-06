import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import WishlistForm from './WishlistForm';

const WishlistShow = ({ id, plant_id, user_id, updateWishlist, deleteWishlist }) => {
  const [user, setUser] = useState({ first_name: '' , last_name: '' })
  const { plantId } = useParams()
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name } = user
  const fullName = first_name + ' ' + last_name
  return (
    <>
      { editing ?
        <>
          <WishlistForm 
            id={id}
            user_id={id}
            updateWishlist={updateWishlist}
            setEdit={setEdit}
          />
          <Button 
            variant='warning'
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <ListGroup.Item>
          {fullName}
          <Button 
            variant='warning'
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant='danger'
            onClick={() => deleteWishlist(id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      }
    </>
  )
}

export default WishlistShow;