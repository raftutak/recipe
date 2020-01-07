import React from 'react';
import AppContext from '../context';
import styled from 'styled-components';
import { Jumbotron, Container, Carousel, Col, Row }  from 'react-bootstrap';

import ico_png from '../assets/img/ico.png';

import { tips } from '../data/tips';

const StyledJumbotron = styled(Jumbotron)`
    postion: relative;
    height: auto;
    padding: 0;
    margin: 0 auto;
    
    p {
        margin: 0 auto;
        font-size: 1rem;
        text-align: center;
        padding-bottom: 2em;
        padding-left: 2em;
        padding-right: 2em;
    }

    h4 {
        margin: 0 auto;
        text-align: center;
        color: #31c95f;
        font-weight: 500;
    }

    img {
        width: 100px;
        opacity: 0.075;
    }

`;

const StyledCol = styled(Col)`
    padding: 0;
    margin: 0 auto;
    width: auto;
`;

const StyledContainer = styled(Container)`
   padding: 0;
`;

const StyledRow = styled(Row)`
    padding: 0;
`;

const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  padding: 0 6%;

  .carousel-control-prev {
    justify-content: left;
    width: auto;
    left: 5%;
    bottom: 100%;
  }

  .carousel-control-prev-icon {
    filter: brightness(70%);
  }

  .carousel-control-next {
    justify-content: right;
    width: auto;
    bottom: 100%;
    right: 5%;
  }

  .carousel-control-next-icon {
    filter: brightness(70%);
  }
`;

const KitchenAdvice = () => (
    <AppContext.Consumer>
        {context => (
            <>
            <StyledContainer>
                <StyledJumbotron fluid>
                    <StyledRow>
                        <StyledCol md="auto">
                            <img src={ico_png} alt="{logo}"/>
                        </StyledCol>
                    </StyledRow>
                    <StyledRow>
                        <StyledCol>
                            <StyledCarousel indicators={false} variant="dark">
                                {tips.map((item, id) => {
                                    return (
                                        <Carousel.Item key={id}>
                                            <>
                                                <StyledRow md="auto">
                                                    <h4>
                                                        {item.heading}
                                                    </h4>
                                                    <p>
                                                        {item.paragraph}
                                                    </p>
                                                </StyledRow>
                                            </>
                                        </Carousel.Item>
                                    );
                                })}
                            </StyledCarousel>
                        </StyledCol>
                    </StyledRow>
                </StyledJumbotron>
            </StyledContainer>
            </>
        )}
    </AppContext.Consumer>
);

export default KitchenAdvice;