import PestdiseaseList from './PestdiseaseList';
import { useEffect, useState } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestProvider';
import PestdiseaseForm from './PestdiseaseForm';
import { Button, Modal } from 'react-bootstrap';


const Pestdiseases = ({ pestdiseases, getAllPestdiseases }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPestdiseases()
  }, [])

  return (
    <>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Pest or Disease</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PestdiseaseForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Pests/Diseases</h1>
      <PestdiseaseList
        pestdiseases={pestdiseases}
      />
    </>
  )
}

const ConnectedPestdiseases = (props) => (
  <PestdiseaseConsumer>
    { value => <Pestdiseases {...props} {...value} /> }
  </PestdiseaseConsumer>
)

export default ConnectedPestdiseases;