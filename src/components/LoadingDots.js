import React from 'react';
import Loader from 'react-loader-spinner';

// STYLES
import styled from 'styled-components';
import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// COMPONENTS

const StyledWrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const LoadingDots = () => (
  <>
    <StyledWrapper>
      <Loader type="ThreeDots" color="#ddd" height={70} width={70} />
    </StyledWrapper>
  </>
);

export default LoadingDots;
