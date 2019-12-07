import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

// AUTH0
import { useAuth0 } from '../react-auth0-spa';

// BOOTSTRAP
import { Container, Navbar, Nav, Button, Col } from 'react-bootstrap';

// STYLES
import styled from 'styled-components';
import AppContext from '../context';

const StyledNavbar = styled(Navbar)`
  height: 80px;
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);

  .navbar-brand {
    padding-right: 25px;
    font-family: 'Pacifico', sans-serif;
    font-size: 1.8rem;
  }

  .navbar-nav {
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
    margin-right: 25px;
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

const UserButton = styled(Button)`
  margin: 3px 0 4px 10px;
  font-size: 0.9rem;
  border: none;

  :hover {
    background-color: hsl(44, 47%, 33%);
  }
`;

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <StyledNavbar fixed="top" variant="dark">
            <Container>
              <Col
                md="auto"
                style={{ display: 'flex', alignItems: 'flex-end' }}
              >
                <Navbar.Brand exact as={NavLink} to={routes.home}>
                  recipe-search
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link exact as={NavLink} to={routes.home}>
                    Strona główna
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={routes.categories}>
                    Przepisy
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} to={routes.converter}>
                    Przelicznik kuchenny
                  </Nav.Link> */}
                  <Nav.Link as={NavLink} to={routes.calculatorBMI}>
                    Kalkulator BMI
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={routes.contact}>
                    Kontakt
                  </Nav.Link>
                </Nav>
              </Col>
              <Col
                md="auto"
                style={{ display: 'flex', alignItems: 'flex-end' }}
              >
                <Nav>
                  {!isAuthenticated && (
                    <>
                      <UserButton
                        onClick={() => loginWithRedirect({})}
                        variant="secondary"
                      >
                        Logowanie
                      </UserButton>
                      <UserButton
                        onClick={() => loginWithRedirect({})}
                        variant="secondary"
                      >
                        Rejestracja
                      </UserButton>
                    </>
                  )}

                  {isAuthenticated && (
                    <UserButton onClick={() => logout()} variant="secondary">
                      Wyloguj
                    </UserButton>
                  )}
                </Nav>
              </Col>
            </Container>
          </StyledNavbar>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Navigation;
