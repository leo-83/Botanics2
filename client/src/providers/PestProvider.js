import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PestdiseaseContext = React.createContext();

export const PestConsumer = PestContext.Consumer;

const PestProvider = ({ children }) => {
  const [Pests, setPests] = useState([])
  const [unPestedUsers, setUsers] = useState([])

  const getAllPests = (plantId) => {
    axios.get(`/api/plants/${plantId}/Pests`)
      .then( res => setPests(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnPestedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/unPested`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addPest = (plantId, Pest
  ) => {
    axios.post(`/api/plants/${plantId}/Pests`, { Pest})
      .then( res => setPests([...Pests, res.data]))
      .catch( err => console.log(err))
  }

  const updatePest = (plantId, id, Pest) => {
    axios.put(`/api/plants/${plantId}/Pests/${id}`, { Pest })
      .then( res => {
        const newUpdatedPests = Pests.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setPests(newUpdatedPests)
        // navigate(`/${plantId}/Pests`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deletePest = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Pests/${id}`)
      .then( res => setPests( Pests.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <PestContext.Provider value={{
      Pests,
      unPestedUsers,
      getAllPests,
      getAllUnPestedUsers, 
      addPest,
      updatePest,
      deletePest,
    }}>
      { children }
    </PestContext.Provider>
  )
}

export default PestProvider;