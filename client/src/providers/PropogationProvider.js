import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PropogationContext = React.createContext();

export const PropogationConsumer = PropogationContext.Consumer;

const PropogationProvider = ({ children }) => {
  const [Propogations, setPropogations] = useState([])
  const [unpropogatedUsers, setUsers] = useState([])

  const getAllPropogations = (plantId) => {
    axios.get(`/api/plants/${plantId}/Propogations`)
      .then( res => setPropogations(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnpropogatedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/Unpropogated`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addPropogation = (plantId, Propogation
  ) => {
    axios.post(`/api/plants/${plantId}/Propogations`, { Propogation
   })
      .then( res => setPropogations([...Propogations, res.data]))
      .catch( err => console.log(err))
  }

  const updatePropogation = (plantId, id, Propogation
  ) => {
    axios.put(`/api/plants/${plantId}/Propogations/${id}`, { Propogation
   })
      .then( res => {
        const newUpdatedPropogations = Propogations.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setPropogations(newUpdatedPropogations)
        // navigate(`/${plantId}/Propogations`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deletePropogation = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Propogations/${id}`)
      .then( res => setPropogations( Propogations.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <PropogationContext.Provider value={{
      Propogations,
      UnpropogatedUsers,
      getAllPropogations,
      getAllUnpropogatedUsers, 
      addPropogation,
      updatePropogation,
      deletePropogation,
    }}>
      { children }
    </PropogationContext.Provider>
  )
}

export default PropogationProvider;