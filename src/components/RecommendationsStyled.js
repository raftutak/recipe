import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

// STYLED COMPONENTS
import styled, { css } from 'styled-components';

// BOOTSTRAP
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

// ASSETS
import block_bg_1 from '../assets/img/block_bg_1.jpg';

// DATA
import { sources } from '../data/sources';
import { events } from '../data/events';

const StyledCol = styled(Col)`
  padding: 0;
`;

const StyledContainerBackground = styled(Container)`
  padding: 0;
  background-color: white;

  ${({ backgroundimage }) =>
    backgroundimage &&
    css`
      background-image: url(${block_bg_1});
      background-position: right top;
      background-repeat: no-repeat;
      background-size: auto;
    `}
`;

const StyledContainer = styled(Container)`
  padding: 30px 30px;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      color: white;
      background-color: rgba(30, 45, 66, 0.7);
    `}
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

const StyledButton = styled(Button)`
  padding: 10px;
  margin-top: 5px;
  background-color: hsla(0, 100%, 100%, 0.3);
  border: none;
  border-radius: 15px;
  font-weight: 600;
  color: hsl(0, 100%, 100%);

  :hover {
    background-color: hsl(138, 61%, 49%);
  }
`;

const RecommendationsStyled = () => (
  <>
    <Container fluid>
      <Container>
        <Row>
          <StyledCol>
            <StyledContainerBackground backgroundimage={1}>
              <StyledContainer grayoverlay={1}>
                <StyledCarousel indicators={false} variant="dark">
                  {events.map((item, id) => {
                    return (
                      <Carousel.Item key={id}>
                        <>
                            <h4 style={{ color: 'hsl(0, 100%, 100%)', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
                              {item.heading}
                            </h4>
                            <p style={{ color: 'hsl(0, 100%, 100%)', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
                              {item.paragraph}
                            </p>
                        <NavLink to={routes.categories}>
                            <StyledButton>
                                {item.button}
                            </StyledButton>
                        </NavLink>
                        </>
                      </Carousel.Item>
                    );
                  })}
                </StyledCarousel>
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
          <StyledCol>
            <StyledContainerBackground>
              <StyledContainer style={{ marginTop: '2em' }}>
                <h5 className="mb-4">
                  <strong>Sprawdź nasze źródła</strong>
                </h5>
                <StyledCarousel indicators={false} variant="dark">
                  {sources.map((item, id) => {
                    return (
                      <Carousel.Item key={id}>
                        <>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              style={{ width: '350px' }}
                              src={item.src}
                              alt={id}
                            />
                          </a>
                        </>
                      </Carousel.Item>
                    );
                  })}
                </StyledCarousel>
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
        </Row>
      </Container>
    </Container>
  </>
);

export default RecommendationsStyled;
