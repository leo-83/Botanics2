import PestdiseaseList from './PestdiseaseList';
import { useEffect, useState } from 'react';
import { PestdiseaseConsumer } from '../../providers/PestdiseaseProvider';
import PestdiseaseForm from './PestdiseaseForm';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Pestdiseases = ({ pestdiseases, getAllPestdiseases }) => {
  const { plantId } = useParams();
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPestdiseases(plantId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        + Add Pest or Disease
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Pest or Disease</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PestdiseaseForm 
            setAdd={setAdd}
            plantId={plantId}
          />
        </Modal.Body>
      </Modal>
      <PestdiseaseList
        pestdiseases={pestdiseases}
        plantId={plantId}
      />
    </>
  )
}

const ConnectedPestdiseases = (props) => (
  <PestdiseaseConsumer>
    { value => <Pestdiseases {...props} {...value} />}
  </PestdiseaseConsumer>
)

export default ConnectedPestdiseases;
