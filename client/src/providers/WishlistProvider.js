// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export const WishlistContext = React.createContext();

// export const WishlistConsumer = WishlistContext.Consumer;

// const WishlistProvider = ({ children }) => {
//   const [Wishlist
//   s, setWishlist
//   s] = useState([])
//   const [unwishlistedUsers, setUsers] = useState([])

//   const getAllWishlist
// s = (plantId) => {
//     axios.get(`/api/plants/${plantId}/Wishlist
//   s`)
//       .then( res => setWishlist
//       s(res.data))
//       .catch( err => console.log(err))
//   }

//   const getAllUnwishlistedUsers = (plantId) => {
//     axios.get(`/api/plants/${plantId}/unwishlisted`)
//       .then( res => setUsers(res.data))
//       .catch( err => console.log(err))
//   }

//   const addWish = (plantId, Wishlist
//   ) => {
//     axios.post(`/api/plants/${plantId}/Wishlist
//   s`, { Wishlist
//    })
//       .then( res => setWishlist
//       s([...Wishlist
//       s, res.data]))
//       .catch( err => console.log(err))
//   }

//   const updateWish = (plantId, id, Wishlist
//   ) => {
//     axios.put(`/api/plants/${plantId}/Wishlist
//   s/${id}`, { Wishlist
//    })
//       .then( res => {
//         const newUpdatedWishlist
//       s = Wishlist
//       s.map( e => {
//           if (e.id == id) {
//             return res.data
//           }
//           return e
//         })
//         setWishlist
//       s(newUpdatedWishlist
//         s)
//         // navigate(`/${plantId}/Wishlist
//       s`, { state: { plantTitle } })
//         window.location.reload()
//       })
//       .catch( err => console.log(err))
//   } 

//   const deleteWishlist = (plantId, id) => {
//     axios.delete(`/api/plants/${plantId}/Wishlist
//   s/${id}`)
//       .then( res => setWishlist
//       s( Wishlist
//       s.filter( e => e.id !== id )))
//       .catch( err => console.log(err))
//   }

//   return (
//     <Wishlist
//   Context.Provider value={{
//       Wishlist
//     s,
//       unwishlistedUsers,
//       getAllWishlist
//     s,
//       getAllUnwishlistedUsers, 
//       addWish,
//       updateWish,
//       deleteWish,
//     }}>
//       { children }
//     </Wishlist
//   Context.Provider>
//   )
// }

// export default WishlistProvider;