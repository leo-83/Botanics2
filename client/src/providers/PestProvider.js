import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PestContext = React.createContext();

export const PestConsumer = PestContext.Consumer;

const PestProvider = ({ children }) => {
  const [Pest
  s, setPest
  s] = useState([])
  const [unPestedUsers, setUsers] = useState([])

  const getAllPest
s = (plantId) => {
    axios.get(`/api/plants/${plantId}/Pest
  s`)
      .then( res => setPest
      s(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnPestedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/unPested`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addPest = (plantId, Pest
  ) => {
    axios.post(`/api/plants/${plantId}/Pest
  s`, { Pest
   })
      .then( res => setPest
      s([...Pest
      s, res.data]))
      .catch( err => console.log(err))
  }

  const updatePest = (plantId, id, Pest
  ) => {
    axios.put(`/api/plants/${plantId}/Pest
  s/${id}`, { Pest
   })
      .then( res => {
        const newUpdatedPest
      s = Pest
      s.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setPest
      s(newUpdatedPest
        s)
        // navigate(`/${plantId}/Pest
      s`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deletePest = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Pest
  s/${id}`)
      .then( res => setPest
      s( Pest
      s.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <Pest
  Context.Provider value={{
      Pest
    s,
      unPestedUsers,
      getAllPest
    s,
      getAllUnPestedUsers, 
      addPest,
      updatePest,
      deletePest,
    }}>
      { children }
    </Pest
  Context.Provider>
  )
}

export default PestProvider;