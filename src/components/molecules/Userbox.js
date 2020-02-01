import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import styled, { css } from 'styled-components';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import {
  faCaretLeft,
  faAngleLeft,
  faArrowAltCircleLeft,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <StyledButton favourites variant="secondary" title="Ulubione">
              {loading || !user ? (
                <div>Loading...</div>
              ) : (
                // <div>{user.nickname}</div>
                <div>
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </div>
              )}
            </StyledButton>
          </NavLink>
          <OverlayTrigger
            key="popover"
            placement="bottom"
            trigger="hover"
            overlay={
              <Popover id="profile-popover">
                <Popover.Title>Dane użytkownika</Popover.Title>
                <Popover.Content>
                  {loading || !user ? (
                    <div>Loading</div>
                  ) : (
                    <div>
                      Email: <strong>{user.name}</strong>
                      <br />
                      Aktywny: <strong>{user.updated_at}</strong>
                    </div>
                  )}
                </Popover.Content>
              </Popover>
            }
          >
            <NavLink to={routes.profile}>
              <StyledButton authenticated variant="secondary">
                {loading || !user ? (
                  <div>Loading...</div>
                ) : (
                  // <div>{user.nickname}</div>
                  <div>Twój profil</div>
                )}
              </StyledButton>
            </NavLink>
          </OverlayTrigger>
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

      :hover {
        background-color: hsl(44, 60%, 30%);
      }
    `}

    ${({ favourites }) =>
      favourites &&
      css`
        background-color: hsl(348, 45%, 40%);

        :hover {
          background-color: hsl(348, 45%, 30%);
        }
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
