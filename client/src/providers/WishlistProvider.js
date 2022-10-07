import React, { useState } from 'react';
import axios from 'axios';

export const WishlistContext = React.createContext();

export const WishlistConsumer = WishlistContext.Consumer;

const WishlistProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([])

  const getAllWishlists = (plantId) => {
    axios.get(`/api/plants/${plantId}/wishlists`)
      .then( res => setWishlists(res.data))
      .catch( err => console.log(err))
  }

  const addWishlist = (plantId, wishlist) => {
    axios.post(`/api/plants/${plantId}/wishlists`, { wishlist })
      .then( res => setWishlists([...wishlist, res.data]))
      .catch( err => console.log(err))
  }

  const updateWishlist = (plantId, id, wishlist) => {
    axios.put(`/api/plants/${plantId}/wishlists/${id}`, { wishlist })
      .then( res => {
        const newUpdatedWishlists = wishlists.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setWishlists(newUpdatedWishlists)
        // navigate(`/${plantId}/wishlists`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deleteWishlist = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/wishlists/${id}`)
      .then( res => setWishlists( wishlists.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <WishlistContext.Provider value={{
      wishlists,
      getAllWishlists, 
      addWishlist,
      updateWishlist,
      deleteWishlist,
    }}>
      { children }
    </WishlistContext.Provider>
  )
}

export default WishlistProvider;