import React from 'react';
import Converter from '../molecules/Converter';
import styled from 'styled-components';

// BOOTSTRAP
import { Container } from 'react-bootstrap';

// DATA - ASSETS
import search from '../../assets/img/search.png';

const ConverterSection = () => (
  <>
    <Container fluid>
        <Converter />
    </Container>
  </>
);

const StyledSearchContainer = styled(Container)`
  position: relative;
  padding: 32px 0;
  text-align: center;
  z-index: 1;
`;

const StyledBackground = styled(Container)`
  position: absolute;
  top: 0;
  padding: 0;
  height: 100%;

  @media (min-width: 992px) {
    background-position-y: -80px;
  }
`;

const StyledInnerContainer = styled(Container)`
  padding: 0 10px;
`;

export default ConverterSection;
