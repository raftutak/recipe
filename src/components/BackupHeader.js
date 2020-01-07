import React from 'react';

import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Jumbotron, Container, Carousel, Button } from 'react-bootstrap';

// ASSETS
import header from '../assets/img/header.jpg';

// DATA
import { slider } from '../data/slider';

const StyledJumbotron = styled(Jumbotron)`
  margin: 0;
  padding: 32px 0;
  background-image: url(${header});
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

const InnerWrapper = styled(Container)`
  margin: 0;
  padding: 0;
  width: 70%;
`;

const StyledCarousel = styled(Carousel)`
  margin: 0;
  padding: 0 7%;

  .carousel-control-prev {
    justify-content: left;
    width: auto;
  }

  .carousel-control-prev-icon {
    filter: brightness(70%);
  }

  .carousel-control-next {
    justify-content: right;
    width: auto;
  }

  .carousel-control-next-icon {
    filter: brightness(70%);
  }
`;

const StyledCarouselItem = styled(Carousel.Item)``;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid hsl(215, 37%, 19%);
  border-radius: 15px;
  font-weight: 600;
  color: hsl(215, 37%, 19%);

  :hover {
    border: 1px solid hsl(138, 61%, 49%);
    background-color: hsl(138, 61%, 49%);
  }
`;

const Header = () => (
  <>
    <StyledJumbotron fluid>
      <StyledContainer>
        <InnerWrapper>
          <StyledCarousel indicators={false} interval={15000}>
            {slider.map((item, id) => {
              return (
                <StyledCarouselItem key={id}>
                  <>
                    <h1 className="mb-4">
                      <strong>{item.heading}</strong>
                    </h1>
                    <p style={{ fontSize: '1.1rem' }} className="mb-4">
                      {item.paragraph}
                    </p>
                    <NavLink to={routes.categories}>
                      <StyledButton>{item.button}</StyledButton>
                    </NavLink>
                  </>
                </StyledCarouselItem>
              );
            })}
          </StyledCarousel>
        </InnerWrapper>
      </StyledContainer>
    </StyledJumbotron>
  </>
);

export default Header;
