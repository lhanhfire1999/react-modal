import React from 'react';
import './App.scss';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from './components';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = React.useCallback(() => setShowModal(false), []);
  return (
    <div className="App">
      <Button onClick={handleShowModal}>Open modal</Button>
      <Modal
        show={showModal}
        onHideModal={handleHideModal}
        // hideCloseBtn
      >
        <ModalHeader>
          <h3>Modal tilte</h3>
        </ModalHeader>
        <ModalBody>
          <p style={{ textAlign: 'justify' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
            magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
            molestiae iste iusto? Totam et sint architecto ducimus laboriosam.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleHideModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
