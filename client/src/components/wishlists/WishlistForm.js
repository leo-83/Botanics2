import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { WishlistConsumer } from '../../providers/WishlistProvider';

const WishlistForm = ({ addEnroll, setAdd, unenrolledUsers, id, user_id, updateEnroll, setEdit, courseId }) => {
  const [wishlist, setWishlist] = useState({ user_id: 0 })

  useEffect( () => {
    if (id) {
      setWishlist({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
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
            onChange={(e) => setWishlist({...wishlist, user_id: parseInt(e.target.value) })}
            required
          >
            <option>Choose an user</option>
            { unenrolledUsers.map( u => 
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