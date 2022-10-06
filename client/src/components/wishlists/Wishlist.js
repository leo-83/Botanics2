import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllWishlist from './AllWishlist';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import WishlistForm from './WishlistForm';
import { WishlistConsumer } from '../../providers/WishlistProvider';

const Wishlists = ({ getAllWishlists, wishlists }) => {
  const { plantId } = useParams()
  const location = useLocation()
  const { plantTitle } = location.state
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllWishlists(plantId)
  }, [])

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WishlistForm 
            setAdd={setAdd}
            plantId={plantId}
          />
        </Modal.Body>
      </Modal>
      <h1>All wishlists for User</h1>
      <AllWishlist 
        wishlists={wishlists}
      />
    </>
  )
}

const connectedWishlists = (props) => (
  <WishlistConsumer>
   { value => <Wishlists {...value} {...props} />} 
  </WishlistConsumer>
)

export default connectedWishlists;