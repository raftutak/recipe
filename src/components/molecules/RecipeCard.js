import React from 'react';
import AppContext from '../../context';
import axios from 'axios';

// REACT-ROUTER
import { Link } from 'react-router-dom';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// DATA
import { categories } from '../../data/categories';
import { dishes } from '../../data/dishes';
import { ingredients } from '../../data/ingredients';

import { features } from '../../data/features';

// ASSETS
import noimage from '../../assets/img/noimage.png';
import starRegular from '../../assets/img/icons/star-regular.png';
import starSolid from '../../assets/img/icons/star-solid.png';
import Rating from 'react-rating';

import { Auth0Context } from '../../react-auth0-spa';

// const { isAuthenticated, user } = useAuth0();

class RecipeCard extends React.Component {
  static contextType = Auth0Context;

  state = {
    disabled: false,
    average: this.props.recipe.rate.average,
    amount: this.props.recipe.rate.amount
  };

  handleRecipeRatePost = async (value, recipeId, user) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/insertRecipeRate/?recipeId=${recipeId}&rate=${value}&username=${user.name}`;
    const response = await axios.post(url);

    console.log(response.data);

    if (!response.data.exists) {
      this.setState({
        amount: response.data.amount,
        average: response.data.average
      });
    }

    if (response.data.exists) {
      alert('Już głosowałeś na ten przepis!');
      this.setState({
        disabled: true
      });
    }

    this.setState({ disabled: false });
  };

  render() {
    const { recipe } = this.props;
    const { isAuthenticated } = this.context;

    return (
      <>
        <AppContext.Consumer>
          {context => (
            <>
              <StyledCard>
                <div style={{ overflow: 'hidden' }}>
                  <Link
                    onClick={context.handleReadRecipe}
                    to={{
                      pathname: `/recipe/${recipe.id}`
                    }}
                  >
                    <Card.Img
                      src={recipe.image_Url}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = `${noimage}`;
                      }}
                    />
                  </Link>
                </div>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'hsl(215, 37%, 19%)'
                  }}
                  onClick={context.handleReadRecipe}
                  to={{
                    pathname: `/recipe/${recipe.id}`
                  }}
                >
                  {this.props.truncated ? (
                    <Card.Header style={{ height: 'auto' }}>
                      <div className="limiter-1">
                        <strong>{recipe.title}</strong>
                      </div>
                    </Card.Header>
                  ) : (
                    <Card.Header>
                      <div className="limiter-2">
                        <strong>{recipe.title}</strong>
                      </div>
                    </Card.Header>
                  )}
                </Link>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <strong>Ocena: </strong>
                    <Rating
                      // readonly={
                      //   false ? true : this.state.disabled ? true : false
                      // }
                      readonly={
                        !isAuthenticated
                          ? true
                          : this.state.disabled
                          ? true
                          : false
                      }
                      onClick={
                        value =>
                          this.handleRecipeRatePost(
                            value,
                            recipe.id,
                            'raftutak@gmail.com'
                          )
                        // this.handleRecipeRatePost(value, recipe.id, user)
                      }
                      placeholderRating={this.state.average}
                      emptySymbol={
                        <img src={starRegular} className="icon" alt="" />
                      }
                      fullSymbol={
                        <img src={starSolid} className="icon" alt="" />
                      }
                      placeholderSymbol={
                        <img src={starSolid} className="icon" alt="" />
                      }
                    />
                    <br />
                    <strong>Liczba ocen: </strong>
                    {this.state.amount}
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="limiter-1">
                      <strong>Źródło:</strong>{' '}
                      <a
                        style={{
                          textDecoration: 'none',
                          color: 'hsl(215, 37%, 19%)'
                        }}
                        href={recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {recipe.blog}
                      </a>
                    </div>
                  </ListGroupItem>
                  {this.props.truncated ? null : (
                    <ListGroupItem style={{ height: '73px' }}>
                      <div className="limiter-2">
                        <strong>Kategoria:</strong>{' '}
                        {recipe.dishMainCategoryId !== 0 ? (
                          categories[recipe.dishMainCategoryId - 1].name
                        ) : (
                          <strong style={{ color: 'red' }}>
                            Brak kategorii
                          </strong>
                        )}
                        {' / '}
                        {recipe.dishMainCategoryId !== 0 ? (
                          categories[recipe.dishMainCategoryId - 1]
                            .subcategories[
                            categories[
                              recipe.dishMainCategoryId - 1
                            ].subcategories.findIndex(
                              index => index.id === recipe.dishSubCategoryId
                            )
                          ].name
                        ) : (
                          <strong style={{ color: 'red' }}>
                            Brak podkategorii
                          </strong>
                        )}
                        {' / '}
                        {recipe.dishId ? (
                          dishes[
                            dishes.findIndex(
                              index => index.id === recipe.dishId
                            )
                          ].name
                        ) : (
                          <strong style={{ color: 'red' }}>Brak dishId</strong>
                        )}
                      </div>
                    </ListGroupItem>
                  )}
                  {/* <ListGroupItem>
              <strong>Kategoria:</strong>{' '}
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].name
              ) : (
                <strong style={{ color: 'red' }}>Brak kategorii</strong>
              )}
              <br />
              <strong>Podkategoria:</strong>{' '}
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].subcategories[
                  categories[
                    recipe.dishMainCategoryId - 1
                  ].subcategories.findIndex(
                    index => index.id === recipe.dishSubCategoryId
                  )
                ].name
              ) : (
                <strong style={{ color: 'red' }}>Brak podkategorii</strong>
              )}
              <br />
              <strong>Typ dania</strong>:{' '}
              {recipe.dishId ? (
                dishes[dishes.findIndex(index => index.id === recipe.dishId)]
                  .name
              ) : (
                <strong style={{ color: 'red' }}>Brak typu dania</strong>
              )}
            </ListGroupItem> */}
                  {this.props.truncated ? null : (
                    <>
                      <ListGroupItem style={{ height: '97px' }}>
                        <div className="limiter-3">
                          <strong>Składniki:</strong>{' '}
                          {recipe.ingredientIds.map(ingredientID => (
                            <span key={ingredientID}>
                              {
                                ingredients[
                                  ingredients.findIndex(
                                    index => index.id === ingredientID
                                  )
                                ].name
                              }
                              ,{' '}
                            </span>
                          ))}
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Trudność:</strong>{' '}
                        {recipe.featureIds
                          ? recipe.featureIds.map(featureID => (
                              <>
                                {features[
                                  features.findIndex(
                                    index =>
                                      index.id === featureID &&
                                      index.categoryId === 5
                                  )
                                ] &&
                                  features[
                                    features.findIndex(
                                      index =>
                                        index.id === featureID &&
                                        index.categoryId === 5
                                    )
                                  ].name}
                              </>
                            ))
                          : null}
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="limiter-1">
                          <strong>Czas przygotowania:</strong>{' '}
                          {recipe.featureIds
                            ? recipe.featureIds.map(featureID => (
                                <>
                                  {features[
                                    features.findIndex(
                                      index =>
                                        index.id === featureID &&
                                        index.categoryId === 6
                                    )
                                  ] &&
                                    features[
                                      features.findIndex(
                                        index =>
                                          index.id === featureID &&
                                          index.categoryId === 6
                                      )
                                    ].name}
                                </>
                              ))
                            : null}
                        </div>
                      </ListGroupItem>
                    </>
                  )}
                  {/* <ListGroupItem>
              {featuresCategories.map(featureCategory => (
                <>
                  <strong>{featureCategory.name}: </strong>
                  {recipe.featureIds
                    ? recipe.featureIds.map(featureID => (
                        <>
                          {features[
                            features.findIndex(
                              index =>
                                index.id === featureID &&
                                index.categoryId === featureCategory.id
                            )
                          ] &&
                            features[
                              features.findIndex(
                                index =>
                                  index.id === featureID &&
                                  index.categoryId === featureCategory.id
                              )
                            ].name + ', '}
                        </>
                      ))
                    : null}
                  <br />
                </>
              ))}
            </ListGroupItem> */}
                  {/* <ListGroupItem className="goto">
              <Link
                style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <strong>Przejdź do przepisu</strong>
              </Link>
            </ListGroupItem> */}
                </ListGroup>
              </StyledCard>
            </>
          )}
        </AppContext.Consumer>
      </>
    );
  }
}

const StyledCard = styled(Card)`
  border-radius: 15px;
  transition: 0.2s;
  margin: auto;
  margin-bottom: 20px !important;
  overflow: hidden;
  flex-basis: 32%;
  max-width: 357px;

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    border-radius: 14px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 0.2s ease-in-out;
  }

  :hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;

    .card-img {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }

    .card-header {
      background-color: rgba(0, 0, 0, 0.07);
      transition: all 0.2s ease-in-out;
    }

    .list-group-item {
      background-color: rgba(0, 0, 0, 0.03);
      transition: all 0.2s ease-in-out;
    }
  }

  .goto {
    transition: 0.2s;
    border-bottom-left-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
  }

  .card-header {
    height: 73px;
    transition: all 0.2s ease-in-out;
  }

  .limiter-1 {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .limiter-2 {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .limiter-3 {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .icon {
    height: 1.4rem;
    padding-bottom: 5px;
    padding-right: 2px;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    flex-basis: 48%;
  }

  @media (min-width: 993px) {
    flex-basis: 32%;
  }
`;

export default RecipeCard;
