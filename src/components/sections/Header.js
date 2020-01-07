import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 0 20px;
  text-align: left;
  height: 81px;
  background-color: #1e2d42;
  color: white;
  width: 100%;
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
  z-index: 9999;
`;

const StyledInnerWrapper = styled.div`
  text-align: left;
`;

const StyledLogo = styled.h1`
  display: inline;
  line-height: 75px;
  padding-right: 40px;
  font-family: 'Pacifico';
  font-size: 2.8rem;
  font-weight: normal;
  color: white;
  text-decoration: none;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  line-height: 75px;
`;

const StyledList = styled.ul`
  display: inline-block;
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  margin-right: 20px;
  text-decoration: none;
  color: hsla(0, 100%, 100%, 0.6);
  top: 0;
  transition: 0.2s;
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    color: hsla(0, 100%, 100%, 1);
  }

  &.active {
    color: hsla(0, 100%, 100%, 1);
    padding-bottom: 20px;
    border-bottom: 6px solid #31c95f;
  }
`;

const StyledUserbox = styled.div`
  padding-left: 20px;
  background-color: #27374f;
  font-size: 2.9rem;

  :hover {
    background-color: #31c95f;
    transition: 0.5s;
    color: hsla(215, 38%, 19%, 1);
    height: 
  }
`;

const Header = () => (
  <>
    <StyledWrapper>
      <StyledContainer>
        <StyledInnerWrapper>
          <StyledLogo exact as={NavLink} to="/">
            recipe-search
          </StyledLogo>
          <StyledList>
            <StyledLink exact to={routes.home} activeClassName="active">
              Strona Główna
            </StyledLink>
            <StyledLink to={routes.recipes} activeClassName="active">
              Przepisy
            </StyledLink>
            <StyledLink to={routes.meals} activeClassName="active">
              Posiłki
            </StyledLink>
            <StyledLink to={routes.ingredients} activeClassName="active">
              Składniki
            </StyledLink>
            <StyledLink to={routes.events} activeClassName="active">
              Okazje
            </StyledLink>
            <StyledLink to={routes.contact} activeClassName="active">
              Kontakt
            </StyledLink>
          </StyledList>
        </StyledInnerWrapper>
        <StyledUserbox>
          <StyledLink exact to="#" activeClassName="#">
            Logowanie / Rejestracja
          </StyledLink>
        </StyledUserbox>
      </StyledContainer>
    </StyledWrapper>
  </>
);

export default Header;
