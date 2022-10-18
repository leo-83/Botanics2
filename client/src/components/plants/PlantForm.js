import { useState, useEffect } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PlantForm = ({ addPlant, setAdd, updatePlant, errors, setErrors }) => {
  const [plant, setPlant] = useState({ name: '', desc: '', img: '' })
  const { id } = useParams();
  const location = useLocation()
  const [file, setFile] = useState()
   
  useEffect( () => {
    if (id) {
      const { name, desc, img } = location.state 
      setPlant({ name, desc, img })
    }
  }, [])

  const defaultImg = "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setPlant({ ...plant, img: fileItems[0].file })
    }
  }

  const handleFileRemoved = ( e, file ) => {
    setFile(null)
    setPlant({ ...plant, img: null })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePlant(id, plant)
      setEdit(false)
    } 
    else {
      if (plant.img === ''){
        const newPlant = { ...plant, img: defaultImg}
        addPlant(newPlant)
      } else {
        addPlant(plant)
      }
      setAdd(false)
    }
    setPlant({ name: '', img: '', desc: '' })
  }

  return (
    <>
      { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={plant.name}
            onChange={(e) => setPlant({ ...plant, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={plant.desc}
            onChange={(e) => setPlant({ ...plant, desc: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <FilePond
            files={file}
            onupdatefiles={handleFileUpdate} 
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name="img"
            labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          {/* <Form.Control 
            name='img'
            value={plant.img}
            onChange={(e) => setPlant({ ...plant, img: e.target.value })}
          /> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedPlantForm = (props) => (
  <PlantConsumer>
    { value => <PlantForm {...props} {...value} />}
  </PlantConsumer>
)

export default ConnectedPlantForm;