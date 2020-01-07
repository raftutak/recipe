import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';
import Button from '../interface/Button';
import Heading from '../interface/Heading';

// ASSETS
import search_bg1 from '../../assets/img/search_bg1.jpg';

import { categories } from '../../data/categories';

const StyledWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 0;

  ::after {
    content: '';
    background-image: url(${search_bg1});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.25;
    filter: contrast(0.5) grayscale(1);
    z-index: -15;
  }
`;

const StyledForm = styled.form`
  padding-bottom: 40px;
`;

const StyledSearch = styled.input`
  padding-left: 20px;
  height: 45px;
  width: 70%;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  border-radius: 25px;
  border: none;
  color: #222223;

  ::placeholder {
    color: #222223;
  }

  :focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  margin: 0;
  margin-left: -80px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  border-radius: 25px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: #c2c0c0;
  padding: 10px 20px;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #31c95f;
  }
`;

const StyledSelectCategory = styled.select`
  height: 45px;
  margin: 20px 10px 0 10px;
  padding: 0 70px 0 20px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border-radius: 25px;
  color: #222223;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 25px) calc(1em + 5.5px),
    calc(100% - 20px) calc(1em + 5.5px), calc(100% - 0.8em) 0.7em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
  transition: 0.2s;

  :focus {
    outline: none;
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 20px) 1.28em, calc(100% - 25px) 1.28em,
      calc(100% - 0.8em) 0.7em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
  }

  :disabled {
    background-color: #ddd;
    background-image: linear-gradient(45deg, transparent 50%, #ddd 50%),
      linear-gradient(135deg, #ddd 50%, transparent 50%),
      radial-gradient(#c2c0c0 70%, transparent 72%);
    background-position: calc(100% - 25px) calc(1em + 5.5px),
      calc(100% - 20px) calc(1em + 5.5px), calc(100% - 0.8em) 0.7em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    color: #c2c0c0;
  }
`;

const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledWrapper>
          <Container>
            <Heading>Wyszukaj przepis na dziś</Heading>
            <StyledForm
              autoComplete="off"
              onSubmit={context.handleSubmitSearch}
            >
              <StyledSearch
                name="search_input"
                type="search"
                placeholder="Wpisz szukaną frazę..."
                value={context.search_input}
                onChange={context.handleInputChange}
              />
              <StyledButton type="submit">Szukaj</StyledButton>
              <br />
              <StyledSelectCategory
                name="search_mainCategory"
                value={context.search_mainCategory}
                onChange={context.handleInputChange}
              >
                <option value="#">Wybierz kategorię</option>
                {categories.map(item => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </StyledSelectCategory>
              <StyledSelectCategory
                name="search_subCategory"
                value={context.search_subCategory}
                onChange={context.handleInputChange}
                disabled={
                  context.search_mainCategory === undefined ||
                  context.search_mainCategory === '#'
                }
              >
                <option value="#">Wybierz podkategorię</option>
                {context.search_mainCategory !== undefined &&
                context.search_mainCategory !== '#'
                  ? categories[
                      parseInt(context.search_mainCategory)
                    ].subcategories.map(item => {
                      return <option value={item.id}>{item.name}</option>;
                    })
                  : null}
              </StyledSelectCategory>
            </StyledForm>
          </Container>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default SearchForm;
