import React from 'react';
import AppContext from '../../context';

import { Modal, Button } from 'react-bootstrap';

const LoginModal = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <Modal
          show={context.showLoginModal}
          onHide={context.handleShowLoginModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Logowanie</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={context.handleShowLoginModal}>
              Close
            </Button>
            <Button variant="primary" onClick={context.handleShowLoginModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )}
  </AppContext.Consumer>
);

export default LoginModal;
