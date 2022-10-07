import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useResolvedPath } from 'react-router-dom';
import { WishlistConsumer } from '../../providers/WishlistProvider';

const WishlistForm = ({ addWishlist, setAdd, id, user_id, updateWishlist, setEdit, plantId }) => {
  const [wishlist, setWishlist] = useState({ user_id: 0 })

  useEffect( () => {
    if (id) {
      setWishlist({ user_id })
    }
  }, [])

  const handleSubmit = (w) => {
    w.preventDefault()
    if (id) {
      updateWishlist( plantId, id, wishlist )
      setEdit(false)
    } else {
      addWishlist(plantId, wishlist)
      setAdd(false)
    }
    setWishlist({ user_id: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Select
            name='user_id'
            value={wishlist.user_id}
            onChange={(w) => setWishlist({...wishlist, user_id: parseInt(w.target.value) })}
            required
          >
            <option>Choose a user</option>
            { ( u =>
              <option value={u.id} key={u.id}>
                {u.first_name} {u.last_name}
              </option>
            )}
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedWishlistForm = (props) => (
  <WishlistConsumer>
    { value => <WishlistForm {...value} {...props} /> }
  </WishlistConsumer>
)

export default ConnectedWishlistForm;