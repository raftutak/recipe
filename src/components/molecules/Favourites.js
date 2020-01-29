import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Card, CardColumns } from 'react-bootstrap';

import RecipeCard from './RecipeCard';

class Favourites extends React.Component {
  state = {
    loading: true,
    favourites_result: undefined
  };

  handleLoadFavourites = async (username = this.props.username) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/searchUserFavsRecipes/?username=${username}`;
    const response = await axios(url);

    this.setState({
      favourites_result: response.data.recipeFavs,
      loading: false
    });

    // const urlAfter = ``
    // const responseAfter = await axios(urlAfter)

    // this.setState({
    //     favourites_result: responseAfter.data.recipes
    // })
  };

  componentDidMount = () => {
    this.handleLoadFavourites();
  };

  render() {
    return (
      !this.state.loading && (
        <>
          pies
          <StyledCardColumns>
            {this.state.favourites_result.map(recipe => {
              return <RecipeCard key={recipe.title} recipe={recipe} />;
            })}
          </StyledCardColumns>
        </>
      )
    );
  }
}

const StyledCardColumns = styled(CardColumns)`
  @media (min-width: 576px) {
    column-count: 1;
  }

  @media (min-width: 768px) {
    column-count: 2;
  }

  @media (min-width: 992px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 3;
  }
`;

export default Favourites;
