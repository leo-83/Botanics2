import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PropogationContext = React.createContext();

export const PropogationConsumer = PropogationContext.Consumer; 

const PropogationProvider = ({ children }) => {
  const [propogations, setPropogations] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllPropogations = (plantId) => {
    axios.get(`/api/plants/${plantId}/propogations`)
      .then( res => setPropogations(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addPropogation = (plantId, propogation) => {
    axios.post(`/api/plants/${plantId}/propogations`, { propogation })
      .then( res => setPropogations([...propogations, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updatePropogation = (plantId, id, propogation) => {
    axios.put(`/api/plants/${plantId}/propogations/${id}`, { propogation })
      .then( res => {
        const newUpdatedPropogations = propogations.map(p => {
          if (p.id !== id) {
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
          return p
        })
        setPropogations(newUpdatedPropogations)
        navigate(`/${plantId}/propogations`)
        // navigate(`/${plantId}/Propogations`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deletePropogation = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/propogation/${id}`)
      .then(res => {
        setPropogations(propogations.filter(p => p.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
    axios.delete(`/api/plants/${plantId}/Propogations/${id}`)
      .then( res => setPropogations( Propogations.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }
  
  return (
    <PropogationContext.Provider value={{
      propogations,
      errors,
      setErrors, 
      getAllPropogations,
      addPropogation, 
      updatePropogation,
      deletePropogation,
    }}>
      { children }
    </PropogationContext.Provider>
  )
}

export default PropogationProvider;