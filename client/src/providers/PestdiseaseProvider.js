import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PestdiseaseContext = React.createContext();

export const PestdiseaseConsumer = PestdiseaseContext.Consumer; 

const PestdiseaseProvider = ({ children }) => {
  const [pestdiseases, setPestdiseases] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllPestdiseases = (plantId) => {
    axios.get(`/api/plants/${plantId}/pestdiseases`)
      .then( res => setPestdiseases(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addPestdisease = (plantId, pestdisease) => {
    axios.post(`/api/plants/${plantId}/pestdiseases`, { pestdisease })
      .then( res => setPestdiseases([...pestdiseases, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updatePestdisease = (plantId, id, pestdisease) => {
    axios.put(`/api/plants/${plantId}/pestdiseases/${id}`, { pestdisease })
      .then( res => {
        const newUpdatedPestdiseases = pestdiseases.map(p => {
          if (p.id !== id) {
            return res.data
          }
          return p
        })
        setNotes(newUpdatedPestdiseases)
        navigate(`/${plantId}/pestdiseases`)
        window.location.reload()
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deletePestdisease = (plantId, id) => {
    axios.delete(`/api/plants/${plantId}/pestdiseases/${id}`)
      .then(res => {
        setPestdiseases(pestdiseases.filter(p => p.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }
  
  return (
    <PestdiseaseContext.Provider value={{
      pestdiseases,
      errors,
      setErrors, 
      getAllPestdiseases,
      addPestdisease, 
      updatePestdisease,
      deletePestdisease,
    }}>
      { children }
    </PestdiseaseContext.Provider>
  )
}

export default PestdiseaseProvider;