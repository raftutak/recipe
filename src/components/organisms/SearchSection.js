import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Container } from 'react-bootstrap';

// DATA - ASSETS
import search from '../../assets/img/search.png';
import SearchForm from '../molecules/SearchForm';

const SearchSection = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledSearchContainer fluid>
          <StyledBackground fluid />
          <StyledInnerContainer>
            <h5 className="mb-4">
              <strong>Wyszukaj przepis na dziś</strong>
            </h5>
            <SearchForm />
          </StyledInnerContainer>
        </StyledSearchContainer>
      </>
    )}
  </AppContext.Consumer>
);

const StyledSearchContainer = styled(Container)`
  position: relative;
  padding: 32px 0;
  text-align: center;
  background-color: hsl(0, 0%, 95%);
  z-index: 1;
`;

const StyledBackground = styled(Container)`
  position: absolute;
  top: 0;
  padding: 0;
  height: 100%;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.1;
`;

const StyledInnerContainer = styled(Container)`
  padding: 0 10px;
`;

export default SearchSection;
