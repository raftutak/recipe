import React from 'react';
import AppContext from '../context';

// REACT-ROUTER
import { Link } from 'react-router-dom';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// DATA
import { categories } from '../data/categories';
import { dishes } from '../data/dishes';
import { ingredients } from '../data/ingredients';
import { ingredientsCategories } from '../data/ingredientsCategories';
import { recipesFeatures } from '../data/recipesFeatures';
import { features } from '../data/features';
import { featuresCategories } from '../data/featuresCategories';
import noimage from '../assets/img/noimage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const StyledCard = styled(Card)`
  border-radius: 15px;
  transition: 0.2s;

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .goto {
    a {
      color: hsl(215, 37%, 19%);
      text-decoration: none;
      transition: 0.2s;

      :hover {
        color: white;
      }
    }

    :hover {
      background-color: hsl(138, 61%, 49%);
      color: white;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const StyledStar = styled(FontAwesomeIcon)`
  color: hsl(56, 100%, 46%);
`;

const RecipeCard = ({ recipe }) => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledCard>
          <Link
            style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
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
          <Card.Header>
            <Link
              style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
              onClick={context.handleReadRecipe}
              to={{
                pathname: `/recipe/${recipe.id}`
              }}
            >
              <strong>{recipe.title}</strong>
            </Link>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroupItem>
              <strong>Ocena: </strong>
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={faStar} />
            </ListGroupItem>
            <ListGroupItem>
              <strong>Źródło:</strong>{' '}
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                {recipe.blog}
              </a>
            </ListGroupItem>
            {/* <ListGroupItem>
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
                <strong style={{ color: 'red' }}>Brak podkategorii</strong>
              )}
              {' / '}
              {recipe.dishId ? (
                dishes[dishes.findIndex(index => index.id === recipe.dishId)]
                  .name
              ) : (
                <strong style={{ color: 'red' }}>Brak dishId</strong>
              )}
            </ListGroupItem> */}
            <ListGroupItem>
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
            </ListGroupItem>
            {/* <ListGroupItem>
              <strong>id:</strong> {recipe.id}
            </ListGroupItem> */}
            {/* <ListGroupItem>
              <strong>Typ dania</strong>: {recipe.dishId}
              <br />
              {recipe.dishId ? (
                dishes[dishes.findIndex(index => index.id === recipe.dishId)]
                  .name
              ) : (
                <strong style={{ color: 'red' }}>Brak typu dania</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Kategoria</strong>: {recipe.dishMainCategoryId}
              <br />
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].name
              ) : (
                <strong style={{ color: 'red' }}>Brak kategorii</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Podkategoria</strong>: {recipe.dishSubCategoryId}
              <br />
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
            </ListGroupItem> */}
            {/* <ListGroupItem>
              <strong>ingredientCategoryIds:</strong>{' '}
              {recipe.ingredientCategoryIds.map(
                (ingredientCategoryID, index) => (
                  <span key={ingredientCategoryID}>
                    {ingredientCategoryID}
                    {index < recipe.ingredientCategoryIds.length - 1
                      ? ',\u00A0'
                      : ''}
                  </span>
                )
              )}
              <br />
              {recipe.ingredientCategoryIds.map(ingredientCategoryID => (
                <span key={ingredientCategoryID}>
                  {
                    ingredientsCategories[
                      ingredientsCategories.findIndex(
                        index => index.id === ingredientCategoryID
                      )
                    ].name
                  }
                  ,{' '}
                </span>
              ))}
            </ListGroupItem> */}
            {/* <ListGroupItem>
              <strong>Składniki:</strong>{' '}
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>{ingredientID}, </span>
              ))}
              <br />
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>
                  {
                    ingredients[
                      ingredients.findIndex(index => index.id === ingredientID)
                    ].name
                  }
                  ,{' '}
                </span>
              ))}
            </ListGroupItem> */}
<<<<<<< HEAD
            <ListGroupItem>
              <strong>Składniki:</strong>{' '}
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>
                  {
                    ingredients[
                      ingredients.findIndex(index => index.id === ingredientID)
                    ].name
                  }
                  ,{' '}
                </span>
              ))}
            </ListGroupItem>
            <ListGroupItem>
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
            </ListGroupItem>
            <ListGroupItem>
              <Link
                style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
=======
            <ListGroupItem className="goto">
              <Link
                onClick={context.handleReadRecipe}
>>>>>>> daniel
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <strong>Przejdź do przepisu</strong>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </StyledCard>
        
      </>
    )}
  </AppContext.Consumer>
);

export default RecipeCard;
