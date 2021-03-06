import React from 'react';
import AppContext from '../../context';

import { Modal, Button } from 'react-bootstrap';
import CalculatorBMI from '../molecules/CalculatorBMI';

class CalculatorModal extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <Modal
              show={context.showCalculatorModal}
              onHide={context.handleShowCalculatorModal}
              dialogClassName="modal-90w"
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Kalkulator BMI</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CalculatorBMI />
              </Modal.Body>
            </Modal>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default CalculatorModal;
