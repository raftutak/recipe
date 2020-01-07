import React from 'react';
import AppContext from '../context';

// REACT-ROUTER
import { Link } from 'react-router-dom';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Card, ListGroup, ListGroupItem, CardDeck } from 'react-bootstrap';  

// DATA
import { categories } from '../data/categories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const StyledCard = styled(Card)`
  width: 15rem;
  border-radius: 15px;
  transition: 0.2s;
  margin-left: 0.5em;

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

const RecipeCardStyled = ({ recipe }) => (
  <AppContext.Consumer>
    {context => (
      <>
            <StyledCard>
                <Card.Img
                    src={recipe.image_Url}
                    onError={e => {
                    e.target.onerror = null;
                    e.target.src =
                        'http://www.nexuscctv.pl/media/catalog/product/cache/14/image/378x380/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_placeholder_6.png';
                    }}
                />
                <Card.Header>
                    <strong>{recipe.title}</strong>
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
                    <strong>Źródło:</strong> {recipe.blog}
                    </ListGroupItem>
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
                    </ListGroupItem>
                    {/* <ListGroupItem>
                    <strong>id:</strong> {recipe.id}
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>dishId</strong>: {recipe.dishId}
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>dishMainCategoryId</strong>: {recipe.dishMainCategoryId}
                    <br />
                    {recipe.dishMainCategoryId !== 0 ? (
                        categories[recipe.dishMainCategoryId - 1].name
                    ) : (
                        <strong style={{ color: 'red' }}>Brak kategorii</strong>
                    )}
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>dishSubCategoryId</strong>: {recipe.dishSubCategoryId}
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
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>ingredientIds:</strong>{' '}
                    {recipe.ingredientIds.map(ingredientID => (
                        <span key={ingredientID}>{ingredientID}, </span>
                    ))}
                    </ListGroupItem> */}
                    <ListGroupItem>
                    <Link
                        style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
                        onClick={context.handleReadRecipe}
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

export default RecipeCardStyled;
