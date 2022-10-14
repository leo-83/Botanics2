import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PestdiseaseContext = React.createContext();

export const PestdiseaseConsumer = PestdiseaseContext.Consumer;

const PestdiseaseProvider = ({ children }) => {
  const [Pestdiseases, setPestdiseases] = useState([])
  const [unPestedUsers, setUsers] = useState([])

  const getAllPestdiseases = (plantId) => {
    axios.get(`/api/plants/${plantId}/Pestdiseases`)
      .then( res => setPestdiseases(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnPestedUsers = (plantId) => {
    axios.get(`/api/plants/${plantId}/unPested`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addPestdisease = (plantId, Pestdisease) => {
    axios.post(`/api/plants/${plantId}/Pestdiseases`, { Pestdisease })
      .then( res => setPestdiseases([...Pestdiseases, res.data]))
      .catch( err => console.log(err))
  }

  const updatePestdisease = (plantId, id, Pestdisease) => {
    axios.put(`/api/plants/${plantId}/Pestdiseases/${id}`, { Pestdisease})
      .then( res => {
        const newUpdatedPestdiseases = Pestdiseases.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setPestdiseases(newUpdatedPestdiseases)
        // navigate(`/${plantId}/Pests`, { state: { plantTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deletePestdisease = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/Pestdiseases/${id}`)
      .then( res => setPestdiseases( Pestdiseases.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <PestdiseaseContext.Provider value={{
      Pestdiseases,
      unPestedUsers,
      getAllPestdiseases,
      getAllUnPestedUsers, 
      addPestdisease,
      updatePestdisease,
      deletePestdisease,
    }}>
      { children }
    </PestdiseaseContext.Provider>
  )
}

export default PestdiseaseProvider;