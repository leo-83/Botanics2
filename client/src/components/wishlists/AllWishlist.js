import { Container, ListGroup } from 'react-bootstrap';
import WishlistShow from './WishlistShow';

const AllWishlist = ({ Wishlists, updateWishlists, deleteWishlist, plantId }) => (
  <Container>
    <ListGroup variant="flush">
      { Wishlists.map( e => 
        <WishlistShow 
          key={e.id}
          {...e}
          plantId={plantId}
        />
      )}
    </ListGroup>
  </Container>
)

export default AllWishlist;