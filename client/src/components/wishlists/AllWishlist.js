import { Container, ListGroup } from 'react-bootstrap';
import WishlistShow from './WishlistShow';

const AllWishlist = ({ Wishlists, updateWishlists, deleteWishlist, plantId }) => (
  <Container>
    <ListGroup variant="flush">
      { Wishlists.map( w => 
        <WishlistShow 
          key={w.id}
          {...w}
          plantId={plantId}
        />
      )}
    </ListGroup>
  </Container>
)

export default AllWishlist;