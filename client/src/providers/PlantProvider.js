import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PlantContext = React.createContext();

export const PlantConsumer = PlantContext.Consumer;

const PlantProvider = ({ children }) => {
  const [plants, setPlants] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllPlants = () => {
    axios.get('/api/plants')
      .then(res => setPlants(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addPlant = (plant) => {
    axios.post('/api/plants', { plant })
      .then(res => setPlants([...plants, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }
 
  const updatePlant = (id, plant) => {
    let data = new FormData();
    data.append('name', plant.name)
    data.append('desc', plant.desc)
    data.append('file', plant.img)
    axios.put(`/api/plants/${id}`, data)
      .then( res => {
        setPlants(res.data)
        navigate("/plants")
        window.location.reload()
      })
      .catch( err => {
        console.log(err)
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }
  //   axios.put(`/api/plants/${id}`, { plant })
  //     .then( res => {
  //       const newUpdatedPlants = plants.map( p => {
  //         if (p.id === id) {
  //           return res.data 
  //         }
  //         return p
  //       })
  //       setPlants(newUpdatedPlants)
  //       navigate('/plants')
  //     })
  //     .catch(err => {
  //       setErrors({ 
  //         variant: 'danger',
  //         msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
  //       })
  //     })
  

  const deletePlant = (id) => {
    axios.delete(`/api/plants/${id}`)
      .then(res => {
        setPlants(plants.filter(p => p.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  return (
    <PlantContext.Provider value={{
      plants, 
      errors, 
      setErrors, 
      getAllPlants,
      addPlant,
      updatePlant, 
      deletePlant, 
      // randomCat, 
      // getRandomCat, 
    }}>
      { children }
    </PlantContext.Provider>
  )
}

export default PlantProvider;
  // const getRandomPlant = () => {
  //   axios.get('/api/randomcat')
  //     .then(res => {
  //       setRandomCat(res.data)
  //     })
  //     .catch(err => {
  //       setErrors({ 
  //         variant: 'danger',
  //         msg: err.response.data.errors[0]
  //       })
  //     })
  // }

//   return (
//     <PlantContext.Provider value={{
//       plants, 
//       errors, 
//       setErrors, 
//       getAllPlants,
//       addPlant,
//       updatePlant, 
//       deletePlant, 
//       // randomCat, 
//       // getRandomCat, 
//     }}>
//       { children }
//     </PlantContext.Provider>
//   )
// }

// export default PlantProvider;