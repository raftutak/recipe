import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../../assets/img/background-footer2.jpg';

const AboveFooterSection = () => (
  <>
    <StyledHeader fluid>
      <StyledContainer>
        <StyledInnerContainer></StyledInnerContainer>
      </StyledContainer>
    </StyledHeader>
  </>
);

const StyledHeader = styled(Container)`
  height: 300px;
  padding: 32px 0;
  background-size: cover;
  background-color: #f0eff4;
  background-image: url(${background});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  z-index: -5;

  /* @media (max-width: 500px) {
    min-height: 540px;
  } */
`;

const StyledContainer = styled(Container)``;

const StyledInnerContainer = styled(Container)`
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

export default AboveFooterSection;
