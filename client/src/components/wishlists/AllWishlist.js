import { ListGroup, Container } from 'react-bootstrap';
import WishlistShow from './WishlistShow';

const AllWishlist = ({ wishlist, plantId }) => (
  <Container>
    <h1>All Wishlists</h1>
    <ListGroup variant="flush">
      { wishlist.map( n => 
        <WishlistShow 
          key={n.id}
          {...n}
          plantId={plantId}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default AllWishlist;