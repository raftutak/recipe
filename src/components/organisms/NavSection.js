import React from 'react';
import styled from 'styled-components';

// REACT-ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

// BOOTSTRAP
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import { categories } from '../../data/categories';
import { features } from '../../data/features';

// COMPONENTS
import Userbox from '../molecules/Userbox';
import AppContext from '../../context';

const NavSection = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledNavbar collapseOnSelect expand="lg" sticky="top" variant="dark">
          <Container>
            <Navbar.Brand exact as={NavLink} to={routes.home} eventKey={1}>
              recipe-search
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link exact as={NavLink} to={routes.home} eventKey={1}>
                  Strona główna
                </Nav.Link>
                <NavDropdown title="Kategorie">
                  {categories.map(category => (
                    <NavDropdown.Item
                      as={NavLink}
                      to={{ pathname: `/category/${category.id}` }}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  ))}
                  {
                    <NavDropdown.Item
                      as={NavLink}
                      to={{ pathname: `/category/${0}` }}
                    >
                      Inne
                    </NavDropdown.Item>
                  }
                </NavDropdown>
                <NavDropdown title="Posiłki">
                  {features
                    .filter(feature => feature.categoryId === 9)
                    .map(feature => (
                      <NavDropdown.Item
                        as={NavLink}
                        to={{ pathname: `/feature/${feature.id}` }}
                      >
                        {feature.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <NavDropdown title="Kuchnia">
                  {features
                    .filter(feature => feature.categoryId === 3)
                    .map(feature => (
                      <NavDropdown.Item
                        as={NavLink}
                        to={{ pathname: `/feature/${feature.id}` }}
                      >
                        {feature.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <NavDropdown title="Okazja">
                  {features
                    .filter(feature => feature.categoryId === 2)
                    .map(feature => (
                      <NavDropdown.Item
                        as={NavLink}
                        to={{ pathname: `/feature/${feature.id}` }}
                      >
                        {feature.name}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Nav.Link as={NavLink} to={routes.calculatorBMI} eventKey={2}>
                    Kalkulator BMI
                  </Nav.Link>
                {/* <NavDropdown title="Kalkulatory">
                  <NavDropdown.item
                    as={NavLink}
                    to={routes.calculatorBMI}
                  >
                    Kalkulator BMI
                  </NavDropdown.item>
                  <NavDropdown.item
                    as={NavLink}
                    to={routes.converter}
                  >
                    Przelicznik Miar Kuchennych
                  </NavDropdown.item>
                  
                </NavDropdown>*/}
              </Nav>
              <Nav>
                <Userbox />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </>
    )}
  </AppContext.Consumer>
);

// STYLED-COMPONENTS

const StyledNavbar = styled(Navbar)`
  padding-bottom: 15px;
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);

  .dropdown-item.active,
  .dropdown-item:active {
    background-color: hsl(208, 6%, 65%);
  }

  .navbar-brand {
    padding-right: 15px;
    font-family: 'Pacifico', sans-serif;
    font-size: 1.8rem;
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
    margin-right: 20px;
    transition: 0.2s ease-in;

    :hover {
      color: hsla(0, 100%, 100%, 1);
    }

    &.active {
      color: hsla(0, 100%, 100%, 1);
    }
  }

  .container {
    align-items: flex-end;
  }
`;

export default NavSection;
