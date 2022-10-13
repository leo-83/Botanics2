import { useState, useEffect } from 'react';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import { Form, Button } from 'react-bootstrap';

const WishlistForm = ({ setAdd, addWishlist, plantId, updateWishlist, id, ndate, ntime, body, setEdit }) => {
  const [wishlist, setWishlist] = useState({ ndate: '', ntime: '', body: '' })

  useEffect( () => {
    if (id) {
      setWishlist({ ndate, ntime, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWishlist(plantId, id, wishlist)
      setEdit(false)
    } else {
      addWishlist(plantId, wishlist)
      setAdd(false)
    }
    setWishlist({ ndate: '', ntime: '', body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name="ndate"
            value={wishlist.ndate}
            onChange={(e) => setWishlist({ ...wishlist, ndate: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            name="ntime"
            value={wishlist.ntime}
            onChange={(e) => setWishlist({ ...wishlist, ntime: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name="body"
            value={wishlist.body}
            onChange={(e) => setWishlist({ ...wishlist, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedWishlistForm = (props) => (
  <WishlistConsumer>
    { value => <WishlistForm {...props} {...value} /> }
  </WishlistConsumer>
)

export default ConnectedWishlistForm;