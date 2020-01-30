import React from 'react';
import CalculatorBMI from '../molecules/CalculatorBMI';

// BOOTSTRAP
import { Container } from 'react-bootstrap';

const CalculatorSection = () => (
  <>
    <Container fluid>
      <Container>
        <CalculatorBMI />
      </Container>
    </Container>
  </>
);

export default CalculatorSection;
