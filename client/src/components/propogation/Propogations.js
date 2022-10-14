import PropogationList from './PropogationList';
import { useEffect, useState } from 'react';
import { PropogationConsumer } from '../../providers/PropogationProvider';
import PropogationForm from './PropogationForm';
import { Button, Modal } from 'react-bootstrap';


const Propogations = ({ propogations, getAllPropogations }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllPropogations()
  }, [])

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>
      <Link to='/randoplant'>
        <Button>
          Rando Plant
        </Button>
      </Link>
      

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Propogation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropogationForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Propogations</h1>
      <PropogationList
        propogations={propogations}
      />
    </>
  )
}

const ConnectedPropogations = (props) => (
  <PropogationConsumer>
    { value => <Propogations {...props} {...value} /> }
  </PropogationConsumer>
)

export default ConnectedPropogations;