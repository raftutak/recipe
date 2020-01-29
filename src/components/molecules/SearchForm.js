import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// DATA - ASSETS
import { categories } from '../../data/categories';
import { dishes } from '../../data/dishes';
import { features } from '../../data/features';
import { ingredients } from '../../data/ingredients';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: '15px'
  })
};

const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <StyledForm
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          return context.handleMainSearch(1);
        }}
      >
        <Form.Row className="mb-3">
          <Col>
            <InputGroup>
              <Form.Control
                name="search_input"
                type="search"
                value={context.search_input}
                onChange={context.handleInputChange}
                as="input"
                placeholder="Wpisz szukaną frazę ..."
                // required
              />
              <InputGroup.Append>
                <Button type="submit" variant="secondary">
                  Szukaj
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={categories}
                getOptionLabel={category => category.name}
                getOptionValue={category => category.id}
                placeholder="Wybierz kategorię główną"
                onChange={context.handleMainCategoryChange}
                isClearable
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={
                  context.search_mainCategory &&
                  context.search_mainCategory.subcategories
                }
                getOptionLabel={subcategory => subcategory.name}
                getOptionValue={subcategory => subcategory.id}
                placeholder="Wybierz podkategorię"
                onChange={context.handleSubCategoryChange}
                isDisabled={context.search_mainCategory ? false : true}
                isClearable
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={
                  context.search_subCategory &&
                  dishes.filter(
                    dish => dish.subCategoryId === context.search_subCategory.id
                  )
                }
                getOptionLabel={dish => dish.name}
                getOptionValue={dish => dish.id}
                placeholder="Wybierz typ dania"
                onChange={context.handleDishTypeChange}
                isDisabled={context.search_subCategory ? false : true}
                isClearable
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={features.filter(feature => feature.categoryId === 9)}
                getOptionLabel={feature => feature.name}
                getOptionValue={feature => feature.id}
                placeholder="Rodzaj posiłku"
                onChange={context.handleMealTypeChange}
                isClearable
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Form.Group className="mb-0">
              <Select
                styles={customStyles}
                options={features.filter(feature => feature.categoryId === 7)}
                getOptionLabel={feature => feature.name}
                getOptionValue={feature => feature.id}
                placeholder="Wybierz wykluczenia"
                components={animatedComponents}
                onChange={context.handleExclusionChange}
                isMulti
                isClearable
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={features.filter(feature => feature.categoryId === 5)}
                getOptionLabel={feature => feature.name}
                getOptionValue={feature => feature.id}
                placeholder="Trudność"
                onChange={context.handleDifficultyChange}
                isClearable
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Form.Group>
              <Select
                styles={customStyles}
                options={features.filter(feature => feature.categoryId === 6)}
                getOptionLabel={feature => feature.name}
                getOptionValue={feature => feature.id}
                placeholder="Czas przygotowania"
                onChange={context.handleTimeRequiredChange}
                isClearable
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Form.Group className="mb-0">
              <Select
                styles={customStyles}
                options={features.filter(feature => feature.categoryId === 4)}
                getOptionLabel={feature => feature.name}
                getOptionValue={feature => feature.id}
                placeholder="Koszt"
                onChange={context.handleCostChange}
                isClearable
              />
            </Form.Group>
          </Col>
        </Form.Row>
      </StyledForm>
    )}
  </AppContext.Consumer>
);

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 0;
  width: 80%;

  .form-control {
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 15px;
  }

  .btn-secondary {
    padding: 0 20px;
    border: none;
    border-radius: 0 15px 15px 0;

    :hover {
      background-color: hsl(44, 60%, 42%);
    }
  }
`;

export default SearchForm;
