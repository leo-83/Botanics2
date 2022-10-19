import { AuthConsumer } from "../../providers/AuthProvider";
import { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap';
// import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// // Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// // Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const defaultImage = 'https://images.pexels.com/photos/113335/pexels-photo-113335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false);
  const [formVals, setFormValue] = useState({ name: '', email: '', image: null })
  const [file, setFile] = useState()

  useEffect( () => {
    const { name, email, image } = user 
    setFormValue({ user, name, email, image })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formVals);
    setEditing(false)
    setFormValue({ ...formVals, image: null })
  }

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setFormValue({ ...formVals, image: fileItems[0].file })
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setFormValue({ ...formVals, image: null })
  }
  

  const editForm = () => {
    return(
      <Form onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <Col md='4'>
          {/* drag and drop */}
          <FilePond
            file={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name="image"
            labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Col>
        <Col md='8'>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              name="name"
              value={formVals.name}
              required
              onChange={(e) => setFormValue({...formVals, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={formVals.email}
              required
              onChange={(e) => setFormValue({...formVals, email: e.target.value })}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Col>
      </Form>
    )
  }

  const profileView = () => {
    return (
      <>
        <Col md='4'>
          <Image
            width='250px'
            src={formVals.image || defaultImage } 
          />
        </Col>
        <Col md='8'>
          <h1>{formVals.name}</h1>
          <h1>{formVals.email}</h1>
        </Col>
      </>
    )
  }

  return (
    <Container>
      <Row>
        { editing ? editForm() : profileView() }
        <Col>
          <Button
            onClick={() => setEditing(!editing )}
          >
            { editing ? 'Cancel' : 'Edit' } 
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;
