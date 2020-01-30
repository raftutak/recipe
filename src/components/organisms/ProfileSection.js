import React from 'react';

import styled from 'styled-components';

import { Container } from 'react-bootstrap';

import { useAuth0 } from '../../react-auth0-spa';

import LoadingDots from '../atoms/LoadingDots';

import search from '../../assets/img/search.png';
import AppContext from '../../context';

import Favourites from '../molecules/Favourites';

const FeatureSection = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <LoadingDots />;
  } else
    return (
      <AppContext>
        {context => (
          <>
            <StyledSearchContainer fluid>
              <StyledBackground fluid />
              <StyledInnerContainer>
                <h5 className="mb-4">
                  <strong>Witaj, {user.nickname}</strong>
                </h5>
                <p>
                  Twój email to: <strong>{user.email}</strong>
                </p>
                <p className="mb-0">
                  <strong>
                    Poniżej znajdziesz listę swoich ulubionych przepisów:
                  </strong>
                </p>
              </StyledInnerContainer>
            </StyledSearchContainer>
            <Favourites username={user.name} />
          </>
        )}
      </AppContext>
    );
};

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

  @media (min-width: 992px) {
    background-position-y: -80px;
  }
`;

const StyledInnerContainer = styled(Container)`
  padding: 0 10px;
`;

export default FeatureSection;
