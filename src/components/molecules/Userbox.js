import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const Userbox = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    loading,
    user
  } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <>
          <StyledButton
            onClick={() => loginWithRedirect({})}
            variant="secondary"
          >
            Logowanie / Rejestracja
          </StyledButton>
        </>
      ) : (
        <>
          <NavLink to={routes.profile}>
            <StyledButton
              authenticated
              variant="secondary"
              title="Sprawdź swój profil"
            >
              {loading || !user ? (
                <div>Loading...</div>
              ) : (
                // <div>{user.nickname}</div>
                <div>Twój profil</div>
              )}
            </StyledButton>
          </NavLink>
          <StyledButton
            logout
            onClick={() => logout()}
            variant="secondary"
            title="Wyloguj się z serwisu"
          >
            Wyloguj
          </StyledButton>
        </>
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  margin: 3px 0 4px 10px;
  padding: 6px 12px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }

  ${({ authenticated }) =>
    authenticated &&
    css`
      background-color: hsl(44, 60%, 42%);
    `}

  ${({ logout }) =>
    logout &&
    css`
      :hover {
        background-color: hsl(348, 45%, 40%);
      }
    `}

    @media (min-width: 992px) {
    width: auto;
  }
`;

export default Userbox;
