import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import LoadingDots from '../atoms/LoadingDots';

import RecipeCard from './RecipeCard';

import hungry from '../../assets/img/hungry.png';

class Favourites extends React.Component {
  state = {
    favouritesSearch: {
      isLoading: true,
      result: undefined
    }
  };

  handleFavouritesSearch = async (username = this.props.username) => {
    this.setState({
      favouritesSearch: {
        isLoading: true,
        result: undefined
      }
    });

    const url = `https://recipe-search.projektstudencki.pl/recipe/searchUserFavsRecipes/?username=${username}`;
    const response = await axios(url);
    const result = await response.data.recipeFavs;

    const amount = result.length;

    this.setState({
      favouritesSearch: {
        isLoading: false,
        result: result,
        amount
      }
    });
  };

  componentDidMount() {
    this.handleFavouritesSearch();
  }

  render() {
    if (this.state.favouritesSearch.isLoading) {
      return (
        <>
          <Container fluid>
            <InnerWrapper>
              <h5 style={{ textAlign: 'center' }}>
                Trwa wczytywanie ulubionych przepisów ...
              </h5>
              <LoadingDots />
            </InnerWrapper>
          </Container>
        </>
      );
    } else if (
      this.state.favouritesSearch.amount &&
      this.state.favouritesSearch.amount !== 0
    ) {
      return (
        <>
          <Container fluid>
            <InnerWrapper>
              <StyledHeading>
                Liczba ulubionych przepisów:{' '}
                <strong>{this.state.favouritesSearch.amount}</strong>
              </StyledHeading>
              <StyledFlexContainer>
                {this.state.favouritesSearch.result &&
                  this.state.favouritesSearch.result.map(recipe => {
                    return <RecipeCard key={recipe.title} recipe={recipe} />;
                  })}
              </StyledFlexContainer>
            </InnerWrapper>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container fluid>
            <InnerWrapper>
              <h5 style={{ textAlign: 'center' }}>
                Brak ulubionych przepisów ...
              </h5>
              <div style={{ textAlign: 'center' }}>
                <img src={hungry} alt="" style={{ width: '350px' }} />
              </div>
            </InnerWrapper>
          </Container>
        </>
      );
    }
  }
}

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 10px;

  .page-link {
    color: hsl(215, 37%, 19%) !important;
  }

  .page-item.active .page-link {
    background-color: rgba(0, 0, 0, 0.09);
    border: 1px solid #dee2e6;
  }
`;

const StyledHeading = styled.h3`
  padding-bottom: 20px;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Favourites;
