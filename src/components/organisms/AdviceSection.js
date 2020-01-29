import React from 'react';
import axios from 'axios';

import LoadingDots from '../atoms/LoadingDots';

// STYLED COMPONENTS
import styled, { css } from 'styled-components';

// BOOTSTRAP
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// ASSETS
import block_bg_1 from '../../assets/img/block_bg_1.jpg';

// DATA
import { sources } from '../../data/sources';
import RecipeCard from '../molecules/RecipeCard';

// const containerContent = (
//   <>
//     <h5
//       className="mb-3"
//       style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}
//     >
//       <strong>Kulinarna porada</strong>
//     </h5>
//     <p style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
//       Makaron przygotowywany z sosem warto jest gotować ok. minutę krócej, niż
//       wskazane jest to w instrukcji. Ostatnią minutę powinien być gotowany w
//       podgrzewającym się sosie. Przeniknie wówczas smakiem i zapachem ziół i
//       dodatków.
//     </p>
//   </>
// );

const StyledContainerBackground = styled(Container)`
  padding: 0;
  background-color: white;
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
  min-height: 300px;
  z-index: 5;

  ${({ backgroundimage }) =>
    backgroundimage &&
    css`
      background-image: url(${block_bg_1});
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;
    `}
`;

const StyledContainer = styled(Container)`
  padding: 30px 30px;
  min-height: 300px;

  .divider {
    border-left: 2px dotted white;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 0;
    opacity: 0.1;
  }

  /* p {
    margin: 0;
    font-size: 0.9rem;
  } */

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      /* color: white; */
      background-color: rgba(30, 45, 66, 0.7);
    `}
`;

class AdviceSection extends React.Component {
  state = {
    dailyRecipe_result: undefined
  };

  handleDailyRecipe = async () => {
    this.setState({
      dailyRecipe_isLoading: true,
      dailyRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchDayRecipe';
    const response = await axios(url);
    const dailyRecipe_result = await response.data.recipe;

    this.setState({ dailyRecipe_isLoading: false, dailyRecipe_result });

    console.log(this.state.dailyRecipe_result);
  };

  handleRandomRecipe = async () => {
    this.setState({
      randomRecipe_isLoading: true,
      randomRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchRandomRecipe/?count=1';
    const response = await axios(url);
    const randomRecipe_result = await response.data.recipes[0];

    this.setState({ randomRecipe_isLoading: false, randomRecipe_result });

    console.log(this.state.randomRecipe_result);
  };

  componentDidMount() {
    this.handleDailyRecipe();
    this.handleRandomRecipe();
  }

  render() {
    return (
      <>
        <StyledContainerBackground fluid backgroundimage={1}>
          <StyledContainer fluid grayoverlay={1}>
            <Container>
              <Row style={{ justifyContent: 'center' }}>
                <StyledCol xs={12} md={5} lg={5}>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      textShadow: '0 0 5px hsla(0, 0%, 0%, 1)'
                    }}
                    className="mb-4"
                  >
                    <strong>Przepis dnia</strong>
                  </h5>
                  {this.state.dailyRecipe_result ? (
                    <RecipeCard
                      truncated
                      key={this.state.dailyRecipe_result.title}
                      recipe={this.state.dailyRecipe_result}
                    />
                  ) : (
                    <LoadingDots />
                  )}
                </StyledCol>
                <StyledCol xs={12} md={1} lg={1}>
                  <div className="divider"></div>
                </StyledCol>
                <StyledCol xs={12} md={5} lg={5}>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      textShadow: '0 0 5px hsla(0, 0%, 0%, 1)'
                    }}
                    className="mb-4"
                  >
                    <strong>Szczęśliwy traf</strong>
                  </h5>
                  {this.state.randomRecipe_result ? (
                    <RecipeCard
                      truncated
                      key={this.state.randomRecipe_result.title}
                      recipe={this.state.randomRecipe_result}
                    />
                  ) : (
                    <LoadingDots />
                  )}
                </StyledCol>
              </Row>
            </Container>
          </StyledContainer>
        </StyledContainerBackground>
      </>
    );
  }
}

const StyledCol = styled(Col)``;

export default AdviceSection;
