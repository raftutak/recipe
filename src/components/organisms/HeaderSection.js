import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import header from '../../assets/img/header.jpg';
import { slider } from '../../data/slider';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import AppContext from '../../context';

const moveToSearch = () => {
  document
    .getElementById('buttonToMove')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const HeaderSection = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledHeader fluid>
          <StyledContainer>
            <StyledInnerContainer>
              <StyledCarousel indicators={false} interval={15000}>
                <Carousel.Item key={1}>
                  <>
                    <h2 className="mb-4">
                      <strong>Łatwe przepisy na każdą okazję!</strong>
                    </h2>
                    <p style={{ fontSize: '1.1rem' }} className="mb-4">
                      Witaj na recipe-search! Jest to ogromna baza przepisów
                      zawierająca treści z najlepszych polskich blogów
                      kulinarnych. Od dziś nie musisz przeglądać wielu stron w
                      poszukiwaniu najlepszego lub najprostszego przepisu -
                      wszystko znajdziesz w jednym miejscu, właśnie tutaj.
                      Przekonaj się sam korzystając z poniższej wyszukiwarki!
                    </p>

                    <StyledButton
                      id="buttonToMove"
                      onClick={() => moveToSearch()}
                    >
                      Skorzystaj z wyszukiwarki
                    </StyledButton>
                  </>
                </Carousel.Item>
                <Carousel.Item key={2}>
                  <>
                    <h2 className="mb-4">
                      <strong>Oblicz wskaźnik masy ciała</strong>
                    </h2>
                    <p style={{ fontSize: '1.1rem' }} className="mb-4">
                      Kalkulator BMI (Body Mass Index) daje każdemu możliwość
                      szybkiego i wygodego obliczenia własnego wskaźnika masy
                      ciała. BMI obliczamy dzieląc masę ciała (w kilogramach)
                      przez wzrost do kwadratu (w metrach). Wskaźnik ten
                      wykorzystywany jest przede wszystkim do oceny ryzyka
                      pojawienia się groźnych chorób oraz oceny stanu zdrowia.
                    </p>

                    <StyledButton
                      id="buttonToMove"
                      onClick={context.handleShowCalculatorModal}
                    >
                      Przejdź do kalkulatora BMI
                    </StyledButton>
                  </>
                </Carousel.Item>
              </StyledCarousel>
            </StyledInnerContainer>
          </StyledContainer>
        </StyledHeader>
      </>
    )}
  </AppContext.Consumer>
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
    box-shadow: none;
  }

  :active {
    border: 1px solid hsl(215, 37%, 19%) !important;
    background-color: hsl(215, 37%, 19%) !important;
    box-shadow: none !important;
  }

  :visited {
    border: 1px solid hsl(215, 37%, 19%);
    background-color: hsl(215, 37%, 19%);
    box-shadow: none;
  }

  :focus {
    border: 1px solid hsl(215, 37%, 19%);
    background-color: hsl(215, 37%, 19%);
    box-shadow: none;
  }

  :default {
    border: 1px solid hsl(215, 37%, 19%);
    background-color: hsl(215, 37%, 19%);
    box-shadow: none;
  }

  :target {
    border: 1px solid hsl(215, 37%, 19%);
    background-color: hsl(215, 37%, 19%);
    box-shadow: none;
  }
`;

export default HeaderSection;
