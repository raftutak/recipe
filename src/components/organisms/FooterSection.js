import React from 'react';

// STYLES
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { categories } from '../../data/categories';
import { features } from '../../data/features';

import { NavLink } from 'react-router-dom';

import Tags from '../molecules/Tags';

const StyledContainer = styled(Container)`
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
`;

const InnerWrapper = styled(Container)`
  padding: 30px 30px;
  color: white;

  h5 {
    color: white;
    text-shadow: 0 0 5px hsla(0, 0%, 0%, 1);
  }

  p {
    color: white;
    margin: 0;
    font-size: 0.9rem;
  }

  .brand {
    padding-right: 20px;
    font-family: 'Pacifico', sans-serif;
    font-size: 1.4rem;
  }

  .subscribe {
    border-radius: 5px;
  }
`;

const StyledListItem = styled.li`
  color: hsla(0, 100%, 100%, 0.5);
  font-size: 0.9rem;
  transition: 0.2s ease-in;
  cursor: pointer;

  :hover {
    color: hsla(0, 100%, 100%, 1);
  }
`;

const FooterSection = () => (
  <>
    <StyledContainer fluid>
      <InnerWrapper>
        <Row>
          <Col className="mb-3">
            <h5 className="mb-2">
              <strong>O nas</strong>
            </h5>
            <p>
              Witaj na recipe-search! Jest to ogromna baza przepisów zawierająca
              treści z najlepszych polskich blogów kulinarnych. Od dziś nie
              musisz przeglądać wielu stron w poszukiwaniu najlepszego lub
              najprostszego przepisu - wszystko znajdziesz w jednym miejscu,
              właśnie tutaj.
            </p>
          </Col>
          <Col md="auto">
            <h5 className="mb-2">
              <strong>Kategorie</strong>
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {categories.map(category => (
                <div key={category.id}>
                  <StyledListItem
                    as={NavLink}
                    to={{ pathname: `/category/${category.id}` }}
                  >
                    {category.name}
                  </StyledListItem>
                  <br />
                </div>
              ))}
            </ul>
          </Col>
          <Col md="auto">
            <h5 className="mb-2">
              <strong>Posiłki</strong>
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {features
                .filter(feature => feature.categoryId === 9)
                .map(feature => (
                  <div key={feature.id}>
                    <StyledListItem
                      as={NavLink}
                      to={{ pathname: `/feature/${feature.id}` }}
                    >
                      {feature.name}
                    </StyledListItem>
                    <br />
                  </div>
                ))}
            </ul>
          </Col>
          <Col md="auto">
            <h5 className="mb-2">
              <strong>Kuchnia</strong>
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {features
                .filter(feature => feature.categoryId === 3)
                .map(feature => (
                  <div key={feature.id}>
                    <StyledListItem
                      as={NavLink}
                      to={{ pathname: `/feature/${feature.id}` }}
                    >
                      {feature.name}
                    </StyledListItem>
                    <br />
                  </div>
                ))}
            </ul>
          </Col>
          <Col md="auto">
            <h5 className="mb-2">
              <strong>Okazja</strong>
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {features
                .filter(feature => feature.categoryId === 2)
                .map(feature => (
                  <div key={feature.id}>
                    <StyledListItem
                      as={NavLink}
                      to={{ pathname: `/feature/${feature.id}` }}
                    >
                      {feature.name}
                    </StyledListItem>
                    <br />
                  </div>
                ))}
            </ul>
          </Col>
          <Col>
            <h5 className="mb-3">
              <strong>Popularne tagi</strong>
            </h5>
            <Tags />
          </Col>
          {/* <Col>
            <h5 className="mb-3">
              <strong>Masz pytania?</strong>
            </h5>
            <p>
              Skorzystaj z naszego formularza kontaktowego klikając na poniższy
              przycisk.
            </p>
            <StyledButton variant="secondary">Kontakt</StyledButton>
          </Col> */}
        </Row>
        <hr style={{ border: '0.5px solid hsla(0, 100%, 100%, 0.05)' }} />
        <Row>
          <Col>
            <span className="brand">recipe-search</span>{' '}
            <span style={{ fontSize: '0.9rem' }}>Copyright © 2020</span>
          </Col>
        </Row>
      </InnerWrapper>
    </StyledContainer>
  </>
);

export default FooterSection;
