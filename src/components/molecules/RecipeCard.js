import React from 'react';
import AppContext from '../../context';

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
import { ingredientsCategories } from '../../data/ingredientsCategories';
import { recipesFeatures } from '../../data/recipesFeatures';
import { features } from '../../data/features';
import { featuresCategories } from '../../data/featuresCategories';
import noimage from '../../assets/img/noimage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';

import starRegular from '../../assets/img/icons/star-regular.png';
import starSolid from '../../assets/img/icons/star-solid.png';
import axios from 'axios';

import { useAuth0 } from '../../react-auth0-spa';

const StyledCard = styled(Card)`
  border-radius: 15px;
  transition: 0.2s;
  margin-bottom: 20px !important;
  overflow: hidden;

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
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    .card-img {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }

    .card-header {
      background-color: rgba(0, 0, 0, 0.07);
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
`;

const handleRecipeRatePost = async (value, recipeId) => {
  const url = `https://recipe-search.projektstudencki.pl/recipe/insertRecipeRate/?recipeId=${recipeId}&rate=${value}&username=test2`;
  const response = await axios.post(url);

  console.log(response);
};

const handleRecipeRate = (value, recipeId) => {
  console.log(value);
  console.log(recipeId);
};

const RecipeCard = ({ recipe }) => {
  const {
    isAuthenticated,
    loginWithPopup,
    loginWithRedirect,
    logout,
    loading,
    user
  } = useAuth0();

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
                style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
                onClick={context.handleReadRecipe}
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <Card.Header>
                  <div className="limiter-2">
                    <strong>{recipe.title}</strong>
                  </div>
                </Card.Header>
              </Link>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <strong>Ocena: </strong>
                  <Rating
                    readonly={!isAuthenticated ? true : false}
                    onClick={value => handleRecipeRatePost(value, recipe.id)}
                    placeholderRating={recipe.rate.average}
                    emptySymbol={<img src={starRegular} className="icon" />}
                    fullSymbol={<img src={starSolid} className="icon" />}
                    placeholderSymbol={<img src={starSolid} className="icon" />}
                  />
                </ListGroupItem>
                <ListGroupItem>
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
                </ListGroupItem>
                <ListGroupItem style={{ height: '73px' }}>
                  <div className="limiter-2">
                    <strong>Kategoria:</strong>{' '}
                    {recipe.dishMainCategoryId !== 0 ? (
                      categories[recipe.dishMainCategoryId - 1].name
                    ) : (
                      <strong style={{ color: 'red' }}>Brak kategorii</strong>
                    )}
                    {' / '}
                    {recipe.dishMainCategoryId !== 0 ? (
                      categories[recipe.dishMainCategoryId - 1].subcategories[
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
                        dishes.findIndex(index => index.id === recipe.dishId)
                      ].name
                    ) : (
                      <strong style={{ color: 'red' }}>Brak dishId</strong>
                    )}
                  </div>
                </ListGroupItem>
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
                                index.id === featureID && index.categoryId === 5
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
};

export default RecipeCard;
