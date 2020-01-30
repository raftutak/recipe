import React from 'react';
import styled, { css } from 'styled-components';
import block_bg_1 from '../../assets/img/block_bg_1.jpg';
import { Container } from 'react-bootstrap';

const StyledBlock = styled(Container)`
  background-image: url(${block_bg_1});
  background-position: right top;
  background-repeat: no-repeat;
  background-size: auto;
`;

const StyledInnerBlock = styled(Container)`
  padding: 30px 30px;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      color: white;
      background-color: rgba(30, 45, 66, 0.7);
    `}
`;

const AdviceBlock = () => (
  <>
    <StyledBlock>
      <StyledInnerBlock>
        <p>Test</p>
      </StyledInnerBlock>
    </StyledBlock>
  </>
);

export default AdviceBlock;
