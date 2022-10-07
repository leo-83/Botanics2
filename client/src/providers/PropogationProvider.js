import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PropogationContext = React.createContext();

export const PropogationConsumer = PropogationContext.Consumer;

const PropogationProvider = ({ children }) => {
  const [Propogation
  s, setPropogation
  s] = useState([])
  const [unpropogatedUsers, setUsers] = useState([])

  const getAllPropogation
s = (plantId) => {
    axios.get(`/api/plants/${plantId}/Propogation
  s`)
      .then( res => setPropogation
      s(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnpropogatedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/Unpropogated`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addPropogation = (plantId, Propogation
  ) => {
    axios.post(`/api/plants/${plantId}/Propogation
  s`, { Propogation
   })
      .then( res => setPropogation
      s([...Propogation
      s, res.data]))
      .catch( err => console.log(err))
  }

  const updatePropogation = (plantId, id, Propogation
  ) => {
    axios.put(`/api/plants/${plantId}/Propogation
  s/${id}`, { Propogation
   })
      .then( res => {
        const newUpdatedPropogation
      s = Propogation
      s.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setPropogation
      s(newUpdatedPropogation
        s)
        // navigate(`/${plantId}/Propogation
      s`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deletePropogation = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Propogation
  s/${id}`)
      .then( res => setPropogation
      s( Propogation
      s.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <Propogation
  Context.Provider value={{
      Propogation
    s,
      UnpropogatedUsers,
      getAllPropogation
    s,
      getAllUnpropogatedUsers, 
      addPropogation,
      updatePropogation,
      deletePropogation,
    }}>
      { children }
    </Propogation
  Context.Provider>
  )
}

export default PropogationProvider;