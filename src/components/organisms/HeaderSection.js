import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import header from '../../assets/img/header.jpg';
import { slider } from '../../data/slider';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const HeaderSection = () => (
  <>
    <StyledHeader fluid>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledCarousel indicators={false} interval={15000}>
            {slider.map((item, id) => {
              return (
                <Carousel.Item key={id}>
                  <>
                    <h2 className="mb-4">
                      <strong>{item.heading}</strong>
                    </h2>
                    <p style={{ fontSize: '1.1rem' }} className="mb-4">
                      {item.paragraph}
                    </p>
                    <NavLink to={routes.calculatorBMI}>
                      <StyledButton>{item.button}</StyledButton>
                    </NavLink>
                  </>
                </Carousel.Item>
              );
            })}
          </StyledCarousel>
        </StyledInnerContainer>
      </StyledContainer>
    </StyledHeader>
  </>
);

const StyledHeader = styled(Container)`
  padding: 32px 0;
  background-image: url(${header});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;

  /* @media (max-width: 500px) {
    min-height: 540px;
  } */
`;

const StyledContainer = styled(Container)``;

const StyledInnerContainer = styled(Container)`
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const StyledCarousel = styled(Carousel)`
  padding: 0 5%;

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 7%;

    .carousel-control-prev,
    .carousel-control-next {
      display: flex;
      width: auto;
    }
    .carousel-control-prev {
      justify-content: left;
    }

    .carousel-control-next {
      justify-content: right;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      filter: brightness(70%);
    }
  }
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid hsl(215, 37%, 19%);
  border-radius: 15px;
  font-weight: 600;
  color: hsl(215, 37%, 19%);

  :hover {
    border: 1px solid hsl(215, 37%, 19%);
    background-color: hsl(215, 37%, 19%);
  }
`;

export default HeaderSection;
