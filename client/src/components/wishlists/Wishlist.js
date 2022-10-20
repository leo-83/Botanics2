import { WishlistConsumer } from "../../providers/WishlistProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import AllWishlist from './AllWishlist';
import { Button } from 'react-bootstrap';
// import WishlistForm from './WishlistForm';
// import NoteForm from './NoteForm';
// import NoteList from './NoteList';
import AllWishlist from './AllWishlist';
import { Button, Modal } from 'react-bootstrap';
import WishlistForm from './WishlistForm';

const Wishlist = ({ wishlist, getAllWishlists }) => {
  const { plantId } = useParams();
  const [setAdd] = useState(false)

  useEffect( () => {
    getAllWishlists(plantId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      {/* <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WishlistForm 
            setAdd={setAdd}
            plantId={plantId}
          />
        </Modal.Body>
      </Modal>
      <AllWishlist 
        wishlist={wishlist}
        plantId={plantId}
      /> */}
    </>
  )
}

const ConnectedWishlist = (props) => (
  <WishlistConsumer>
    { value => <Wishlist {...props} {...value} /> }
  </WishlistConsumer>
)

export default ConnectedWishlist;