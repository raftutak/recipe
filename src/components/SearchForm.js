import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Container, Col, Form, InputGroup, Button } from 'react-bootstrap';

// ASSETS
import search from '../assets/img/search.png';

// DATA
import { categories } from '../data/categories';

const StyledContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  text-align: center;
  background-color: #f0f0f0;
  /* box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3); */
  z-index: 1;


  /* ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: opacity(0.3) contrast(0.6) grayscale(1);
    background-color: hsl(215, 40%, 12%);
    z-index: -1;
  } */
`;

const StyledBackground = styled(Container)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -80px;
  opacity: 0.1;
  filter: grayscale(1);
`;

// const InnerWrapper = styled(Container)``;

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 80%;

  .form-control {
    border: none;
    border-radius: 15px;
  }

  .btn-secondary {
    padding: 0 20px;
    border: none;
    border-radius: 0 15px 15px 0;

    :hover {
      background-color: hsl(138, 61%, 49%);
    }
  }
`;


const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledContainer fluid>
          <StyledBackground fluid />
          <Container style={{ position: 'relative' }}>
            <h5
              className="mb-4"
              style={
                {
                  // color: 'white',
                  // textShadow: '0 0 5px hsla(0, 0%, 0%, 1)'
                }
              }
            >
              <strong>Wyszukaj przepis na dziś</strong>
            </h5>
            <StyledForm
              autoComplete="off"
              onSubmit={context.handleSubmitSearch}
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
                      required
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
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="search_mainCategory"
                      value={context.search_mainCategory}
                      onChange={context.handleInputChange}
                      as="select"
                    >
                      <option value="">Wybierz kategorię główną</option>
                      {categories.map(item => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      id="search-form"
                      name="search_subCategory"
                      value={context.search_subCategory}
                      onChange={context.handleInputChange}
                      as="select"
                      disabled={context.search_mainCategory ? false : true}
                    >
                      <option value="">Wybierz podkategorię</option>
                      {context.search_mainCategory
                        ? categories[
                            parseInt(context.search_mainCategory) - 1
                          ].subcategories.map(item => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })
                        : null}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </StyledForm>
          </Container>
        </StyledContainer>
      </>
    )}
  </AppContext.Consumer>
);

export default SearchForm;
