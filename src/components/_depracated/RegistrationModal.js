import React from 'react';
import AppContext from '../../context';

import { Modal, Button } from 'react-bootstrap';

const RegistrationModal = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <Modal
          show={context.showRegistrationModal}
          onHide={context.handleShowRegistrationModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Rejestracja</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={context.handleShowRegistrationModal}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={context.handleShowRegistrationModal}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )}
  </AppContext.Consumer>
);

export default RegistrationModal;
