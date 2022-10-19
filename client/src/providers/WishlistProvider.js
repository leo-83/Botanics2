import React, { useState } from 'react';
import axios from 'axios';

export const WishlistContext = React.createContext();

export const WishlistConsumer = WishlistContext.Consumer;

const WishlistProvider = ({ children }) => {
  const [Wishlists, setWishlists] = useState([])
  const [unwishlistedUsers, setUsers] = useState([])

  const getAllWishlists = (plantId) => {
    axios.get(`/api/plants/${plantId}/Wishlists`)
      .then( res => setWishlists(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnwishlistedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/unwishlisted`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addWish = (plantId, Wishlist) => {
    axios.post(`/api/plants/${plantId}/Wishlists`, { Wishlist})
      .then( res => setWishlists([...Wishlists, res.data]))
      .catch( err => console.log(err))
  }

  const updateWish = (plantId, id, Wishlist) => {
    axios.put(`/api/plants/${plantId}/Wishlists/${id}`, { Wishlist })
      .then( res => {
        const newUpdatedWishlists = Wishlists.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
      setWishlists(newUpdatedWishlists)
        // navigate(`/${plantId}/Wishlists`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deleteWishlist = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Wishlists/${id}`)
      .then( res => setWishlists( Wishlists.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <WishlistContext.Provider value={{
      Wishlists,
      unwishlistedUsers,
      getAllWishlists,
      getAllUnwishlistedUsers, 
      addWish,
      updateWish,
      deleteWishlist,
    }}>
      { children }
    </WishlistContext.Provider>
  )
}

export default WishlistProvider;